# Daangn reference system audit

> `1-daangn` Page를 전환하거나 수정하지 않고 Penpot shape traversal과 5개 대표 board의 PNG export로 조사했다. 이 문서의 `observed`는 노드 속성 또는 export에서 직접 확인한 사실이고, `derived`는 연결된 `REF-NN`에서 도출한 전이 지침이다. 외부 브랜드 문서와 웹 자료는 사용하지 않았다.

## Source and scope manifest

| source_id | evidence_domain | page_or_path | role | inspected_at | inspection_method | inspected_frames | exclusions | allowed_influence |
|---|---|---|---|---|---|---|---|---|
| SRC-01 | primary Penpot product UI | `1-daangn` (`b0e55382-70ab-8092-8008-672590aa69dc`) | primary | 2026-08-01 | `penpotUtils.getPageByName`, read-only shape traversal, `export_shape` PNG visual check | `당근마켓_1`~`당근마켓_5`, 전부 | runtime interaction, 다른 viewport, 외부 브랜드 자산, 최신성 검증 | 제품 UI의 구조·수치·표현에만 사용 |
| SRC-02 | exported visual evidence | `exports/daangn-1.png`~`daangn-5.png` | primary verification | 2026-08-01 | board별 PNG 재-export 및 육안 검사 | 상품 목록, 동네생활, 나의 당근, 채팅, 상품 상세 | 정적 PNG에 없는 동작과 상태 | 렌더 결과와 계층 해석 교차검증 |

## Reference identity

| page | role | company_identity | inspected_frames | allowed_influence |
|---|---|---|---|---|
| `1-daangn` | primary | 동네 위치·이웃 신뢰·직거래 행동을 한 화면 안에서 빠르게 판단하게 하는 로컬 생활 플랫폼 | 상품 목록, 동네생활 피드, 개인 허브, 채팅 목록, 상품 상세 | primary 제품 UI의 foundation/signature만 계승. 중고거래 사업 개체와 카피는 복제 금지 |

## Brand thesis

| primary_character | user_impression | supporting_ref_ids | confidence |
|---|---|---|---|
| 실용적인 흑백 정보 구조 위에 당근색을 거래 가치와 행동에 제한적으로 사용한다 | 빠르고 부담 없이 이웃과 거래·대화할 수 있다 | REF-02, REF-03, REF-04, REF-06, REF-12 | high |
| 위치·시간·활동 이력·매너 신호를 콘텐츠 가까이에 둔다 | 익명의 마켓보다 실제 동네 사람과 연결된다는 신뢰가 생긴다 | REF-07, REF-09, REF-10, REF-11 | high |
| 작은 목록 사진부터 상세의 큰 상품 사진까지 실제 콘텐츠가 장식을 대신한다 | 생활감 있고 즉시 비교 가능한 서비스로 느껴진다 | REF-05, REF-11 | high |

## Evidence catalog

