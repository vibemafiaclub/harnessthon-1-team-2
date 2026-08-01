---
name: stage-4-specify-ui-system
description: 브랜드 레퍼런스와 적응형 UX를 Penpot에서 재현 가능한 토큰·컴포넌트·화면 수치·콘텐츠·자산 명세로 변환하고 모든 디자인 결정의 근거를 보존한다. $start의 UI 블루프린트 단계에 사용한다.
---

# Specify an Evidence-Based UI System

## 입력과 출력

- 입력: `<artifact_dir>/02-reference-system.md`, `<artifact_dir>/03-experience-map.md`, `work_page`, `run_id`, `artifact_dir`
- 출력: `<artifact_dir>/04-ui-blueprint.md`

## 절차

1. 02·03의 `run_id`, `prd_path`, `work_page`, `artifact_dir`가 호출값과 서로 일치하고 03의 모든 `REQ-NN` coverage 및 주요 `DEC-NN`이 있는지 확인한다. 누락·불일치면 중단한다. 그 뒤 입력의 `REF-NN`, `NEW-NN`, 프레임 목록을 확인한다.
2. 토큰을 의미 기반 JS 상수로 정의하고 각 값을 `observed`, `derived`, `new-functional` 중 하나로 분류한다.
3. derived/new 값에는 가장 가까운 `REF-NN`, 도출식 또는 기능상 이유를 적는다.
4. signature 규칙은 눈에 띄는 위치에, foundation 규칙은 전 화면에 일관되게 배치한다. `Shell placement plan`이 요구하면 상태바·브랜드 앵커·하단 내비게이션을 별도 reusable component로 명세하고 정확한 `REF-NN` 근거를 적는다.
5. 반복 요소를 컴포넌트와 variant로 정의하고 인스턴스 오버라이드를 명시한다.
6. 각 보드의 크기, 섹션 순서, 패딩, 간격, 고정/스크롤 영역, Auto Layout과 사이징을 수치화한다. `Mechanism transfer ledger`의 검색·필터·지도/리스트 등 제어는 entry, 열린 상태, 적용 결과가 판독되는 화면/오버레이까지 수치화한다.
7. **03의 `Inheritance decision table`을 수치로 옮긴다.** 각 `②` 행에 대해 승계한 슬롯의 자리·정렬·줄 수를 명세에 못 박는다. `docs/brand-inheritance.md` §3의 방어 규칙을 그대로 적용한다.
   - 우측 끝에 있던 것은 우측 끝에 둔다. 자리와 정렬을 바꾸지 않는다.
   - 원본이 4줄이면 4줄로 채운다. 내용이 모자라면 PRD에서 채울 내용을 찾는다.
   - 같은 열의 숫자는 자릿수를 맞춘다.
   - 지표 형태를 바꿨으면(숫자 → 배지) **고정 폭 + 우측 정렬**로 정렬을 방어한다.
   - 가변 텍스트 칸은 hug(자동 폭)를 쓰지 않는다. 고정 폭 + 텍스트 정렬로 명세한다.
8. **02의 실측 범위를 예산으로 고정한다.** 타이포 `weight`는 02가 관찰한 집합 밖의 값을 쓰지 않는다. 브랜드색은 03 `Brand color budget`의 허용 위치에만 배치하고, 화면의 색은 02가 판정한 지배 요소가 담당하게 한다. 간격이 실측에서 흔들렸다면 가장 가까운 스케일로 반올림한 값을 쓰되 반올림했음을 기록한다.
9. **④는 조합 부품까지 명세한다.** 각 `NEW-NN`을 03 `New grammar ledger`의 `composed_from_ref_ids`에 있는 기존 컴포넌트·토큰의 조합으로만 정의한다. 새 컴포넌트를 발명하지 않는다.
10. 새 도메인에 맞는 실제 카피·데이터를 확정하고 원본 사업 카피가 섞이지 않았는지 검사한다.
11. 이미지·아이콘은 출처 URL, crop, 실패 시 fallback을 지정한다.
12. `figma.variables`에 의존하지 않는 저작 순서와 export checkpoint를 제공한다.

## 출력 형식

```markdown
## Run metadata
| run_id | prd_path | work_page | artifact_dir | input_02 | input_03 |

## Decision provenance
| decision_id | kind | value_or_rule | ref_ids | new_id | derivation |

## JS token constants
| group | key | value | kind | ref_ids | derivation |

## Component registry
| component_name | anatomy | dimensions | layout | variants | overrides | decision_ids |

## Shell and mechanism registry
| component_or_screen | shell_or_mechanism_id | source_ref_ids | adapted_anatomy | states | safety_boundary | decision_ids |

## Board specifications
| frame_name | size | sections | fixed_regions | background | requirement_ids | signature_ref_ids | shell_ids | mechanism_ids |

## Section specifications
| frame_name | section | hierarchy | padding | gap | sizing | content | decision_ids |

## Slot fidelity spec
| inh_id | slot_id | frame_name | node | position | alignment | line_count | metric_form_change | fixed_width | digit_alignment | decision_ids |

## Preservation budget
| measured_item | reference_value_or_set | applied_value | within_reference_range | rounding_applied | ref_ids |

## Content specification
| frame_name | node | copy_or_data | domain_reason | source_requirement |

## Assets
| asset_key | purpose | source_url | crop | fallback |

## Authoring order
| order | object | depends_on | export_checkpoint |

## Anti-clone checks
| check | source_business_leak | generic_brand_loss | expected_resolution |
```

## 산출물 완료 게이트

- 03 `Inheritance decision table`의 모든 `②` 행이 `Slot fidelity spec`에 자리·정렬·줄 수와 함께 존재한다.
- 지표 형태를 바꾼 행은 `fixed_width`와 `digit_alignment`가 지정되어 있다.
- `Preservation budget`의 모든 `weight`가 02 관찰 집합 안에 있다. `within_reference_range`가 `no`인 행이 없다.
- 브랜드색을 쓰는 모든 노드가 03 `Brand color budget`의 허용 위치 안에 있다.
- 모든 `NEW-NN` 컴포넌트가 기존 부품 조합으로 정의되어 있고 조합 근거 `REF-NN`이 있다.

## 금지

- 출처·도출 근거 없는 시각값
- 원본 서비스 콘텐츠·IA의 이름 바꾸기식 복제
- 컴포넌트 없이 반복 요소 복제 지시
- shell 또는 탐색 메커니즘의 `REF-NN` 근거 없이 범용 status bar, 로고, bottom nav, filter, map을 발명
- 02가 관찰한 집합 밖의 타이포 weight 사용
- 03이 허용하지 않은 위치에 브랜드색을 면으로 칠하기
- 승계한 슬롯의 자리·정렬·줄 수를 레이아웃 편의로 바꾸기
- 가변 텍스트 칸을 hug(자동 폭)로 명세해 정렬이 흔들리게 두기
- `figma.variables`를 유일한 토큰 저장소로 사용
- 다른 단계 산출물 수정
