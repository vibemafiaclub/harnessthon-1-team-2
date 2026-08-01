## Run metadata

| prd_path | work_page | reference_page | top_frame_prefix |
|---|---|---|---|
| `docs/examples/airbnb-dating.md` | `황선태` | `2-airbnb` (read-only; `1-daangn` is out of scope) | `New/` |

## Product context

| key | value |
|---|---|
| product_background | Airbnb를 만든 팀이 준비하는 소개팅 서비스. 숙소 탐색에서 사진과 후기로 신뢰를 쌓던 경험을 사람 탐색에 적용한다. |
| primary_users | 가입 완료 후 추천 상대를 탐색하는 사용자; 자신의 프로필을 관리하는 사용자; 공개 범위를 통제하려는 사용자; 무료 추천을 모두 사용한 뒤 추가 열람을 고려하는 사용자 |
| available_reference_assets | `2-airbnb` Page의 `Explore 1.1`, `listing-details`, `Wishlist 2.1`, `Inbox 4.1`, `Profile 5.1` 총 5개 화면 |
| submission_location | 개인 작업 Page `황선태` |
| submission_naming | 신규 최상위 프레임 이름은 모두 `New/`로 시작 |
| excluded_reference | `1-daangn` Page 및 별도 디자인 시스템 문서·컴포넌트 정리본 |

## Requirement matrix

