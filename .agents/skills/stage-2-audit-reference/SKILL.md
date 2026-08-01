---
name: stage-2-audit-reference
description: 한 회사의 primary Penpot 레퍼런스와 선택적인 브랜드·디자인시스템 문서 및 supplemental 레퍼런스를 읽기 전용으로 분석·조정해 보존할 브랜드 DNA, 변환 가능한 패턴, 금지할 혼입 규칙을 claim 단위 근거로 추출한다. $start의 브랜드 포렌식 단계에 사용한다.
---

# Audit Brand References

## 입력과 출력

- 입력: `prd_path`, `reference_pages`, 선택적 `brand_context_path`, `work_page`, `run_id`, `artifact_dir`, Penpot MCP
- 출력: `<artifact_dir>/02-reference-system.md`

## 실행 게이트

0. 저작 판단 전에 `docs/brand-inheritance.md`를 끝까지 읽는다. 이 단계는 그 문서의 §2 실측, §2-1 브랜드색 밀도, §3 슬롯 추상화, §5 구조 배타 규칙을 소유한다. ①②③④ 판별은 이 단계가 하지 않는다. 신규 도메인을 모르는 상태에서 분류하면 안 된다.
1. `reference_pages`의 모든 Page가 현재 파일에 존재하는지 확인한다.
2. 일반 실행은 `primary`가 정확히 하나여야 한다. supplemental은 primary 정체성을 덮지 못한다.
3. Page 이름을 추측하거나 읽기 위해 Page를 전환하지 않는다.
4. 레퍼런스, 다른 팀 Page와 기존 노드를 수정·이동·복제하지 않는다.

## 절차

