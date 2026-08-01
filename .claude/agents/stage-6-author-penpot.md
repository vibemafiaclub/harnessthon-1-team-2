---
name: stage-6-author-penpot
description: 화면 스펙과 토큰을 받아 지정된 작업 Page에 Penpot 화면을 실제로 저작한다. Page 게이트 2단과 재실행 안전을 강제한다.
---
<!-- 담당자: 최요셉 -->

# ⑤ Penpot 저작 — 스펙을 도형으로 옮긴다

## 입력 (이것만 읽는다)
- `docs/artifacts/04-spec-*.md`, `docs/artifacts/04-components.md`
- `docs/artifacts/02-tokens.md` (TOKENS 상수)
- `docs/artifacts/01-screens.md` (제출 프레임명·등급)
- **인자: 작업 Page 이름** — 없으면 저작하지 않는다

## 출력
- Penpot: 작업 Page의 `{framePrefix}{화면명}` 보드들
- `docs/artifacts/05-authored.md` (무엇을 어떤 id로 만들었는지 — ⑥·⑦이 읽는다)

---

## 🚧 게이트 1 — 작업 Page (위반 = 남의 작업 위에 그림)

- Page 이름을 **인자로 받는다.** 못 받았으면 **저작을 시작하지 않고 사용자에게 묻는다.**
- **기본값으로 첫 Page를 쓰지 않는다.** 추측해서 고르지 않는다.
- `중간공유`·`최종제출`은 **공용 Page**다. 여기서 처음부터 저작하지 않는다. 결과를 **옮겨 담는** 곳이다.
- PRD가 지정한 **기존자산 Page는 읽기 전용**이다. 수정 금지.

**Page 전환은 별도 호출로 먼저.** 같은 호출에서 전환+저작하면 죽는다.

```js
// [호출 1] 전환만
const TARGET = ARGS_WORK_PAGE;
if (!TARGET) return { error: "work page not provided — 묻고 멈춘다" };
const pg = penpot.currentFile.pages.find(p => p.name === TARGET);
if (!pg) return { error: "work page not found", candidates: penpot.currentFile.pages.map(p=>p.name) };
penpot.openPage(pg);
return { switched: TARGET };
```

## 🚧 게이트 2 — 저작 후 사후검증 (사전 확인만으로는 부족)

`openPage`는 **다음 호출까지 유지되지 않는다.** 그래서 매 저작 스크립트는
**첫 줄에서 재확인 + 마지막 줄에서 생성 노드의 소속 Page 검증**을 한다.

```js
// [호출 2+] 저작
const TARGET = ARGS_WORK_PAGE;
if (penpot.currentPage.name !== TARGET) return { error: "page drifted", now: penpot.currentPage.name };
/* … 저작 … */
const made = [board /*, …*/];
const rootOf = n => { let c=n; while (c.parent) c=c.parent; return c; };
const stray = made.filter(n => rootOf(n).id !== penpot.currentPage.root.id);
if (stray.length || penpot.currentPage.name !== TARGET)
  return { ABORT:"wrong page!", page: penpot.currentPage.name, stray: stray.map(n=>n.name) };
return { ok:true, page: penpot.currentPage.name, made: made.map(n=>({name:n.name,id:n.id})) };
```

## ♻️ 재실행 안전 — deterministic 네이밍 + skip/update

하네스는 여러 번 돌아간다. 매번 새로 그리면 같은 화면이 여러 장 쌓여 공유 파일이 오염된다.
**랜덤 접미사·실행 ID로 네임스페이스를 나누지 않는다**(쓰레기만 늘어난다).

```js
const findMine = n => penpotUtils.findShape(s => s.name === n, penpot.currentPage.root); // Page 범위 한정
const existing = findMine(FRAME_NAME);
if (existing && MODE === "skip")   return { skipped: existing.id };
if (existing && MODE === "update") { /* characters·fills만 덮는다. 이름변경·자식 remove 금지 */ }
```

## 네이밍 (제출 규격 — 틀리면 실격)

| 대상 | 이름 |
|---|---|
| 최상위 화면 보드 | **`{framePrefix}{PRD 지정 화면명}`** (①이 파싱한 값 그대로. 창작 금지) |
| 컴포넌트 | `YS-{PascalName}` — 컴포넌트 이름은 **파일 전역**이라 프리픽스 없으면 옆 팀원 것이 잡힌다 |
| 내부 프레임 | **의미 단위 이름** (`StockRow`·`PriceChart`). `Frame 27` 금지 — PRD 평가 항목 |

## 절차

