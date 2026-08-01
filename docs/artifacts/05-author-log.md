# Penpot author log — Airbnb-style dating prototype

## Run

| prd_path | work_page | started_at | completed_at |
|---|---|---|---|
| `docs/examples/airbnb-dating.md` | `황선태` | `2026-08-01T15:10:00+09:00` | `2026-08-01T15:40:00+09:00` |

작업 대상은 기존 Page ID `dfb4a922-e1a1-4f22-8e01-a36bed875ac2`의 `황선태`로 매 호출 확인했다. `2-airbnb`, `1-daangn`, `기존파일`, `중간공유`, `최종제출` 및 다른 팀원 Page에는 쓰지 않았다. Penpot은 `/` 경로 이름을 UI/API 응답에서 `New / Discover`처럼 공백을 넣어 표시하지만, 저작 입력 이름은 블루프린트의 `New/Discover` 형식을 사용했다.

## Components

| component_name | node_id | instances | blueprint_match |
|---|---|---:|---|
| `New/C/TopBar` | master `ac4c4226-8458-8085-8008-6a415e656178`; component `ac4c4226-8458-8085-8008-6a415e78ff3f` | 0 | master complete |
| `New/C/Button` | master `ac4c4226-8458-8085-8008-6a415e79438e`; component `ac4c4226-8458-8085-8008-6a415e81151a` | 0 | master complete; screen-specific labels authored semantically |
| `New/C/AssetPill` | master `ac4c4226-8458-8085-8008-6a415e814581`; component `ac4c4226-8458-8085-8008-6a415e88c9a7` | 0 | master complete |
| `New/C/StatusChip` | master `ac4c4226-8458-8085-8008-6a415e892ca0`; component `ac4c4226-8458-8085-8008-6a415e907400` | 0 | master complete |
| `New/C/FactItem` | master `ac4c4226-8458-8085-8008-6a415e90b0cd`; component `ac4c4226-8458-8085-8008-6a415e9b8acc` | 0 | master complete |
| `New/C/ProfileCard` | master `ac4c4226-8458-8085-8008-6a41ddad2db9`; component `ac4c4226-8458-8085-8008-6a41dddfe866` | 2 | Discover and last-free clone reuse |
| `New/C/DecisionBar` | master `ac4c4226-8458-8085-8008-6a41dde0161f`; component `ac4c4226-8458-8085-8008-6a41ddf9d10b` | 3 | Discover, detail, and last-free reuse |
| `New/C/ProgressCard` | master `ac4c4226-8458-8085-8008-6a41ddfa5dc4`; component `ac4c4226-8458-8085-8008-6a41de16c763` | 0 | master complete; board-specific progress rows preserve RUN_A |
| `New/C/PackageCard` | master `ac4c4226-8458-8085-8008-6a41de1717ee`; component `ac4c4226-8458-8085-8008-6a41de2f494e` | 1 | selected Plus instance |
| `New/C/PhotoSlot` | master `ac4c4226-8458-8085-8008-6a426eb2347d`; component `ac4c4226-8458-8085-8008-6a426ebfe1a8` | 12 | empty slots reused across populated and cloned states |
| `New/C/FormField` | master `ac4c4226-8458-8085-8008-6a426ec063d1`; component `ac4c4226-8458-8085-8008-6a426ecfa32c` | 0 | master complete; variable-height screen fields authored semantically |
| `New/C/ChoicePill` | master `ac4c4226-8458-8085-8008-6a426ecfc756`; component `ac4c4226-8458-8085-8008-6a426ed8fad7` | 0 | master complete |
| `New/C/SettingRow` | master `ac4c4226-8458-8085-8008-6a426ed91b8c`; component `ac4c4226-8458-8085-8008-6a426ee5ba79` | 0 | master complete; five independent screen rows authored semantically |
| `New/C/EntitlementRow` | master `ac4c4226-8458-8085-8008-6a426ee5e8ed`; component `ac4c4226-8458-8085-8008-6a426ef9df54` | 0 | master complete |
| `New/C/InfoRow` | master `ac4c4226-8458-8085-8008-6a426efa5827`; component `ac4c4226-8458-8085-8008-6a426f0ecaa4` | 0 | master complete |
| `New/C/BottomSheet` | master `ac4c4226-8458-8085-8008-6a426f0f25cb`; component `ac4c4226-8458-8085-8008-6a426f2e4e41` | 0 | master complete; insufficient sheet authored over dimmed cloned context |
| `New/C/ProgressCard-Ready` | master `ac4c4226-8458-8085-8008-6a426f2ee4b6`; component `ac4c4226-8458-8085-8008-6a426f48e675` | 0 | representative `20/20 · 혜택 준비 완료` state on component strip |
| `New/C/PackageCard-Unselected` | master `ac4c4226-8458-8085-8008-6a426f491880`; component `ac4c4226-8458-8085-8008-6a426f5d80fc` | 1 | Starter/no-selection evidence |

