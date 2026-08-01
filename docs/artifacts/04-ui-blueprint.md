# UI blueprint — Airbnb-style dating prototype

## Run contract

| key | value |
|---|---|
| source_prd | `docs/examples/airbnb-dating.md` |
| reference_page | `2-airbnb` — read only |
| work_page | `황선태` — only authoring target |
| frame_prefix | `New/` |
| font | `Pretendard` (available); weights 400 and 500 only |
| prototype_dataset | `RUN_A` below; every board and state must use the same values |

Before authoring, switch to `황선태` in a separate Penpot call. In every later script, resolve and re-open `황선태` before touching nodes. Never open or mutate `2-airbnb`, `기존파일`, `중간공유`, or `최종제출` while authoring. All text uses `growType = "auto-height"`; after a batch is laid out, resize every auto-height text once to recalculate Korean metrics.

## Single prototype dataset

```js
const RUN_A = Object.freeze({
  viewer: { name: "윤아", age: 29, style: "진지한 관계" },
  assets: {
    dailySeen: 9, dailyLimit: 10, dailyRemaining: 1,
    coinExample: 1200, paidTickets: 1, freeRewardTickets: 2,
    rewardViews: 16, rewardViewsGoal: 20,
    paidRejects: 7, paidRejectsGoal: 10,
    specialPairPriceKRW: 10000, specialViewCoinExample: 5000
  },
  discover: {
    id: "seoyeon", name: "서연", age: 28, distance: "2.4km",
    intro: "주말엔 새로운 동네를 걷고 작은 전시를 봐요.",
    height: "165cm", job: "브랜드 마케터", region: "서울 성동구",
    interests: ["전시", "러닝", "커피"], style: "진지한 관계",
    imageKey: "profile_seoyeon"
  },
  next: { id: "minji", name: "민지", age: 30, imageKey: "profile_minji" },
  premium: {
    id: "jiwon", name: "지원", age: 30, distance: "4.1km",
    intro: "좋은 대화와 느긋한 여행을 오래 기억해요.",
    height: "168cm", job: "공간 디자이너", region: "서울 마포구",
    interests: ["건축", "여행", "와인"], style: "새로운 인연",
    imageKey: "profile_jiwon"
  },
  myProfile: {
    nickname: "윤아", intro: "함께 웃을 일이 많은 관계를 찾고 있어요.",
    height: "163cm", job: "콘텐츠 에디터", region: "서울 용산구",
    interests: "책, 산책, 독립영화", style: "진지한 관계",
    visibility: { height: true, job: true, region: true, interests: true, style: true }
  },
  packages: [
    { id: "starter", priceKRW: 5000, base: 5000, bonus: 0, total: 5000, label: "가볍게 시작" },
    { id: "plus", priceKRW: 10000, base: 10000, bonus: 500, total: 10500, label: "가장 많이 선택" },
    { id: "max", priceKRW: 30000, base: 30000, bonus: 3000, total: 33000, label: "보너스 10%" }
  ]
});
```

Consistency assertions for the author: show `9/10`, `오늘 1명 남음`, `예시 코인 1,200`, `유료 1장`, `무료 보상 2장`, `열람 16/20 · 4회 남음`, and `유료 패스 7/10 · 3회 남음` everywhere those values occur. One special view is `예시 5,000코인`; therefore the insufficient state is `현재 1,200 / 필요 5,000 / 부족 3,800 예시 코인`. Package totals equal base plus bonus. Do not state that KRW and coins are a finalized exchange rate: every coin price/package carries `예시`.

## JS token constants