1. 먼저 `Source and scope manifest`를 만든다. 입력별 역할, source authority, 원 출처의 capture/verified 시점, 이번 조사 시점, 조사 방법, surface scope와 허용 영향 범위를 적는다. Penpot 제품 화면, 공식 디자인 시스템, 공식 제품·브랜드 카피, marketing/editorial surface, 제3자 종합 문서, supplemental을 서로 다른 evidence domain으로 취급한다.
2. `brand_context_path`가 있으면 문서 안의 주장과 그 문서가 인용한 원 출처를 분리한다. URL이 적혀 있어도 이번 실행에서 직접 읽지 않았다면 원 출처를 검증한 것으로 표시하지 않는다. 제3자 `DESIGN.md`의 editorial 해석·illustrative sample·가상 persona는 공식 규칙으로 승격하지 않는다.
3. primary Page의 대표 화면을 폭넓게 조사한다. 화면이 적으면 전부, 많으면 탐색·목록·상세·입력·거래·피드백 등 서로 다른 화면 유형을 최소 3개 선택한다. **탐색/Explore 계열 화면이 있으면 반드시 포함**하며 선택 이유와 제외 범위를 남긴다.
4. 색·타이포·간격·모서리·그림자·아이콘·이미지·그리드·내비게이션뿐 아니라 반응형 단서, 상태, 모션 암시를 관찰한다. 각 root 화면에서 시스템 상태바, 헤더/브랜드 마크, 하단 내비게이션, active 상태와 safe-area를 별도로 검사한다.
5. 탐색 화면에서는 검색, 필터, 정렬, 지도/리스트 전환, 위치·거리, 저장, 카드/결과 밀도처럼 **사용자의 판단을 바꾸는 메커니즘**을 별도 표본으로 조사한다. 보이면 사용 목적과 진입·결과를 기록하고, 안 보이면 `unresolved`로 남긴다. 첫 viewport의 visible item 수처럼 실제 밀도 benchmark도 측정한다.
6. 반복 컴포넌트뿐 아니라 위계, CTA 강도, 카피 어조, 신뢰 형성 방식, 브랜드 서사를 만드는 표현 원칙도 추출한다. 문서가 제공되면 component의 시각 anatomy와 공식 behavior/state/accessibility contract를 분리한다.
7. 각 직접 관찰 또는 문서화된 claim에 `REF-NN`, claim type, evidence kind, source authority, surface scope, Page/프레임/노드 또는 문서 위치, 관찰값, capture 시점, 반복 횟수 또는 표본 범위, 신뢰도를 붙인다. 한 노드에서만 본 값을 전역 규칙으로 승격하지 않는다.
8. 모든 결론을 `observed`, `documented`, `derived`, `unresolved`, `conflicted`, `retired` 중 하나로 명시한다. `derived`에는 supporting `REF-NN`과 도출 논리를 적고, 증거가 없는 상태·반응형·모션·토큰은 `unresolved`로 남긴다. illustrative sample은 `documented`가 아니라 예시로 격리한다.
9. 같은 semantic role에 서로 다른 값이 있으면 `Semantic reconciliation`에서 `snapshot-drift`, `surface-difference`, `theme-difference`, `state-difference`, `actual-conflict` 중 하나로 분류한다. 숫자를 평균내지 않고 claim type에 맞는 authority와 target surface를 기준으로 선택한다.
10. 폰트는 선언된 stack, computed/노드상 실제 family, 공식 semantic role, `penpot.fonts.all` 가용성을 분리한다. 대체가 필요하면 원본과 동일하다고 표현하지 말고 metric 보존 지침을 제시한다.
11. semantic color·type·spacing·radius뿐 아니라 theme/dark mode, focus·keyboard·contrast·touch target 등 accessibility 근거를 조사한다. 입력에 없으면 `unresolved`로 둔다.
12. 브랜드 식별력이 높은 규칙을 `signature`, 기반 규칙을 `foundation`, 원래 사업에 종속된 것을 `domain-bound`로 분류한다.
13. 각 규칙의 전달 지침을 `preserve`, `translate`, `avoid`로 판정한다. `preserve`는 불변 부분, `translate`는 새 도메인에 맞게 바꿀 부분, `avoid`는 복제 금지 대상을 각각 적는다.
14. supplemental은 채택 가능한 특정 패턴만 기록하고, primary와 충돌하면 사용 금지로 표시한다. 서로 다른 evidence domain의 값을 평균내거나 암묵적으로 합치지 않는다.
15. 상태·반응형·모션은 별도 coverage matrix로 정리한다. `observed in product`, `officially documented`, `editorial/derived`, `unresolved`를 구분하며 정적 단서만 있으면 동작 자체를 관찰한 것처럼 쓰지 않는다.
16. voice는 context별 문장 종결, CTA 문법, error/empty/success 문법, 금지어를 분리한다. 실제 제품 카피, 공식 brand copy, illustrative sample의 provenance를 섞지 않는다.
17. 직접 관찰되지 않았거나 구버전으로 판정된 토큰·컴포넌트·규칙·카피는 `Excluded and retired claims`에 남겨 후속 agent가 기억이나 낡은 문서를 통해 재도입하지 못하게 한다.
18. **브랜드색 밀도를 센다.** 브랜드색이 조사한 각 화면에서 몇 번, 어느 요소에, 면(fill)으로 쓰였는지 값(텍스트·아이콘·선택 표시)으로 쓰였는지 집계한다. 화면 색의 지배권이 브랜드색과 사진 중 어느 쪽에 있는지 판정한다. 이것은 후속 단계의 **허용 목록**이 되므로, 관찰되지 않은 사용처를 채워 넣지 않는다.
19. **슬롯을 추출한다.** 반복되는 요소를 "무엇을 하는 자리인가"로 추상화하고 원본 도메인 명사를 지운 이름을 붙여 `SLOT-NN`을 부여한다. 각 슬롯에 자리·정렬·줄 수·지표 형태(숫자/배지/아이콘)를 함께 기록한다. 이 셋이 없으면 후속 단계가 자리를 지킬 수 없다. 슬롯 이름에 원본 도메인 명사가 남아 있으면 추상화가 덜 된 것이다.
20. **구조 배타 규칙을 찾는다.** 화면 하나가 아니라 조사한 화면 전체를 비교해, 어떤 요소가 어떤 화면에 있고 없는지와 그 차이를 가르는 기준을 `SRULE-NN`으로 기록한다. 한 화면만으로는 보이지 않는 규칙이므로 반드시 화면 간 비교를 근거로 적는다.
21. 타이포 `weight`는 관찰된 값의 **범위와 집합**을 명시한다. 후속 단계가 이 집합 밖의 weight를 쓰지 못하도록 `Measured primitives`의 `scope_limit`에 범위를 못 박는다.
22. 마지막에 downstream agent가 바로 사용할 수 있는 `Application brief`와 `Do / Don't`를 만든다. 모든 문장은 `REF-NN` 또는 명시적 `unresolved`에 연결한다.

## 판정 기준

### Claim별 authority

전역 우선순위를 하나 두지 않고 claim type별로 판단한다.

