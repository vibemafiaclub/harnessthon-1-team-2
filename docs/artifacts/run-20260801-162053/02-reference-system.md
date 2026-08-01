## Run metadata
| run_id | prd_path | work_page | reference_pages | brand_context_path | artifact_dir |
|---|---|---|---|---|---|
| run-20260801-162053 | docs/PRD.md | 황선태 | [{name:"1-daangn",role:"primary"}] | none | docs/artifacts/run-20260801-162053 |

## Source and scope manifest
| source_id | evidence_domain | source_authority | page_path_or_url | role | captured_or_verified_at | inspected_at | verification_status | surface_scope | inspection_method | inspected_frames | exclusions | allowed_influence |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| SRC-01 | primary Penpot product snapshot | primary direct observation | Penpot/1-daangn | primary | unavailable in snapshot | 2026-08-01 | directly inspected | mobile product UI | `getPageByName` + descendant/node-property inspection; no page switch or mutation | 당근마켓_1, _2, _3, _4 and item-detail board | interaction prototypes, unrepresented states and responsive behavior | visual composition, shell, information density, typography and terminology only |

## Reference identity
| page | role | company_identity | inspected_frames | allowed_influence |
|---|---|---|---|---|
| 1-daangn | primary | local-neighborhood marketplace/community product | 당근마켓_1(거래 목록), 당근마켓_2(동네생활), 당근마켓_3(나의 당근), 당근마켓_4(채팅), detail board | preserve visual grammar and local-context decision aids; translate domain objects |

## Brand thesis
| primary_character | user_impression | supporting_ref_ids | confidence |
|---|---|---|---|
| warm, practical, neighborhood-first utility | dense but approachable local feed with clear task hierarchy and warm orange emphasis | REF-01, REF-02, REF-03, REF-04, REF-05 | high |

## Evidence catalog
| ref_id | evidence_status | evidence_kind | source_authority | claim_type | class | category | rule_or_value | source_id | surface_scope | page_or_doc_location | frame | evidence_node | captured_at | sample_scope | confidence |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| REF-01 | observed | node properties | primary direct | visual composition | signature | accent | Orange `#FF7E36` marks price/status/selected emphasis; not the default body color | SRC-01 | mobile product | 1-daangn | 당근마켓_1,_2,_3 | 623d9d81, ce9d0340, 37ecfa28, 88e9d782 | unavailable | repeated across 3 frames | high |
| REF-02 | observed | node properties | primary direct | typography | foundation | hierarchy | Inter: header 18/700, item title 14–16/400, metadata 12/400, nav 10/400 | SRC-01 | mobile product | 1-daangn | _1,_2,_3 | aaf963bf, 66873c12, 9d4fafea, a494c71b | unavailable | repeated across 4 frames | high |
| REF-03 | observed | frame structure + text | primary direct | navigation | signature | brand shell | top local-context title and persistent five-item bottom navigation with label+icon anatomy | SRC-01 | mobile product | 1-daangn | _1,_2,_3,_4 | aaf963bf, 9071a307, a494c71b | unavailable | 4 representative frames | high |
| REF-04 | observed | node properties | primary direct | content hierarchy | signature | local context | title → locality/time/category metadata → primary fact/value → lightweight interest/activity signals | SRC-01 | list/detail | 1-daangn | _1 and detail board | 66873c12, 9d4fafea, 623d9d81 | unavailable | at least 5 listing rows plus detail | high |
| REF-05 | observed | node properties | primary direct | density | foundation | feed | 390px mobile frames use 16px side inset and compact repeated rows/cards separated by light rules/surfaces | SRC-01 | mobile product | 1-daangn | _1,_2,_3 | boards 05bb86c7,76867804,23526fd9 | unavailable | 3 feeds/settings | high |
| REF-06 | observed | text + status treatment | primary direct | trust | signature | locality/proximity | neighborhood labels and recency are repeated alongside user content; participation, answer, interest, view counts make activity legible | SRC-01 | feed/detail | 1-daangn | _1,_2, detail | f0019399,32f34547,8db3f965,271831d3 | unavailable | 3 context types | high |
| REF-07 | observed | node properties | primary direct | color | foundation | neutrals | black `#000000` primary; `#5E5E5E`/`#8C8C8C` supporting text; white surface; `#EEEEEE`/`#D9D9D9` dividers/placeholders | SRC-01 | mobile product | 1-daangn | _1,_2,_3 | multiple nodes | unavailable | 4 frames | high |
| REF-08 | observed | text/content | primary direct | voice | foundation | microcopy | concise Korean noun/verb labels; direct task/status labels (e.g. 모집중, 궁금해요, 답변 2) rather than marketing prose | SRC-01 | mobile product | 1-daangn | _2,_3 | 37ecfa28,03340459,59537a01 | unavailable | 3 frames | medium |
| REF-09 | observed | frame structure | primary direct | exploration mechanism | signature | browse controls | Home feed has place anchor; community feed has topical tabs; snapshot does not visibly show search/filter/map on inspected frames | SRC-01 | mobile product | 1-daangn | _1,_2 | aaf963bf, ce47b2a8 | unavailable | 2 exploration surfaces | medium |
| REF-10 | observed | node properties | primary direct | component anatomy | foundation | surfaces | mostly square-to-gently-rounded white rows/cards, restrained border/shadow use, light gray separation | SRC-01 | mobile product | 1-daangn | _1,_2,_3 | rectangle/divider nodes + fills | unavailable | 4 frames | medium |