| id | source_section | user_need | required_element | destination | state | priority | acceptance |
|---|---|---|---|---|---|---|---|
| REQ-01 | 3.1 핵심 유저 스토리 | 추천 상대를 한 명씩 보고 관심 여부를 표현한다 | 단일 상대 중심 탐색 흐름 | `New/Discover` | default | must | 한 번에 한 상대가 주 대상으로 보이고 사용자가 좋아요 또는 패스를 선택할 수 있다. |
| REQ-02 | 3.1, 7-1 | 거리·외모·관심사 등 서로 다른 판단 기준을 확인한다 | 사진 중심 카드와 거리·관심사 정보 | `New/Discover` | default | must | 사진이 화면의 주가 되며 거리와 관심사가 판단 가능한 형태로 노출된다. |
| REQ-03 | 4, 7-1 | 사진 외 핵심 정보를 보고 상대를 판단한다 | 키·직업·지역·연애 스타일 | `New/Discover`; `New/ProfileDetail` | default | must | 카드에서 네 항목을 모두 읽을 수 있고 상세에서도 확인 가능하다. |
| REQ-04 | 4 | 상대와 나의 연애 스타일이 같은지 다른지 즉시 안다 | 스타일 일치 여부 정보 | `New/Discover`; `New/ProfileDetail` | match / mismatch | must | 두 경우가 각각 별도 상태로 명확히 판독되며 색에만 의존하지 않는다. |
| REQ-05 | 7-1 | 상대의 기본 신원과 소개를 확인한다 | 이름·나이·거리·소개 문구 | `New/Discover` | default | must | 카드에 네 정보가 누락 없이 노출된다. |
| REQ-06 | 7-1 | 다음 추천이 이어짐을 예상한다 | 다음 카드 존재 표현 | `New/Discover` | stack available | must | 현재 카드 뒤에 다음 카드가 있음을 인지할 수 있다. |
| REQ-07 | 7-1 | 관심 여부를 빠르게 표현한다 | 좋아요·패스 액션 | `New/Discover` | actionable | must | 두 액션이 구분되고 각 액션의 대상이 현재 카드임이 명확하다. |
| REQ-08 | 7-1 | 상대에 대해 더 알아본다 | 상세 프로필 진입점 | `New/ProfileDetail` | navigation | must | 탐색 카드에 상세 진입점이 있으며 목적지 화면에서 확장 정보를 확인한 뒤 탐색으로 돌아올 수 있다. |
| REQ-09 | 5-1, 7-1 | 오늘 무료 추천을 얼마나 더 볼 수 있는지 안다 | 오늘 남은 무료 열람 수 | `New/Discover` | 1–10 remaining / exhausted | must | 숫자로 잔여 횟수가 표시되고 0회 상태도 별도로 설명된다. |
| REQ-10 | 5-2, 7-1 | 사용할 수 있는 유료·무료 열람권을 안다 | 보유 열람권 수 | `New/Discover`; `New/CoinShop` | available / zero | must | 두 진입점에서 현재 보유 수량이 숫자로 일치하게 표시된다. |
| REQ-11 | 3.2, 7-2 | 나를 매력적으로 보여주도록 프로필을 채우고 수정한다 | 프로필 편집 폼과 저장 액션 | `New/ProfileEdit` | populated | must | 기존 값을 수정할 수 있고 저장 액션으로 변경을 확정할 수 있다. |
| REQ-12 | 6, 7-2 | 프로필 사진을 최대 6장 등록하고 순서를 바꾼다 | 다중 사진 등록·순서 변경 | `New/ProfileEdit` | 0 / 1 / 2–5 / 6 photos | must | 0장부터 6장까지 상태가 성립하고 2장 이상일 때 순서를 변경할 수 있으며 6장을 넘길 수 없다. |
| REQ-13 | 7-2 | 기본 소개 정보를 입력한다 | 닉네임·한 줄 소개·키·직업·지역·관심사 입력 | `New/ProfileEdit` | empty / populated | must | 모든 항목을 입력·수정할 수 있다. |
| REQ-14 | 4, 7-2 | 자신의 연애 스타일을 고른다 | `진지한 관계`·`새로운 인연`·`친구` 중 단일 선택 | `New/ProfileEdit` | unselected / selected | must | 세 값이 모두 제시되고 한 번에 하나만 선택된다. |
| REQ-15 | 3.3, 7-2 | 공개되는 정보 범위를 항목별로 통제한다 | 항목별 공개 on/off | `New/ProfileEdit` | public / private | must | 각 공개 대상 항목의 상태를 독립적으로 변경하고 현재 공개 여부를 읽을 수 있다. |
| REQ-16 | 6 | 가입 직후 빈 프로필을 처음부터 작성한다 | 비어 있는 편집 상태 | `New/ProfileEdit` | initial empty | must | 값이 없는 상태에서도 입력 대상, 사진 추가, 연애 스타일 선택 및 저장 요건을 이해할 수 있다. |
| REQ-17 | 6 | 사용 중인 닉네임을 다시 입력한다 | 닉네임 중복 오류와 복구 | `New/ProfileEdit` | validation error | must | 문제 필드, 오류 원인과 수정 방법이 명확하며 수정 후 다시 저장할 수 있다. |
| REQ-18 | 6 | 너무 긴 소개 문구를 다시 입력한다 | 길이 초과 오류와 복구 | `New/ProfileEdit` | validation error | must | 허용 범위 또는 초과 사실이 표시되고 입력을 줄인 뒤 다시 저장할 수 있다. |
| REQ-19 | 6 | 여러 사진 저장 중 진행 상황을 안다 | 저장 진행·중복 방지 상태 | `New/ProfileEdit` | saving | must | 저장 중임이 명확하고 완료 전 중복 저장이나 이탈로 인한 오해를 막는다. |
| REQ-20 | 3.4, 5-1 | 무료 10명을 모두 본 뒤 다음 선택지를 이해한다 | 일일 무료 열람 소진 상태와 다음 날 안내 | `New/DailyLimit` | exhausted | must | 오늘 10명을 모두 봤음과 무료 추천 재개 시점이 설명되고 강압적이지 않은 추가 열람 진입점이 있다. |
| REQ-21 | 5-2 | 인기가 많고 선호에 맞을 가능성이 높은 특별 상대를 추가로 본다 | 특별 열람 진입 및 대상 설명 | `New/PremiumDiscover` | eligible | must | 특별 열람의 성격과 소모 비용을 행동 전에 알 수 있고 열람 후 상대를 판단할 수 있다. |
| REQ-22 | 5-2, 7-3 | 특별 열람 가격을 이해한다 | 2명당 1만원 환산 기준 | `New/CoinShop`; `New/PremiumDiscover` | informational | must | 결제 또는 사용 전에 `2명당 1만원` 기준이 분명하게 표시된다. |
| REQ-23 | 5-2, 7-3 | 코인을 충전해 특별 열람에 사용한다 | 보유 코인·충전 패키지·결제 진입 액션 | `New/CoinShop` | purchasable | must | 보유 코인이 숫자로 보이고 여러 패키지 중 하나를 선택해 결제로 진입할 수 있다. |
| REQ-24 | 5-2, 7-3 | 많이 충전할수록 더 이득인지 비교한다 | 패키지별 금액·기본 코인·보너스 코인 또는 할인율 | `New/CoinShop` | package comparison | must | 각 패키지의 총 이득이 숫자로 비교 가능하며 금액 증가에 따라 혜택이 커진다. |
| REQ-25 | 5-3 | 20회 열람마다 가장 잘 맞을 상대 1명을 확인한다 | 20회 진행도·다음 보상까지 잔여 횟수·90% 이상 기준 설명 | `New/RewardsInfo`; `New/PremiumDiscover` | progress / reward ready | must | 현재 진행 횟수와 남은 횟수가 숫자로 보이고 보상 대상이 매칭 확률 90% 이상인 1명임을 설명한다. |
| REQ-26 | 5-3, 7-3 | 유료 열람 상대를 10회 거절하면 무료 열람권 2장을 받는다 | 유료 거절 진행도·다음 지급까지 잔여 횟수·보상 수량 | `New/CoinShop`; `New/RewardsInfo` | progress / reward earned | must | 현재 유효 거절 횟수, 남은 횟수와 보상 2장이 숫자로 표시된다. |
| REQ-27 | 5-3 | 어떤 거절이 보상 진행도에 포함되는지 정확히 이해한다 | 유료 열람과 무료 지급 열람권 사용분의 카운트 규칙 | `New/RewardsInfo`; `New/PremiumDiscover` | counted / excluded | must | 유료로 본 상대의 거절만 포함되고 무료 지급 열람권으로 본 상대의 거절은 제외됨이 행동 전후에 명시된다. |
| REQ-28 | 5-3 | 남은 열람권·다음 보상·충전 이득을 숫자로 판단한다 | 수치 기반 현황 요약 | `New/CoinShop`; `New/RewardsInfo` | informational | must | 세 정보가 각각 실제 숫자 또는 계산 가능한 단위로 노출된다. |
| REQ-29 | 5-3, 8 | 결제를 강요받지 않고 선택한다 | 차분한 설명과 닫기·뒤로가기 경로 | `New/DailyLimit`; `New/CoinShop`; `New/InsufficientCoin` | optional purchase | must | 결제하지 않고 흐름을 종료하거나 돌아갈 수 있으며 긴급성·공포를 과장하지 않는다. |
| REQ-30 | 6 | 코인이 부족한 상황에서 특별 열람을 시도한다 | 부족 금액·충전 진입·취소 경로 | `New/InsufficientCoin` | insufficient balance | must | 현재 코인과 필요한 코인 또는 부족분을 알 수 있고 충전 또는 취소를 선택할 수 있다. |
| REQ-31 | 8 | 기존 Airbnb 서비스와 같은 제품으로 느낀다 | 기존 자산에서 도출한 색·간격·타이포·컴포넌트 규칙 | all `New/*` frames | structural | must | 새 규칙이 `2-airbnb` 실제 화면 근거와 연결되며 다른 과제 자산을 사용하지 않는다. |
| REQ-32 | 8, 평가 기준 | 반복 UI를 재사용 가능한 데이터로 유지한다 | 토큰·컴포넌트·인스턴스 | all `New/*` frames | structural | must | 반복 요소는 컴포넌트와 인스턴스로 구현되고 색·간격·타이포 값은 일관되게 재사용된다. |
| REQ-33 | 평가 기준 | AI가 이어서 작업할 수 있는 구조를 제공한다 | 의미 기반 이름·Frame 위계·Auto Layout | all `New/*` frames | structural | must | `Frame 27` 같은 무의미한 이름 없이 의미 단위 위계가 유지되고 내용 변화에 대응하는 레이아웃을 사용한다. |
| REQ-34 | 7, 9 | 제출 규칙을 지킨다 | 필수 3개 최상위 프레임 및 `New/` 접두어 | `New/Discover`; `New/ProfileEdit`; `New/CoinShop` | submission | must | 세 프레임이 `황선태` Page에 존재하고 정확한 이름을 사용하며 `2-airbnb`는 변경되지 않는다. |
| REQ-35 | 8 | 필요한 이미지·아이콘·더미 콘텐츠를 확보한다 | 실제 사용 가능한 자산과 맥락에 맞는 콘텐츠 | all `New/*` frames | content complete | must | 깨진 자산이나 비어 있는 자리표시자 없이 각 화면의 목적을 평가할 수 있다. |

