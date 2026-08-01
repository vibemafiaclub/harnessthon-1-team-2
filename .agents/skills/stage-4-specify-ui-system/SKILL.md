---
name: stage-4-specify-ui-system
description: 브랜드 레퍼런스와 적응형 UX를 Penpot에서 재현 가능한 토큰·컴포넌트·화면 수치·콘텐츠·자산 명세로 변환하고 모든 디자인 결정의 근거를 보존한다. $start의 UI 블루프린트 단계에 사용한다.
---

# Specify an Evidence-Based UI System

## 입력과 출력

- 입력: `<artifact_dir>/02-reference-system.md`, `<artifact_dir>/03-experience-map.md`, `work_page`, `run_id`, `artifact_dir`
- 출력: `<artifact_dir>/04-ui-blueprint.md`

## 절차

1. 입력의 `REF-NN`, `NEW-NN`, 프레임 목록을 확인한다.
2. 토큰을 의미 기반 JS 상수로 정의하고 각 값을 `observed`, `derived`, `new-functional` 중 하나로 분류한다.
3. derived/new 값에는 가장 가까운 `REF-NN`, 도출식 또는 기능상 이유를 적는다.
4. signature 규칙은 눈에 띄는 위치에, foundation 규칙은 전 화면에 일관되게 배치한다. `Shell placement plan`이 요구하면 상태바·브랜드 앵커·하단 내비게이션을 별도 reusable component로 명세하고 정확한 `REF-NN` 근거를 적는다.
5. 반복 요소를 컴포넌트와 variant로 정의하고 인스턴스 오버라이드를 명시한다.
6. 각 보드의 크기, 섹션 순서, 패딩, 간격, 고정/스크롤 영역, Auto Layout과 사이징을 수치화한다. `Mechanism transfer ledger`의 검색·필터·지도/리스트 등 제어는 entry, 열린 상태, 적용 결과가 판독되는 화면/오버레이까지 수치화한다.
7. 새 도메인에 맞는 실제 카피·데이터를 확정하고 원본 사업 카피가 섞이지 않았는지 검사한다.
8. 이미지·아이콘은 출처 URL, crop, 실패 시 fallback을 지정한다.
9. `figma.variables`에 의존하지 않는 저작 순서와 export checkpoint를 제공한다.

## 출력 형식

```markdown
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

## Content specification
| frame_name | node | copy_or_data | domain_reason | source_requirement |

## Assets
| asset_key | purpose | source_url | crop | fallback |

## Authoring order
| order | object | depends_on | export_checkpoint |

## Anti-clone checks
| check | source_business_leak | generic_brand_loss | expected_resolution |
```

## 금지

- 출처·도출 근거 없는 시각값
- 원본 서비스 콘텐츠·IA의 이름 바꾸기식 복제
- 컴포넌트 없이 반복 요소 복제 지시
- shell 또는 탐색 메커니즘의 `REF-NN` 근거 없이 범용 status bar, 로고, bottom nav, filter, map을 발명
- `figma.variables`를 유일한 토큰 저장소로 사용
- 다른 단계 산출물 수정