## Claim provenance ledger
| claim_id | claim | claim_type | source_id | evidence_kind | verification_status | surface_scope | freshness | supporting_ref_ids | downstream_use |
|---|---|---|---|---|---|---|---|---|---|
| CLM-01 | Orange is a sparse action/status emphasis, not a full-screen brand wash. | color | SRC-01 | direct node observation | observed | mobile product | snapshot-date unknown | REF-01,REF-07 | accent/selected/primary-action treatment |
| CLM-02 | Locality and recency are a repeated decision-support axis. | content hierarchy | SRC-01 | direct text observation | observed | marketplace/community feeds | snapshot-date unknown | REF-04,REF-06 | translate to the new domain's relevant context and freshness signals |
| CLM-03 | Mobile shell combines an explicit top context anchor with bottom navigation. | navigation | SRC-01 | direct frame observation | observed | mobile product | snapshot-date unknown | REF-03 | preserve shell anatomy when task requires app navigation |
| CLM-04 | Explore uses compact list density and categorical browsing before detail. | exploration | SRC-01 | direct frame/text observation | observed | home/community | snapshot-date unknown | REF-05,REF-09 | translate to PRD entities; do not copy marketplace objects |

## Semantic reconciliation
| semantic_role | penpot_snapshot_value | documented_value | difference_type | target_surface | chosen_value_or_rule | authority_reason | losing_claim_disposition | ref_ids |
|---|---|---|---|---|---|---|---|---|
| product primary accent | #FF7E36 | none supplied | unresolved | new mobile UI | use #FF7E36 only for constrained emphasis | direct primary snapshot | no canonical token claim made | REF-01 |
| primary font | Inter in UI; SF Pro Text status bar | none supplied | surface-difference | app content vs OS chrome | use Inter for authored app content; system-status family is shell-local | direct node properties | do not transplant OS status typography as product type token | REF-02,REF-03 |

## Measured primitives
| category | semantic_candidate | observed_value | role_and_context | frequency | ref_ids | scope_limit |
|---|---|---|---|---|---|---|
| color | accent/warm | #FF7E36 | price, open status, account emphasis | 11+ across 3 frames | REF-01 | snapshot only |
| color | text/primary | #000000 | headings, titles, labels | 25–47 nodes/frame | REF-07 | snapshot only |
| color | text/secondary | #8C8C8C; #5E5E5E | meta/activity; supportive copy | repeated | REF-07 | roles differ; do not average |
| spacing | page inset | 16px | mobile headers/content | observed in frame geometry | REF-05 | sample estimate from frame positions |
| type | header | 18px/700 | top page/local title | 3 frames | REF-02 | product header only |
| type | body title | 14–16px/400 | feed title/detail copy | 4 frames | REF-02 | product content only |
| type | metadata | 12px/400 | locality, time, activity | repeated | REF-02 | product content only |