Component strip: `New/Components`, node `ac4c4226-8458-8085-8008-6a415e52211d`. `export_shape` failed twice for the wide strip (`http error`); the complete strip and variants were inspected in the live Arc Penpot viewport.

## Boards

| frame_name | node_id | requirement_ids | export_checked | issues_fixed |
|---|---|---|---|---|
| `New/Discover` | `ac4c4226-8458-8085-8008-6a42ae82a05c` | REQ-01–10, REQ-31–35 | `export_shape` HTTP failure after retry; Arc screenshot checked | Pretendard applied; next-card edge, last-free copy, facts and sticky decision alignment checked |
| `New/ProfileDetail` | `ac4c4226-8458-8085-8008-6a42aec7ffe4` | REQ-03, REQ-04, REQ-08, REQ-15, REQ-31, REQ-33, REQ-35 | `export_shape` HTTP failure; Arc screenshot checked | private-field omission, compatibility wording, interests and sticky action checked |
| `New/ProfileEdit` | `ac4c4226-8458-8085-8008-6a44c6127311` | REQ-11–19, REQ-31–35 | PNG exported to `/tmp/stage5-profile-edit.png` and visually checked | readable Korean, 3/6 photo grid, six fields, exclusive style, five toggles and sticky save checked |
| `New/DailyLimit` | `ac4c4226-8458-8085-8008-6a44ef1d1aec` | REQ-09, REQ-20, REQ-21, REQ-29, REQ-31 | PNG exported to `/tmp/stage5-daily-limit.png`; Arc screenshot also checked | calm wait route and optional premium route hierarchy checked |
| `New/PremiumDiscover` | `ac4c4226-8458-8085-8008-6a44fee9ae86` | REQ-21, REQ-22, REQ-25, REQ-27, REQ-28, REQ-31–33, REQ-35 | PNG exported to `/tmp/stage5-premium.png`; Arc screenshot also checked | paid/free distinction, 16/20, price disclosure and pre-consumption CTA checked |
| `New/CoinShop` | `ac4c4226-8458-8085-8008-6a45409a4c00` | REQ-10, REQ-22–24, REQ-26, REQ-28, REQ-29, REQ-31–34 | PNG exported and visually checked | package totals 5,000/10,500/33,000; bonus +0/+500/+3,000; 16/20 and 7/10 consistency checked |
| `New/RewardsInfo` | `ac4c4226-8458-8085-8008-6a454f1bb4e6` | REQ-25–29, REQ-31 | PNG exported to `/tmp/stage5-rewards.png`; Arc screenshot also checked | included/excluded language and unresolved 20-view basis checked |
| `New/InsufficientCoin` | `ac4c4226-8458-8085-8008-6a455ae7efef` | REQ-29–31 | Arc screenshot checked | dimmed Premium context, 1,200/5,000/3,800 equation, recharge and cancel paths checked |
| `New/State/ProfileEdit-InitialEmpty` | `ac4c4226-8458-8085-8008-6a45778ac734` | REQ-12, REQ-16, REQ-31–33 | Arc screenshot checked | six empty slots, empty hints, no selected style and policy note visible |
| `New/State/ProfileEdit-Errors` | `ac4c4226-8458-8085-8008-6a4578efdfa9` | REQ-17, REQ-18 | Arc screenshot checked | both exact recovery messages and red semantic borders visible |
| `New/State/ProfileEdit-Saving` | `ac4c4226-8458-8085-8008-6a45795d7bd6` | REQ-19 | Arc screenshot checked | disabled overlay plus explicit `저장 중` action visible |
| `New/State/Discover-LastFree` | `ac4c4226-8458-8085-8008-6a458a7d9107` | REQ-09, REQ-20 | Arc screenshot checked | `오늘 마지막 무료 추천`, `9/10 · 1명 남음`, and next route visible |
| `New/State/Premium-FreeTicket` | `ac4c4226-8458-8085-8008-6a458abacd62` | REQ-27, REQ-28 | Arc screenshot checked | `2장 중 1장 사용`, explicit `제외`, opened profile and like/pass visible |