## Screen candidates

| screen_key | purpose | requirement_ids | required_states | entry | exit |
|---|---|---|---|---|---|
| `New/Discover` | 무료 추천 상대 한 명을 판단하고 좋아요·패스를 표현 | REQ-01, REQ-02, REQ-03, REQ-04, REQ-05, REQ-06, REQ-07, REQ-08, REQ-09, REQ-10, REQ-31, REQ-32, REQ-33, REQ-34, REQ-35 | 기본 카드, 스타일 일치, 스타일 불일치, 무료 잔여, 마지막 무료 추천 | 가입 완료 또는 추천 탭 | 다음 추천, `New/ProfileDetail`, `New/DailyLimit` |
| `New/ProfileDetail` | 탐색 카드보다 풍부한 상대 정보로 신중한 판단을 지원 | REQ-03, REQ-04, REQ-08, REQ-31, REQ-33, REQ-35 | 스타일 일치·불일치, 정보 공개·비공개 | `New/Discover` 또는 `New/PremiumDiscover`의 상세 진입점 | 원래 탐색 화면으로 복귀, 좋아요, 패스 |
| `New/ProfileEdit` | 빈 상태부터 완성 상태까지 내 프로필과 공개 범위를 편집 | REQ-11, REQ-12, REQ-13, REQ-14, REQ-15, REQ-16, REQ-17, REQ-18, REQ-19, REQ-31, REQ-32, REQ-33, REQ-34, REQ-35 | 초기 빈 상태, 1장, 2–5장, 6장, 닉네임 오류, 소개 길이 오류, 저장 중, 저장 완료 | 프로필 탭 또는 가입 직후 | 저장 완료 후 프로필, 오류 수정 후 재저장 |
| `New/DailyLimit` | 무료 10명 소진 사실과 기다리기·추가 열람 선택지를 설명 | REQ-09, REQ-20, REQ-21, REQ-29, REQ-31 | 무료 소진, 추가 열람 선택 가능 | `New/Discover`에서 열 번째 추천 처리 후 | 닫기/대기, `New/PremiumDiscover`, `New/CoinShop` |
| `New/PremiumDiscover` | 특별 상대를 열람하고 보상 카운트 규칙을 이해한 채 판단 | REQ-21, REQ-22, REQ-25, REQ-27, REQ-28, REQ-31, REQ-32, REQ-33, REQ-35 | 열람 가능, 20회 보상 준비, 유료 사용분, 무료 지급권 사용분 | `New/DailyLimit`, `New/CoinShop`, 보유 열람권 사용 | `New/ProfileDetail`, 다음 특별 상대, `New/InsufficientCoin`, `New/RewardsInfo` |
| `New/CoinShop` | 보유 자산과 패키지 혜택을 비교하고 코인 결제로 진입 | REQ-10, REQ-22, REQ-23, REQ-24, REQ-26, REQ-28, REQ-29, REQ-31, REQ-32, REQ-33, REQ-34 | 패키지 미선택·선택, 열람권 0·보유, 보상 진행·완료 | 무료 소진, 부족 코인 안내, 지갑 진입 | 결제 진입, 취소/뒤로가기, `New/PremiumDiscover`, `New/RewardsInfo` |
| `New/RewardsInfo` | 두 보상 규칙의 진행도와 포함·제외 기준을 오해 없이 설명 | REQ-25, REQ-26, REQ-27, REQ-28, REQ-29, REQ-31 | 각 보상 진행 중·달성, 유료 거절 포함, 무료권 거절 제외 | `New/CoinShop` 또는 `New/PremiumDiscover`의 규칙 진입점 | 이전 화면으로 복귀 |
| `New/InsufficientCoin` | 코인 부족을 설명하고 충전 또는 취소를 선택하게 함 | REQ-29, REQ-30, REQ-31 | 부족 잔액 | 특별 열람 시도 | `New/CoinShop` 또는 이전 화면 |

