# Airbnb reference system audit

> Inspection scope: the PRD-selected `2-airbnb` Page only. The Page was inspected through `penpot.currentFile.pages`/Page shape lookup without opening it or modifying any shape. Values marked **Observed** are direct node properties; guidance marked **Derived** is an inference for the new product.

## Reference identity

| reference_page | inspected_frames | font_availability |
|---|---|---|
| `2-airbnb` (`3df10bbd-5fbf-4e31-8cc7-17d5694e2383`) | `Explore 1.1` (`dfa26dd0-7670-5af8-9dc9-580a4679c798`, 375×812); `listing-details` (`f68a7c04-be34-5c0e-ba4e-bb5856003ac3`, 375×3475); `Wishlist 2.1` (`c9f6f2f0-d172-5eca-9579-9325d0212faa`, 375×812); `Inbox 4.1` (`e55ec4c3-38b3-55f0-b724-9ffe8b075c0d`, 375×812); `Profile 5.1` (`5528a566-161d-5203-a545-3fac22920efa`, 375×812) | **Observed:** all 144 reference text nodes use `Airbnb Cereal App`, but that family is not present in `penpot.fonts.all`. `Pretendard`, `Noto Sans KR`, and `Inter` are available. **Derived:** use `Pretendard` for Korean UI (400/500) and preserve the observed sizes/line-height rhythm; do not rely on silent Airbnb Cereal substitution. |

## Tokens

| category | token_name | value | evidence_node | confidence |
|---|---|---|---|---|
| Color | `color.text.primary` | `#0A0A0A` | listing title `Text 716` (`80ed8b49-5383-544d-b4b1-ac92709e944d`); location label `Text 26` (`de8112a8-24f2-533c-9589-3638898ff48e`) | High — observed repeatedly |
| Color | `color.text.secondary` | `#717375` | listing supporting copy `Text 766` (`50ee6061-4ae1-5ee3-ab6d-f44948586813`); Explore metadata `Text 25` (`f4b0fae6-2646-5362-848e-8b9b2422eaa9`) | High — observed repeatedly |
| Color | `color.surface.base` | `#FFFFFF` | `listing-details` (`f68a7c04-be34-5c0e-ba4e-bb5856003ac3`); bottom navigation `Frame 96` (`91f103ab-77d8-5073-96f0-872ee7ba148c`) | High |
| Color | `color.surface.subtle` | `#F7F7F7` | Explore category divider `Frame 62` (`816589af-a211-506b-93aa-e1f7a4d482c9`, 2px stroke) | Medium — observed as separator/surface cue |
| Color | `color.border.muted` | `#D8DCE0` at 1px | section/card border `Frame 850` (`bbf9d8dc-79ec-596d-a105-4aaac19351b6`); listing sticky footer `Frame 863` (`8707ba99-2728-525c-a72c-e8384a84c487`) | High — 30 observed strokes |
| Color | `color.brand.accent` | `#D42F4D` | primary CTA `Frame 855` (`6d5cce39-a9dc-52fd-860d-db263be418dc`); active nav label `Text 1419` (`acaa6f88-fd43-5da2-b4ec-3979af456e6b`) | High |
| Typography | `type.caption` | 12px / 400–500 / line-height ≈16px | image count `Text 711` (`7a90ed4a-510f-5732-b859-77db41f70ff7`); category label `Text 31` (`36ed72e0-dbe6-5731-9bf4-dfdab12d35f6`) | High — 37 nodes |
| Typography | `type.body.small` | 14px / 400 / line-height 18px | `Text 712` (`c5cb4695-2537-5c15-a0dd-f647e444d754`); `Text 25` (`f4b0fae6-2646-5362-848e-8b9b2422eaa9`) | High — 68 nodes |
| Typography | `type.body.emphasis` | 14px / 500 / line-height 18px | Explore card title `Text 26` (`de8112a8-24f2-533c-9589-3638898ff48e`); link `Text 761` (`ea789a64-8d00-5967-853e-725a16b39a5e`) | High |
| Typography | `type.body.large` | 16px / 400–500 / line-height 22px | rating `Text 715` (`de9add58-6614-5938-8219-cd8e14c8735a`); feature title `Text 767` (`ad7de957-f773-537e-972a-cd3145e7daf4`) | High — 23 nodes |
| Typography | `type.section-title` | 22px / 500 / line-height 28px | host title `Text 769` (`ec8c4dbe-e2a7-5578-80ec-ca7c9309bb85`); section heading `Text 758` (`fcb505f3-6467-57d4-840e-12ec541579bf`) | High — 10 nodes |
| Typography | `type.page-title` | 32px / 500 | Wishlist title `Text 1415` (`ec6b3108-1624-50b8-b458-8dde1b91c5e5`); Inbox title `Text 2116` (`a77f7bfb-3fad-5a53-a4bb-a4eaeded39e8`) | High — observed on three tab roots |
| Radius | `radius.media` | 12px | Explore hero media `Frame 48` (`bf8ba31e-54de-5e02-98fe-3fe2503b6cbb`, 327×310); wishlist thumbnails `Frame 1415` (`d0db9321-f74a-5910-980f-1c22e03068e6`, 70×70) | High |
| Radius | `radius.control` | 6px | primary CTA `Frame 855` (`6d5cce39-a9dc-52fd-860d-db263be418dc`, 101×46) | High |
| Radius | `radius.pill` | 20–43px / full pill | search pill `Frame 68` (`64a84519-8139-5fb6-88b5-2268dff196b2`, radius 43); compact badges such as `Frame 735` (`f8e04db3-9dc7-571c-8e8d-8233b73ae8bb`, radius 20) | High |
| Elevation | `shadow.search` | `0 0 16px rgba(0,0,0,0.12)` | search pill `Frame 68` (`64a84519-8139-5fb6-88b5-2268dff196b2`) | High — only explicit drop shadow observed |
| Spacing | `space.screen` | 24px horizontal | 375px screens with repeated 327px content: Explore image `Frame 48` (`bf8ba31e-54de-5e02-98fe-3fe2503b6cbb`) at x+24; detail content `Frame 850` (`bbf9d8dc-79ec-596d-a105-4aaac19351b6`) width 327 | High |
| Sizing | `size.icon.standard` | 24px; compact icon 16–18px | Explore heart wrapper `Frame 47` (`a9a6fc52-cf7a-5941-8dc2-04b550db7bf4`, 24×24); search icon `Frame 66` (`0e0c3535-d7ba-5324-a4e7-301e272adcb8`, 18×18) | High |
| Sizing | `size.control.touch` | 44–48px row/control rhythm | profile settings row `Frame 2834` (`4a34852b-a819-54e2-9818-914a07e59fe2`, height 48); listing CTA `Frame 855` (`6d5cce39-a9dc-52fd-860d-db263be418dc`, height 46) | High |

