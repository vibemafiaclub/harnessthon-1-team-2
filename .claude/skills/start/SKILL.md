---
name: start
description: PRD를 입력받아 단계별 sub agent를 순서대로 호출해 Penpot 디자인을 완성하는 하네스 진입점. "/start", "시작해줘", "디자인 만들어줘", "PRD 실행", "하네스 돌려줘" 등에 트리거된다.
---

# start — 하네스 진입점

> 🔒 **공용 파일입니다. 수정하려면 조장 승인이 필요합니다.**
>
> ⚠️ **이 파일은 비어 있는 뼈대입니다.** 설계 세션에서 팀이 정한 단계를
> 여기에 채워 넣으세요. 미리 채워두지 않은 이유는, 단계를 나누는 일 자체가
> 오늘의 핵심 학습이기 때문입니다.
>
> 👉 단계가 확정됐다면 손으로 쓰지 말고 **`/scaffold-harness`** 를 조장이 실행하세요.
> 아래 표·실행순서와 `.claude/agents/stage-*.md`를 한 번에 만들어줍니다.

## 입력

- `docs/PRD.md` — 만들어야 할 것의 명세
- 작업 Page 이름 — **매 실행마다 확인한다.** 없으면 묻고, 답을 받기 전엔 시작하지 않는다

## 실행 원칙

1. **각 단계는 반드시 sub agent에게 위임한다.** 오케스트레이터가 직접 저작하지 않는다.
2. 각 sub agent에게 **입력(읽을 파일)·출력(쓸 파일)·작업 Page 이름**을 명시적으로 넘긴다.
3. **의존관계가 없는 단계는 병렬로** 호출한다.
4. 중간 산출물은 전부 `docs/artifacts/`에 남긴다. 남지 않으면 다음 단계가 읽을 게 없다.
5. 한 단계가 출력 파일을 남기지 못했으면 **다음 단계로 넘어가지 않는다.** 멈추고 보고한다.

## 단계 정의

| # | 단계 | sub agent | 입력 | 출력 | 담당자 | 병렬 가능 |
|---|---|---|---|---|---|---|
| 1 | PRD 해부 | `stage-1-prd-decompose` | `docs/PRD.md` | `docs/artifacts/01-screens.md` | 최요셉 | — |
| 2 | 기존자산 추출 | `stage-2-asset-tokens` | `docs/PRD.md`(자산 Page 파싱) + Penpot **읽기전용** | `docs/artifacts/02-tokens.md` | 최요셉 | ✅ ③과 |
| 3 | 브랜드·레퍼런스 | `stage-3-reference` | `docs/PRD.md`(배경) + 웹 | `docs/artifacts/03-reference.md` | 최요셉 | ✅ ②와 |
| 4 | 화면 스펙 | `stage-4-screen-spec` | `01`+`02`+`03` | `docs/artifacts/04-spec-{slug}.md`, `04-components.md` | 최요셉 | — |
| 5 | Penpot 저작 | `stage-5-author-penpot` | `04-*` + `02` + **작업 Page 인자** | 작업 Page의 화면 + `05-authored.md` | 최요셉 | — |
| 6 | QA 루프 | `stage-6-qa-loop` | `05-authored.md` + `04-spec-*` | `06-qa-{n}.md` + `exports/*.png` | 최요셉 | — |
| 7 | 검증 *(고정)* | `stage-verify-penpot` | Penpot + `01` + `docs/artifacts/` | `docs/artifacts/99-verify.md` | (조장 배정) | — |

> ①②③은 **전부 PRD만 있으면 시작 가능**하지만, ②는 ①이 파싱한 `assetPage`를 받으면 더 안전하다.
> 병렬로 돌릴 때는 ②에게 **PRD 2절을 직접 파싱하라**고 지시한다(대화 맥락으로 넘기지 않는다).

## 실행 순서

1. **작업 Page 이름을 확인한다.** 없으면 여기서 멈추고 묻는다. (기본값으로 첫 Page를 쓰지 않는다)
2. `stage-1-prd-decompose` 호출 → `01-screens.md` 생성 확인
3. `stage-2-asset-tokens`, `stage-3-reference` **병렬 호출** → `02-tokens.md`·`03-reference.md` 생성 확인
   - ②에는 `01-screens.md`의 `assetPage`(또는 PRD 2절 파싱 지시)와 **"읽기 전용·전환 금지"**를 명시해 넘긴다
4. `stage-4-screen-spec` 호출 → `04-spec-*.md`·`04-components.md` 생성 확인
5. `stage-5-author-penpot` 호출 → **작업 Page 이름을 인자로 반드시 전달**
6. `stage-6-qa-loop` 호출 → 판정이 `RETRY`면 수정 지시를 들고 **5로 되돌아간다** (라운드 최대 3)
7. `stage-verify-penpot` 호출 (아래 고정 절차)

## 각 단계 호출 시 반드시 넘기는 것

| 항목 | 이유 |
|---|---|
| 읽을 파일 경로 · 쓸 파일 경로 | 단계 간 통신은 **파일로만**. 대화 맥락으로 넘기면 재현이 안 된다 |
| **작업 Page 이름** (⑤⑦) | 실시간 공유 파일 — Page를 틀리면 남의 작업 위에 그린다 |
| **자산 Page 이름 + 읽기 전용** (②) | 전환하면 남이 보는 화면도 바뀐다 |

## 마지막 단계 — 검증 (고정, 삭제 금지)

모든 단계가 끝나면 **항상** `stage-verify-penpot` 을 호출한다.

- 지정 Page에 board/frame이 1개 이상 있는가
- PRD가 요구한 화면이 전부 있는가
- 각 단계 산출물이 `docs/artifacts/`에 남아 있는가

결과는 `docs/artifacts/99-verify.md`. **실패 항목이 있으면 완료를 선언하지 않는다.**
해당 단계를 다시 호출하고, 재실행 후에도 실패하면 무엇이 왜 비었는지 사용자에게 보고한다.

## 완료 조건

- Penpot 파일의 **지정된 Page**에 화면이 실제로 만들어져 있다
- 각 단계의 중간 산출물이 `docs/artifacts/`에 남아 있다
- `docs/artifacts/99-verify.md` 가 전 항목 통과다

## 오케스트레이터가 하지 않는 것

- **직접 저작하지 않는다.** Penpot MCP 호출은 ②(읽기)·⑤(저작)·⑦(검증) agent만 한다.
- **산출물을 대신 써주지 않는다.** 단계가 파일을 못 남겼으면 그 단계를 다시 부른다.
- **앞 단계의 "완료했습니다" 보고를 근거로 다음 단계를 부르지 않는다.** 출력 파일 존재를 확인하고 넘어간다.
- 예산 규칙: **P0 화면이 전부 끝나기 전에 P2 화면으로 넘어가지 않는다.**