| ref_id | evidence_status | class | category | observed_rule | source_id | page | frame | evidence_node | sample_scope | confidence |
|---|---|---|---|---|---|---|---|---|---|---|
| REF-01 | observed | foundation | viewport | 모든 top-level board가 390px 폭이다. 기본 화면 3개는 390×844, 동네생활은 390×1393, 상세는 390×1630이다. | SRC-01 | `1-daangn` | `당근마켓_1`~`5` | board IDs `05bb86c7…`, `76867804…`, `23526fd9…`, `fa886f03…`, `1571d6fd…` | 5/5 boards | high |
| REF-02 | observed | foundation | color | 흰 canvas와 검정 본문이 지배적이고 회색이 보조 정보·divider를 담당한다. fill 빈도는 `#000000` 177, `#FFFFFF` 112, `#8C8C8C` 85, `#D9D9D9` 35, `#EEEEEE` 12회다. | SRC-01 | `1-daangn` | all | 전체 shape 집계 | 847 shapes | high |
| REF-03 | observed | signature | color | `#FF7E36`은 가격, 당근페이, 찾기 강조, FAB, 상세 CTA 등 가치·브랜드 행동에 제한적으로 쓰인다. 전체 fill 17회, text 7회다. | SRC-01 | `1-daangn` | 1, 2, 3, 5 | price `623d9d81…`; pay `88e9d782…`; CTA `3da64906…` | 4개 화면, 복수 의미 노드 | high |
| REF-04 | observed | foundation | typography | 본문은 Inter 12/14/16px, 제목은 18px bold, 가격·이름·섹션은 14~16px bold를 쓴다. 가장 반복된 스타일은 12/400/16px line-height 100회다. | SRC-01 | `1-daangn` | all | title `aaf963bf…`; body `50ec05f4…`; metadata `9d4fafea…` | 216 text nodes | high |
| REF-05 | observed | foundation | spacing/layout | 주요 콘텐츠는 좌우 16px inset의 358px 폭을 반복한다. 상품 행 `Frame 7`은 358×110이며 이미지와 정보 사이를 16px 계열 간격으로 분리한다. | SRC-01 | `1-daangn` | `당근마켓_1`, `3`, `5` | `be101c8c-c4f3-50c7-b102-e68eaae827e1`; `b0bb49c2…`; `decf4d2d…` | 목록·배너·상세 섹션 반복 | high |
| REF-06 | observed | signature | product-list pattern | 상품 목록은 정사각형 110px 이미지, 제목 16px, 위치·시간 12px gray, 가격 15px bold orange, 우측 하단 반응 수 순서로 압축한다. | SRC-01, SRC-02 | `1-daangn` | `당근마켓_1` | row `be101c8c…`; title `66873c12…`; metadata `9d4fafea…`; price `623d9d81…` | 화면 내 5개 행 | high |
| REF-07 | observed | signature | navigation | 하단 navigation은 390×58의 흰 bar 안에 78×42 목적지 5개를 균등 배치하고 10px label을 쓴다. 활성 상태도 큰 색면 없이 검정 아이콘의 fill 차이로 표현한다. | SRC-01, SRC-02 | `1-daangn` | 1, 2, 3, 4 | bar `3713ef90…`; item `69e5cfde…`; label `96da2e48…` | 4개 root 화면 반복 | high |
| REF-08 | observed | signature | community taxonomy | 동네생활은 상단의 32px full-pill 카테고리와 게시글 내부의 24px, radius 4 gray label을 구분한다. 탐색 taxonomy와 콘텐츠 유형을 서로 다른 밀도로 표현한다. | SRC-01, SRC-02 | `1-daangn` | `당근마켓_2` | top chip `f159ffa0-c571-5bf7-831b-67f39766189a`; post tag `2492ff2b-8e23-5156-94fe-a680548f532e` | 상단 category와 게시글 tag 복수 | high |
| REF-09 | observed | signature | trust/content | 동네생활 글은 유형, 본문, 작성자·동네, 경과 시간, 공감·댓글 행동을 한 카드 안에 묶는다. 분실 글은 사진과 장소 카드까지 확장한다. | SRC-02 | `1-daangn` | `당근마켓_2` | post group `b1437215-33b9-5424-b57d-de03d6d83a10` 및 인접 feed groups | 4개 이상 post 유형 | high |
| REF-10 | observed | foundation | list row | 개인 허브의 설정/활동은 390×44 행, 좌측 16px inset, 24px 아이콘과 16px label의 반복으로 구성한다. 섹션은 두꺼운 연회색 divider로 분리한다. | SRC-01, SRC-02 | `1-daangn` | `당근마켓_3` | row `b3528c56-c4e7-5577-a1d1-1732c7d915c2`; content `3df06c9a…`; label `2e5f329b…` | 5개 이상 연속 행 | high |
| REF-11 | observed | signature | chat row | 채팅 목록은 390×72 행에 40~48px avatar, 14px bold 상대명, gray 지역·시간, 14px preview, 우측 상품 thumbnail을 배치한다. 거래 상대와 상품 맥락을 동시에 유지한다. | SRC-01, SRC-02 | `1-daangn` | `당근마켓_4` | row `7fa269d7-2194-524b-9e88-c5e50e823512`; name `79038ac7…`; preview `50ec05f4…` | 9개 visible rows | high |
| REF-12 | observed | signature | detail/trust/action | 상세는 큰 상품 사진 다음 판매자·동네·매너온도, 제목·카테고리·시간, 본문, 신고, 판매자의 다른 상품, 추천을 순차 배치하고 54px sticky 거래 bar로 마무리한다. | SRC-01, SRC-02 | `1-daangn` | `당근마켓_5` | temperature `cc7b5573…`; content `8df42346…`; sticky bar `31aeda65…`; CTA `3da64906…` | 전체 상세 화면 | high |
| REF-13 | observed | foundation | radius | radius 4는 상품 이미지·작은 tag·CTA에 33회, radius 96/100은 avatar·pill·FAB에 23회 사용된다. 8px는 강조 배너 등 제한된 surface에만 보인다. | SRC-01 | `1-daangn` | all | product image `806333e8…`; category pill `f159ffa0…`; pay banner `b0bb49c2…` | 전체 shape 집계 | high |
| REF-14 | observed | foundation | elevation | 명시적 drop shadow는 orange FAB 두 개에서만 관찰된다: `0 4px 12px rgba(0,0,0,.12)`. 나머지 구조는 whitespace와 1px divider를 우선한다. | SRC-01 | `1-daangn` | 1, 2 | FAB `f5aca5db-557d-58ea-9fad-6d1e480e8554`; `f01158e3-3110-564d-990e-bc55e2f68d64` | shadows 2개 | high |
| REF-15 | observed | signature | voice | 카피는 동네명, 경과 시간, “끌올”, “같이해요”, “찾아요”, “채팅하기”처럼 구체적이고 구어적이며 행동을 직접 이름 붙인다. | SRC-01, SRC-02 | `1-daangn` | 1, 2, 4, 5 | `b6dd048e…`; `47b632cb…`; `ec796165…` | 여러 product context | high |