## Typography evidence boundary
| surface_scope | declared_stack | computed_or_node_family | official_semantic_roles | sizes_weights_line_heights | penpot_available | fallback | metric_preservation | ref_ids |
|---|---|---|---|---|---|---|---|---|
| mobile app content | unresolved | Inter | none supplied | 18/700 header; 16/400 title; 14/400 body; 12/400 meta; line-height not reliably captured | unresolved (font list was available but Inter availability not independently narrowed) | use an available neutral sans only if Inter cannot be applied | retain hierarchy, compact metadata and wrapping behavior; do not claim visual identity is identical | REF-02 |
| OS shell | unresolved | SF Pro Text | none supplied | 17/400 time | unresolved | system sans | keep OS shell separate from product typography | REF-03 |

## Brand shell evidence
| shell_id | element | observed_anatomy | placement_and_behavior | source_frame | evidence_node | transfer_default | ref_ids |
|---|---|---|---|---|---|---|---|
| SHELL-01 | status bar | iPhone status bar component with time/notch/network elements | top safe area; static snapshot only | 당근마켓_1,_3 | 894d05a2,9e20643d | translate as device shell only when frames need it | REF-03 |
| SHELL-02 | brand/context anchor | bold 18px locality or section title with nearby utility action | top content header | 당근마켓_1,_3,_4 | aaf963bf,9071a307,7532f0f9 | preserve hierarchy; translate label to new-domain context | REF-03 |
| SHELL-03 | bottom navigation | five equal destinations, icon above 10px label, active treatment visually restrained | fixed bottom area above home indicator; interaction unobserved | 당근마켓_1,_3 | a494c71b plus sibling nav nodes | preserve only when PRD needs multi-area navigation | REF-03 |

## Exploration mechanism evidence
| mechanism_id | mechanism | user_decision_supported | entry | control_anatomy | result_or_state_change | source_frame | evidence_node | transfer_default | ref_ids |
|---|---|---|---|---|---|---|---|---|---|
| MECH-01 | local context anchor | judges relevance by neighborhood | top header | bold location label + chevron/utility affordance | state change unobserved | 당근마켓_1 | aaf963bf | translate to PRD-relevant scope/context selector | REF-06,REF-09 |
| MECH-02 | category tabs | scans community intent/topic | beneath header | horizontal labels including 동네소식/같이해요/동네질문 | selected state/action unobserved | 당근마켓_2 | ce47b2a8 et al. | translate to bounded categories only if PRD has them | REF-09 |
| MECH-03 | search/filter/sort/map | unresolved | unresolved | unresolved | unresolved | inspected exploration frames | none visible | do not invent as inherited brand behavior | unresolved |

## Density benchmarks
| context | viewport | visible_items | row_or_card_size | chrome_share | scan_priority | source_frame | ref_ids |
|---|---|---|---|---|---|---|---|
| marketplace listing | 390×844 | about 5 listings in main viewport | ~142px vertical rhythm including image/content | header+bottom shell roughly 18% | item title, local/time metadata, price | 당근마켓_1 | REF-04,REF-05 |
| community feed | 390×1393 design board; first phone viewport inferred | 2–3 posts plus tabs/banner | variable compact text cards | header/tabs high in first viewport | category, title/question, local/time, response signal | 당근마켓_2 | REF-05,REF-06 |

## Design grammar
| context | layout | type | color | spacing | imagery | interaction | ref_ids |
|---|---|---|---|---|---|---|---|
| list/feed | single-column, compact repeated modules | title > local/time meta > key value | white/black/gray with sparse orange | 16px page inset, light separations | square item thumbnails where relevant | activation not observed | REF-01,REF-02,REF-04,REF-05 |
| account/activity | grouped settings rows with headings | bold section/title + regular row labels | orange for key program cue | roomy but compact row rhythm | small leading icons | activation not observed | REF-01,REF-03 |