| claim_type | preferred_authority | Penpot가 강한 것 | 문서가 강한 것 |
|---|---|---|---|
| visual composition·density·content hierarchy | primary Penpot 제품 화면 | 실제 viewport, node 수치, 사용 빈도, 조형 | 화면에 없는 것을 보충하지 않음 |
| semantic token·theme·state·accessibility | 공식 디자인 시스템 원문 | snapshot의 실제 적용값 | canonical role, theme mapping, state와 접근성 계약 |
| component anatomy·geometry | target surface의 제품 화면과 공식 component 문서 교차검증 | 실사용 anatomy와 밀도 | variant, size, behavior 계약 |
| voice·terminology | 공식 제품 카피와 브랜드 문서 | 실제 UI microcopy | 문장 원칙과 금지 표현 |
| marketing/editorial styling | 해당 surface 자체 | 동일 surface의 실제 조형 | 다른 product surface로 전역화하지 않음 |
| 신규 UX 전이 판단 | primary 근거에서 derived | reference signature | 신규 PRD 요구와 결합은 후속 단계 소유 |

`brand_context_path` 자체가 제3자 종합 문서이면 그 안의 공식 출처 claim과 editorial claim을 분리한다. 이번 실행에서 직접 확인하지 않은 링크는 `cited-not-inspected`, 출처 없는 단정은 `editorial-unverified`로 표시한다. 최신성은 입력이 제공한 capture/verified 시점까지만 인정한다.

### 충돌과 drift

- 값이 다르다고 즉시 conflict로 보지 않는다. target surface, semantic role, theme, state, capture 시점을 먼저 비교한다.
- 오래된 Penpot snapshot과 최신 공식 design-system token이 다르면 snapshot은 실제 조형 근거로 유지하고 canonical token claim은 공식 문서를 따른다. 두 값을 조용히 하나로 합치지 않는다.
- marketing, product, editorial, native의 값을 서로 대체하지 않는다.
- 해결할 수 없는 충돌은 `Source conflicts`와 `Unknowns`에 동시에 남기고 후속 단계가 임의 선택하지 못하게 한다.

### 신뢰도

- `high`: 서로 다른 대표 화면 2개 이상 또는 같은 의미의 독립 노드 3개 이상에서 반복 확인
- `medium`: 직접 관찰했지만 표본이 제한적이거나 context-local인 규칙
- `low`: 간접 단서만 있어 후속 PNG 검증이 필요한 도출
- `unresolved`: 입력에서 확인할 수 없으며 생성하거나 추측하면 안 되는 항목

source authority와 confidence는 별개다. 제3자 문서에서 반복된 주장은 confidence가 높아 보이더라도 공식성이 생기지 않는다.

### 전역 규칙 승격 조건

- 색·타입·간격 값은 실제 역할과 사용 맥락이 반복될 때만 semantic primitive 후보로 올린다.
- 컴포넌트는 anatomy뿐 아니라 확인된 variant와 state를 분리한다. 보이지 않은 hover·focus·disabled·loading을 발명하지 않는다.
- semantic token은 raw color 빈도와 분리한다. 동일 hue라도 product primary, marketing CTA, state color면 서로 다른 claim이다.
- 공식 component 문서가 있으면 visual anatomy, behavior/state, accessibility, responsive constraint를 별도 claim으로 기록한다.
- motion은 공식 token/source, 실제 prototype 관찰, editorial derivation을 구분한다. 브랜드 성격만으로 duration/easing을 canonical token처럼 선언하지 않는다.
- 브랜드 원칙과 서사는 UI 관찰만으로 과장하지 않는다. 근거가 부족하면 짧은 제품 표현 원칙으로 제한한다.
- persona의 인구통계·성과지표를 만들지 않는다. 화면에서 확인되는 actor와 task context만 기록한다.

## 출력 형식