## Component patterns

| pattern | anatomy | variants | behavior | evidence_node |
|---|---|---|---|---|
| Search pill | White 327×62 pill; left 18px search icon + two-line query summary; right 38px circular filter affordance | Full search pill; circular trailing control | Entire pill reads as one calm entry point; only this floating element uses a shadow | `Frame 68` (`64a84519-8139-5fb6-88b5-2268dff196b2`) and children `Frame 67` / `Frame 64` |
| Photo-first card | 327×310 image with 12px corners; heart action in top-right; five-dot carousel indicator; metadata stack below | Browse card; 70×70 compact wishlist tile; full-bleed detail hero | Media leads, action overlays do not obscure the subject, supporting facts use primary/secondary contrast | Explore card `Frame 49` (`48375866-efbf-50c3-b4d6-86ebf4b56d69`); compact media `Frame 1415` (`d0db9321-f74a-5910-980f-1c22e03068e6`); detail hero `Rectangle 711` (`3d6eb51e-0c70-5237-b9e2-c4a5a0684954`) |
| Bottom navigation | 375×89 white fixed region; 68px five-item row + 21px home-indicator zone; each item approximately 65.4×44 | Active item uses accent icon/label; inactive items use neutral gray/black | Stable five-destination navigation, visible status through both color and label | Explore `Frame 96` (`91f103ab-77d8-5073-96f0-872ee7ba148c`); active Wishlist label `Text 1419` (`acaa6f88-fd43-5da2-b4ec-3979af456e6b`) |
| Large-title tab header | 44px system/status zone + 66–90px white title region; 32px medium title | Wishlist, Inbox, Profile roots | Strong page identity with generous whitespace; content begins below title | Wishlist status/header `Frame 1429` (`3280ab58-64c3-5766-a83c-5c975113e8a1`) + title `Text 1415` (`ec6b3108-1624-50b8-b458-8dde1b91c5e5`) |
| Settings/list row | 327×48 row; leading icon + 14/16px label; trailing 16px chevron; hairline separators | Repeated profile actions; informational rows | Entire row is the tap target; divider is inset to content width | Profile group `Frame 2835` (`d2588062-f367-566f-aea5-f937ffd3b55c`) and row `Frame 2834` (`4a34852b-a819-54e2-9818-914a07e59fe2`) |
| Message row | 56px circular avatar; primary name/time and secondary preview; optional unread accent | Read/unread | Avatar anchors scan order; accent is reserved for unread/active state rather than decorating the whole row | avatar wrapper `Frame 2133` (`4c96ef04-27af-54fa-a956-487f42c69d1f`) / image `Rectangle 2124` (`28e0c67d-a885-5dd9-903e-c3968ea046e8`) |
| Sectioned detail content | 327px content column; 22px section heading; body/feature rows; muted 1px separators; restrained outlined or text links | Media, host summary, feature list, prose, map, reviews | Progressive disclosure: summary first, “show more” style links for depth | content stack `Frame 851` (`c1830594-d535-5c89-bafe-e3984aeaf60e`); prose section `Frame 833` (`f4c44d03-873f-50d0-b612-0cd269abd9c3`) |
| Sticky transaction bar | 375px white bottom surface with top 1px border; left value summary; right 46px accent CTA; 21px home-indicator zone | Detail booking action | Cost/value remains visible while browsing; single primary action only | `Frame 863` (`8707ba99-2728-525c-a72c-e8384a84c487`), CTA `Frame 855` (`6d5cce39-a9dc-52fd-860d-db263be418dc`) |