```js
const T = Object.freeze({
  color: {
    text: "#0A0A0A", textSecondary: "#717375", surface: "#FFFFFF",
    surfaceSubtle: "#F7F7F7", border: "#D8DCE0", accent: "#D42F4D"
  },
  opacity: { disabled: 0.40, backdropBoard: 0.34 },
  font: {
    family: "Pretendard",
    caption: { size: 12, weight: "400", line: 16 },
    captionEmphasis: { size: 12, weight: "500", line: 16 },
    body: { size: 14, weight: "400", line: 18 },
    bodyEmphasis: { size: 14, weight: "500", line: 18 },
    bodyLarge: { size: 16, weight: "400", line: 22 },
    bodyLargeEmphasis: { size: 16, weight: "500", line: 22 },
    sectionTitle: { size: 22, weight: "500", line: 28 },
    pageTitle: { size: 32, weight: "500", line: 38 }
  },
  space: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32 },
  radius: { control: 6, media: 12, pill: 999 },
  stroke: { hairline: 1 },
  shadow: { search: { x: 0, y: 0, blur: 16, spread: 0, color: "rgba(0,0,0,0.12)" } },
  size: {
    viewportW: 375, contentW: 327, screenInset: 24, statusH: 44,
    icon: 24, iconCompact: 18, touch: 48, ctaH: 46,
    bottomNavH: 89, homeIndicatorH: 21, stickyActionH: 89
  }
});

const FILL = Object.freeze({
  surface: [{ fillColor: T.color.surface, fillOpacity: 1 }],
  subtle: [{ fillColor: T.color.surfaceSubtle, fillOpacity: 1 }],
  accent: [{ fillColor: T.color.accent, fillOpacity: 1 }],
  border: [{ fillColor: T.color.border, fillOpacity: 1 }],
  text: [{ fillColor: T.color.text, fillOpacity: 1 }],
  secondary: [{ fillColor: T.color.textSecondary, fillOpacity: 1 }]
});
```

| group | key | value | reference_evidence |
|---|---|---|---|
| color | `T.color.*` | `#0A0A0A`, `#717375`, `#FFFFFF`, `#F7F7F7`, `#D8DCE0`, `#D42F4D` | Directly observed semantic text, surface, divider, and CTA values in `02-reference-system.md` |
| typography | `T.font.*` | 12/16, 14/18, 16/22, 22/28, 32/38; weights 400/500 | Observed Airbnb scale; 38px page-title line is the nearest stable auto-height rhythm derived from observed 32px titles |
| spacing | `T.space.*` | 4, 8, 12, 16, 24, 32 | 24px observed screen inset; remaining values are subdivisions/inter-section rhythm already recorded as 8–24px |
| radius | `T.radius.*` | control 6, media 12, pill 999 | Observed CTA, media, and full-pill geometry |
| sizing | `T.size.*` | viewport 375, content 327, touch 48, CTA 46, bottom 89 | Observed reference frames, content column, rows, CTA, and bottom regions |
| opacity | `backdropBoard` | 0.34 | Derived workaround required by repository: dim cloned board rather than draw a translucent scrim |

## Component registry

Create masters on a component strip 80px above the first board, names prefixed `New/C/`. Never rename or remove children after component creation; if wrong, create a corrected `.../v2` master. Repeated content below must be instances, with Penpot fills (`{fillColor, fillOpacity}`) for safe overrides.