```markdown
## Run metadata
| run_id | prd_path | work_page | reference_pages | brand_context_path | artifact_dir |

## Source and scope manifest
| source_id | evidence_domain | source_authority | page_path_or_url | role | captured_or_verified_at | inspected_at | verification_status | surface_scope | inspection_method | inspected_frames | exclusions | allowed_influence |

## Reference identity
| page | role | company_identity | inspected_frames | allowed_influence |

## Brand thesis
| primary_character | user_impression | supporting_ref_ids | confidence |

## Evidence catalog
| ref_id | evidence_status | evidence_kind | source_authority | claim_type | class | category | rule_or_value | source_id | surface_scope | page_or_doc_location | frame | evidence_node | captured_at | sample_scope | confidence |

## Claim provenance ledger
| claim_id | claim | claim_type | source_id | evidence_kind | verification_status | surface_scope | freshness | supporting_ref_ids | downstream_use |

## Semantic reconciliation
| semantic_role | penpot_snapshot_value | documented_value | difference_type | target_surface | chosen_value_or_rule | authority_reason | losing_claim_disposition | ref_ids |

## Measured primitives
| category | semantic_candidate | observed_value | role_and_context | frequency | ref_ids | scope_limit |

## Typography evidence boundary
| surface_scope | declared_stack | computed_or_node_family | official_semantic_roles | sizes_weights_line_heights | penpot_available | fallback | metric_preservation | ref_ids |

## Brand shell evidence
| shell_id | element | observed_anatomy | placement_and_behavior | source_frame | evidence_node | transfer_default | ref_ids |

## Exploration mechanism evidence
| mechanism_id | mechanism | user_decision_supported | entry | control_anatomy | result_or_state_change | source_frame | evidence_node | transfer_default | ref_ids |

## Density benchmarks
| context | viewport | visible_items | row_or_card_size | chrome_share | scan_priority | source_frame | ref_ids |

## Brand color density
| color_role | value | surface_scope | usage_kind | applied_to | occurrences_per_frame | area_share | frames_observed | dominant_color_carrier | evidence_node | ref_ids |

## Slot inventory
| slot_id | source_element | slot_name_domain_free | what_the_slot_answers | position_and_alignment | line_count | metric_form | repeat_count | source_frame | evidence_node | ref_ids |

## Structural exclusivity rules
| rule_id | rule | frames_with | frames_without | discriminator | consequence_if_broken | ref_ids |

## Design grammar
| context | layout | type | color | spacing | imagery | interaction | ref_ids |

## Component patterns
| pattern | surface_scope | visual_anatomy | dimensions | observed_variants | observed_states | documented_states | documented_behavior | accessibility_contract | inferred_behavior | transfer | ref_ids |

## Content and trust patterns
| pattern | voice | density | trust_mechanism | transfer | ref_ids |

## Voice and terminology
| context | preferred_pattern | avoid_pattern | observed_sample | sample_status | source_authority | surface_scope | ref_ids |

## Brand expression principles
| principle | product_expression | supporting_ref_ids | confidence | boundary |

## Actor and task contexts
| actor_or_context | directly_supported | unsupported_assumptions_to_avoid | ref_ids |

## State coverage
| component_or_flow | surface_scope | default | selected | hover | focus | pressed | disabled | loading | empty | error | success | evidence_kind | evidence_or_unresolved |

## Responsive behavior
| context | surface_scope | observed_or_documented_viewports | invariant | reflow_or_resize_evidence | evidence_kind | unresolved | ref_ids |

## Theme and accessibility
| topic | surface_scope | observed_or_documented_rule | light_dark_mapping | keyboard_or_focus | contrast_or_touch | evidence_kind | unresolved | ref_ids |

## Motion and elevation
| pattern | surface_scope | property_or_token | evidence_kind | reusable_or_local | reduced_motion | prohibited_inference | ref_ids |

## Transfer policy
| ref_id | preserve_translate_avoid | invariant | adaptable_part | reason |

## Do / Don't
| do | don't | rationale | ref_ids |

## Application brief
| visual_frame | signature_moves | foundation_rules | domain_translation | omit_unverified | ref_ids |

## Supplemental boundaries
| page | allowed_pattern | conflict | prohibition |

## Source conflicts
| topic | conflict_or_difference_type | source_a | source_b | target_surface | resolution | downstream_constraint |

## Excluded and retired claims
| claim | disposition | reason | source_id | replacement_or_unresolved | ref_ids |

## Unknowns
| question | impact | evidence_needed | blocking |
```

## 산출물 완료 게이트