## Structural rules

- `2-airbnb` Page만 디자인 레퍼런스로 읽고 절대 수정하지 않는다. `1-daangn`은 읽기·근거 사용 모두 금지한다.
- 신규 화면은 개인 작업 Page `황선태`에만 저작한다. `중간공유`·`최종제출`에서 처음부터 저작하지 않는다.
- 필수 최상위 프레임 이름은 정확히 `New/Discover`, `New/ProfileEdit`, `New/CoinShop`으로 하고, 추가 화면도 `New/` 접두어를 사용한다.
- 요구사항 수가 도출한 화면과 상태를 기준으로 범위를 정하며 PRD의 “최소 3개”를 목표 화면 수로 축소 해석하지 않는다.
- 색·간격·타이포·컴포넌트 규칙은 후속 단계가 `2-airbnb`의 실제 노드 근거에서 도출한다. 이 계약 단계에서는 시각 해법을 정하지 않는다.
- 반복 요소는 컴포넌트와 인스턴스로 재사용하고, 토큰은 일관된 단일 값 집합으로 관리한다.
- Frame 위계와 레이어 이름은 의미 기반으로 정의하고, 내용 및 상태 변화에 대응할 수 있도록 Auto Layout을 사용한다.
- 공개 범위가 꺼진 항목은 상대에게 공개되는 화면에서 실제로 숨겨져야 하며 편집 화면에서는 현재 공개 상태를 확인할 수 있어야 한다.
- 연애 스타일 일치 여부와 보상 카운트 포함 여부처럼 오해 위험이 큰 상태는 색만으로 구분하지 않고 텍스트 의미를 함께 제공한다.
- 무료 추천, 코인, 열람권, 보상 진행도의 숫자는 같은 실행 상태에서 화면 간 일관되어야 한다.
- 구매·충전 관련 화면에는 항상 취소 또는 뒤로가기 경로를 제공하고 결제 강요 표현을 사용하지 않는다.
- 모든 화면은 깨진 이미지·아이콘이나 의미 없는 자리표시자 없이 평가 가능한 콘텐츠를 포함한다.