| component_name | anatomy | dimensions | layout | variants | instance_overrides |
|---|---|---|---|---|---|
| `New/C/TopBar` | leading 48 touch target, centered title, trailing 48 target | 375×56 | horizontal, fixed; px 16, gap 8, center | root-title / back-title / close-title | title, leading glyph, trailing label/glyph, trailing visibility |
| `New/C/AssetPill` | optional 18 icon, label, strong value | auto×32, min 76 | horizontal auto; px 12, gap 6, center; subtle fill, pill radius | daily / paid-ticket / free-ticket / coin | icon glyph, label, value, accent/text colors |
| `New/C/StatusChip` | optional 16 icon + one/two-line label | auto×28 or auto-height | horizontal auto; px 10, py 6, gap 6; pill | neutral / match / warning / complete | copy, icon, accent fill/text; match must include words, never color only |
| `New/C/ProfileCard` | media, pager, identity, intro, fact row, compatibility chip, detail affordance | 327×526 | vertical fixed width; media 327×330 then content px 16 py 14 gap 10 | discover-match / discover-mismatch / last-free / premium-opened | photo fill, name, age, distance, intro, facts, interests, chip copy, pager, badge |
| `New/C/FactItem` | compact 18 icon + label | 145×24 | horizontal fixed; gap 6; centered vertically | height / job / region / interest / style | glyph and label; row itself may be hidden for private fields |
| `New/C/DecisionBar` | context label + two equal actions | 375×89 | vertical; top border; inner 327×56 at x24, gap 12 | free / premium-paid / premium-free-reward | person name, context, action labels; accent reserved for Like |
| `New/C/Button` | centered label, optional 18 icon | primary 327×46; half 157×46; compact auto×46 | horizontal center, px 16, gap 8, radius 6 | primary / secondary-outline / text / disabled | label, icon, width, fill, opacity; primary accent only |
| `New/C/PhotoSlot` | image/add surface, order badge, main badge, drag handle | 101×124 | fixed, radius 12; overlays inset 8 | empty / filled / primary / disabled-full | image fill, order number, badges, opacity |
| `New/C/FormField` | label, 48 input surface, optional helper/error | 327×auto | vertical auto; gap 6 | empty / populated / error / disabled | label, value/hint, helper, border color, multiline height (intro 88) |
| `New/C/ChoicePill` | centered text | 101×44 | horizontal center; radius pill; border | selected / unselected / disabled | text, selected border/accent, width |
| `New/C/SettingRow` | leading label + optional helper, trailing toggle | 327×48 | horizontal fixed; bottom hairline; space-between | on / off / disabled | label, helper, toggle state; each public field gets an instance |
| `New/C/ProgressCard` | title/value row, 6px track, remaining copy, rule link | 327×auto, min 116 | vertical auto; p16, gap 10; border 1, radius 12 | views / paid-rejects / ready / earned | current/goal, remaining, reward, rule note; track ratio |
| `New/C/PackageCard` | label, price, base+bonus, total, optional badge/check | 327×108 | vertical fixed; p16, gap 6; border/radius 12 | unselected / selected / no-bonus | all RUN_A package fields; selected border becomes accent 2px |
| `New/C/EntitlementRow` | radio/check, ticket name, balance, count rule | 327×64 | horizontal fixed; p12, gap 12; border/radius 12 | paid-selected / free-selected / unavailable | ticket name, balance, helper, selection state |
| `New/C/InfoRow` | leading 24 icon, title/helper, trailing value/chevron | 327×56 | horizontal fixed; gap 12; bottom divider | plain / navigation / success | title, helper, value, icon, chevron |
| `New/C/BottomSheet` | handle, title, body slot, action stack | 375×370 | vertical; px24 pt12 pb21 gap16; top radii 12 | insufficient / generic | title, body values, CTA and cancel labels |

## Board placement map

Place all top-level boards in one left-to-right review grid, 80px apart horizontally and 120px between rows. These are Page coordinates, not child coordinates.

| frame_name | page_x | page_y | review_role |
|---|---:|---:|---|
| `New/Discover` | 0 | 400 | required root; default-match with last-free evidence |
| `New/ProfileDetail` | 455 | 400 | manifest detail and hidden-private-field evidence |
| `New/ProfileEdit` | 910 | 400 | required populated form |
| `New/DailyLimit` | 1365 | 400 | exhausted route |
| `New/PremiumDiscover` | 1820 | 400 | pre-consumption gate + reward-ready evidence |
| `New/CoinShop` | 2275 | 400 | required selected-package commerce |
| `New/RewardsInfo` | 2730 | 400 | rule explainer + free-ticket exclusion |
| `New/InsufficientCoin` | 3185 | 400 | dimmed premium clone + bottom sheet |
| `New/State/ProfileEdit-InitialEmpty` | 0 | 2200 | representative initial-empty |
| `New/State/ProfileEdit-Errors` | 455 | 2200 | nickname + intro validation evidence |
| `New/State/ProfileEdit-Saving` | 910 | 2200 | disabled editing + saving evidence |
| `New/State/Discover-LastFree` | 1365 | 2200 | explicit 9/10 final-free state |
| `New/State/Premium-FreeTicket` | 1820 | 2200 | free reward ticket rejection-excluded evidence |

## Board specifications

All boards have x-local 0, width 375, white background, clipping on, fixed width. Status bar occupies y=0–44. Long boards are review canvases (not simulated viewport clipping); use vertical auto layout for content and explicit sticky-region placement at the specified final y.

