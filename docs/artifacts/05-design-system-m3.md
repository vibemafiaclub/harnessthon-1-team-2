# 05 — 디자인 시스템: Material Design 3 × 당근

**뼈대는 M3, 색과 말투는 당근.**
M3가 정해주는 것(타입 스케일·shape·spacing·컴포넌트 스펙)을 그대로 쓰고,
당근에서 가져오는 것(브랜드 색·어휘·톤)만 얹는다. → 정렬·여백이 규칙적으로 잡힌다.

---

## 1. Color roles (M3 role ← 당근 실측값 매핑)

| M3 role | 값 | 어디에 |
|---|---|---|
| `primary` | **#FF7E36** | 주 액션(Filled button), 활성 탭, 강조 텍스트 |
| `on-primary` | #FFFFFF | primary 위 텍스트·아이콘 |
| `primary-container` | **#FFEBE0** | 활성 인디케이터, 강조 배경, Tonal button |
| `on-primary-container` | #7A2E00 | primary-container 위 텍스트 |
| `secondary` | #3FA34D | 잎사귀 초록 — **아주 소량**(심볼 잎, 성공 상태) |
| `secondary-container` | #E6F4E8 | 보조 강조 배경 |
| `surface` | #FFFFFF | 기본 배경 |
| `surface-container-lowest` | #FFFFFF | — |
| `surface-container-low` | #F7F7F7 | 카드 안 서브블록 |
| `surface-container` | **#F2F3F5** | 화면 배경(카드형 화면), 비선택 chip |
| `surface-container-high` | #EDEEF0 | 눌린 상태 |
| `on-surface` | **#1A1C1E** | 본문·제목 |
| `on-surface-variant` | **#74777A** | 보조 텍스트, 비활성 아이콘 |
| `outline` | #C4C7C9 | 아웃라인 버튼·입력 |
| `outline-variant` | **#E3E5E7** | Divider |
| `error` | #BA1A1A | 오류 |
| **custom `up`** | **#E8342A** | 상승 (당근 부동산·토스 공통) |
| **custom `down`** | **#1E5EFF** | 하락 |

> 색 규율은 그대로 유지: **primary는 화면당 "지금 눌러야 할 것" 1개 + 활성 탭에만.**
> primary-container(연오렌지)는 면적이 커도 되지만, primary(진오렌지) 면은 1개.

## 2. Type scale (M3 15단 → 우리 사용 9단)

한글 = **Pretendard**, 라틴/숫자 = **Inter**, 브랜드 헤드라인 = **Jua**

| M3 토큰 | size / line | weight | 우리 용도 |
|---|---|---|---|
| `display-small` | 36 / 44 | 800 | 스플래시·컨셉 히어로 (Jua) |
| `headline-medium` | 28 / 36 | 800 | 화면 대제목 (나의 당근, 당근증권) |
| `headline-small` | 24 / 32 | 800 | 컨셉 섹션 제목 (Jua) |
| `title-large` | 22 / 28 | 700 | 대표 숫자(내 투자금)는 별도 32/40 |
| `title-medium` | 16 / 24 | 700 | 섹션 제목, 리스트 항목명 |
| `title-small` | 14 / 20 | 700 | 강조 라벨, 등락률 |
| `body-large` | 16 / 24 | 400 | 본문 |
| `body-medium` | 14 / 20 | 400 | 보조 본문, 메타 |
| `label-large` | 14 / 20 | 500 | 버튼·chip 라벨 |
| `label-medium` | 12 / 16 | 500 | 캡션, 탭 라벨 |

**대표 숫자 예외**: 금액은 `display-small`(32/40, 800) — M3의 숫자 강조 관행.

## 3. Shape scale

| M3 | 값 | 적용 |
|---|---|---|
| `extra-small` | 4 | 배지, 작은 태그 |
| `small` | 8 | 이미지 썸네일 |
| `medium` | 12 | 리스트 썸네일, 서브블록 |
| `large` | **16** | **카드 기본** |
| `extra-large` | 28 | 히어로 카드, 바텀시트 상단 |
| `full` | 999 | **버튼·chip·FAB** (M3는 버튼이 완전 라운드) |