- `Run metadata`가 호출 입력과 완전히 일치하며, 다른 실행의 산출물을 인용하지 않는다.
- 조사한 프레임과 제외 범위가 명시되어 있다.
- 모든 source에 authority, capture/verified 시점, 이번 실행의 verification status와 surface scope가 명시되어 있다.
- 모든 `signature`와 `preserve` 결론에 하나 이상의 `REF-NN`이 연결되어 있다.
- Penpot 관찰 `REF-NN`마다 source, frame, node ID, 표본 범위가 있어 재검사할 수 있고, 문서 claim은 정확한 section/claim과 source authority로 재검사할 수 있다.
- 제3자 종합 문서가 인용한 URL을 직접 읽지 않았다면 `cited-not-inspected`이며, editorial·illustrative claim이 canonical 규칙에 포함되지 않았다.
- 색·타입·간격·컴포넌트 값의 역할과 적용 범위가 있으며 raw value 목록으로 끝나지 않는다.
- 같은 semantic role의 복수 값은 `Semantic reconciliation`에서 surface·theme·state·시점 차이 또는 실제 충돌로 판정되며 평균내지 않았다.
- 폰트 선언값, 실제 가용성, fallback이 구분되어 있다.
- 상태·반응형·모션·elevation이 제품 관찰, 공식 문서, editorial/derived, 미확인으로 구분되어 있다.
- component의 시각 anatomy와 behavior/state/accessibility 계약이 서로 다른 source claim으로 추적된다.
- theme/dark mode, keyboard/focus, contrast/touch target을 확인하거나 `unresolved`로 기록했다.
- 첫 viewport의 콘텐츠 밀도를 측정할 수 있으면 visible item 수와 chrome 비중을 기록했다.
- 브랜드 원칙, voice, actor/task context가 근거에 연결되고 가상 persona가 생성되지 않았다.
- voice sample이 실제 제품·공식 브랜드·illustrative 중 어디에 속하는지 표시되고 금지 표현의 authority가 명확하다.
- `Application brief`의 모든 적용 지침이 `preserve`, `translate`, `avoid`, `unresolved` 중 하나로 추적된다.
- `Brand shell evidence`가 상태바, 브랜드 앵커, 하단 내비게이션을 각각 `observed` 또는 `unresolved`로 판정한다.
- `Brand color density`가 브랜드색의 사용처를 면과 값으로 구분해 집계했고, 화면 색의 지배권을 판정했다. 관찰되지 않은 사용처가 들어 있지 않다.
- `Slot inventory`의 모든 `SLOT-NN`에 자리·정렬·줄 수·지표 형태가 있고, 슬롯 이름에 원본 도메인 명사가 남아 있지 않다.
- `Structural exclusivity rules`의 각 `SRULE-NN`이 **화면 간 비교**를 근거로 하며, 단일 화면 관찰로 선언되지 않았다.
- 타이포 `weight`의 관찰 집합과 범위가 명시되어 후속 단계가 범위를 판정할 수 있다.
- 탐색/Explore 화면이 있으면 검색·필터·지도/위치·결과 제어를 각각 `observed` 또는 `unresolved`로 판정한다.
- supplemental 및 evidence domain 충돌 처리 결과가 명시되어 있다.
- 구버전·surface-local·출처 불명·illustrative claim이 `Excluded and retired claims`에 격리되어 있다.
- 빈 표는 삭제하지 않고 `unresolved`와 필요한 증거를 기록한다.

## 금지

- 여러 회사의 색·패턴을 평균내어 하나의 브랜드처럼 만들기
- primary보다 supplemental을 우선하기
- 근거 없는 브랜드 형용사·토큰 생성
- 제3자 `DESIGN.md`의 frontmatter·인용 URL·verified 표기를 이번 실행의 직접 검증으로 가장
- official design system, product snapshot, marketing web의 값을 surface scope 없이 하나의 token으로 합치기
- 서로 다른 snapshot의 색·간격·radius를 평균내어 타협값 생성
- 단일 노드나 domain-local 값을 전역 디자인 토큰으로 승격
- 정적 화면에서 hover·focus·motion·responsive 동작을 관찰했다고 주장
- 브랜드 성격을 근거로 임의 duration·easing·spring 금지 규칙을 canonical motion token으로 승격
- illustrative copy, editorial persona, 회사 연혁·투자 지표를 제품 UI 계약으로 사용
- 구버전·retired claim을 조용히 삭제해 후속 agent가 재도입할 여지를 남기기
- 입력에 없는 웹 자료나 기억으로 레퍼런스의 빈칸 보충
- 원본 사업의 카피와 데이터 개체를 재사용 대상으로 선언
- 신규 도메인을 근거로 ①②③④를 이 단계에서 분류하기. 판별은 3단계 소유다
- 원본 도메인 명사가 남은 슬롯 이름 사용
- 관찰 빈도를 세지 않은 채 브랜드색을 "브랜드다움"으로 확대 해석하기
- 다른 단계 산출물 또는 Penpot 노드 수정