| frame_name | size | sections | fixed_regions | background | requirement_ids |
|---|---|---|---|---|---|
| `New/Discover` | 375×812 | status 44; header 56; assets 40; deck 526; action 89; safe remainder 57 | action bar y723–812 | white | REQ-01–10, REQ-31–35 |
| `New/ProfileDetail` | 375×1280 | status 44; topbar 56; hero 390; identity 92; compatibility 112; about 146; facts 184; interests 86; action 89 | topbar y44; action y1191–1280 | white | REQ-03,04,08,15,31,33,35 |
| `New/ProfileEdit` | 375×1600 | status 44; topbar 56; completion 52; photos 310; basics 554; style 96; visibility 300; save 89 | topbar y44; save y1511–1600 | white | REQ-11–19,31–35 |
| `New/DailyLimit` | 375×812 | status 44; topbar 56; hero-status 274; explanation 144; premium option 170; actions 124 | no nav; action stack y664–788 | white | REQ-09,20,21,29,31 |
| `New/PremiumDiscover` | 375×1050 | status 44; topbar 56; entitlement 184; reward 142; preview/profile 480; action 89; safe 55 | action y961–1050 | white | REQ-21,22,25,27,28,31–33,35 |
| `New/CoinShop` | 375×1220 | status 44; topbar 56; assets 132; pricing 74; packages 348; rewards 260; checkout 89; section gaps | checkout y1131–1220 | white | REQ-10,22–24,26,28,29,31–34 |
| `New/RewardsInfo` | 375×812 | status 44; topbar 56; intro 72; progress cards 264; count rules 214; action 89; gaps | action y723–812 | white | REQ-25–29,31 |
| `New/InsufficientCoin` | 375×1050 | cloned premium background + sheet y680–1050 | sheet y680–1050; cloned background opacity .34; no separate scrim | white | REQ-29–31 |
| `New/State/ProfileEdit-InitialEmpty` | 375×1600 | same as ProfileEdit; empty slots/fields/unselected style | save remains visible but copy says requirements not finalized | white | REQ-12,16,31–33 |
| `New/State/ProfileEdit-Errors` | 375×1600 | same as ProfileEdit; populated, two inline errors visible | save y1511–1600 | white | REQ-17,18 |
| `New/State/ProfileEdit-Saving` | 375×1600 | same as ProfileEdit; filled UI at opacity .40 where interactive | bottom CTA `저장 중` + 18px progress glyph | white | REQ-19 |
| `New/State/Discover-LastFree` | 375×812 | Discover clone with explicit last-free pill and 9/10 | action y723–812 | white | REQ-09,20 |
| `New/State/Premium-FreeTicket` | 375×1050 | opened premium profile; free ticket selected; exclusion notice | action y961–1050 | white | REQ-27,28 |

## Section specifications

Coordinates are local to each board. Every named section is a Frame/Board with semantic children. For non-auto-layout wrappers, after `appendChild`, explicitly set each child to `parent.x + dx`, `parent.y + dy`.