## Component patterns
| pattern | surface_scope | visual_anatomy | dimensions | observed_variants | observed_states | documented_states | documented_behavior | accessibility_contract | inferred_behavior | transfer | ref_ids |
|---|---|---|---|---|---|---|---|---|---|---|
| feed row | marketplace list | image + title/meta/price + lightweight counts | 390-wide viewport, row rhythm ~142px | differing content values | default only | unresolved | unresolved | unresolved | avoid behavior inference | translate data anatomy, not product item semantics | REF-04,REF-05 |
| topic tab | community feed | compact text category rail | 12px labels | multiple labels | selection not visibly confirmed | unresolved | unresolved | unresolved | unresolved | use only if new-domain taxonomy exists | REF-09 |
| bottom nav | app shell | icon + 10px label, five equal slots | 390-wide | five destinations | active appearance not reliably separable | unresolved | unresolved | unresolved | unresolved | preserve shell rhythm, translate destinations | REF-03 |

## Content and trust patterns
| pattern | voice | density | trust_mechanism | transfer | ref_ids |
|---|---|---|---|---|---|
| local/recent metadata | terse factual Korean labels | one compact line | locality and recency make relevance inspectable | substitute the new domain's legitimate contextual and freshness facts; do not fabricate trust claims | REF-04,REF-06 |
| activity counts | terse labels | inline secondary | shows social/activity evidence | translate only when PRD legitimately supports such counts | REF-06 |

## Voice and terminology
| context | preferred_pattern | avoid_pattern | observed_sample | sample_status | source_authority | surface_scope | ref_ids |
|---|---|---|---|---|---|---|---|
| labels/status | short, concrete Korean noun/status phrases | promotional/overclaimed language | 모집중, 궁금해요, 답변 2 | actual product copy | primary direct | community feed | REF-08 |
| navigation | compact destination nouns | marketplace naming in a new domain | 홈, 동네생활, 내 근처, 채팅, 나의 당근 | actual product copy; domain-bound | primary direct | app shell | REF-03 |

## IA and information-axis evidence
| pattern | observed_labels_or_values | placement_or_order | new-domain translation boundary | ref_ids |
|---|---|---|---|---|
| relevance axis | 동네/지역 + time; category; activity count | below title or in card footer | retain the pattern of context/freshness only; do not reuse neighborhood taxonomy where irrelevant | REF-04,REF-06 |
| browse taxonomy | 동네소식, 같이해요, 동네질문, 동네맛집, 취미생활 | header-adjacent tabs | replace entirely with PRD-native categories | REF-09 |

## Brand expression principles
| principle | product_expression | supporting_ref_ids | confidence | boundary |
|---|---|---|---|---|
| warmth through restraint | orange appears at important value/state moments against mostly neutral UI | REF-01,REF-07 | high | do not turn every control orange |
| grounded locality | location and recency accompany user-generated/item content | REF-04,REF-06 | high | translate only to valid new-domain relevance signals |
| practical scanning | compact repetitive rows, clear hierarchy and familiar app shell | REF-02,REF-03,REF-05 | high | retain mechanics, not marketplace vocabulary |

## Actor and task contexts
| actor_or_context | directly_supported | unsupported_assumptions_to_avoid | ref_ids |
|---|---|---|---|
| local feed browser | browses listings/community posts, checks locality/time/value/activity | demographics, motivations, performance claims | REF-04,REF-06,REF-09 |
| account/activity user | reviews personal activity and local settings | any unobserved account policy | REF-03 |

## State coverage
| component_or_flow | surface_scope | default | selected | hover | focus | pressed | disabled | loading | empty | error | success | evidence_kind | evidence_or_unresolved |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| feeds, rows, tabs, bottom nav | mobile product snapshot | observed | unresolved | unresolved | unresolved | unresolved | unresolved | unresolved | unresolved | unresolved | unresolved | static snapshot | default screens only; no dynamic states claimed |

## Responsive behavior
| context | surface_scope | observed_or_documented_viewports | invariant | reflow_or_resize_evidence | evidence_kind | unresolved | ref_ids |
|---|---|---|---|---|---|---|---|
| mobile product | app screens | 390px-wide iPhone frames | single-column mobile shell | none | static snapshot | all responsive rules | REF-03,REF-05 |

## Theme and accessibility
| topic | surface_scope | observed_or_documented_rule | light_dark_mapping | keyboard_or_focus | contrast_or_touch | evidence_kind | unresolved | ref_ids |
|---|---|---|---|---|---|---|---|---|
| theme | mobile product | light surfaces observed | dark theme unresolved | unresolved | no audited contrast/touch measurements | static snapshot | full accessibility contract | REF-07 |

