---
name: stage-1-analyze-prd
description: 임의의 신규 PRD를 브랜드와 독립적인 요구사항·화면·상태·수용 조건 계약으로 변환한다. $start의 제품 요구 분석이나 PRD 누락 감사에 사용한다.
---

# Analyze Product Requirements

## 입력과 출력

- 입력: `prd_path`, `work_page`, `run_id`, `artifact_dir`, `assumption_mode` (기본 `auto`)
- 출력: `<artifact_dir>/01-prd-contract.md`

## 절차

1. 입력 파일과 실행 식별자를 확인한다. 없으면 중단한다.
2. 제품 목표, 사용자군, 핵심 과업, 제약, 제출 규칙을 원문 근거와 함께 추출한다.
3. 모든 유저 스토리·필수 요소·예외·상태·비기능 요구에 `REQ-NN`을 부여한다.
4. 각 요구를 화면, 오버레이, 상태, 콘텐츠 규칙 또는 구조 규칙에 연결한다.
5. 진입점이 있으면 목적지를, 행동이 있으면 성공·실패·복구 결과를 계약한다. 사용자가 상대·상품·장소·콘텐츠를 **찾거나 비교하거나 발견**하는 과업이면 검색, 필터, 정렬, 지도/위치, 범위, 저장 등 판단 제어가 PRD에 명시됐는지 별도 계약한다.
6. 최소 화면 수를 목표로 삼지 말고 요구를 완결하는 화면 후보를 도출한다.
7. 화면과 상태에 우선순위를 붙인다. `P0`는 PRD가 명시하거나 제출에 요구한 화면, `P1`은 없으면 주 흐름이 끊기는 목적지·성공·실패·복구 상태, `P2`는 유용하지만 핵심 흐름을 막지 않는 보조 경험, `P3`는 여러 화면에 공통인 저우선 상태다. P0/P1을 먼저 저작·QA하고 P3는 별도 화면을 무한 증식시키지 말고 재사용 가능한 상태 표현으로 통합한다.
8. PRD의 도메인 명사와 사용자 데이터 형태를 정리하되 레퍼런스 제품의 명사와 섞지 않는다.
9. 모호하거나 상충하는 항목은 도메인명이 아니라 영향으로 분류한다. `assumption_mode=auto`에서는 화면 판독용 수치·카피·예시 데이터와 교체 가능한 세부 정책을 `ASM-NN`으로 확정한다. 각 가정에는 원문 공백, 최소 가정, 영향받는 `REQ-NN`, 화면 표기를 기록한다. 작업 Page·primary 레퍼런스·입력 파일처럼 잘못 추측하면 외부 상태를 훼손하는 것, 또는 제품 과업 자체가 전혀 없는 것만 `BLOCK-NN`으로 둔다.
10. `strict` 모드에서만 `ASM-NN` 후보를 `OPEN-NN`으로 남겨 확인을 요청한다. `auto`에서는 routine PRD 질문을 하지 않는다.

## 출력 형식

```markdown
## Run metadata
| run_id | prd_path | work_page | artifact_dir | top_frame_rule |

## Product contract
| goal | target_user | core_job | success_signal | constraint | evidence |

## Requirement matrix
| id | source | user_need | required_element | destination | state | priority | acceptance |

## Domain vocabulary
| term | meaning | data_shape | allowed_copy | evidence |

## Exploration contract
| id | user_decision | discovery_context | required_control_or_entry | destination_or_result | privacy_or_safety_constraint | evidence |

## Screen candidates
| screen_key | priority | purpose | requirement_ids | states | entry | exit |

## Structural rules
| rule | requirement_ids | acceptance |

## Open questions
| id | ambiguity | blocking | evidence |

## Assumption ledger
| id | class | source_gap | minimum_assumption | affected_requirement_ids | affected_screens | visible_label_or_boundary | replaceable_design_rule |

## Blocking conditions
| id | reason | external_state_risk_or_missing_core | evidence |
```

## 금지

- 레퍼런스 스타일, 색, 컴포넌트 또는 화면 구조를 선결정
- `auto` 모드에서 예시값·세부 정책 공백을 사용자 질문으로 되돌리기
- `ASM-NN` 없이 PRD에 없는 값·정책을 사실처럼 단정
- 최소 화면 수·예시 서비스명 하드코딩
- 다른 단계 산출물 수정
