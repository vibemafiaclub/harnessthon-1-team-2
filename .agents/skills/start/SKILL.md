---
name: start
description: 회사별 Penpot 레퍼런스의 브랜드 정체성을 보존하면서 임의의 신규 PRD에 맞는 UI를 만드는 7단계 sub-agent 하네스를 실행한다. "$start", "/start", "PRD 실행", "레퍼런스로 새 서비스 디자인", "하네스 돌려줘" 요청에 사용한다.
---

# Start — Brand-adaptive PRD-to-Penpot Harness

오케스트레이션만 수행한다. 문서 분석, 디자인 판단, Penpot 저작은 각각의 sub-agent가 자동 수행한다. 정상 실행은 PRD, primary 회사 레퍼런스, 안전한 `work_page`만으로 01~99 산출물과 Penpot 결과까지 완주한다. `work_page`는 도메인 입력이 아니라 실시간 협업에서 쓰기 대상을 보호하는 실행 안전 인자다.

## 실행 입력

- `prd_path`: 신규 제품 PRD. 기본값 `docs/PRD.md`
- `work_page`: 저작할 개인 Penpot Page. 필수
- `reference_pages`: 현재 Penpot 파일 안의 읽기 전용 Page 목록. 각 항목은 `name`, `role`을 가진다.
  - 정확히 하나의 `primary`: 계승할 회사 정체성
  - 선택적인 `supplemental`: 특정 패턴 참고용이며 브랜드를 섞지 않는다.
- `brand_context_path`: 브랜드 원칙·카피 가이드 등 보조 문서. 선택
- `run_id`: 실행 식별자. 없으면 `run-YYYYMMDD-HHMMSS`
- `resume`: 기존 실행을 이어갈 때만 `true`. 기본값 `false`
- `assumption_mode`: PRD의 표현값·세부 정책 공백 처리. 기본값 `auto`; `strict`는 사용자가 명시적으로 요청한 경우만 사용한다.

```text
$start prd_path=docs/examples/daangn-stock.md work_page=황선태 reference_pages=[{name:"1-daangn",role:"primary"}]
```

## 실행 전 게이트

1. PRD와 `work_page`를 확인한다. Page 이름을 추측하거나 첫 Page를 기본 선택하지 않는다.
2. `reference_pages`가 없으면 PRD에서 정확히 하나로 확정될 때만 사용한다. 없거나 모호하면 묻는다.
3. 일반 실행은 `primary`를 정확히 하나 요구한다. 복수 회사 결합은 사용자가 우선순위·혼합 원칙을 명시한 경우에만 허용한다.
4. 모든 레퍼런스 Page, `기존파일`, 다른 팀 Page는 읽기 전용이다. `중간공유`·`최종제출`에서 처음부터 저작하지 않는다.
5. `artifact_dir=docs/artifacts/<run_id>`를 정하고 없으면 생성한다. 디렉터리에 기존 실행물이 있고 `resume=false`면 덮어쓰지 말고 새 `run_id`를 사용한다.
6. 모든 sub-agent 호출에 `prd_path`, `work_page`, `reference_pages`, `brand_context_path`, `run_id`, `artifact_dir`, `assumption_mode`, 입력 파일과 단일 출력 파일을 명시한다.
7. 루트 `docs/artifacts/`의 과거 파일은 실행 입력으로 사용하지 않는다. 모든 입력은 반드시 같은 `<artifact_dir>` 안의 파일이어야 하며, `run_id`, `prd_path`, `work_page`, `artifact_dir`가 이번 실행값과 모두 일치해야 한다.

## 도메인 중립 가정 계약

`assumption_mode=auto`에서는 PRD가 어느 산업·회사·사용자 과업이든, 표현값·예시 콘텐츠·세부 정책의 공백 때문에 routine 질문을 하지 않는다. 1단계가 아래 표에 따라 `ASM-NN`을 만들고 후속 단계가 그대로 소비한다.

