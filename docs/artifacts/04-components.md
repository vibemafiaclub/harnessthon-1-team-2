# 04 — 컴포넌트 명세 (stage-4-screen-spec 산출)

모든 값은 **TOKENS 키로 참조**한다. 리터럴 금지.
반복 요소는 **컴포넌트 1개 → 인스턴스 N개 + `characters` 오버라이드**로 만든다. 복붙 금지.

| 컴포넌트 | 구성(자식) | 레이아웃 | 토큰 | 가변 텍스트 |
|---|---|---|---|---|
| `YS-StockRow` | `logo`(원형 40) · `name`(종목명) · `sub`(보조·테마) · `price`(현재가) · `change`(등락률) | flex row / `space.sm` padding / 좌측 로고 + 중앙 텍스트열(flex column, `space.xxs`) + 우측 숫자열(고정 폭 92, 우측 정렬) | `color.text` / `textSub` / `semantic.up`·`down` / `radius.pill` | `name`·`sub`·`price`·`change` |
| `YS-TabBar` | 5칸(아이콘 `rowHeight.icon` + 라벨 `font.sizes.xs`) | flex row / `justifyContent: space-between` / 고정 높이 `rowHeight.tab`+ | 활성 = `color.accent`, 비활성 = `color.textSub`, 상단 `divider` | 라벨 5 |
| `YS-SectionHeader` | `title`(`sizes.lg`/w700) · `action`(더보기, `sizes.sm`/`textSub`) | flex row / space-between / padding `space.md` | `color.text`·`textSub` | `title`·`action` |
| `YS-Chip` | `label` | 고정 높이 32 / `radius.pill` / padding `space.sm` | 선택 = `accentSoft`배경+`accent`텍스트 / 비선택 = `bg`+`textSub` | `label`·선택상태 |

## 가변 텍스트 규칙 (함정 대응)
- hug(자동 폭) 칸은 텍스트를 갈아끼워도 위치가 안 따라온다 → **가변 칸은 고정 폭 + 텍스트 정렬**.
  - `YS-StockRow.price`·`change` = 고정 폭 92, `align: "right"`
- 모든 텍스트 `growType = "auto-height"` (fixed면 글자가 잘린다)
- 한국어 텍스트는 `font.resolvedKo`, 숫자·티커는 `font.resolved`
