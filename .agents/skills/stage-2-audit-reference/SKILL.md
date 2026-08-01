---
name: stage-2-audit-reference
description: 한 회사의 primary Penpot 레퍼런스와 선택적인 supplemental 레퍼런스를 읽기 전용으로 분석해 보존할 브랜드 DNA, 변환 가능한 패턴, 금지할 혼입 규칙을 근거 기반으로 추출한다. $start의 브랜드 포렌식 단계에 사용한다.
---

# Audit Brand References

## 입력과 출력

- 입력: `prd_path`, `reference_pages`, 선택적 `brand_context_path`, `work_page`, `run_id`, `artifact_dir`, Penpot MCP
- 출력: `<artifact_dir>/02-reference-system.md`

## 실행 게이트

1. `reference_pages`의 모든 Page가 현재 파일에 존재하는지 확인한다.
2. 일반 실행은 `primary`가 정확히 하나여야 한다. supplemental은 primary 정체성을 덮지 못한다.
3. Page 이름을 추측하거나 읽기 위해 Page를 전환하지 않는다.
4. 레퍼런스, 다른 팀 Page와 기존 노드를 수정·이동·복제하지 않는다.

## 절차

1. 먼저 `Source and scope manifest`를 만든다. 입력별 역할, 조사 시점, 조사 방법, 허용 영향 범위를 적고 Penpot 제품 화면, 선택적 브랜드 문서, supplemental을 서로 다른 evidence domain으로 취급한다.
2. primary Page의 대표 화면을 폭넓게 조사한다. 화면이 적으면 전부, 많으면 탐색·목록·상세·입력·거래·피드백 등 서로 다른 화면 유형을 최소 3개 선택한다. **탐색/Explore 계열 화면이 있으면 반드시 포함**하며 선택 이유와 제외 범위를 남긴다.
3. 색·타이포·간격·모서리·그림자·아이콘·이미지·그리드·내비게이션뿐 아니라 반응형 단서, 상태, 모션 암시를 관찰한다. 각 root 화면에서 시스템 상태바, 헤더/브랜드 마크, 하단 내비게이션, active 상태와 safe-area를 별도로 검사한다.
4. 탐색 화면에서는 검색, 필터, 정렬, 지도/리스트 전환, 위치·거리, 저장, 카드/결과 밀도처럼 **사용자의 판단을 바꾸는 메커니즘**을 별도 표본으로 조사한다. 보이면 사용 목적과 진입·결과를 기록하고, 안 보이면 `unresolved`로 남긴다.
5. 반복 컴포넌트뿐 아니라 콘텐츠 밀도, 위계, CTA 강도, 카피 어조, 신뢰 형성 방식, 브랜드 서사를 만드는 표현 원칙도 추출한다.
5. 각 직접 관찰에 `REF-NN`, evidence domain, Page, 프레임, 노드 이름/ID, 관찰값, 반복 횟수 또는 표본 범위, 신뢰도를 붙인다. 한 노드에서만 본 값을 전역 규칙으로 승격하지 않는다.
6. 모든 결론을 `observed`, `derived`, `unresolved` 중 하나로 명시한다. `derived`에는 supporting `REF-NN`과 도출 논리를 적고, 증거가 없는 상태·반응형·모션·토큰은 `unresolved`로 남긴다.
7. 폰트는 레퍼런스 노드의 선언값과 `penpot.fonts.all`의 실제 가용성을 분리해 기록한다. 대체가 필요하면 원본과 동일하다고 표현하지 말고 metric 보존 지침을 제시한다.
8. 브랜드 식별력이 높은 규칙을 `signature`, 기반 규칙을 `foundation`, 원래 사업에 종속된 것을 `domain-bound`로 분류한다.
9. 각 규칙의 전달 지침을 `preserve`, `translate`, `avoid`로 판정한다. `preserve`는 불변 부분, `translate`는 새 도메인에 맞게 바꿀 부분, `avoid`는 복제 금지 대상을 각각 적는다.
10. supplemental은 채택 가능한 특정 패턴만 기록하고, primary와 충돌하면 사용 금지로 표시한다. 서로 다른 evidence domain의 값을 평균내거나 암묵적으로 합치지 않는다.
11. 상태·반응형·모션은 별도 coverage matrix로 정리한다. 화면에 정적 단서만 있으면 동작 자체를 관찰한 것처럼 쓰지 않는다.
12. 마지막에 downstream agent가 바로 사용할 수 있는 `Application brief`와 `Do / Don't`를 만든다. 모든 문장은 `REF-NN` 또는 명시적 `unresolved`에 연결한다.

## 판정 기준

### Evidence domain 우선순위

1. primary Penpot 제품 화면: 제품 UI의 수치·구조·컴포넌트·표현을 판단하는 주 근거
2. `brand_context_path`: 명시된 브랜드 원칙·보이스·자산 사용 규칙의 보조 근거
3. supplemental Penpot Page: 사용자가 허용한 특정 패턴만 참고하는 보조 근거

상위 domain의 빈칸을 하위 domain이 자동으로 대체하지 않는다. 서로 충돌하면 `Source conflicts`에 기록하고 primary 규칙을 유지한다. 최신성은 입력이 제공한 범위 안에서만 판단하며, 조사하지 않은 외부 웹이나 기억을 근거로 보충하지 않는다.

### 신뢰도