| frame_name | section | node_hierarchy | padding | gap | sizing | content |
|---|---|---|---|---:|---|---|
| `New/Discover` | Header y44 | `Header > Title + ShopButton` | x24 | 8 | 327×56, horizontal | title `오늘의 인연`; trailing `코인·열람권` |
| `New/Discover` | Assets y100 | `Assets > DailyPill + PaidTicketPill + FreeTicketPill` | x24 | 8 | 327×40, horizontal | `오늘 1명 남음 · 9/10`, `유료 1장`, `무료 2장` |
| `New/Discover` | Deck y148 | `Deck > NextCardPreview + ProfileCardInstance` | x24 | 0 | 327×526, overlay | next preview x8 y0 w311 h500; current x0 y8; preview shows only 민지 photo edge, never competing text |
| `New/Discover` | Profile card | `Media > Image + LastFreeBadge + Pager`; `Content > Identity + Intro + Facts + MatchChip + DetailLink` | media none; content 16 | 10 | media 327×330, content 327×196 | `서연, 28 · 2.4km`; intro; `165cm · 브랜드 마케터`, `서울 성동구 · 전시`; chip `같은 연애 스타일 · 진지한 관계`; `프로필 자세히` |
| `New/Discover` | Decision y723 | `DecisionBar/Instance` | x24 inner | 12 | 375×89 | context `서연님을 더 알아볼까요?`; buttons `패스`, `좋아요` |
| `New/ProfileDetail` | Hero y100 | `Hero > Image + BackContextBadge + Pager` | 0 | 8 | 375×390 | 서연 image, `무료 추천에서 보는 중`, `1 / 4` |
| `New/ProfileDetail` | Identity y490 | `Content > NameDistance + Intro` | x24 py20 | 8 | 327×92 | `서연, 28`, `2.4km`; same intro |
| `New/ProfileDetail` | Compatibility y582 | `Section > Heading + PairLabels + Sentence` | x24 py16 | 10 | 327×112 | `우리의 연애 스타일`; `나 · 진지한 관계`, `서연 · 진지한 관계`; `같은 방향의 만남을 찾고 있어요` |
| `New/ProfileDetail` | About y694 | `Section > Heading + Body + MoreLink` | x24 py20 | 10 | 327×146 | `서연님 소개`; `쉬는 날엔...`; `더 보기` |
| `New/ProfileDetail` | Facts y840 | `Section > Heading + FactGrid` | x24 py20 | 12 | 327×184 | height/job/region/style only. Interests is intentionally omitted here to prove private-fields-hidden; do not show `비공개`. |
| `New/ProfileDetail` | Interests y1024 | `Section > Heading + Chips` | x24 py16 | 8 | 327×78 | only public `전시`, `러닝`, `커피`; if privacy proof requires strict omission, label section `함께 이야기할 주제` rather than field name |
| `New/ProfileDetail` | Decision y1191 | `DecisionBar/Instance` | x24 inner | 12 | 375×89 | `무료 추천 · 서연`; `패스`, `좋아요` |
| `New/ProfileEdit` | Header y44 | `TopBar/Instance` | 16 | 8 | 375×56 | title `내 프로필`; trailing `저장` text action |
| `New/ProfileEdit` | Completion y100 | `Completion > Title + Helper` | x24 py8 | 4 | 327×52 | `프로필을 나답게 채워보세요`; `공개할 정보는 직접 고를 수 있어요` |
| `New/ProfileEdit` | Photos y152 | `Photos > HeadingRow + Grid + Helper` | x24 py16 | 12 | 327×310 | `사진 3/6`; grid 3 columns × 2 rows, column gap 12, row gap 12; slots: 윤아 사진 1–3 + empty 4–6; first `대표`, filled slots have drag glyph; `2장부터 길게 눌러 순서를 바꿀 수 있어요` |
| `New/ProfileEdit` | Basics y462 | `Basics > Heading + Fields` | x24 py20 | 16 | 327×554 | fields: `닉네임 윤아` 70h, `한 줄 소개 ...` 116h, `키 163cm`, `직업 콘텐츠 에디터`, `지역 서울 용산구`, `관심사 책, 산책, 독립영화` each 70h |
| `New/ProfileEdit` | Style y1016 | `Style > Heading + ChoiceRow` | x24 py12 | 8 | 327×96 | selected `진지한 관계`; unselected `새로운 인연`, `친구`; exactly one selected |
| `New/ProfileEdit` | Visibility y1112 | `Visibility > Heading + ExampleNote + SettingRows` | x24 py16 | 0 | 327×300 | `공개 범위`; `공개 항목 예시`; 5 rows: 키 on, 직업 on, 지역 on, 관심사 off, 연애 스타일 on |
| `New/ProfileEdit` | Save y1511 | `StickySave > Button/Primary + SafeZone` | x24 pt11 | 0 | 375×89 | `저장` |
| `New/DailyLimit` | Completion y116 | `Completion > Ring + Title + Body` | x24 | 12 | 327×258, vertical center | ring `10/10`; `오늘 10명을 모두 봤어요`; `다음 날 무료 추천이 다시 제공돼요` |
| `New/DailyLimit` | Calm option y390 | `WaitCard > Heading + Body` | 16 | 8 | x24, 327×124 | `오늘은 여기까지`; `충전하지 않아도 괜찮아요. 다음 날 새로운 추천을 만날 수 있어요.` |
| `New/DailyLimit` | Premium option y530 | `PremiumCard > Badge + Heading + Price + Body` | 16 | 8 | x24, 327×134 | `선택`; `특별 상대 더 보기`; `2명 기준 10,000원`; `인기가 많고 내 선호에 맞을 만한 상대를 더 볼 수 있어요.` |
| `New/DailyLimit` | Actions y664 | `Actions > Primary + TextButton` | x24 | 8 | 327×124 | `특별 상대 알아보기`; `닫고 다음 날 다시 보기` |
| `New/PremiumDiscover` | Header y44 | `TopBar/Instance` | 16 | 8 | 375×56 | back; title `특별한 인연`; rewards link |
| `New/PremiumDiscover` | Entitlement y116 | `Gate > Heading + Price + EntitlementRows` | x24 | 10 | 327×168 | `어떤 이용권으로 볼까요?`; `특별 상대 2명 기준 10,000원`; paid selected `유료 열람권 1장`; free row `무료 보상권 2장` |
| `New/PremiumDiscover` | Reward y300 | `ProgressCard/Views` | x24 | 10 | 327×126 | `가장 잘 맞는 상대까지`; `16/20 · 4회 남음`; `90% 이상인 특별 상대 1명`; `집계 기준 확인 필요` |
| `New/PremiumDiscover` | Preview y442 | `LockedProfile > Image + SoftCover + Identity + Reason` | x24 | 12 | 327×410 | photo is visible but softly cropped/obscured below face; `지원, 30 · 4.1km`; `내 선호와 맞을 만한 특별 상대`; no fabricated personal probability |
| `New/PremiumDiscover` | Gate CTA y864 | `Button/Primary + RuleNote` | x24 | 8 | 327×81 | `상대 보기`; `유료 열람권 1장을 사용해요`; reward-ready chip `16/20 · 4회 남음` stays evidence, not falsely ready |
| `New/PremiumDiscover` | Bottom y961 | `DecisionBar` | x24 inner | 12 | 375×89 | pre-consumption variant shows neutral `뒤로가기` plus primary `상대 보기`, not like/pass |
| `New/CoinShop` | Assets y116 | `AssetSummary > 3 AssetPills + EntryLink` | x24 | 8 | 327×116 | `예시 코인 1,200`; `유료 1장`; `무료 보상 2장`; `특별 상대 보기` |
| `New/CoinShop` | Pricing y248 | `PricingNote > Title + Body` | 16 | 6 | x24, 327×74 | `특별 상대 2명 기준 10,000원`; `코인 환산은 화면 검증용 예시예요` |
| `New/CoinShop` | Packages y338 | `Packages > Heading + 3 PackageCard instances` | x24 | 8 | 327×348 | exact RUN_A packages; Plus selected; every card contains `예시`; bonus explicitly `+0`, `+500`, `+3,000` and totals 5,000/10,500/33,000 |
| `New/CoinShop` | Rewards y702 | `Rewards > Heading + ProgressCardViews + ProgressCardRejects` | x24 | 12 | 327×260 | `열람 16/20 · 4회 남음 · 90% 이상 상대 1명`; `유료 상대 패스 7/10 · 3회 남음 · 무료 열람권 2장`; `무료 보상권으로 본 상대의 패스는 제외` |
| `New/CoinShop` | Checkout y1131 | `StickyCheckout > Summary + PrimaryButton` | x24 pt11 | 12 | 375×89 | `10,000원 · 총 10,500 예시 코인`; `결제로 이동`; do not depict payment result |
| `New/RewardsInfo` | Intro y116 | `Intro > PageTitle + Body` | x24 | 8 | 327×72 | `혜택을 투명하게`; `무엇이 쌓이고 언제 받을 수 있는지 확인하세요.` |
| `New/RewardsInfo` | Progress y204 | `Progress > ProgressCardViews + ProgressCardRejects` | x24 | 12 | 327×264 | exact RUN_A 16/20 and 7/10 values/rewards |
| `New/RewardsInfo` | Rules y484 | `Rules > Heading + IncludedRow + ExcludedRow + Note` | x24 py16 | 12 | 327×198 | included `유료로 본 상대를 패스 · 포함`; excluded `무료 보상권으로 본 상대를 패스 · 제외`; `20회 열람 집계 기준 확인 필요` |
| `New/RewardsInfo` | Action y723 | `StickyAction > PrimaryButton` | x24 pt11 | 0 | 375×89 | `확인하고 돌아가기` |
| `New/InsufficientCoin` | Background | clone full `New/PremiumDiscover`; set clone opacity .34 | 0 | 0 | 375×1050 | preserve recognizable context; do not add a translucent rectangle scrim |
| `New/InsufficientCoin` | Sheet y680 | `BottomSheet > Handle + Title + Body + BalanceGrid + Primary + Cancel` | x24 | 16 | 375×370 | `코인이 조금 부족해요`; `현재 1,200`, `필요 5,000`, `부족 3,800 예시 코인`; `코인 충전 보기`; `취소하고 돌아가기` |
| `New/State/ProfileEdit-InitialEmpty` | evidence | clone ProfileEdit structure; six empty PhotoSlot instances and empty FormFields | same | same | 375×1600 | hints `닉네임을 입력해 주세요`, `나를 한 문장으로 소개해 주세요`, etc.; no style selected; `저장 요건은 정책 확인이 필요해요` |
| `New/State/ProfileEdit-Errors` | evidence | clone populated edit; nickname and intro field error variants | same | same | 375×1600 | `이미 사용 중인 닉네임이에요. 다른 이름을 입력해 주세요.`; intro current count text + `허용 길이를 초과했어요. 소개를 줄여 주세요.`; no invented max |
| `New/State/ProfileEdit-Saving` | evidence | clone populated edit; inputs, slots, choices opacity .40; disabled actions | same | same | 375×1600 | `저장 중`; spinner glyph plus text; no success/failure promise |
| `New/State/Discover-LastFree` | evidence | clone Discover; LastFree badge and daily pill strengthened | same | same | 375×812 | `오늘 마지막 무료 추천`; `9/10 · 1명 남음`; after action route label `다음은 오늘의 추천 완료` |
| `New/State/Premium-FreeTicket` | evidence | clone Premium open state; full 지원 profile; free entitlement selected | same | same | 375×1050 | `무료 보상권 2장 중 1장 사용`; `이 상대의 패스는 무료권 보상 진행도에서 제외돼요`; bottom like/pass |