## Layout grammar

| context | width | padding | gap | alignment | evidence_node |
|---|---:|---:|---:|---|---|
| Mobile viewport | 375px | 24px content inset | content-dependent vertical stack | single centered column | all five top-level frames; `Explore 1.1` (`dfa26dd0-7670-5af8-9dc9-580a4679c798`) |
| Primary content column | 327px | 0 inside section, 24px from viewport edges | predominantly 16–24px between semantic groups; larger section breaks | left-aligned text and controls | detail content `Frame 850` (`bbf9d8dc-79ec-596d-a105-4aaac19351b6`); Explore image `Frame 48` (`bf8ba31e-54de-5e02-98fe-3fe2503b6cbb`) |
| Photo browse card | 327px media | overlay actions inset from image edge | metadata line-height 18px; facts form a compact vertical rhythm | image and metadata share left edge | `Frame 49` (`48375866-efbf-50c3-b4d6-86ebf4b56d69`) and Explore texts `Text 26` / `Text 25` |
| Long detail page | 375px shell / 327px sections | 24px horizontal | repeated section groups of roughly 102–488px, divided by muted rules | headings and copy left-aligned; imagery full content width or full bleed | `listing-details` (`f68a7c04-be34-5c0e-ba4e-bb5856003ac3`), stack `Frame 851` (`c1830594-d535-5c89-bafe-e3984aeaf60e`) |
| List/settings | 327px rows | row content held inside 24px page inset | 48px row height; hairline separator | leading label, trailing affordance | `Frame 2835` (`d2588062-f367-566f-aea5-f937ffd3b55c`) |
| Bottom navigation | 375px | equal item allocation (~65.4px each) | 5 destinations | evenly distributed, icon over label | `Frame 96` (`91f103ab-77d8-5073-96f0-872ee7ba148c`) |
| Sticky bottom action | 375px shell | 24px horizontal content region | 46px CTA height + 21px safe/home zone | value left, action right | `Frame 863` (`8707ba99-2728-525c-a72c-e8384a84c487`) |

## Brand signatures