- `high`: 서로 다른 대표 화면 2개 이상 또는 같은 의미의 독립 노드 3개 이상에서 반복 확인
- `medium`: 직접 관찰했지만 표본이 제한적이거나 context-local인 규칙
- `low`: 간접 단서만 있어 후속 PNG 검증이 필요한 도출
- `unresolved`: 입력에서 확인할 수 없으며 생성하거나 추측하면 안 되는 항목

### 전역 규칙 승격 조건

- 색·타입·간격 값은 실제 역할과 사용 맥락이 반복될 때만 semantic primitive 후보로 올린다.
- 컴포넌트는 anatomy뿐 아니라 확인된 variant와 state를 분리한다. 보이지 않은 hover·focus·disabled·loading을 발명하지 않는다.
- 브랜드 원칙과 서사는 UI 관찰만으로 과장하지 않는다. 근거가 부족하면 짧은 제품 표현 원칙으로 제한한다.
- persona의 인구통계·성과지표를 만들지 않는다. 화면에서 확인되는 actor와 task context만 기록한다.

## 출력 형식

```markdown
## Source and scope manifest
| source_id | evidence_domain | page_or_path | role | inspected_at | inspection_method | inspected_frames | exclusions | allowed_influence |

## Reference identity
| page | role | company_identity | inspected_frames | allowed_influence |

## Brand thesis
| primary_character | user_impression | supporting_ref_ids | confidence |

## Evidence catalog
| ref_id | evidence_status | class | category | observed_rule | source_id | page | frame | evidence_node | sample_scope | confidence |

## Measured primitives
| category | semantic_candidate | observed_value | role_and_context | frequency | ref_ids | scope_limit |

## Typography evidence boundary
| declared_family | observed_roles | sizes_weights_line_heights | penpot_available | fallback | metric_preservation | ref_ids |

## Brand shell evidence
| shell_id | element | observed_anatomy | placement_and_behavior | source_frame | evidence_node | transfer_default | ref_ids |

## Exploration mechanism evidence
| mechanism_id | mechanism | user_decision_supported | entry | control_anatomy | result_or_state_change | source_frame | evidence_node | transfer_default | ref_ids |

## Design grammar
| context | layout | type | color | spacing | imagery | interaction | ref_ids |

## Component patterns
| pattern | anatomy | dimensions | variants | observed_states | inferred_behavior | transfer | ref_ids |

## Content and trust patterns
| pattern | voice | density | trust_mechanism | transfer | ref_ids |

## Brand expression principles
| principle | product_expression | supporting_ref_ids | confidence | boundary |

## Actor and task contexts
| actor_or_context | directly_supported | unsupported_assumptions_to_avoid | ref_ids |

## State coverage
| component_or_flow | default | selected | hover | focus | pressed | disabled | loading | empty | error | success | evidence_or_unresolved |

## Responsive behavior
| context | observed_viewports | invariant | reflow_or_resize_evidence | unresolved | ref_ids |

## Motion and elevation
| pattern | observed_property | reusable_or_local | prohibited_inference | ref_ids |

## Transfer policy
| ref_id | preserve_translate_avoid | invariant | adaptable_part | reason |

## Do / Don't
| do | don't | rationale | ref_ids |

## Application brief
| visual_frame | signature_moves | foundation_rules | domain_translation | omit_unverified | ref_ids |

## Supplemental boundaries
| page | allowed_pattern | conflict | prohibition |

## Source conflicts
| topic | source_a | source_b | resolution | downstream_constraint |

## Unknowns
| question | impact | evidence_needed | blocking |
```

## 산출물 완료 게이트

- 조사한 프레임과 제외 범위가 명시되어 있다.
- 모든 `signature`와 `preserve` 결론에 하나 이상의 `REF-NN`이 연결되어 있다.
- `REF-NN`마다 source, frame, node ID, 표본 범위가 있어 Penpot에서 재검사할 수 있다.
- 색·타입·간격·컴포넌트 값의 역할과 적용 범위가 있으며 raw value 목록으로 끝나지 않는다.
- 폰트 선언값, 실제 가용성, fallback이 구분되어 있다.
- 상태·반응형·모션·elevation이 관찰됨과 미확인으로 구분되어 있다.
- 브랜드 원칙, voice, actor/task context가 근거에 연결되고 가상 persona가 생성되지 않았다.
- `Application brief`의 모든 적용 지침이 `preserve`, `translate`, `avoid`, `unresolved` 중 하나로 추적된다.
- `Brand shell evidence`가 상태바, 브랜드 앵커, 하단 내비게이션을 각각 `observed` 또는 `unresolved`로 판정한다.
- 탐색/Explore 화면이 있으면 검색·필터·지도/위치·결과 제어를 각각 `observed` 또는 `unresolved`로 판정한다.
- supplemental 및 evidence domain 충돌 처리 결과가 명시되어 있다.
- 빈 표는 삭제하지 않고 `unresolved`와 필요한 증거를 기록한다.

## 금지

- 여러 회사의 색·패턴을 평균내어 하나의 브랜드처럼 만들기
- primary보다 supplemental을 우선하기
- 근거 없는 브랜드 형용사·토큰 생성
- 단일 노드나 domain-local 값을 전역 디자인 토큰으로 승격
- 정적 화면에서 hover·focus·motion·responsive 동작을 관찰했다고 주장
- 입력에 없는 웹 자료나 기억으로 레퍼런스의 빈칸 보충
- 원본 사업의 카피와 데이터 개체를 재사용 대상으로 선언
- 다른 단계 산출물 또는 Penpot 노드 수정