| 분류 | 판정 | 처리 |
|---|---|---|
| `explicit` | PRD 원문에 값·정책·행동이 있음 | `REQ-NN`으로 그대로 구현 |
| `example-allowed` | 화면을 판독하는 데 수치·카피·데이터 예시가 필요하지만 핵심 과업/제약은 명확함 | 일관된 예시를 생성하고 `ASM-NN`과 화면의 `예시`/프로토타입 표기를 남김 |
| `policy-allowed` | 세부 계산·순서·대상 범위가 비었지만 최소 가정으로 화면 구조·행동을 구현할 수 있음 | 가장 좁고 교체 가능한 가정을 `ASM-NN`으로 기록해 구현; 실제 정책처럼 단정하지 않음 |
| `execution-blocking` | 작업 Page, primary 레퍼런스, 입력 파일 등 틀리게 추측하면 타인의 결과 또는 외부 상태를 훼손함 | 저작 전에만 중단하고 확인 |

`strict` 모드에서는 `example-allowed`와 `policy-allowed`도 `OPEN-NN`으로 보고할 수 있다. 기본 `auto`에서 사용자에게 질문할 수 있는 것은 `execution-blocking`뿐이다. PRD 자체가 읽히지 않거나 제품 과업이 전혀 없어 최소 화면을 정할 수 없는 경우는 `BLOCK-NN`으로 중단 사유만 보고한다. 실행 중 새 도메인 정책 질문을 만들어 내거나, 예시 PRD의 명사·수치를 다음 실행에 재사용하지 않는다.

## 단계 계약

| # | 단계 | skill | 단일 출력 |
|---|---|---|---|
| 1 | 제품 요구 계약 | `$stage-1-analyze-prd` | `<artifact_dir>/01-prd-contract.md` |
| 2 | 브랜드 레퍼런스 포렌식 | `$stage-2-audit-reference` | `<artifact_dir>/02-reference-system.md` |
| 3 | 브랜드 적응형 UX 아키텍처 | `$stage-3-architect-experience` | `<artifact_dir>/03-experience-map.md` |
| 4 | 근거 기반 UI 시스템 | `$stage-4-specify-ui-system` | `<artifact_dir>/04-ui-blueprint.md` |
| 5 | Penpot 저작 | `$stage-5-author-penpot` | `<artifact_dir>/05-author-log.md` |
| 6 | 이중축 디자인 비평·수정 | `$stage-6-critique-fix` | `<artifact_dir>/06-visual-qa.md` |
| 7 | 독립 최종 검증 | `$stage-verify-penpot` | `<artifact_dir>/99-verify.md` |

## 실행 DAG

1. 1단계와 2단계를 별도 sub-agent로 병렬 실행한다.
2. 두 산출물의 필수 표와 ID가 비어 있지 않은지 확인한다. 특히 primary의 `Brand shell evidence`와 `Exploration mechanism evidence`가 각각 `observed` 또는 명시적 `unresolved`인지 확인한다. `ASM-NN`은 유효한 handoff 입력이며, `BLOCK-NN` 또는 execution-blocking reference unknown만 저작 전에 중단하고 확인한다.
3. 3단계, 4단계, 5단계, 6단계, 7단계를 차례로 실행한다.
4. 같은 Penpot Page를 수정하는 5단계와 6단계는 반드시 직렬 실행한다.
5. 선행 산출물 또는 계약 필드가 없으면 후속 단계를 실행하지 않는다.
6. 각 단계는 자기 출력만 쓰며 다른 단계 산출물을 수정하지 않는다.

## 산출물 handoff 잠금

후속 단계는 입력을 "참고"만 하지 말고 아래 검사를 통과한 경우에만 소비한다. 하나라도 실패하면 그 입력의 owner stage로 되돌리고, 빈 표·누락 ID·다른 run의 파일을 임의 보완하지 않는다.