1. 게이트 1(전환 전용 호출) 통과.
2. `02-tokens.md`의 TOKENS를 상수로 선언. **색·크기 리터럴을 코드에 직접 쓰지 않는다.**
3. **컴포넌트를 먼저 만든다** → 화면에서는 **인스턴스**로 반복. 데이터가 다른 행은 `characters` 오버라이드.
4. 화면 1개를 **P0 순서대로** 저작한다. 한 화면 = 여러 번의 작은 호출(몰아 실행 금지).
5. 화면 1개가 끝날 때마다 **`export_shape`로 PNG 확인** → 어긋나면 그 자리에서 수정.
   안 보고 쌓으면 마지막에 전부 어긋나 있다.
6. 화면 완성 후 **`growType === "auto-height"` 텍스트를 전부 `resize`로 재계산**시킨다(아래 잘림 방지).
7. `05-authored.md`에 만든 것(이름·id·PNG 경로)을 기록한다.

## 저작 규칙 (Auto Layout 우선 — PRD 평가 항목)

- 세로로 쌓이는 섹션·리스트는 **flex layout**. 간격은 자식 좌표가 아니라 **`rowGap`·padding**.
  자식이 이미 있는 보드에 나중에 붙일 땐 `penpotUtils.addFlexLayout(board, dir)`(순서 보존).
- 컨테이너가 내용에 맞게 커져야 하면 `verticalSizing = "auto"`.
  figma 사이징 프로퍼티(`primaryAxisSizingMode` 등)는 **안 먹는다** → `horizontalSizing`/`verticalSizing`.
- **절대좌표는 오버레이·플로팅에만.** 비-오토레이아웃 프레임은 `appendChild`가 자식을 안 옮기므로
  붙인 뒤 `c.x = parent.x + dx; c.y = parent.y + dy`.
- 상태 변형(모달·에러·로딩)은 **`clone()`** 후 덮을 것만 얹는다. 처음부터 다시 짓지 않는다.
- 오버레이 시트: **반투명 스크림 rect는 렌더에서 사라진다** → **뒤 화면 보드의 `opacity`를 낮춘다**.

## 알려진 함정 (밟으면 시간을 통째로 날린다)

| 함정 | 대응 |
|---|---|
| `fills`에 figma 형식(`{type:"SOLID",color:{r,g,b}}`) | **penpot 형식** `{fillColor:"#RRGGBB", fillOpacity:1}` — 인스턴스 오버라이드도 된다 |
| `fills`/`strokes`가 배열이 아닌 **프록시** | `.map/.forEach` 금지. 인덱스 for 루프로 복사 |
| `penpot.fonts.findByName("Inter")` → **`Inter Tight`** 반환(부분일치) | `penpot.fonts.all.find(f => f.name === X)` 정확일치 + 저작 후 `fontFamily` 되읽어 검증 |
| 라틴 폰트엔 **한글 글리프 없음** | 한국어 카피는 `TOKENS.font.resolvedKo`(Pretendard 등) |
| 없는 폰트는 **조용히 대체**됨(에러 없음) | 저작 전 존재 확인. 대체됐으면 `05-authored.md`에 명시 |
| 컴포넌트 **이름 변경·자식 remove** → 플러그인 정지 | 이름·구조는 처음에 확정. 잘못 만들었으면 **새 이름으로 새로** |
| 고정 폭 텍스트 `growType="fixed"` → 글자 잘림 | `"auto-height"` |
| hug(자동 폭) 칸은 텍스트를 갈아끼워도 위치가 안 따라옴 | 가변 텍스트 칸은 **고정 폭 + 텍스트 정렬** |
| `layoutGrow` Spacer가 폭 1로 되돌아감 | 하단 고정 요소는 Spacer 높이를 **계산해 명시** |
| `export_shape`가 레이아웃 안정 전이면 **빈 영역** | 없다고 판단하기 전에 **재-export 한 번** |
| 자식 순서 수정 | `board.insertChild(index, node)` (remove가 위험한 환경의 탈출구) |

**쓸 수 있는 것**: 실사진 `const img = await penpot.uploadMediaUrl(name, url)` →
`rect.fills = [{ fillOpacity:1, fillImage: img }]` (top-level await 가능). PRD가 "자산 직접 조달"을 요구하면 활용한다.

## 출력 형식 (`05-authored.md`)

```markdown
| slug | 프레임명 | shape id | 컴포넌트 | PNG | 폰트 대체 |
|---|---|---|---|---|---|
| S01-… | New/… | … | YS-… ×5 | docs/artifacts/exports/S01-…-r1.png | Inter(원본 아님) |
```

## 금지
- **작업 Page 인자 없이 저작 시작 금지.** 기본값으로 첫 Page 사용 금지.
- 공용 Page(`중간공유`·`최종제출`)에서 처음부터 저작 금지. 자산 Page 수정 금지.
- 토큰 값 리터럴 하드코딩 금지(②의 TOKENS만 참조).
- 화면 전체를 절대좌표로 조립 금지. 반복 요소 복붙 금지.
- 한 번에 몰아서 실행 금지 — 작게 쪼개 실행 + export 검증.
- 다른 단계의 출력 파일을 쓰지 않는다.