## Measured primitives

| category | semantic_candidate | observed_value | role_and_context | frequency | ref_ids | scope_limit |
|---|---|---|---|---:|---|---|
| color | `color.ink.primary` | `#000000` | 제목, 본문, icon | fill 177 / text 106 | REF-02 | import된 icon path까지 포함하므로 surface token으로 과대해석 금지 |
| color | `color.ink.secondary` | `#8C8C8C` | 위치, 시간, 반응 수, 보조 label | fill 85 / text 80 | REF-02, REF-06 | 본문용이 아님 |
| color | `color.brand.action` | `#FF7E36` | 가격, 브랜드 서비스, 작성 FAB, 거래 CTA | fill 17 / text 7 | REF-03 | 모든 CTA나 활성 nav에 자동 적용 금지 |
| color | `color.surface.subtle` | `#F6F6F6`, `#F4F4F4`, `#EEEEEE` | section divider, tag, quiet surface | 각각 8, 6, 12회 | REF-02, REF-08, REF-10 | 역할별 값이 달라 평균내지 않음 |
| color | `color.trust.temperature` | `#4AC1DB` | 매너온도 수치와 indicator | fill 2회 | REF-12 | 매너온도라는 domain-bound 신호에 한정 |
| spacing | `space.screen` | 16px | 390px shell 안 358px content | 다수 화면 | REF-05 | 단일 viewport 근거 |
| radius | `radius.compact` | 4px | 목록 media, tag, CTA | 33회 | REF-06, REF-08, REF-13 | 큰 카드에 보편 적용 금지 |
| radius | `radius.round` | 96~100px | avatar, category pill, FAB | 23회 | REF-08, REF-13 | 역할별 크기 유지 |
| elevation | `shadow.floating-action` | `0 4px 12px rgba(0,0,0,.12)` | FAB | 2회 | REF-14 | 일반 card shadow로 승격 금지 |

## Typography evidence boundary

