# Yosep 최신 변경 분석 및 하네스 보완 제안

분석 기준은 `origin/yosep`의 최신 커밋 `7f1ba88`이다. 이 문서는 당근증권 결과물을 합치기 위한 문서가 아니라, 최신 실행에서 검증된 좋은 작업 방식을 범용 PRD→Penpot 하네스에 이식하기 위한 판단 기록이다.

## 이번 변경에서 실제로 추가된 것

| 추가물 | 확인된 내용 | 성격 |
|---|---|---|
| `05-design-system-m3.md` | 색 역할, 타입 스케일, radius, 4dp spacing, 컴포넌트 치수, elevation, 접근성, 적용 체크리스트 | 디자인 시스템 명세 |
| `AUTHOR-all-screens.js` 확장 | 토큰/헬퍼, 단계별 저작, 화면 재배치, 컴포넌트 조립, 스플래시·홈·커뮤니티 화면 작성 | 당근증권 실행 스크립트 |
| 실제 서비스 아이콘·종목 로고·컨셉/스플래시 이미지 | 화면의 자산 완성도와 현실감을 강화 | 당근증권 자산 |
| PNG export | 스플래시와 watchlist의 반복 수정 결과 | 시각 QA 증거 |

## 잘된 점과 범용화 방법

| Yosep에서 잘된 점 | 왜 효과적인가 | 우리 하네스의 범용 보완 방식 | 반영 단계 |
|---|---|---|---|
| raw 색상 대신 `primary`, `surface`, `outline`, `error`처럼 **역할 기반 토큰**을 사용 | 화면마다 임의 색을 쓰는 일을 막고 컴포넌트 재사용이 쉬움 | Stage 2가 관찰한 색을 semantic role로 분류하고, Stage 4는 `observed`/`derived`/`new-functional` 근거와 함께 JS 토큰으로 확정 | 2 → 4 → 5 |
| 타입·간격·radius·행 높이를 하나의 scale로 제한 | 정렬과 위계가 안정되고 이후 화면이 빨리 만들어짐 | 프레임워크(M3 등)를 고정 채택하지 말고, primary 레퍼런스의 실측값에서 **run별 foundation scale**을 만든다. 미관찰 값만 `new-functional`로 최소 보완 | 2 → 4 |
| 화면별 컴포넌트 규격과 상태를 표로 먼저 정의 | 저작 코드가 구조를 반복하지 않고 instance를 재사용할 수 있음 | Stage 4 `Component registry`에 anatomy, size, layout, variants, override, `REQ/REF/ASM` 계보를 반드시 채움 | 4 → 5 |
| 실제 이미지·로고를 확보해 placeholder를 줄임 | 브랜드와 콘텐츠의 신뢰도가 올라감 | Stage 4 `Assets`에 source URL, crop, license/usage boundary, fetch 실패 fallback을 기록하고 Stage 5가 그대로 적용 | 4 → 5 |
| 저작을 작은 STEP으로 나누고 각 화면을 export | Penpot 실패 원인을 좁히고 시각 오류를 빠르게 잡음 | Stage 5 `Authoring order`의 export checkpoint를 필수로 소비하고 Stage 6/7이 재-export 증거를 요구 | 4 → 5 → 6 → 7 |
| 화면을 리뷰 순서로 캔버스에 배치 | 평가자가 흐름을 이해하기 쉬움 | Stage 3의 `Screen manifest.order`를 Stage 5가 top-level frame 배치 순서에 반영. 이 순서는 화면명·도메인과 무관하게 적용 가능 | 3 → 5 |
| 폰트 존재 여부를 확인하고 한글/숫자 사용을 분리 | 조용한 폰트 fallback과 한글 깨짐을 예방 | 현재 Stage 2의 font availability 감사와 Stage 5의 `penpot.fonts.all` 확인을 유지하고, fallback 영향은 author log에 남김 | 2 → 5 |

## 그대로 가져오면 안 되는 것

| 항목 | 이유 | 범용 대체 규칙 |
|---|---|---|
| M3 색·spacing·shape를 모든 실행의 기본값으로 고정 | 회사 레퍼런스가 다른 문법을 가질 수 있어 브랜드 충실도를 훼손 | M3는 빈 레퍼런스의 임시 scaffold 후보일 뿐이며, primary 관찰값이 항상 우선 |
| `#FF7E36`, 당근 어휘, 증권 수치, 390px 보드 | 특정 회사·도메인·기기 가정 | Stage 2가 레퍼런스에서 추출하거나, 없으면 `ASM-NN` 예시로 격리 |
| `AUTHOR-all-screens.js`의 Page 이름·화면명·node ID·삭제 목록 | 다른 실행에서 남의 Page/노드를 훼손할 위험 | Stage 5는 `work_page`, `run_id`, author log node ID로만 소유 노드를 식별하고 destructive cleanup을 하지 않음 |
| `storage`에 의존하는 긴 단일 스크립트 | 실행 간 상태가 사라지고 재현성이 낮음 | run별 blueprint의 토큰/헬퍼를 작은 호출마다 재선언하고 단계별 결과를 author log에 기록 |
| 당근 아이콘·종목 로고·스플래시 이미지 | 라이선스와 제품 맥락이 해당 실행에 한정 | PRD/레퍼런스에 맞는 출처 URL과 fallback을 run별 Assets 표에서 조달 |

## 현재 하네스에 이미 반영된 부분

| Yosep 강점 | 현재 계약의 대응 지점 |
|---|---|
| 토큰·컴포넌트 기반 설계 | Stage 4 `JS token constants`, `Component registry` |
| 실자산과 fallback | Stage 4 `Assets`, Stage 5 upload/fallback 절차 |
| 작은 배치와 PNG QA | Stage 4 `Authoring order`, Stage 5 export checkpoint, Stage 6/7 재-export |
| IA·용어·정보축 보존 | Stage 2 `IA and information-axis evidence`, Stage 3 brand transfer |
| P0/P1 우선 | Stage 1 priority, Stage 3/5/6 P0/P1 gate |
| 안전한 재실행 | Stage 5 reconciliation과 work-page 소유권 검사 |

## 이번 반영 사항

| 보완 | 반영 위치 | 상태 |
|---|---|---|
| 1~2px 아이콘 조각이 측정값을 왜곡하지 않게 표본 방식·제외 기준 기록 | Stage 2 `Measured primitives` | 반영 완료 |
| color/type/space/radius/elevation을 근거·역할·범위와 함께 한 곳에 정리 | Stage 4 `Foundation scale` | 반영 완료 |
| 자산의 출처·사용 경계와 fallback 기록 | Stage 4 `Assets` | 반영 완료 |
| 화면별 export·발견 문제·수정·재-export 결과 기록 | Stage 5 `Layout checkpoints` | 반영 완료 |
| 최종 프레임의 canvas order와 UX manifest order 대조 | Stage 5 author log, Stage 7 frame checks | 반영 완료 |

## 추천 결론

Yosep의 최신 변경은 **디자인 시스템을 먼저 규칙화하고 실제 자산·반복 export로 완성도를 올린 것**이 핵심 강점이다. 우리 하네스에는 그 작업 방식을 `REF-NN` 근거 기반 foundation scale, asset provenance, layout checkpoint로 이식해야 한다. M3·당근증권 화면·직접 node 삭제 스크립트는 특정 실행물이라 범용 하네스의 기본값으로 넣지 않는다.