## Open questions

| id | ambiguity | blocking | evidence |
|---|---|---|---|
| OPEN-01 | 특별 열람 2명에 필요한 정확한 코인 수와 코인 대 원화 환산율이 정의되지 않았다. | yes — 가격·잔액·부족분의 실제 숫자 확정 전 필요 | PRD는 `2명당 1만원`과 코인 결제만 명시한다. |
| OPEN-02 | 코인 충전 패키지의 금액, 기본 코인, 보너스 코인 또는 할인율 구간이 정의되지 않았다. | yes — 패키지별 수치 콘텐츠 확정 전 필요 | “한 번에 많이 충전할수록 이득”과 복수 패키지만 명시한다. |
| OPEN-03 | 20회 열람 보상의 진행도에 무료 추천, 유료 열람, 무료 지급 열람권 사용분 중 무엇이 포함되는지 정의되지 않았다. | yes — 보상 진행 숫자 산정 전 필요 | 10회 거절 규칙의 제외 조건만 별도로 명시되어 있다. |
| OPEN-04 | 일일 무료 추천이 다음 날 정확히 언제 다시 제공되는지 정의되지 않았다. | no — ‘다음 날’로 안내 가능하나 구체 시각 표시에는 필요 | “다 보면 다음 날까지 기다려야 한다”만 명시한다. |
| OPEN-05 | 좋아요와 패스 직후의 피드백, 상호 좋아요 시 매칭 결과 화면과 대화 진입 규칙이 정의되지 않았다. | no — 필수 액션은 구현 가능하나 결과 목적지를 확정하려면 필요 | 관심 여부 표현은 요구되지만 매칭 결과 동작은 없다. |
| OPEN-06 | 어떤 프로필 항목에 공개 on/off를 제공해야 하는지 범위가 정의되지 않았다. | yes — 항목별 공개 제어 목록 확정 전 필요 | “공개 범위 설정 — 항목별 on/off”만 명시한다. |
| OPEN-07 | 사진 0장 상태에서 저장 허용 여부와 최소 필수 사진 수가 정의되지 않았다. | no — 빈 편집 상태는 만들 수 있으나 저장 수용 조건에는 필요 | 최대 6장과 가입 직후 빈 상태만 명시한다. |
| OPEN-08 | 닉네임과 한 줄 소개의 구체 글자 수 제한 및 닉네임 검증 시점이 정의되지 않았다. | yes — 오류 문구와 카운터의 실제 수치 확정 전 필요 | 중복 닉네임과 너무 긴 소개 오류만 명시한다. |
| OPEN-09 | 보유 열람권이 유료 구매분과 무료 보상분으로 나뉘는지, 사용 우선순위가 무엇인지 정의되지 않았다. | yes — 거절 카운트 포함 여부를 사용 전에 정확히 표시하려면 필요 | 무료 지급 열람권 사용분 거절은 10회 규칙에서 제외된다고만 명시한다. |
| OPEN-10 | 결제 성공·실패·취소 후의 상태와 외부 결제 수단 범위가 정의되지 않았다. | no — 결제 ‘진입’까지만 필수지만 완결된 구매 흐름에는 필요 | 코인 충전 화면은 결제 진입 액션만 요구한다. |