| declared_family | observed_roles | sizes_weights_line_heights | penpot_available | fallback | metric_preservation | ref_ids |
|---|---|---|---|---|---|---|
| Inter | 화면 제목, 본문, metadata, 가격, navigation | 10/400/14; 12/400/16; 14/400·700/18; 15/700/22; 16/400·700/20; 18/700/28 | yes, 100~900 및 italic 확인 | Korean UI에서는 가용한 Pretendard 400/700도 후보이나 동일 폰트라고 부르지 않는다 | 10/12/14/15/16/18px 역할과 line-height, 실제 text resize를 우선 보존 | REF-04 |
| SF Pro Text | iOS status bar 시간 | 17/400/22 | `penpot.fonts.all`에서 동일 family 미확인 | system chrome을 제품 typography로 승격하지 않음 | status bar 영역에서만 격리 | REF-01, REF-04 |

## Design grammar

| context | layout | type | color | spacing | imagery | interaction | ref_ids |
|---|---|---|---|---|---|---|---|
| 상품 browse | 390 shell, 16px inset, 358×110 rows | 16px title, 12px metadata, 15px bold price | black/gray + orange price | 행 사이 divider와 16px rhythm | 110px square photo | 전체 행 탐색, 반응 수는 우측 하단 | REF-05, REF-06 |
| 동네생활 feed | category strip → banner → 다양한 post blocks | 10~12px tags, 14px body, 15~18px header | neutral 중심, 찾기·핵심 단어만 orange | post 사이 두꺼운 section divider | 필요할 때만 2열 photo/location 확장 | 공감·댓글을 post 하단에 유지 | REF-08, REF-09, REF-15 |
| 개인 허브 | profile → pay banner → 3 quick actions → sectioned rows | 18px page title, 16px row, 12~14px utility | orange icon tint와 neutral list | 44px rows, section divider | avatar만 강조 | 전체 row tap target | REF-03, REF-10 |
| 채팅 | 72px 반복 rows | 14px name/preview, 12px context | black/gray, unread/상태만 제한 강조 | 16px side inset | avatar + product thumbnail | 상대와 상품 context를 한 행에 유지 | REF-11 |
| 상품 detail | full-width hero → 16px inset sections → sticky action | 14px sections/body, bold title/value | neutral + orange CTA + trust cyan | divider와 whitespace로 section 구분 | hero와 recommendation grid | 가격·채팅 행동을 하단 고정 | REF-12, REF-14 |

## Component patterns

| pattern | anatomy | dimensions | variants | observed_states | inferred_behavior | transfer | ref_ids |
|---|---|---|---|---|---|---|---|
| Marketplace row | square media + title/metadata/price + optional reactions | 358×110 content row, 110px media | reactions 있음/없음 | static default | row 전체가 상세 진입점으로 보임 | 새 도메인의 비교 목록에 구조를 translate | REF-06 |
| Bottom navigation | icon + 10px label × 5 | 390×58, item 78×42 | active/inactive | 정적 selected 차이만 확인 | root destination 전환 | destination 수와 이름은 새 PRD에 맞게 translate | REF-07 |
| Community category | label inside outlined/full pill | height 32, full radius | category별 label | 정적 unselected/selected 단서 제한 | horizontal browse로 보임 | 분류 탐색이 필요할 때만 translate | REF-08 |
| Post type tag | small text on gray surface | height 24, radius 4 | 같이해요/질문/맛집/분실 등 | static default | 콘텐츠 유형 식별 | 원래 카테고리명은 avoid, 정보 역할만 translate | REF-08, REF-09 |
| Settings row | leading icon + 16px label + optional trailing affordance | 390×44, inner 358px | section별 반복 | static default | entire row tap | 관리·설정 list에 preserve | REF-10 |
| Chat row | avatar + identity/context/preview + product thumbnail | 390×72 | avatar/thumbnail/unread badge 차이 | read/unread 시각 단서 일부 | thread 진입 | 대화가 자원/거래 개체와 연결될 때 translate | REF-11 |
| Sticky transaction bar | favorite + price/condition + primary action | 390×54 content + safe area, CTA 77×34 radius 4 | 가격·상태에 따른 copy | static default | 상세 맥락에서 계속 노출 | 단일 핵심 전환 행동에 translate | REF-12 |
| Floating create action | plus icon inside orange circle | round control | 상품/게시글 작성 context | static default | 새 콘텐츠 작성 | 생성 행동이 명확할 때 preserve | REF-03, REF-14 |

