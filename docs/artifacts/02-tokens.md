# 02 — 기존자산 토큰 (stage-2-asset-tokens 산출)

스캔 대상: `1-daangn` Page (**읽기 전용 · openPage 없음**) · 848 shapes / 217 texts / 화면 5개

## TOKENS ← ⑤가 그대로 붙여넣는 JS 상수

```js
const TOKENS = {
  artboard: { w: 390, h: 844 },                        // 최빈 폭 390 → 그 폭의 최빈 높이 844
  color: {
    accent:     "#FF7E36",   // R1 채도×면적 1위 (areaScore 19,571)
    accentSoft: "#FFEBE0",   // accent 계열 연한 배경 (자산 관찰)
    accentAlt:  "#4AC1DB",   // R1 2위 (areaScore 870) — 보조 강조
    text:       "#000000",   // 178회
    textSub:    "#8C8C8C",   // 85회
    textTert:   "#5E5E5E",   // 15회
    surface:    "#FFFFFF",   // 112회
    bg:         "#F6F6F6",
    divider:    "#EEEEEE",   // stroke 1위 (29회)
    line:       "#D9D9D9"
  },
  semantic: {                                          // ③의 충돌 해소 규칙으로 파생 (자산 색만 사용)
    up:   "#FF7E36",   // 상승 = accent
    down: "#4AC1DB"    // 하락 = accentAlt
  },
  font: {
    primary: "Inter", resolved: "Inter", resolvedKo: "Pretendard",
    substituted: false,                                // Inter 서버 보유 확인 (정확일치)
    weights: [400, 700],                               // 자산에서 실제 관찰된 2단계
    sizes: { xs: 10, sm: 12, md: 14, lg: 16, xl: 18, xxl: 20 }
  },
  radius: { sm: 4, md: 8, lg: 24, pill: 100 },         // 4가 33회로 지배적
  space:  { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32 },
  rowHeight: { list: 72, tab: 40, icon: 24 }
};
```

## 폰트 해석 (R4)

| fontPrimary | fontResolved | fontResolvedKo | substituted | 사용 가능 weight |
|---|---|---|---|---|
| `Inter` | `Inter` | `Pretendard` | **false** | 100~900 |

- ⚠️ **한국어 카피는 `resolvedKo`(Pretendard)를 쓴다.** Inter에는 한글 글리프가 없어 fallback 렌더된다.
- 조회는 **정확일치**로만 — `findByName("Inter")`는 `Inter Tight`를 돌려준다(실측).
- 자산에 `SF Pro Text`(17px, 5회)가 섞여 있으나 **서버 미보유** → 상태바 계열이므로 미사용 처리.

## 관찰된 스케일 (근거)

| 축 | 값 (빈도순) |
|---|---|
| 타이포 | 12px/w400 (101) · 10px/w400 (26) · 14px/w700 (26) · 14px/w400 (25) · 16px/w400 (16) · 18px/w700 (5) |
| 코너 반경 | **4 (33)** · 100 (17) · 96 (6) · 24 (5) · 8 (1) |
| 세로 간격 | **4 (46)** · 8 (20) · 12 (15) · 32 (8) · 16 (6) |
| 행 높이 | 24 (93) · 16 (58) · **40 (47)** · 12 (32) · **72 (24)** |

## 화면 인벤토리 (자산)

| assetName | w×h | 자식 | 비고 |
|---|---|---|---|
| 당근마켓_1 | 390×844 | 3 | 홈 피드 |
| 당근마켓_2 | 390×1393 | 3 | 롱스크롤 |
| 당근마켓_3 | 390×844 | 3 | — |
| 당근마켓_4 | 390×844 | 3 | — |
| 당근마켓_5 | 390×1630 | 3 | 롱스크롤 |
| ~~http://localhost:4400/manifest.json~~ | 209×17 | 0 | **노이즈** — 누군가 남긴 플러그인 URL 텍스트. 최빈 폭 규칙(R3)이라 규격 산출엔 영향 없음 |

## 컴포넌트 카탈로그 (⑤가 만들 것)

| 이름 | 자산 근거 | 구성 | 반복 위치 |
|---|---|---|---|
| `YS-StockRow` | 자산의 상품 리스트 행(썸네일 72 + 2~3줄 텍스트) | 로고 40 · 종목명/보조 · 현재가/등락률 | S01 리스트, S03 추천·테마 |
| `YS-TabBar` | 자산 하단 5탭 (rowHeight.tab 40, icon 24) | 아이콘 5 + 라벨 | 전 화면 하단 |
| `YS-SectionHeader` | 자산 섹션 제목(16/w700) + 더보기 | 제목 · 우측 액션 | S03 전 섹션 |
| `YS-Chip` | 자산의 pill(radius 100) 태그 | 라벨 · 선택 상태 | S01 정렬칩, S03 테마·스타일 |

## 다음 단계가 이 파일에서 뽑아 쓸 것

- ④: TOKENS **키 이름**(값이 아니라 키로 참조), `artboard`, 컴포넌트 카탈로그
- ⑤: `TOKENS` 상수 전체, `font.resolved` / `font.resolvedKo`, `semantic.up/down`
- ⑥: `substituted: false` → 폰트 대체 감점 사유 없음