## Node naming contract

Use `/` hierarchy in names: `New/Discover/Header`, `New/Discover/Deck/ProfileCard`, `New/ProfileEdit/Photos/Slot-01`, `New/CoinShop/Packages/Plus`, `New/RewardsInfo/Rules/Excluded`, and `New/InsufficientCoin/Sheet`. Masters use `New/C/...`; instances retain semantic destination names rather than `Instance 1`. Decorative primitives are named by role (`Media/Image`, `Divider`, `Progress/Track`, `Progress/Fill`, `Icon/Search`), never `Rectangle N` or `Frame N`.

Auto-layout rules: all section stacks are vertical auto layout with `horizontalSizing="fix"` and fixed 327 width; text is auto-height; rows are horizontal with fixed width and center alignment; only true overlay containers (photo badges/pager, card deck, bottom sheet background) are non-auto-layout. Never use `layoutGrow` as a spacer; set explicit section heights and local y positions above. Variable text cells use fixed widths: identity 235, trailing values 72 right-aligned, status chip max 295.

## Assets

Upload each URL once with `await penpot.uploadMediaUrl(asset_key, source_url)` and reuse the returned media object. Use `fillImage` inside Penpot-format fills. Crop `cover`; position faces in the upper 35–45% of the crop. If upload fails, use the listed fallback immediately and keep the exact same frame dimensions.

