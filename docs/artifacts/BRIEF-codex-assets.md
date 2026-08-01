# [코덱스 작업지시서] 당근 증권 — SVG 에셋 제작

발신: claude(저작 총괄) · 수신: 코덱스 페인 · 저장 위치: `docs/artifacts/assets/`

## 프로젝트
당근마켓 팀이 만드는 **증권 서비스**. 기존 당근 톤앤매너 유지가 **절대 조건**.
브랜드 슬로건 "당신 근처의 당근" — 둥글고 따뜻하고 단순한 형태 언어.

## 컬러 토큰 (자산 실측 — 이것만 사용, 새 색 도입 금지)
| 이름 | 값 |
|---|---|
| accent | `#FF7E36` |
| accentSoft | `#FFEBE0` |
| accentAlt | `#4AC1DB` |
| text | `#000000` |
| textSub | `#8C8C8C` |
| divider | `#EEEEEE` |
| surface | `#FFFFFF` |

## 공통 규칙
- **SVG만.** 파일당 단일 `<svg>` 루트, 외부 참조·폰트 임베드 없음.
- 이미지 안에 **한글 텍스트 금지**(텍스트는 Penpot에서 Pretendard로 넣는다).
- **실제 기업 로고·상표·캐릭터 금지.** 추상 도형으로만.
- 선 아이콘은 `stroke-width:1.5`, `stroke-linecap:round`, `stroke-linejoin:round`, `fill:none`.

---

## 제작물 1 — 하단 탭바 아이콘 5종
24×24 viewBox, stroke 기반, `stroke="currentColor"`

| 파일 | 의미 | 형태 가이드 |
|---|---|---|
| `icon-home.svg` | 홈 | 둥근 지붕 집 |
| `icon-life.svg` | 동네생활 | 말풍선 2개가 겹친 형태 |
| `icon-near.svg` | 내 근처 | 위치 핀 + 주변 원 |
| `icon-chat.svg` | 채팅 | 둥근 말풍선 1개 |
| `icon-my.svg` | 나의 당근 | 사람 상반신 실루엣 |

## 제작물 2 — 빈 상태 일러스트
`illust-empty-watchlist.svg` · 320×200 viewBox
- 상황: **관심목록이 비어 있음** (아직 아무 종목도 담지 않은 첫 사용자)
- `accent`/`accentSoft`만 사용, 미니멀한 면+라인
- 아이디어: 빈 장바구니/빈 상자 + 위로 향하는 점선 화살표 (담으면 오른다는 은유)

## 제작물 3 — 업종 아이콘 6종
40×40 viewBox, 원형 `accentSoft` 배경 + 중앙에 `accent` 라인 심볼

| 파일 | 업종 | 심볼 |
|---|---|---|
| `logo-semi.svg` | 반도체 | 칩(사각형+다리) |
| `logo-defense.svg` | 방산 | 방패 |
| `logo-battery.svg` | 2차전지 | 배터리 |
| `logo-bio.svg` | 바이오 | 캡슐/분자 |
| `logo-auto.svg` | 자동차 | 자동차 옆모습 |
| `logo-generic.svg` | 일반 | 원 안 별 |

## 제작물 4 — 서비스 소개 히어로 그래픽
`illust-hero-concept.svg` · 720×360 viewBox
- 주제: **"중고거래로 판 돈 → 투자"** 라는 이 서비스의 존재 이유
- 왼쪽 = 물건/거래를 상징하는 도형 → 가운데 = 당근페이 지갑 → 오른쪽 = 우상향 그래프
- 세 덩어리를 **점선 화살표**로 연결. 색은 accent/accentSoft/divider만.

---

## 완료 후
`docs/artifacts/assets/` 에 저장하고, **파일 목록만 한 줄**로 회신.

## 금지
- Penpot 접근 금지 (저작은 claude가 전담)
- 이 문서 밖의 색·폰트 도입 금지