| handoff | 필수 identity | 최소 계보 증거 |
|---|---|---|
| 1 → 3 | 01의 `run_id/prd_path/work_page/artifact_dir` 일치 | 모든 `REQ-NN`, `Screen candidates`, `Assumption ledger`, `Open questions` |
| 2 → 3 | 02의 `run_id/reference_pages/work_page/artifact_dir` 일치 | 적어도 하나의 `REF-NN`; `signature/preserve` 및 shell/mechanism은 `REF-NN` 또는 `unresolved` |
| 3 → 4 | 01·02와 03의 identity 일치 | 모든 `REQ-NN` coverage, 각 주요 `DEC-NN`, 필요한 `NEW-NN`·`MECH-NN`·`ASM-NN` |
| 4 → 5 | 03과 04의 identity 일치 | 모든 board, component, token 결정이 `DEC-NN`·`NEW-NN` 또는 `ASM-NN`에 연결 |
| 5 → 6 | 01~04와 05의 identity 일치 | 모든 expected frame node ID와 `REQ/REF/NEW/MECH/ASM/DEC` node lineage |
| 6 → 7 | 01~05와 06의 identity 일치 | blocker=0, major=0, 재-export 증거 |

`ASM-NN`은 `REQ-NN`을 바꾸거나 덮어쓰지 않는다. 예시값·세부 정책 가정은 1단계에 수용 범위와 표기를 기록하고, `ASM-NN → DEC-NN → node`로 후속 단계에 전달한다. 실제 정책, 보장, 가격, 법률·안전 사실처럼 보이게 표현하지 않는다.

## 전 구간 추적 계약

모든 최종 노드는 다음 세 계보 중 하나 이상으로 설명되어야 한다.

- `REQ-NN → 화면/상태 → Penpot 노드`: 신규 PRD 충족
- `REF-NN → DEC-NN → 토큰·컴포넌트·노드`: 회사 정체성 계승
- `MECH-NN → DEC-NN → 화면·제어·노드`: 회사 고유의 탐색·판단 메커니즘 전이
- `NEW-NN → DEC-NN → 토큰·컴포넌트·노드`: 레퍼런스에 없던 해법의 타당성
- `ASM-NN → DEC-NN → 콘텐츠·상태·노드`: PRD에 없는 예시값·교체 가능한 세부 정책

레퍼런스의 기존 사업 개체·카피·정보구조를 새 PRD에 그대로 복제하지 않는다. 반대로 로고색만 바꾼 범용 UI가 되지 않도록 식별력 높은 `REF-NN`을 실제 화면에 적용한다.

## 실패 라우팅과 재실행

7단계가 FAIL이면 실패별 `owner_stage`를 고친 뒤 그 산출물에 의존하는 모든 후속 단계를 다시 실행한다.

| earliest owner | 재실행 closure |
|---|---|
| 1 | 1 → 3 → 4 → 5 → 6 → 7 |
| 2 | 2 → 3 → 4 → 5 → 6 → 7 |
| 1과 2 | 1·2 병렬 → 3 → 4 → 5 → 6 → 7 |
| 3 | 3 → 4 → 5 → 6 → 7 |
| 4 | 4 → 5 → 6 → 7 |
| 5 | 5 → 6 → 7 |
| 6 | 6 → 7 |

여러 실패가 있으면 필요한 closure의 합집합을 DAG 순서로 한 번만 실행한다. 재실행에는 `revision_id=<run_id>-r1`과 기존 author log를 전달한다. 두 번째 검증도 FAIL이면 완료를 선언하지 않는다.

## 완료 조건

- 01~06 및 99 산출물이 같은 `artifact_dir`에 존재한다.
- 세 추적 계보가 끊기지 않는다.
- 신규 PRD의 모든 요구와 상태가 실제 노드에 매핑된다.
- primary 회사의 핵심 브랜드 특징이 근거와 함께 보존된다.
- primary에서 관찰된 상태바·브랜드 앵커·하단 내비게이션 같은 shell과 핵심 탐색 메커니즘이 `preserve`, `translate`, `avoid`, `unresolved` 중 하나로 판정되고 실제 화면에 추적된다.
- 원본 사업의 의미를 베낀 흔적이나 supplemental 브랜드 혼입이 없다.
- 모든 최종 프레임을 `export_shape`로 확인했고 `99-verify.md`가 PASS다.
