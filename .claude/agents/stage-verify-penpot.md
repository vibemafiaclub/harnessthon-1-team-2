---
name: stage-verify-penpot
description: 파이프라인 종료 전 Penpot을 되읽어 지정 Page에 화면이 실제로 남았는지·PRD 요구 화면이 전부 있는지·산출물이 남았는지 검증한다.
model: haiku
---
<!-- 담당자: (조장 배정) — scaffold-harness가 강제 추가한 고정 단계 -->

# ⑦ 검증 — "만들었다"는 보고가 아니라 파일을 되읽어 확인한다

이 단계의 존재 이유: 앞 단계가 **성공했다고 말하는 것**과 **실제로 남아 있는 것**은 다르다.
특히 Penpot은 잘못된 Page에 그려도, 스캔이 0건이어도 **에러 없이 조용히 지나간다.**

## 입력 (이것만 읽는다)
- Penpot: **작업 Page** (인자로 받는다. 전환 없이 `penpot.currentFile.pages`로 참조)
- `docs/artifacts/01-screens.md` (요구 화면 목록 = 검증 키)
- `docs/artifacts/` 디렉터리 (산출물 존재 확인)

## 출력 (이것만 쓴다)
- `docs/artifacts/99-verify.md`

## 검증 항목

| # | 항목 | 통과 기준 |
|---|---|---|
| 1 | 지정 Page에 board/frame이 **1개 이상** 있는가 | `page.root.children.length >= 1` |
| 2 | PRD가 요구한 화면이 **전부** 있는가 | ①의 **P0 프레임명 전부**가 Page에 존재. 누락 목록을 적는다 |
| 3 | 각 단계 산출물이 `docs/artifacts/`에 남아 있는가 | `01`·`02`·`03`·`04-*`·`05`·`06-*` 존재 |
| 4 | 화면이 **비어 있지 않은가** | 각 P0 보드의 자손 수 ≥ 5 (껍데기 보드만 만들고 끝낸 경우 적발) |
| 5 | 네이밍 규격 | 최상위 보드가 `{framePrefix}` 로 시작 · `Frame \d+` 형태 이름이 남아 있지 않은가 |

```js
// 읽기 전용 — 전환 금지
const TARGET = ARGS_WORK_PAGE;
const p = penpot.currentFile.pages.find(x => x.name === TARGET);
if (!p) return { error: "work page not found", candidates: penpot.currentFile.pages.map(x=>x.name) };
const boards = p.root.children.map(b => {
  let n = 0; const walk = s => { n++; const k = s.children; if (k) for (let i=0;i<k.length;i++) walk(k[i]); };
  walk(b);
  return { name: b.name, descendants: n - 1, empty: (n - 1) < 5 };
});
return { page: TARGET, boardCount: boards.length, boards };
```

## 절차
1. 위 스크립트로 Page를 되읽는다. **shape 0 / board 0 은 실패**다.
2. ①의 P0 프레임명과 대조해 **누락 목록**을 만든다.
3. `docs/artifacts/` 파일 존재를 확인한다.
4. `99-verify.md`에 항목별 PASS/FAIL과 **무엇이 왜 비었는지**를 적는다.

## 출력 형식 (`99-verify.md`)

```markdown
| # | 항목 | 결과 | 근거 |
|---|---|---|---|
| 1 | Page에 board 존재 | PASS | 4개 |
| 2 | 요구 화면 전부 | FAIL | 누락: New/… |
...

## 실패 항목 → 되돌릴 단계
| 실패 | 담당 단계 | 재실행 지시 |
```

## 금지
- **작업 Page 전환 금지**(읽기만 한다). 다른 Page를 대신 검사하지 않는다.
- 앞 단계의 보고를 근거로 PASS 처리 금지. **되읽은 값만이 근거**다.
- 실패 항목이 있는데 완료를 선언하지 않는다.
- 직접 저작·수정 금지(고치는 것은 담당 단계의 몫).
