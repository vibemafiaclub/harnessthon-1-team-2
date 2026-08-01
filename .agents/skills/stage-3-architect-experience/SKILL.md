---
name: stage-3-architect-experience
description: 신규 PRD 계약과 회사 레퍼런스의 브랜드 DNA를 결합해 브랜드는 익숙하지만 새 제품 과업에는 맞는 화면·흐름·상태·적응 전략을 설계한다. $start의 UX 및 브랜드 전이 단계에 사용한다.
---

# Architect a Brand-Adapted Experience

## 입력과 출력

- 입력: `<artifact_dir>/01-prd-contract.md`, `<artifact_dir>/02-reference-system.md`, `work_page`, `run_id`, `artifact_dir`
- 출력: `<artifact_dir>/03-experience-map.md`

## 절차

0. `docs/brand-inheritance.md`를 끝까지 읽는다. 이 단계는 그 문서의 §1 판별 테스트와 §4 금지 판단을 소유하며, 2단계가 만든 `Slot inventory`·`Structural exclusivity rules`·`Brand color density`를 재료로 쓴다.
1. 입력과 필수 ID를 확인한다. 01·02의 `run_id`, `prd_path`, `work_page`, `artifact_dir`가 호출값과 서로 일치하고, 01에 모든 `REQ-NN`, 02에 적어도 하나의 `REF-NN`이 있는지 확인한다. 하나라도 없거나 다른 실행이면 중단한다.
2. 모든 `REQ-NN`을 화면·오버레이·상태·구조에 매핑한다.
3. 핵심 과업을 가장 짧고 명확한 흐름으로 구성하고 화면마다 단일 주행동을 정한다.
4. 새 도메인의 의사결정 중요도·빈도·위험에 맞춰 정보 위계를 새로 설계한다.
5. 각 주요 경험 결정에 `DEC-NN`을 부여하고 적용할 `REF-NN`과 `preserve/translate` 방식을 연결한다.
6. 레퍼런스에 없는 기능 해법은 `NEW-NN`으로 만들고 사용자 필요, 가장 가까운 브랜드 규칙, 도출 논리를 기록한다.
7. 식별력 높은 signature가 어느 화면에서 어떻게 나타나는지 정한다. 장식 복제가 아니라 위계·행동·어조까지 포함한다.
8. `Brand shell evidence`의 상태바·브랜드 앵커·하단 내비게이션을 화면군별로 `preserve`, `translate`, `avoid`, `unresolved`로 배치한다. 원본 shell을 장식으로만 붙이지 말고 새 제품의 정보 구조·주행동과 충돌하지 않게 한다.
9. `Exploration mechanism evidence`가 있고 PRD에 발견/비교 과업이 있으면 각 `MECH-NN`에 적응 결정을 만든다. 검색·필터는 새 도메인의 판단 기준으로, 지도는 위치가 민감한 도메인에서는 정확한 좌표 대신 동네·거리 범위·클러스터/리스트 전환처럼 안전하게 번역한다. 원본 지도나 검색 결과를 이름만 바꿔 복제하지 않는다.
10. **02의 `Slot inventory` 모든 행에 판별 테스트를 적용한다.** "이 요소에서 원본 도메인 명사를 새 도메인 명사로 바꿔 읽으면 문장이 성립하는가"를 묻고 `INH-NN`으로 한 줄씩 판정한다. 미분류 행이 하나라도 남으면 이 단계를 통과하지 못한다.
    - `①` 도메인 명사가 애초에 없음 → 실측값 그대로 승계
    - `②` 바꿔 읽으면 성립 → 자리·정렬·줄 수는 유지하고 내용만 교체. `DEC-NN`을 붙인다
    - `③` 바꿔 읽으면 말이 안 됨 → 가져오지 않는다
    - `④` PRD 필수인데 승계할 자리가 없음 → `NEW-NN`을 붙인다