| asset_key | purpose | source_url | crop | fallback |
|---|---|---|---|---|
| `profile_seoyeon` | primary Discover and detail person photo | `https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=85` | cover; center 50% 36% | subtle `#F7F7F7` surface + 88px circular initials `서연`; never gradient |
| `profile_minji` | next-card edge preview | `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85` | cover; center 50% 34% | subtle surface + initials `민지` |
| `profile_jiwon` | premium profile and insufficient background | `https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=85` | cover; center 50% 35% | subtle surface + initials `지원` |
| `profile_yuna_1` | my-profile primary slot | `https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=85` | cover; center 50% 35% | subtle surface + `윤아 1` |
| `profile_yuna_2` | my-profile second slot | `https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=800&q=85` | cover; center | subtle surface + `윤아 2` |
| `profile_yuna_3` | my-profile third slot | `https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=85` | cover; center 50% 38% | subtle surface + `윤아 3` |
| `icons` | back, close, coin, ticket, height, work, pin, heart, pass, chevron, drag | no external dependency; construct with simple 16/18/24px line/vector primitives or Unicode only if visually stable | 24px box, 2px near-black strokes | labelled text/icon pair; never unlabeled ambiguous glyph |

## Representative-state evidence checklist

| required_evidence | implementation | visible proof in PNG |
|---|---|---|
| `initial-empty` | `New/State/ProfileEdit-InitialEmpty` | six empty slots, empty hints, no selected style, policy note |
| validation error | `New/State/ProfileEdit-Errors` | both exact inline error sentences and error border/status |
| saving | `New/State/ProfileEdit-Saving` | controls visibly disabled plus `저장 중` text |
| last-free | main `New/Discover` plus explicit state clone | `9/10`, `1명 남음`, `오늘 마지막 무료 추천` |
| reward-ready | `New/PremiumDiscover` uses progress evidence; a `ready` ProgressCard variant sits in the component strip with `20/20 · 혜택 준비 완료` | component instance is clearly labelled `대표 상태 · 달성 시`; it does not alter RUN_A current state |
| free-ticket-excluded | `New/State/Premium-FreeTicket` and Rewards rule row | explicit `제외` word and free ticket used copy |
| insufficient | `New/InsufficientCoin` | same-unit current/required/shortfall plus cancel and recharge paths |
| no-selection | PackageCard unselected variants on component strip labelled `대표 상태 · 선택 전` | disabled checkout button variant visible beside master; main shop remains selected for useful commerce review |