## 4. Spacing — 4dp 그리드 (정렬 불규칙 해결의 핵심)

| 토큰 | 값 | 용도 |
|---|---|---|
| `space-1` | 4 | 텍스트 줄 사이 |
| `space-2` | 8 | 아이콘-텍스트 |
| `space-3` | 12 | 카드 내부 요소 사이 |
| `space-4` | **16** | **화면 좌우 마진(고정)**, 카드 패딩, 리스트 항목 패딩 |
| `space-6` | 24 | 섹션 내부 상하 |
| `space-8` | **32** | **섹션 사이(고정)** |
| `space-12` | 48 | 히어로 상하 |

**규칙 3개 (어기면 정렬이 무너진다)**
1. **좌우 마진은 언제나 16.** 카드도 16에서 시작해 358 폭.
2. **섹션 상하 패딩은 항상 32** (히어로만 48).
3. 모든 수치는 **4의 배수**.

## 5. 컴포넌트 매핑 (M3 컴포넌트 ← 우리 화면 요소)

| M3 컴포넌트 | 스펙 | 우리 쓰임 |
|---|---|---|
| **Navigation bar** | 높이 80, 아이콘 24, 라벨 `label-medium`, **활성 아이콘 뒤 pill 인디케이터**(64×32, `primary-container`) | 하단 당근 5탭 |
| **Primary tabs** | 높이 48, 활성 밑줄 3dp `primary`, 라벨 `title-small` | 증권 4탭 |
| **Top app bar (large)** | 헤더 높이 112, 제목 `headline-medium` 좌측정렬, 마진 16 | 화면 헤더 |
| **Card (outlined)** | radius 16, 패딩 16, 테두리 1dp `outline-variant` | 내 투자 카드, 컨셉 카드 |
| **Card (filled)** | radius 16, 배경 `surface-container` | 회색 서브블록 |
| **Filter chip** | 높이 32, radius full, 선택 시 `secondary-container` + 체크 | 지역 필터, 기간 |
| **Button (filled)** | 높이 40, radius full, 라벨 `label-large`, 패딩 24 | 주 액션(사기) |
| **Button (tonal)** | 배경 `primary-container` | 보조 액션(팔기) |
| **List item (3-line)** | 높이 88, leading 40 아바타, 패딩 16, trailing 텍스트 | 종목 행 |
| **Extended FAB** | 높이 56, radius 16, `primary-container` | 알림 받기 / 글쓰기 |
| **Divider** | 1dp `outline-variant`, inset 16 | 리스트 구분 |
| **Badge** | 높이 16, radius full | 알림 수 |

## 6. Elevation

| level | 그림자 | 적용 |
|---|---|---|
| 0 | 없음 | 기본 표면 |
| 1 | y1 blur3 8% | 카드(elevated) |
| 2 | y2 blur6 10% | FAB, 상단바(스크롤 시) |
| 3 | y4 blur8 12% | 바텀시트 |

> **우리는 level 0~1만 쓴다.** 당근은 그림자보다 **면과 테두리**로 구분한다(실측: 카드가 흰색 + 배경 회색).

## 7. 접근성 (M3 필수)
- 터치 타깃 **최소 48×48** (칩 32이면 상하 8씩 여백으로 보완)
- 본문 대비 **4.5:1** — `on-surface-variant #74777A` on `surface #FFFFFF` = 4.6:1 ✅
- `primary #FF7E36` 위 흰 텍스트는 대비 2.9:1 → **버튼 라벨은 굵게(500+) 14 이상**으로 보완

## 8. 우리 화면에 미치는 변화 (적용 체크리스트)
- [ ] 좌우 마진 20 → **16**으로 통일
- [ ] 섹션 상하 패딩 제각각 → **32** 고정
- [ ] 카드 radius 20 → **16**
- [ ] 버튼 radius 12 → **full**
- [ ] 하단 탭 활성 표시: 색만 → **pill 인디케이터 추가**
- [ ] 리스트 행 높이 → **88 (3-line list item)**
- [ ] 플로팅 pill → **Extended FAB (56, radius 16)**
- [ ] 폰트 크기 15/17/26 등 임의값 → **타입 스케일 9단만 사용**