11. **②를 최대한 많이 만든다.** ②의 비율이 곧 "그 브랜드가 만든 것처럼 보이는 정도"다. ③으로 내리기 전에 같은 자리를 다른 의미로 쓸 수 있는지 먼저 확인한다.
12. **테스트를 통과해도 제품이 망가지는 것은 ③으로 내린다.** 문장은 성립하지만 새 도메인에서 사람·안전·프라이버시를 훼손하는 승계는 `rationale`에 이유를 적고 금지한다. 판단 근거를 비워두지 않는다.
13. **④는 화면당 1개 이하를 목표로 한다.** 각 `④`에 왜 승계할 자리가 없었는지와 **어떤 기존 부품(`REF-NN`)을 조합했는지**를 적는다. 타 앱의 문법을 수입하지 않는다. 조합 근거가 없는 ④는 수입으로 간주하고 다시 ②를 찾는다. 화면당 2개를 넘으면 되돌아가 `Slot inventory`를 다시 훑는다.
14. **02의 `SRULE-NN`을 새 화면에 적용한다.** 새로 만들 각 화면이 규칙의 어느 쪽에 속하는지 판정한다. 세로 예산이 부족해도 규칙을 깨서 우겨넣지 말고 **화면의 분류를 다시 판단한다.**
15. **02의 `Brand color density`를 초과하지 않는 색 계획을 세운다.** 관찰된 사용처 목록 밖에 브랜드색을 쓰지 않으며, 화면의 색은 관찰된 지배 요소(대개 사진)가 담당하게 한다.
16. 원본 회사의 사업 개체나 화면 구성을 그대로 옮긴 부분이 없는지 검사한다.
17. 빈·로딩·실패·권한·입력 오류·성공·복구 상태를 실제 흐름에 포함한다.

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

## Inheritance decision table
| inh_id | slot_id | source_element | class | slot_name_domain_free | new_content | decision_id | new_id | requirement_ids | ref_ids | rationale |

## Structural rule application
| rule_id | new_frame | side_chosen | reason | vertical_budget_resolution | ref_ids |

## Brand color budget
| frame_name | allowed_usage_positions | usage_kind | color_carrier | over_budget | ref_ids |

## New grammar ledger
| new_id | inh_id | frame_name | why_no_slot_existed | composed_from_ref_ids | rejected_foreign_grammar |

## Novel decision ledger
| new_id | unmet_need | closest_ref_ids | derived_solution | risk |

## Signature placement
| ref_id | frame_name | expression | why_recognizable |

## State matrix
| frame_name | state | trigger | visible_change | recovery | requirement_ids |

## Coverage
| requirement_id | destination | status |
```

## 산출물 완료 게이트

- 02의 `Slot inventory` 모든 `SLOT-NN`이 `Inheritance decision table`에 정확히 한 번씩 나타나며 `①/②/③/④` 중 하나로 분류되어 있다. 미분류가 없다.
- 모든 `②` 행에 `DEC-NN`과 새 내용이 있고, 승계할 자리·정렬·줄 수가 원본과 같음을 명시했다.
- 모든 `③` 행에 왜 성립하지 않는지 또는 성립해도 제품이 망가지는 이유가 `rationale`에 있다.
- 모든 `④` 행에 `NEW-NN`이 있고, `New grammar ledger`에 `composed_from_ref_ids`가 하나 이상 있다. 기존 부품 조합 근거가 없는 ④가 없다.
- `④`가 어느 화면에서도 2개를 넘지 않는다. 넘으면 `Slot inventory`를 다시 훑고 ②를 더 찾은 뒤 재작성한다.
- 02의 모든 `SRULE-NN`이 `Structural rule application`에서 새 화면에 적용됐고, 규칙을 깨서 요소를 우겨넣은 화면이 없다.
- `Brand color budget`의 모든 화면이 02 `Brand color density`의 사용처 목록 안에 있고 `over_budget`이 없다.

## 금지

- 원본 제품의 IA·카피·사업 개체를 새 이름만 붙여 복제
- 로고색만 적용한 범용 UX
- 입력에 없는 기능 추가 또는 화면 수 고정
- `DEC-NN`과 연결된 `REF-NN` 또는 `NEW-NN`이 없는 주요 경험 결정
- PRD의 발견 과업과 관찰된 primary 탐색 메커니즘을 모두 무시한 채 카드 목록만 만드는 것
- `Slot inventory`의 행을 분류하지 않고 남기거나, 분류가 어렵다는 이유로 표에서 빼기
- 승계할 자리를 찾지 않고 곧바로 ④로 내리기
- ④를 만들 때 레퍼런스에 없는 타 앱 문법을 수입하기
- 02가 관찰하지 않은 위치에 브랜드색을 칠해 "브랜드답게" 만들기
- 다른 단계 산출물 수정