## Content and trust patterns

| pattern | voice | density | trust_mechanism | transfer | ref_ids |
|---|---|---|---|---|---|
| Local metadata | 동네명과 경과 시간을 짧게 병기 | 한 줄 12px | 물리적 근접성과 최신성 | 새 도메인의 신뢰 가능한 위치·시간 단서로 translate | REF-06, REF-09, REF-15 |
| Transaction identity | 상대 이름, 지역, 상품을 동시에 노출 | 72px 행에 고밀도 | 대화 상대와 거래 대상의 연속성 | 개체가 있는 대화 UI에 translate | REF-11 |
| Reputation near action | 판매자 직후 매너온도 표시 | compact | 거래 전 평판 확인 | domain의 검증 지표로 translate하되 온도 표현 자체는 avoid | REF-12 |
| Direct action copy | “채팅하기”, “같이해요”, “찾아요” | 짧고 동사 중심 | 다음 행동의 모호함 감소 | 구체적 한국어 동사형 label preserve | REF-15 |
| Community response | 공감·댓글 수와 작성자·동네 | 본문 아래 compact | 사회적 참여와 지역 귀속 | community 기능이 있을 때 translate | REF-09 |

## Brand expression principles

| principle | product_expression | supporting_ref_ids | confidence | boundary |
|---|---|---|---|---|
| 동네 맥락을 행동 가까이에 둔다 | 위치·시간·상대·대상 정보를 title이나 CTA에서 멀리 떼지 않는다 | REF-06, REF-09, REF-11, REF-12 | high | 정확한 동네명과 중고상품 개체는 복제하지 않음 |
| 색보다 정보 위계가 먼저다 | black/gray typography와 divider로 구조를 세우고 orange는 가치·생성·거래 행동에 집중한다 | REF-02, REF-03, REF-14 | high | orange를 모든 primary surface에 확장하지 않음 |
| 실제 생활 콘텐츠가 장식이다 | 상품·사람·장소 사진이 필요한 밀도로 등장하고 decorative illustration은 지배하지 않는다 | REF-06, REF-09, REF-11, REF-12 | high | 새 도메인에 실제 이미지가 불필요하면 억지로 추가하지 않음 |
| 짧고 구체적으로 말한다 | 서비스 용어보다 사용자가 할 행동과 현재 맥락을 직접 쓴다 | REF-15 | high | 원본 카피와 은어의 무관한 재사용 금지 |

## Actor and task contexts

| actor_or_context | directly_supported | unsupported_assumptions_to_avoid | ref_ids |
|---|---|---|---|
| 동네 상품 탐색자 | 목록 비교, 관심 반응, 상세 확인 | 연령·소득·구매 빈도 | REF-06, REF-12 |
| 동네 게시글 작성자/참여자 | 질문, 같이하기, 맛집, 분실, 공감·댓글 | 커뮤니티 규모와 참여율 | REF-08, REF-09 |
| 거래 대화 참여자 | 상대·상품 context를 유지한 채 채팅 진입 | 거래 성공률과 응답 SLA | REF-11 |
| 개인 활동 관리자 | 동네 인증, 알림, 판매·구매·관심 이력 관리 | 회원 등급과 내부 운영 정책 | REF-10 |

## State coverage

