---
name: stage-1-analyze-prd
description: 임의의 신규 PRD를 브랜드와 독립적인 요구사항·화면·상태·수용 조건 계약으로 변환한다. $start의 제품 요구 분석이나 PRD 누락 감사에 사용한다.
---

# Analyze Product Requirements

## 입력과 출력

- 입력: `prd_path`, `work_page`, `run_id`, `artifact_dir`
- 출력: `<artifact_dir>/01-prd-contract.md`

## 절차

1. 입력 파일과 실행 식별자를 확인한다. 없으면 중단한다.
2. 제품 목표, 사용자군, 핵심 과업, 제약, 제출 규칙을 원문 근거와 함께 추출한다.
3. 모든 유저 스토리·필수 요소·예외·상태·비기능 요구에 `REQ-NN`을 부여한다.
4. 각 요구를 화면, 오버레이, 상태, 콘텐츠 규칙 또는 구조 규칙에 연결한다.
5. 진입점이 있으면 목적지를, 행동이 있으면 성공·실패·복구 결과를 계약한다. 사용자가 상대·상품·장소·콘텐츠를 **찾거나 비교하거나 발견**하는 과업이면 검색, 필터, 정렬, 지도/위치, 범위, 저장 등 판단 제어가 PRD에 명시됐는지 별도 계약한다.
6. 최소 화면 수를 목표로 삼지 말고 요구를 완결하는 화면 후보를 도출한다.
7. PRD의 도메인 명사와 사용자 데이터 형태를 정리하되 레퍼런스 제품의 명사와 섞지 않는다.
8. 모호하거나 상충하는 항목은 `OPEN-NN`으로 기록한다. blocking 항목은 추측하지 않는다.

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
| screen_key | purpose | requirement_ids | states | entry | exit |

## Structural rules
| rule | requirement_ids | acceptance |

## Open questions
| id | ambiguity | blocking | evidence |
```

## 금지

- 레퍼런스 스타일, 색, 컴포넌트 또는 화면 구조를 선결정
- PRD에 없는 기능·값 추측
- 최소 화면 수·예시 서비스명 하드코딩
- 다른 단계 산출물 수정