## Authoring order

Use small batches. At every checkpoint re-open `황선태` in the script, export the named frame/component strip, inspect PNG, correct layout, then continue. If an export is unexpectedly blank, export once more before treating it as missing.

| order | object | depends_on | export_checkpoint |
|---:|---|---|---|
| 1 | Page gate, font check, `T`, `FILL`, media uploads | none | return selected Page name, available Pretendard faces, and media upload status; no shapes on any other Page |
| 2 | component strip: TopBar, Button, AssetPill, StatusChip, FactItem | tokens | export strip; check text baselines, 44–48px touch size, and accent scarcity |
| 3 | ProfileCard, DecisionBar, ProgressCard, PackageCard | batch 2 | export strip; verify 327px widths, image crop, selected/unselected and ready variants |
| 4 | PhotoSlot, FormField, ChoicePill, SettingRow, EntitlementRow, BottomSheet | batch 2 | export strip; verify all variants and Korean auto-height; do not rename/remove children after component creation |
| 5 | `New/Discover`, `New/ProfileDetail` | components + RUN_A media | export each; confirm face unobscured, next-card edge, last-free text, facts, hidden private row, sticky action alignment |
| 6 | `New/State/Discover-LastFree` | Discover | export; confirm 9/10, one remaining, next route visible |
| 7 | `New/ProfileEdit` | form components + Yuna media | export; confirm 2×3 grid, order handles, six inputs, exclusive style, five independent toggles, save |
| 8 | three ProfileEdit state frames | ProfileEdit | export each; verify empty, both errors, and disabled saving state are legible without relying only on color |
| 9 | `New/DailyLimit` | buttons + RUN_A | export; confirm calm wait route and optional premium route have distinct hierarchy |
| 10 | `New/PremiumDiscover`, `New/State/Premium-FreeTicket` | entitlement/profile/progress components | export both; confirm pre-consumption disclosure, 16/20, paid vs free ticket, and included/excluded rule |
| 11 | `New/CoinShop` | package/progress components | export; check package arithmetic, every `예시` label, bonus comparison, 7/10 and 16/20 consistency, selected checkout |
| 12 | `New/RewardsInfo` | progress/info components | export; confirm remaining counts, both rewards, include/exclude language and unresolved 20-view basis |
| 13 | `New/InsufficientCoin` | completed Premium board + BottomSheet | clone Premium, set clone opacity .34, add sheet; export twice; confirm 1,200/5,000/3,800 equation and both paths |
| 14 | full review grid | all boards | export every top-level frame once more; run auto-height resize pass; confirm no clipped Korean text, all 8 manifest destinations, five evidence frames, component instances, semantic names, and exact work Page |

## Author completion handoff

The author log must list every created top-level frame ID, every component master ID and instance count, each successful export, and any fallback asset used. It must explicitly confirm: `2-airbnb` remained untouched; all authoring occurred on `황선태`; `New/Discover`, `New/ProfileEdit`, and `New/CoinShop` exist with exact names; all eight manifest destinations exist; representative states are exported; RUN_A arithmetic and cross-screen counts match; and no `figma.variables.*` call was used.