| component_or_flow | default | selected | hover | focus | pressed | disabled | loading | empty | error | success | evidence_or_unresolved |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Bottom navigation | observed | static active icon observed | unresolved | unresolved | unresolved | unresolved | unresolved | unresolved | unresolved | unresolved | REF-07; interaction runtime 없음 |
| Community category | observed | 일부 정적 강조 단서 | unresolved | unresolved | unresolved | unresolved | unresolved | unresolved | unresolved | unresolved | REF-08; exact selected rule 제한 |
| Marketplace row | observed | n/a | unresolved | unresolved | unresolved | unresolved | unresolved | unresolved | unresolved | unresolved | REF-06 |
| Chat row | observed | n/a | unresolved | unresolved | unresolved | unresolved | unresolved | unresolved | unresolved | unresolved | REF-11; unread badge 단서만 일부 존재 |
| Detail CTA | observed | n/a | unresolved | unresolved | unresolved | unresolved | unresolved | unresolved | unresolved | unresolved | REF-12 |

## Responsive behavior

| context | observed_viewports | invariant | reflow_or_resize_evidence | unresolved | ref_ids |
|---|---|---|---|---|---|
| Mobile product surfaces | 390px width only | 16px inset, 358px content, 5-item bottom nav | 긴 화면은 board height만 1393/1630으로 확장 | 다른 모바일 폭, tablet/web, text scaling, landscape | REF-01, REF-05, REF-07 |

## Motion and elevation

| pattern | observed_property | reusable_or_local | prohibited_inference | ref_ids |
|---|---|---|---|---|
| Floating create action | `0 4px 12px rgba(0,0,0,.12)` | FAB-local reusable | 일반 카드에 같은 shadow를 적용하지 않음 | REF-14 |
| Navigation/category/CTA motion | 정적 화면만 존재 | unresolved | duration, easing, transition 방식을 생성하지 않음 | REF-07, REF-08, REF-12 |

## Transfer policy

| ref_id | preserve_translate_avoid | invariant | adaptable_part | reason |
|---|---|---|---|---|
| REF-02 | preserve | neutral 정보 구조와 gray metadata 위계 | gray 단계의 정확한 값은 새 contrast 요구에 맞게 검증 | 전 화면에서 반복된 foundation |
| REF-03 | preserve | accent를 희소한 가치·행동 신호로 사용 | 새 제품의 핵심 가치/행동 역할 | 브랜드 식별력이 높고 여러 context에서 반복 |
| REF-05 | preserve | 390px 기준 16px inset과 compact vertical rhythm | 새 viewport가 다르면 비율이 아닌 grid 규칙으로 재도출 | 다양한 화면에서 반복 |
| REF-06 | translate | 이미지→핵심 정보→metadata→value 위계 | 새 도메인의 비교 개체와 가치 정보 | 중고상품 자체는 domain-bound |
| REF-07 | translate | 균등 root navigation과 작은 label | 목적지 수·이름·활성 방식 | 구조는 foundation, IA는 원제품 종속 |
| REF-08 | translate | 탐색 category와 콘텐츠 type tag의 시각적 구분 | 새 도메인의 taxonomy | 원본 category명 복제 금지 |
| REF-09 | translate | author/context/time/action을 콘텐츠 가까이에 유지 | 새 product의 community 또는 activity 구조 | 로컬 신뢰 문법은 유효, 게시글 종류는 domain-bound |
| REF-10 | preserve | 44px compact settings row와 section divider | icon과 row copy | 범용 관리 패턴이면서 reference foundation |
| REF-11 | translate | 사람과 관련 개체를 같은 대화 행에 유지 | 새 도메인의 상대·개체 관계 | 거래상품 thumbnail은 domain-bound |
| REF-12 | translate | 신뢰 정보 이후 단일 sticky action | 검증 지표와 action | 매너온도·채팅 거래는 원제품 종속 |
| REF-14 | preserve | shadow는 실제 floating affordance에만 제한 | shadow 필요 여부 | flat hierarchy가 전반적 foundation |
| REF-15 | preserve | 짧고 구체적인 한국어 행동 카피 | 새 과업의 동사와 명사 | 브랜드 체감에 기여하나 원문 복제는 불필요 |

## Do / Don't