| signature | observed_rule | application_guidance | evidence |
|---|---|---|---|
| Photography establishes trust | Large, minimally decorated photography precedes descriptive facts; compact contexts use rounded thumbnails or circular portraits | **Derived:** make the person photo the dominant discovery surface, then place verification/fact cues immediately adjacent; use real photography rather than decorative gradients | Explore media `Frame 48` (`bf8ba31e-54de-5e02-98fe-3fe2503b6cbb`); detail hero `Rectangle 711` (`3d6eb51e-0c70-5237-b9e2-c4a5a0684954`) |
| Neutral canvas, scarce accent | White, near-black, secondary gray, and hairline gray dominate; rose is used for primary CTA, active nav, and tiny status marks | **Derived:** reserve rose for like/primary purchase/active state; coin benefits should rely first on typography and spacing, not large saturated panels | CTA `Frame 855`; active label `Text 1419`; unread/status dots such as `Rectangle 1785` (`85867794-97a4-5ae0-8eaf-886efa6a0f83`) |
| Information confidence through hierarchy | 14px body dominates, 16px emphasizes decisions, 22px labels sections, 32px names tab roots; weights stay at 400/500 | **Derived:** present match-critical facts as compact 14–16px rows/chips and reserve 22/32px for identity and page context | text population and examples `Text 26`, `Text 767`, `Text 758`, `Text 1415` |
| Calm rounded geometry | Media uses 12px radius, buttons 6px, search/badges use full pills; cards generally avoid heavy shadows | **Derived:** use borders and whitespace for coin packages/profile fields; use shadows only for genuinely floating controls | image `Frame 48`; CTA `Frame 855`; search `Frame 68`; only one explicit shadow found |
| Persistent context at the bottom | Navigation or transaction summary occupies a white fixed bottom region with border/safe-area treatment | **Derived:** discovery actions or coin checkout may use a sticky bottom area, but never compete with five-way navigation in the same state | `Frame 96` (`91f103ab-77d8-5073-96f0-872ee7ba148c`); `Frame 863` (`8707ba99-2728-525c-a72c-e8384a84c487`) |
| Progressive disclosure | Cards expose the minimum decision facts; details expand into sectioned content with “show more” links | **Derived:** discovery shows the four mandatory facts and compatibility at a glance; biography, privacy rationale, and reward rules expand into detail/sheets | Explore metadata texts; `Text 760` (`6dfddddb-22f8-5c1e-b27d-4049a335c7d5`) + `Text 759` (`ceba329c-d66b-525c-a6fd-1b9a380f7ee8`) |

## Safe extensions

| need | derived_rule | derivation | risk |
|---|---|---|---|
| Korean typography | Use `Pretendard` 400/500 while retaining the 12/14/16/22/32px scale and approximately 16/18/22/28px line heights | Airbnb Cereal App is referenced everywhere but unavailable; Pretendard is available and supports Korean | Medium — metrics differ, so auto-height text must be resized after layout |
| Dating discovery card | Extend the 327px, 12px photo card into a taller photo-first profile card; keep heart/pass/detail controls in clear overlay or bottom action zones and facts in a compact white information region | Direct extension of Explore photo card plus listing-detail progressive disclosure | Low if accent remains scarce; medium if overlays cover faces |
| Compatibility/status chip | Use a 20px/full-pill neutral chip; use rose only for an exact relationship-style match or active selection, with text/icon redundancy | Derived from observed pills and active-state accent behavior | Medium — color alone must not communicate compatibility |
| Profile form and privacy controls | Build 48px rows within a 327px column, separated by `#D8DCE0`; use 6px controls and 14/16px labels; disclosure/toggles stay trailing | Derived from Profile list rows and standard touch/control sizes | Low |
| Photo uploader | Reuse 12px media corners and 24px overlay affordances; show a 2×3 ordered grid with explicit add/reorder states | Derived from photo-first cards, compact wishlist media, and overlay heart affordance | Medium — a dense grid needs 8–12px gaps not directly proven by the reference; verify visually |
| Coin packages | Use white 12px cards or 48px rows with 1px muted borders; emphasize bonus amount using 500 weight and a small pill, not a loud background | Derived from neutral cards/list rows and scarce accent system | Low |
| Reward progress | Use numeric copy plus a thin progress indicator in `#D8DCE0`, with rose for completed/current progress only; state precisely which rejection type counts | Derived from active/status dots and information hierarchy; progress bars are not directly present | Medium — new pattern; must be tested for comprehension |
| Insufficient-coin state | Use a calm bottom sheet or bordered inline notice with one rose primary action and a neutral dismiss action | Derived from sticky transaction bar and one-primary-action behavior | Medium — sheet geometry is not directly evidenced; preserve 24px margins and 6–12px radii |
| Loading, empty, and validation states | Keep structure stable; use muted supporting text, hairlines, and inline error/status copy rather than replacing the layout with decorative illustration | Derived from the neutral information-first system; these states are absent from the supplied five screens | Medium — explicit new states require PNG validation |

## Audit notes

- **Observed:** the reference contains 3,836 inspected shapes: 144 text nodes, 421 boards, 2,737 rectangles, and 13 image-filled shapes.
- **Observed:** all five top-level screens are 375px wide; the dominant content width is 327px, establishing a reliable 24px side inset.
- **Observed:** many dark rectangle colors belong to vector/icon construction. They are not promoted as UI surface tokens; only colors supported by semantic text, surface, border, CTA, or status nodes are listed above.
- **Derived constraint for downstream stages:** token values should be JS constants and applied consistently. Components should use semantic names in the new Page even though the imported reference contains generic names such as `Frame 49`.
