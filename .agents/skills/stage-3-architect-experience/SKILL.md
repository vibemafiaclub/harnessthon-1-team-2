---
name: stage-3-architect-experience
description: 신규 PRD 계약과 회사 레퍼런스의 브랜드 DNA를 결합해 브랜드는 익숙하지만 새 제품 과업에는 맞는 화면·흐름·상태·적응 전략을 설계한다. $start의 UX 및 브랜드 전이 단계에 사용한다.
---

# Architect a Brand-Adapted Experience

## 입력과 출력

- 입력: `<artifact_dir>/01-prd-contract.md`, `<artifact_dir>/02-reference-system.md`, `work_page`, `run_id`, `artifact_dir`
- 출력: `<artifact_dir>/03-experience-map.md`

## 절차

1. 입력과 필수 ID를 확인한다. 01·02의 `run_id`, `prd_path`, `work_page`, `artifact_dir`가 호출값과 서로 일치하고, 01에 모든 `REQ-NN`, 02에 적어도 하나의 `REF-NN`이 있는지 확인한다. 하나라도 없거나 다른 실행이면 중단한다.
2. 모든 `REQ-NN`을 화면·오버레이·상태·구조에 매핑한다.
3. 핵심 과업을 가장 짧고 명확한 흐름으로 구성하고 화면마다 단일 주행동을 정한다.
4. 새 도메인의 의사결정 중요도·빈도·위험에 맞춰 정보 위계를 새로 설계한다.
5. 각 주요 경험 결정에 `DEC-NN`을 부여하고 적용할 `REF-NN`과 `preserve/translate` 방식을 연결한다.
6. 레퍼런스에 없는 기능 해법은 `NEW-NN`으로 만들고 사용자 필요, 가장 가까운 브랜드 규칙, 도출 논리를 기록한다.
7. 식별력 높은 signature가 어느 화면에서 어떻게 나타나는지 정한다. 장식 복제가 아니라 위계·행동·어조까지 포함한다.
8. `Brand shell evidence`의 상태바·브랜드 앵커·하단 내비게이션을 화면군별로 `preserve`, `translate`, `avoid`, `unresolved`로 배치한다. 원본 shell을 장식으로만 붙이지 말고 새 제품의 정보 구조·주행동과 충돌하지 않게 한다.
9. `Exploration mechanism evidence`가 있고 PRD에 발견/비교 과업이 있으면 각 `MECH-NN`에 적응 결정을 만든다. 검색·필터는 새 도메인의 판단 기준으로, 지도는 위치가 민감한 도메인에서는 정확한 좌표 대신 동네·거리 범위·클러스터/리스트 전환처럼 안전하게 번역한다. 원본 지도나 검색 결과를 이름만 바꿔 복제하지 않는다.
10. 원본 회사의 사업 개체나 화면 구성을 그대로 옮긴 부분이 없는지 검사한다.
11. 빈·로딩·실패·권한·입력 오류·성공·복구 상태를 실제 흐름에 포함한다.

## 출력 형식

```markdown
## Run metadata
| run_id | prd_path | work_page | reference_pages | artifact_dir | input_01 | input_02 |

## Adaptation thesis
| new_product_job | inherited_character | transformation_rule | must_not_copy |

## Experience principles
| principle | rationale | requirement_ids | ref_ids |

## Screen manifest
| order | frame_name | type | purpose | primary_action | requirement_ids | states |

## Flow graph
| from | trigger | to | success | failure | recovery |

## Content hierarchy
| frame_name | priority | user_question | domain_content | action |

## Brand transfer map
| decision_id | frame_name | ref_ids | preserve_translate | adapted_expression | requirement_ids |

## Shell placement plan
| shell_id | frame_group | preserve_translate_avoid | adapted_anatomy | interaction_reason | ref_ids |

## Mechanism transfer ledger
| mechanism_id | decision_id | source_user_decision | new_domain_decision | adapted_control_or_screen | privacy_boundary | ref_ids | requirement_ids |

## Novel decision ledger
| new_id | unmet_need | closest_ref_ids | derived_solution | risk |

## Signature placement
| ref_id | frame_name | expression | why_recognizable |

## State matrix
| frame_name | state | trigger | visible_change | recovery | requirement_ids |

## Coverage
| requirement_id | destination | status |
```

## 금지

- 원본 제품의 IA·카피·사업 개체를 새 이름만 붙여 복제
- 로고색만 적용한 범용 UX
- 입력에 없는 기능 추가 또는 화면 수 고정
- `DEC-NN`과 연결된 `REF-NN` 또는 `NEW-NN`이 없는 주요 경험 결정
- PRD의 발견 과업과 관찰된 primary 탐색 메커니즘을 모두 무시한 채 카드 목록만 만드는 것
- 다른 단계 산출물 수정