| do | don't | rationale | ref_ids |
|---|---|---|---|
| 흰 canvas, black/gray 위계, 16px inset으로 먼저 구조를 만든다 | orange panel과 gradient로 화면 대부분을 채우지 않는다 | 색보다 정보 위계가 우선 | REF-02, REF-03, REF-05 |
| accent는 핵심 가치, 생성, 전환 행동에 제한한다 | 모든 active state와 CTA에 자동으로 orange를 쓰지 않는다 | 실제 navigation active는 black 중심 | REF-03, REF-07 |
| 사용자·위치·시간·관련 개체를 의사결정 지점 가까이에 둔다 | “신뢰할 수 있음” 같은 추상 badge만 추가하지 않는다 | reference는 구체적 신뢰 단서를 사용 | REF-06, REF-09, REF-11, REF-12 |
| shadow 없이 divider와 whitespace로 section을 구분한다 | 모든 card를 떠 있는 surface로 만들지 않는다 | 명시적 shadow는 FAB 두 개뿐 | REF-14 |
| 실제 domain 카피와 데이터를 넣는다 | 상품, 당근페이, 매너온도, 동네 카테고리명을 이름만 바꿔 복제하지 않는다 | domain-bound 오염 방지 | REF-06, REF-08, REF-10, REF-12 |
| 없는 state와 motion을 `unresolved`로 둔다 | hover·loading·error·easing을 관찰했다고 주장하지 않는다 | 입력은 정적 mobile frames뿐 | REF-01 |

## Application brief

| visual_frame | signature_moves | foundation_rules | domain_translation | omit_unverified | ref_ids |
|---|---|---|---|---|---|
| 실용적이고 생활감 있는 compact mobile UI | orange를 가치·생성·핵심 행동에 희소하게 사용하고, 사람·위치·시간·관련 개체를 가까이 묶으며, 카피는 짧은 동사형으로 쓴다 | 390px 기준 16px inset, white canvas, black/gray type, 4px compact radius, divider-first hierarchy, 10/12/14/16/18px type scale | 중고상품·동네 게시글·매너온도 대신 신규 PRD의 비교 개체·신뢰 지표·핵심 행동을 대입한다 | 공식 브랜드 서체, 다른 viewport, hover/focus/pressed, loading/empty/error/success, motion duration/easing | REF-02~REF-15 |

## Supplemental boundaries

| page | allowed_pattern | conflict | prohibition |
|---|---|---|---|
| 없음 | 없음 | 없음 | 다른 회사 Page의 색·component·voice를 이 audit에 혼입하지 않음 |

## Source conflicts

| topic | source_a | source_b | resolution | downstream_constraint |
|---|---|---|---|---|
| 없음 | primary Penpot만 제공됨 | 없음 | 해당 없음 | 외부 자료가 제공되면 source domain을 분리해 재검토 |

## Unknowns

| question | impact | evidence_needed | blocking |
|---|---|---|---|
| 이 snapshot의 제작·캡처 시점과 현재 제품 일치 여부는? | 현행 브랜드 규칙으로 일반화할 신뢰도 | 공식 또는 최신 design document와 current product evidence | no |
| 공식 제품 서체는 무엇이며 Inter는 원본인가 대체인가? | typography fidelity | 공식 typography guide 또는 font metadata | no; 현재 Penpot 재현에는 Inter 사용 가능 |
| 390px 외 viewport에서 grid와 navigation이 어떻게 변하는가? | responsive authoring | 다른 폭의 공식 화면 | no; 동일 mobile 폭 실행에는 충분 |
| hover, focus, pressed, disabled, loading, empty, error, success는 어떻게 표현되는가? | 상태 완결성 | 상태별 frame 또는 interactive product evidence | no; 신규 PRD 기능 상태는 `NEW-NN`으로 설계 |
| motion duration과 easing은 무엇인가? | transition fidelity | prototype interaction 또는 motion spec | no |

## Audit completion

| check | result |
|---|---|
| Page switched or modified | no |
| inspected boards | 5/5 |
| inspected descendants | 847 shapes, 216 text nodes, 70 image fills |
| PNG export checked | 5/5 (`exports/daangn-1.png`~`daangn-5.png`) |
| signature/preserve lineage | PASS; all connected to `REF-NN` |
| states/responsive/motion uncertainty separated | PASS |