## Motion and elevation
| pattern | surface_scope | property_or_token | evidence_kind | reusable_or_local | reduced_motion | prohibited_inference | ref_ids |
|---|---|---|---|---|---|---|---|
| transitions/elevation | mobile product | restrained visual separation; no motion token captured | static snapshot | local visual observation only | unresolved | do not infer duration, easing, animation or canonical shadow token | REF-10 |

## Transfer policy
| ref_id | preserve_translate_avoid | invariant | adaptable_part | reason |
|---|---|---|---|---|
| REF-01 | preserve | sparse warm-orange emphasis | which valid action/status gets emphasis | repeated brand signature |
| REF-03 | translate | clear top context + bottom app shell hierarchy | labels/destinations and whether nav exists | original IA is domain-bound |
| REF-04 | translate | ordered scan hierarchy and contextual metadata | entities, values and context semantics | marketplace data must not be copied |
| REF-06 | translate | honest relevance/activity evidence | applicable PRD-native signals | trust signals must be legitimate |
| REF-09 | avoid | none | category/search/filter mechanics | only tabs observed; unobserved controls cannot be inherited |

## Do / Don't
| do | don't | rationale | ref_ids |
|---|---|---|---|
| use white, charcoal and gray foundation with limited #FF7E36 emphasis | paint large surfaces orange or use it as every label color | snapshot uses orange as a sparse signal | REF-01,REF-07 |
| retain fast title→context→key-value scanning | copy secondhand item titles, prices, 동네 labels or 당근 IA | hierarchy transfers; business semantics do not | REF-04 |
| make PRD-native scope/freshness easy to inspect if applicable | invent location, trust scores or activity evidence | trust must be grounded in product data | REF-06 |
| use app-shell rhythm when product scope warrants it | assume interactions/states not shown in snapshot | static source cannot document behavior | REF-03,REF-09 |

## Application brief
| visual_frame | signature_moves | foundation_rules | domain_translation | omit_unverified | ref_ids |
|---|---|---|---|---|---|
| clean 390px mobile, white foundation, compact scanable single-column content | sparse #FF7E36 cue; explicit scope/context anchor; local/recent-style evidence axis | Inter hierarchy, 16px content inset, dark primary and muted metadata, light dividers, icon+label nav anatomy | replace all marketplace/community nouns, values, categories and trust signals with PRD-native content while preserving clarity and practical warmth | canonical tokens, dark mode, dynamic states, motion, search/filter/map behavior, accessibility contracts | REF-01 to REF-10 |

## Supplemental boundaries
| page | allowed_pattern | conflict | prohibition |
|---|---|---|---|
| none | none | none | no supplemental reference supplied |

## Source conflicts
| topic | conflict_or_difference_type | source_a | source_b | target_surface | resolution | downstream_constraint |
|---|---|---|---|---|---|---|
| product font vs OS font | surface-difference | Inter app nodes | SF Pro Text status time | mobile app | separate product type from OS shell | do not use SF Pro Text as application default |

## Excluded and retired claims
| claim | disposition | reason | source_id | replacement_or_unresolved | ref_ids |
|---|---|---|---|---|---|
| exact #FF7E36 is canonical current brand token | excluded | snapshot source has unknown capture date and no official token document | SRC-01 | observed snapshot accent only | REF-01 |
| search/filter/sort/map are core Daangn exploration mechanisms | excluded | not visible in inspected exploration frames | SRC-01 | unresolved | REF-09 |
| all nav labels or neighborhood terms are reusable | excluded | original-business and original-IA bound | SRC-01 | translate with PRD-native labels | REF-03,REF-04 |

## Unknowns
| question | impact | evidence_needed | blocking |
|---|---|---|---|
| current official token/color/type specification | avoid overstating snapshot values | official current system source | no |
| dark mode, focus, keyboard, contrast, touch target rules | accessibility/state implementation | documented accessibility source or interactive test | no |
| motion/animation and responsive rules | behavioral fidelity | prototype or multi-viewport source | no |
| exact active tab/nav behavior | interaction design | interactive prototype/state screen | no |