## Deviations

| blueprint_item | actual | reason | impact |
|---|---|---|---|
| Pretendard font probe | Initial probe used incorrect Font object property names and reported no face; the correct `Font.name/fontFamily` query found custom Pretendard and it was applied to all existing and subsequent `New/*` text. | Penpot Font API differs from the initial assumed shape. | Final inspected screens render in Pretendard; no visual fallback remains. |
| Six photo assets | All six `penpot.uploadMediaUrl` calls failed with `Failed to fetch`; blueprint-authorized subtle surfaces and Korean initials were used. | Penpot media fetch was unavailable during the run. | Layout and UX remain reviewable, but photographic brand fidelity is lower than intended. |
| PNG export checkpoint | `export_shape` intermittently returned `Failed to fetch`, `http error`, or timeout. Successful exports were inspected where available; otherwise the approved fallback used `penpot.viewport` plus Arc window screenshots. | Penpot export backend was intermittent while MCP stayed connected. | Every board/state was visually inspected through PNG or live viewport; failed export attempts are explicit above. |
| Auto-height recalc | A final resize pass returned `498` resized text nodes and `218` pre-pass height overflows. A later read-only query reported zero remaining overflow but also zero nodes still reporting `growType="auto-height"`; the exact post-resize grow-mode persistence could not be independently confirmed. | Penpot `resize()` appears to normalize text sizing metadata. | Inspected PNGs/screenshots show readable, unclipped Korean; Stage 6 should verify structural grow modes separately. |
| Hidden recovery artifact | `Discarded/Stage5/OrphanStatusTime` (`ac4c4226-8458-8085-8008-6a44c617835f`) remains hidden at Page root. | A failed font-weight transaction left one root text node; destructive cleanup was intentionally deferred. | Not visible in exports; Stage 6 may remove after confirming ownership. |

No `figma.variables.*` call was used. Tokens were kept as JS constants. RUN_A values are consistent across screens: `9/10`, `오늘 1명 남음`, `예시 코인 1,200`, `유료 1장`, `무료 보상 2장`, `16/20 · 4회 남음`, `7/10 · 3회 남음`, and insufficient balance `1,200 / 5,000 / 3,800`.

## Completion

| expected_frame | exists | exported | status |
|---|---|---|---|
| `New/Discover` | yes | Arc fallback after two HTTP failures | PASS for Stage 5 |
| `New/ProfileDetail` | yes | Arc fallback after HTTP failure | PASS for Stage 5 |
| `New/ProfileEdit` | yes | PNG + Arc | PASS for Stage 5 |
| `New/DailyLimit` | yes | PNG + Arc | PASS for Stage 5 |
| `New/PremiumDiscover` | yes | PNG + Arc | PASS for Stage 5 |
| `New/CoinShop` | yes | PNG + Arc | PASS for Stage 5 |
| `New/RewardsInfo` | yes | PNG + Arc | PASS for Stage 5 |
| `New/InsufficientCoin` | yes | Arc fallback | PASS for Stage 5 |
| `New/State/ProfileEdit-InitialEmpty` | yes | Arc fallback | PASS for Stage 5 |
| `New/State/ProfileEdit-Errors` | yes | Arc fallback | PASS for Stage 5 |
| `New/State/ProfileEdit-Saving` | yes | Arc fallback | PASS for Stage 5 |
| `New/State/Discover-LastFree` | yes | Arc fallback | PASS for Stage 5 |
| `New/State/Premium-FreeTicket` | yes | Arc fallback | PASS for Stage 5 |

All eight manifest destinations and five representative evidence frames exist. The required roots `New/Discover`, `New/ProfileEdit`, and `New/CoinShop` exist with their authored names. `2-airbnb` remained untouched, all authoring occurred on `황선태`, and the work is ready for Stage 6 visual critique with the noted asset, export, text-metadata, and hidden-artifact follow-ups.
