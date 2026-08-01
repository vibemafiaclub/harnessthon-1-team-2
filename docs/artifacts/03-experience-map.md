# Experience map

## Run metadata

| key | value |
|---|---|
| prd_path | `docs/examples/airbnb-dating.md` |
| work_page | `황선태` |
| reference_page | `2-airbnb` (read-only) |
| frame_prefix | `New/` |

## Experience principles

| principle | rationale | requirement_ids | reference_rule |
|---|---|---|---|
| 사람을 먼저, 판단 근거를 바로 다음에 | 한 번에 한 상대와 큰 사진을 보여주고 이름·거리·소개·필수 사실을 같은 시야 안에 두면 탐색의 초점이 흐려지지 않는다. | REQ-01, REQ-02, REQ-03, REQ-05, REQ-06 | `Photo-first card`; `Photography establishes trust`; 327px 주 콘텐츠 폭 |
| 빠른 판단과 깊은 확인을 분리 | 탐색 카드에는 결정에 필요한 최소 정보만 두고 상세 화면에서 소개, 관심사, 공개된 정보와 호환성 설명을 확장한다. | REQ-02, REQ-03, REQ-04, REQ-07, REQ-08 | `Progressive disclosure`; `Sectioned detail content` |
| 모든 행동에는 다음 결과를 예고 | 무료 잔여, 열람권 종류, 코인 비용, 보상 포함 여부를 행동 전에 보여줘 사용자가 뜻밖의 소모나 카운트 규칙을 겪지 않게 한다. | REQ-09, REQ-10, REQ-20, REQ-21, REQ-22, REQ-25, REQ-26, REQ-27, REQ-28, REQ-30 | `Sticky transaction bar`; 정보 위계; 숫자+문구 중복 표시 |
| 결제는 선택지이지 막다른 길이 아님 | 소진·부족 상태에서도 기다리기, 닫기, 뒤로가기와 충전 진입을 동등하게 이해할 수 있게 한다. | REQ-20, REQ-23, REQ-24, REQ-29, REQ-30 | 한 화면 한 주행동; 중립 캔버스와 희소한 accent; sticky action 패턴 |
| 프로필 완성도를 단계적으로 높임 | 빈 프로필도 무엇을 채워야 하는지 이해할 수 있고, 사진·기본 정보·스타일·공개 범위를 독립된 섹션으로 수정하게 한다. | REQ-11, REQ-12, REQ-13, REQ-14, REQ-15, REQ-16, REQ-17, REQ-18, REQ-19 | `Settings/list row`; 48px 제어 리듬; sectioned content |
| 상태는 색 이외의 말과 구조로 설명 | 스타일 일치, 오류, 보상 포함/제외, 저장 중을 라벨·아이콘·설명으로 중복 표현해 오해를 줄인다. | REQ-04, REQ-17, REQ-18, REQ-19, REQ-25, REQ-26, REQ-27 | `Compatibility/status chip`; neutral canvas, scarce accent |
| 기존 서비스의 차분한 신뢰감을 유지 | 실제 사람 사진, 넉넉한 여백, 명확한 위계, 제한된 강조색과 일관된 하단 컨텍스트를 재사용한다. | REQ-31, REQ-32, REQ-33, REQ-35 | `2-airbnb`의 photo-first, 24px inset, 12/14/16/22/32 type scale, bottom context |

## Prototype assumptions

아래는 PRD에 확정되지 않은 제품 규칙을 사실처럼 주장하지 않기 위한 프로토타입 계약이다. 후속 단계는 문구에 `예시`, `기준 확인 필요`, `다음 날 다시 제공`처럼 비확정성을 남기고 수치 간 내부 일관성만 유지한다.

| assumption_id | unresolved_rule | prototype treatment | affected_frames |
|---|---|---|---|
| PA-01 | 특별 열람의 코인 환산율 | 가격은 확정하지 않는다. 특별 열람 행동 전에는 PRD의 확정 문구 `특별 상대 2명 열람 기준 10,000원`을 우선 표시하고, 코인 수가 필요한 UI에는 `예시 코인` 라벨을 붙인다. | `New/PremiumDiscover`, `New/CoinShop`, `New/InsufficientCoin` |
| PA-02 | 충전 패키지 수치와 보너스율 | 비교 레이아웃 검증을 위한 3개 예시 패키지를 사용할 수 있으나 모두 `예시`로 표시한다. 금액이 클수록 혜택이 커지고 총 코인·보너스가 산술적으로 맞아야 한다. | `New/CoinShop` |
| PA-03 | 20회 보상의 포함 열람 범위 | 숫자 진행도는 `열람 20회 중 n회`로 표시하되 어떤 열람 종류가 포함되는지는 `집계 기준 확인 필요` 보조 문구로 남긴다. | `New/PremiumDiscover`, `New/RewardsInfo` |
| PA-04 | 무료 추천 재개 시각 | `다음 날 다시 만나요`까지만 말하고 자정이나 24시간 같은 시간을 약속하지 않는다. | `New/DailyLimit` |
| PA-05 | 좋아요·패스 후 결과와 매칭 규칙 | 탭/스와이프 후 다음 카드가 온다는 즉시 피드백만 제공한다. 매칭 성공·채팅 화면은 만들지 않고 `관심을 보냈어요`처럼 결과를 과장하지 않는 짧은 상태만 쓴다. | `New/Discover`, `New/ProfileDetail`, `New/PremiumDiscover` |
| PA-06 | 공개 제어 대상 항목 | UI 검증용으로 `키`, `직업`, `지역`, `관심사`, `연애 스타일`에 독립 토글을 배치하고 `공개 항목 예시`로 명시한다. 사진·닉네임·한 줄 소개는 이 초안에서 항상 공개하되 정책 확정 전임을 문서에 남긴다. | `New/ProfileEdit`, `New/ProfileDetail` |
| PA-07 | 사진 최소 수와 저장 요건 | 사진 0장도 편집 초안으로 존재하게 하고 저장 가능 여부는 단정하지 않는다. 6장 초과만 명시적으로 막는다. | `New/ProfileEdit` |
| PA-08 | 닉네임·소개 글자 수 제한 | 닉네임 중복은 수치 없는 오류로, 소개 길이는 `허용 길이를 초과했어요`와 현재 글자 수만 표시하고 확정 최대값을 만들지 않는다. | `New/ProfileEdit` |
| PA-09 | 유료 구매권과 무료 보상권의 구분·사용 우선순위 | 자산 요약은 `유료 열람권`과 `무료 보상권`을 분리한다. 사용 우선순위는 자동 적용이라 단정하지 않고 열람 전 사용권 종류를 확인/선택하게 한다. | `New/Discover`, `New/PremiumDiscover`, `New/CoinShop`, `New/RewardsInfo` |
| PA-10 | 결제 성공·실패 및 결제수단 | 하네스 범위는 패키지 선택 후 `결제로 이동`까지다. 외부 결제수단이나 결과 화면은 추가하지 않는다. | `New/CoinShop` |

## Screen manifest

| order | frame_name | type | purpose | primary_action | requirement_ids | states |
|---:|---|---|---|---|---|---|
| 1 | `New/Discover` | mobile root / discovery | 오늘의 무료 추천 한 명을 사진과 핵심 사실로 판단 | 현재 상대 `좋아요` 또는 `패스` | REQ-01, REQ-02, REQ-03, REQ-04, REQ-05, REQ-06, REQ-07, REQ-08, REQ-09, REQ-10, REQ-31, REQ-32, REQ-33, REQ-34, REQ-35 | default-match, default-mismatch, last-free, transition-to-next; 뒤 카드 preview 포함 |
| 2 | `New/ProfileDetail` | mobile detail | 카드에서 부족했던 공개 정보와 호환성 근거를 깊게 확인 | 상세를 본 상대 `좋아요` 또는 `패스` | REQ-03, REQ-04, REQ-08, REQ-15, REQ-31, REQ-33, REQ-35 | match, mismatch, private-fields-hidden; 무료/특별 진입 context 유지 |
| 3 | `New/ProfileEdit` | mobile form | 내 사진·소개·스타일·공개 범위를 작성하고 수정 | `저장` | REQ-11, REQ-12, REQ-13, REQ-14, REQ-15, REQ-16, REQ-17, REQ-18, REQ-19, REQ-31, REQ-32, REQ-33, REQ-34, REQ-35 | populated, initial-empty, photo-0/1/2–5/6, nickname-error, intro-error, saving, saved |
| 4 | `New/DailyLimit` | mobile status / decision | 무료 10명 소진과 다음 날 재개, 선택 가능한 특별 열람을 차분히 설명 | `특별 상대 알아보기` | REQ-09, REQ-20, REQ-21, REQ-29, REQ-31 | exhausted; dismiss/wait route always visible |
| 5 | `New/PremiumDiscover` | mobile root / paid discovery | 비용·사용권·보상 규칙을 확인한 뒤 특별 상대를 판단 | 사용권 확인 후 `상대 보기`, 열린 뒤 `좋아요` 또는 `패스` | REQ-21, REQ-22, REQ-25, REQ-27, REQ-28, REQ-31, REQ-32, REQ-33, REQ-35 | pre-consumption, opened-paid-ticket, opened-free-reward-ticket, reward-ready, insufficient |
| 6 | `New/CoinShop` | mobile commerce | 보유 자산과 예시 패키지의 총 혜택을 비교해 결제로 진입 | 선택한 패키지 `결제로 이동` | REQ-10, REQ-22, REQ-23, REQ-24, REQ-26, REQ-28, REQ-29, REQ-31, REQ-32, REQ-33, REQ-34 | no-selection, selected-package, tickets-zero/available, reward-progress/earned |
| 7 | `New/RewardsInfo` | mobile explainer | 두 보상 제도의 진행도와 카운트 포함·제외 조건을 구분해 이해 | `확인하고 돌아가기` | REQ-25, REQ-26, REQ-27, REQ-28, REQ-29, REQ-31 | in-progress, reward-ready/earned, paid-rejection-counted, free-ticket-rejection-excluded |
| 8 | `New/InsufficientCoin` | modal/bottom sheet on premium context | 특별 열람에 부족한 자산을 알고 충전 또는 취소 선택 | `코인 충전 보기` | REQ-29, REQ-30, REQ-31 | insufficient-balance; current/required/shortfall use same labelled example unit |

### Build scope rule

- 8개 manifest 항목은 모두 평가 가능한 최상위 프레임 또는 명시적 오버레이 상태로 저작한다. `New/InsufficientCoin`은 배경 `New/PremiumDiscover`를 복제해 opacity를 낮추고 시트를 얹는 상태 프레임으로 만든다.
- `New/Discover`, `New/ProfileEdit`, `New/CoinShop`은 제출에 필요한 정확한 이름을 사용한다. 추가 항목도 `New/`를 유지한다.
- manifest의 상태를 전부 별도 프레임으로 복제할 필요는 없다. 요구사항 판독에 필요한 대표 상태(`initial-empty`, validation error, saving, last-free, reward-ready, free-ticket-excluded)는 기본 프레임 옆에 `New/State/...` 프레임 또는 명확한 컴포넌트 variant로 보여준다.
- 모든 반복 카드·패키지·상태 chip·설정 row는 후속 UI 명세에서 데이터가 다른 동일 컴포넌트 인스턴스로 정의한다.

## Flow graph

| from | trigger | to | success | failure | recovery |
|---|---|---|---|---|---|
| 가입 완료 / 추천 탭 | 추천 보기 | `New/Discover` | 무료 잔여와 한 상대 카드 표시 | 추천 데이터 로딩 실패는 PRD 미정 | 구조를 유지한 재시도 상태만 허용; 별도 제품 규칙은 만들지 않음 |
| `New/Discover` | 카드/상세 진입점 탭 | `New/ProfileDetail` | 공개된 확장 정보 표시 | 비공개 항목 없음 | 숨겨진 필드는 빈칸 대신 섹션에서 제외; 뒤로가기로 복귀 |
| `New/Discover` | 좋아요 또는 패스 | `New/Discover` 다음 카드 | 짧은 선택 피드백 후 뒤 카드가 앞으로 이동 | 마지막 무료 추천 처리 | `New/DailyLimit`로 이동 |
| `New/ProfileDetail` | 좋아요 또는 패스 | 원래 discovery context | 판단 반영 후 다음 상대 | 결과/상호 매칭 규칙 미정 | `PA-05`에 따라 결과를 약속하지 않고 원래 흐름으로 복귀 |
| `New/Discover` | 열 번째 무료 상대 처리 | `New/DailyLimit` | 10/10 소진과 다음 날 안내 | 없음 | 기다리기/닫기로 추천 탭 맥락에 남음 |
| `New/DailyLimit` | 특별 상대 알아보기 | `New/PremiumDiscover` | 비용·자산·보상 규칙을 먼저 표시 | 보유 코인/열람권 부족 | `New/InsufficientCoin` 또는 뒤로가기 |
| `New/DailyLimit` | 닫기/다음 날 보기 | 이전 추천 맥락 | 결제 없이 종료 | 없음 | 추천 탭의 소진 상태 유지 |
| `New/PremiumDiscover` | 상대 보기 | 같은 화면의 opened state | 사용권 종류·비용을 확인한 뒤 사진과 판단 정보 공개 | 잔액/사용권 부족 | `New/InsufficientCoin` 표시 |
| `New/PremiumDiscover` | 상세 진입점 탭 | `New/ProfileDetail` | 진입 context를 유지한 상세 표시 | 없음 | 뒤로가기로 특별 탐색 복귀 |
| `New/PremiumDiscover` | 패스 | 다음 특별 상대 또는 특별 탐색 종료 | 유료권 사용이면 거절 진행 +1, 무료 보상권이면 제외 문구 표시 | 카운트 종류를 판별할 수 없음 | 사용권 종류 선택/확인 단계로 되돌림 |
| `New/PremiumDiscover` | 보상 규칙 보기 | `New/RewardsInfo` | 현재 진행도와 포함/제외 규칙 확인 | 20회 포함 기준 미정 | `집계 기준 확인 필요`를 표시하고 돌아가기 제공 |
| `New/InsufficientCoin` | 코인 충전 보기 | `New/CoinShop` | 현재 잔액과 예시 패키지 비교 | 없음 | 뒤로가기/취소로 특별 탐색 복귀 |
| `New/InsufficientCoin` | 취소 | `New/PremiumDiscover` pre-consumption | 자산 소모 없이 복귀 | 없음 | 동일 |
| `New/CoinShop` | 패키지 선택 | `New/CoinShop` selected state | 총 코인·예시 혜택·금액과 CTA 갱신 | 패키지 수치 정책 미정 | 예시 라벨 유지, 선택 해제/뒤로가기 제공 |
| `New/CoinShop` | 결제로 이동 | external payment entry | 결제 프로세스로 진입 | 결과 동작 미정 | 결제 성공/실패를 하네스에서 주장하지 않고 이전 화면으로 돌아갈 수 있게 함 |
| `New/CoinShop` | 특별 상대 보기 | `New/PremiumDiscover` | 보유 열람권/자산 summary 전달 | 부족 | `New/InsufficientCoin` |
| `New/CoinShop` | 보상 자세히 | `New/RewardsInfo` | 두 보상 진행도 확인 | 없음 | 확인 후 shop으로 복귀 |
| 프로필 탭 / 가입 직후 | 프로필 편집 | `New/ProfileEdit` populated / initial-empty | 섹션별 편집 가능 | 없음 | 뒤로가기 시 저장되지 않은 변경 경고는 정책 미정이므로 추가하지 않음 |
| `New/ProfileEdit` | 사진 추가/순서 변경 | 같은 화면 | 0–6장 상태 갱신, 2장 이상 reorder | 7번째 추가 시도 | 최대 6장 안내 후 기존 6장 유지 |
| `New/ProfileEdit` | 저장 | saving → saved | 중복 입력 없음, 길이 유효, 저장 진행 후 완료 | 닉네임 중복 또는 소개 길이 초과 | 해당 필드 inline error로 이동, 수정 후 재저장 |

## Screen content hierarchy

| frame_name | priority | section | user_question | content | action |
|---|---:|---|---|---|---|
| `New/Discover` | 1 | Status + asset summary | 오늘 몇 명을 더 볼 수 있고 어떤 자산이 있나? | `오늘 무료 n/10`, `열람권 n장`의 숫자 summary | 자산 summary에서 shop 진입 |
| `New/Discover` | 2 | Current profile media | 지금 판단할 사람은 누구인가? | 한 명의 큰 실제 사진, 사진 순서, 다음 카드 일부 | 사진 넘기기; 상세 보기 |
| `New/Discover` | 3 | Identity + introduction | 기본 신원과 첫인상은? | 이름, 나이, 거리, 한 줄 소개 | 상세 보기 |
| `New/Discover` | 4 | Decision facts | 나와 맞을 가능성이 있나? | 키·직업·지역·관심사, 연애 스타일, `같은 스타일`/`다른 스타일` 텍스트 chip | 없음 |
| `New/Discover` | 5 | Sticky decision actions | 이 사람에게 어떤 선택을 할까? | 패스와 좋아요를 동등한 크기로 구분, 현재 대상 이름 보조 | 패스 / 좋아요 |
| `New/ProfileDetail` | 1 | Hero + identity | 더 자세히 볼 상대가 누구인가? | 큰 사진, 이름·나이·거리, 뒤로가기 | 뒤로가기 |
| `New/ProfileDetail` | 2 | Compatibility | 우리 스타일은 어떻게 같거나 다른가? | 내 스타일과 상대 스타일을 두 라벨로 병치하고 일치 여부 문장 | 없음 |
| `New/ProfileDetail` | 3 | About + facts | 상대가 공개한 정보는 무엇인가? | 소개, 키·직업·지역·관심사; 비공개 항목은 노출하지 않음 | 펼쳐보기 가능 |
| `New/ProfileDetail` | 4 | Sticky decision | 충분히 확인한 뒤 어떤 선택을 할까? | 원래 discovery의 무료/특별 context와 대상 이름 | 패스 / 좋아요 |
| `New/ProfileEdit` | 1 | Completion + save | 무엇을 채우고 어떻게 확정하나? | 편집 제목, 현재 상태 안내, 저장 CTA | 저장 |
| `New/ProfileEdit` | 2 | Photos | 어떤 사진을 어떤 순서로 보여줄까? | 2×3 슬롯, 1–6 순번, 추가, 대표 표시, 6장 제한 | 추가 / 드래그 reorder |
| `New/ProfileEdit` | 3 | Basic information | 나를 어떻게 소개할까? | 닉네임, 한 줄 소개, 키, 직업, 지역, 관심사 입력 | 입력/수정 |
| `New/ProfileEdit` | 4 | Relationship style | 어떤 만남을 원하나? | 진지한 관계 / 새로운 인연 / 친구 단일 선택 | 하나 선택 |
| `New/ProfileEdit` | 5 | Visibility | 무엇을 공개할까? | 공개 항목 예시의 독립 on/off와 현재 상태 text | 항목별 toggle |
| `New/ProfileEdit` | 6 | Validation / progress | 저장이 안 되거나 진행 중인 이유는? | 필드별 오류, 저장 spinner와 `저장 중`, 완료 전 disabled CTA | 수정 후 재저장 |
| `New/DailyLimit` | 1 | Completion status | 왜 더 이상 무료 상대가 없나? | `오늘 10명을 모두 봤어요`, 10/10 | 없음 |
| `New/DailyLimit` | 2 | Next free availability | 돈을 내지 않으면 언제 다시 볼 수 있나? | `다음 날 무료 추천이 다시 제공돼요` | 닫기/기다리기 |
| `New/DailyLimit` | 3 | Optional continuation | 지금 더 보고 싶으면 무엇을 할 수 있나? | 특별 상대의 성격, `2명 기준 10,000원`, 강압 없는 설명 | 특별 상대 알아보기 |
| `New/PremiumDiscover` | 1 | Cost + entitlement gate | 무엇을 얼마나 써서 보게 되나? | 사용할 열람권 종류, 보유 수량, `2명 기준 10,000원`, 무료권 여부 | 상대 보기 / 사용권 확인 |
| `New/PremiumDiscover` | 2 | Reward context | 이번 행동이 어떤 보상에 포함되나? | 열람 20회 진행도, 패스 카운트 포함/제외 문장 | 규칙 자세히 |
| `New/PremiumDiscover` | 3 | Special profile | 특별 상대는 누구이며 왜 특별한가? | 90% 이상 기준 설명, 사진, 핵심 정보; 근거 없는 개인 확률 수치는 만들지 않음 | 상세 보기 |
| `New/PremiumDiscover` | 4 | Decision | 열린 상대를 어떻게 판단할까? | 좋아요 / 패스, 사용권 종류 재확인 | 좋아요 / 패스 |
| `New/CoinShop` | 1 | Asset summary | 지금 무엇을 가지고 있나? | 보유 코인, 유료 열람권, 무료 보상권의 분리된 숫자 | 특별 상대 보기 |
| `New/CoinShop` | 2 | Pricing basis | 코인과 특별 열람의 관계는? | 확정 문구 `특별 상대 2명 기준 10,000원`; 환산율은 예시/미확정 표시 | 없음 |
| `New/CoinShop` | 3 | Package comparison | 많이 충전할수록 얼마나 더 이득인가? | 예시 금액·기본 코인·보너스·총 코인 3개 package | package 선택 |
| `New/CoinShop` | 4 | Rewards summary | 다음 무료 혜택까지 얼마나 남았나? | 유료 패스 x/10, 남은 수, 보상 2장; 열람 x/20, 90%+ 상대 1명 | 보상 자세히 |
| `New/CoinShop` | 5 | Sticky checkout | 선택한 패키지의 최종 조건은? | 선택 금액, 총 코인, 예시 표식 | 결제로 이동 / 뒤로가기 |
| `New/RewardsInfo` | 1 | 20-view reward | 가장 잘 맞는 상대 보상까지 얼마나 남았나? | x/20, 남은 n회, `90% 이상인 상대 1명`, 집계 기준 확인 필요 | 없음 |
| `New/RewardsInfo` | 2 | Paid-rejection reward | 무료 열람권 2장까지 얼마나 남았나? | 유료 열람 상대 패스 x/10, 남은 n회, 보상 2장 | 없음 |
| `New/RewardsInfo` | 3 | Count rules | 어떤 패스가 포함되나? | 유료로 본 상대 패스는 포함, 무료 보상권 사용 상대 패스는 제외 | 확인하고 돌아가기 |
| `New/InsufficientCoin` | 1 | Balance explanation | 무엇이 얼마나 부족한가? | 현재/필요/부족 수치를 같은 `예시 코인` 단위로 표시 | 없음 |
| `New/InsufficientCoin` | 2 | Choice | 충전하지 않아도 돌아갈 수 있나? | 중립 취소와 단일 강조 충전 CTA | 코인 충전 보기 / 취소 |

## State matrix

| frame_name | state | trigger | visible_change | recovery |
|---|---|---|---|---|
| `New/Discover` | default-match | 무료 추천 진입, 스타일 동일 | 현재 카드 한 장, 뒤 카드 preview, `같은 연애 스타일` 문장 chip, 무료/열람권 숫자 | 패스·좋아요 또는 상세 진입 |
| `New/Discover` | default-mismatch | 다음 추천이 다른 스타일 | chip에 `서로 다른 연애 스타일`과 두 스타일 값을 함께 표시 | 동일 |
| `New/Discover` | last-free | 오늘 남은 추천 1명 | `오늘 마지막 무료 추천`과 9/10 또는 남은 1명 표기 | 판단 후 `New/DailyLimit` |
| `New/Discover` | transition-to-next | 좋아요/패스 | 선택 label이 짧게 나타나고 뒤 카드가 현재 위치로 이동 | 다음 카드 stable state |
| `New/ProfileDetail` | private-fields-hidden | 공개 off인 항목 존재 | 비공개 값을 `비공개` placeholder로 노출하지 않고 해당 row 자체를 제외 | 뒤로가기 |
| `New/ProfileEdit` | initial-empty | 가입 직후 최초 진입 | 빈 6-slot grid, 모든 input hint, 스타일 미선택, 공개 예시 toggle, 저장 요건 미확정 안내 | 입력 시작 |
| `New/ProfileEdit` | photo-0/1/2–5/6 | 사진 추가·삭제 | slot 수와 순번 갱신; 2장부터 reorder affordance; 6장에서 추가 비활성 및 최대 안내 | 삭제/순서 변경 |
| `New/ProfileEdit` | nickname-error | 저장 시 중복 닉네임 | 닉네임 field border/status와 `이미 사용 중인 닉네임이에요. 다른 이름을 입력해 주세요.` | 필드 수정 후 재저장 |
| `New/ProfileEdit` | intro-error | 저장 시 허용 길이 초과 | 소개 field와 현재 글자 수, `허용 길이를 초과했어요. 소개를 줄여 주세요.`; 확정 max는 표시하지 않음 | 글을 줄인 뒤 재저장 |
| `New/ProfileEdit` | saving | 유효한 저장 시작 | `저장 중` progress, 입력·사진 조작·저장 CTA disabled; 화면 이탈을 유도하지 않음 | 완료 후 saved; 실패 규칙은 PRD 미정 |
| `New/ProfileEdit` | saved | 저장 완료 | `저장했어요` 확인 후 CTA 정상화 | 프로필 탭으로 돌아가기 |
| `New/DailyLimit` | exhausted | 무료 10명 처리 완료 | 10/10, 다음 날 안내, 닫기와 특별 탐색 CTA | 닫기 또는 특별 탐색 |
| `New/PremiumDiscover` | pre-consumption | 특별 탐색 진입 | 사진 세부를 가린 안정된 preview 또는 설명 상태, 사용권 종류·비용·보상 영향을 행동 전에 표시 | 보기 또는 뒤로가기 |
| `New/PremiumDiscover` | opened-paid-ticket | 유료권 확인 후 보기 | 전체 프로필과 `이 상대를 패스하면 무료권 보상 진행도에 포함` 문장 | 좋아요/패스/상세 |
| `New/PremiumDiscover` | opened-free-reward-ticket | 무료 보상권으로 보기 | 전체 프로필과 `이 상대의 패스는 무료권 보상 진행도에서 제외` 문장 | 좋아요/패스/상세 |
| `New/PremiumDiscover` | reward-ready | 20회 진행 달성 | `90% 이상인 특별 상대 1명` reward-ready banner; 포함 집계 기준은 확정하지 않음 | 상대 보기 / 규칙 보기 |
| `New/CoinShop` | no-selection | shop 최초 진입 | package 3개가 동일 위계, checkout CTA 비활성 | 하나 선택 또는 뒤로가기 |
| `New/CoinShop` | selected-package | package 선택 | 선택 border/check, 금액·총 코인 summary, `예시` 표식, checkout 활성 | 다른 package 선택/결제 진입 |
| `New/CoinShop` | reward-earned | 유료 상대 패스 10회 달성 | `무료 열람권 2장 받음`과 보유 무료권 숫자 갱신 | 특별 상대 보기 |
| `New/RewardsInfo` | progress | 아직 미달 | x/20, x/10과 각각 남은 수를 숫자로 표시 | 돌아가기 |
| `New/RewardsInfo` | earned | 기준 달성 | 완료 label, 받을/받은 혜택 수량과 다음 cycle 여부는 미정 표기 | 돌아가기 |
| `New/InsufficientCoin` | insufficient-balance | 필요한 자산 없이 상대 보기 | 배경 premium 화면 opacity 감소, 현재/필요/부족 예시 수치, 충전·취소 | shop 또는 overlay 닫기 |

## Coverage

| requirement_id | destination | status |
|---|---|---|
| REQ-01 | `New/Discover` 단일 현재 카드와 다음 카드 preview | covered |
| REQ-02 | `New/Discover` 사진, 거리, 관심사 | covered |
| REQ-03 | `New/Discover`, `New/ProfileDetail`의 키·직업·지역·연애 스타일 | covered |
| REQ-04 | 두 화면의 match/mismatch 문장 chip 및 두 스타일 병치 | covered |
| REQ-05 | `New/Discover` identity + introduction | covered |
| REQ-06 | `New/Discover` 뒤 카드 preview와 transition state | covered |
| REQ-07 | `New/Discover` sticky 좋아요·패스 | covered |
| REQ-08 | 카드 상세 진입점 → `New/ProfileDetail` → 원래 context 복귀 | covered |
| REQ-09 | `New/Discover` 잔여 수, last-free, `New/DailyLimit` 10/10 | covered |
| REQ-10 | `New/Discover`, `New/CoinShop`의 일치하는 열람권 수; 권종 분리 | covered with PA-09 |
| REQ-11 | `New/ProfileEdit` populated form + save | covered |
| REQ-12 | 사진 0/1/2–5/6 및 reorder/최대 상태 | covered with PA-07 |
| REQ-13 | 기본 정보 6개 입력 | covered |
| REQ-14 | 세 연애 스타일 단일 선택 | covered |
| REQ-15 | 공개 항목 예시별 독립 toggle, 상세 비공개 필드 숨김 | covered with PA-06 |
| REQ-16 | `New/ProfileEdit` initial-empty | covered |
| REQ-17 | nickname-error와 수정·재저장 | covered with PA-08 |
| REQ-18 | intro-error와 수정·재저장 | covered with PA-08 |
| REQ-19 | saving 중 입력/중복 저장 차단 | covered |
| REQ-20 | `New/DailyLimit` exhausted + 다음 날 안내 | covered with PA-04 |
| REQ-21 | `New/DailyLimit` 진입점과 `New/PremiumDiscover` 대상 설명 | covered |
| REQ-22 | Premium/Shop의 `특별 상대 2명 기준 10,000원` | covered with PA-01 |
| REQ-23 | `New/CoinShop` 보유 코인·package·checkout 진입 | covered with PA-01, PA-02, PA-10 |
| REQ-24 | 예시 package의 금액·기본·bonus·총량 비교 | covered with PA-02 |
| REQ-25 | Premium/Rewards의 x/20, 남은 수, 90%+ 1명 | covered with PA-03 |
| REQ-26 | Shop/Rewards의 유료 패스 x/10, 남은 수, 무료권 2장 | covered |
| REQ-27 | 행동 전후 paid-counted/free-ticket-excluded 문장 | covered with PA-09 |
| REQ-28 | Shop/Rewards/Premium의 열람권·다음 보상·예시 충전 이득 숫자 | covered with PA-02, PA-03, PA-09 |
| REQ-29 | Limit/Shop/Insufficient의 닫기·뒤로가기·취소 | covered |
| REQ-30 | `New/InsufficientCoin`의 현재/필요/부족 예시 단위와 두 경로 | covered with PA-01 |
| REQ-31 | 전 화면에 reference의 photo-first, neutral hierarchy, progressive disclosure와 bottom context 적용 | covered; visual values deferred to UI blueprint |
| REQ-32 | 반복 UI를 component/instance로 만드는 build scope rule | covered; implementation deferred to authoring |
| REQ-33 | 의미 기반 `New/*` 위계와 auto-layout build rule | covered; implementation deferred to authoring |
| REQ-34 | `황선태` Page의 정확한 세 필수 frame name + 추가 `New/` frames | covered |
| REQ-35 | 실제 사진 및 평가 가능한 현실적 content 요구 | covered; asset selection deferred to UI blueprint |

## Handoff contract

- 다음 단계는 위 manifest의 8개 목적지와 대표 상태를 줄이지 않는다. 상태를 component variant로 구현할 때도 최종 PNG에서 요구사항의 상태 차이를 판독할 수 있어야 한다.
- 시각값은 `02-reference-system.md`의 observed/derived 규칙만 사용하며 이 문서에서 새로운 색·간격·타이포 값을 발명하지 않는다.
- PA-01~PA-10은 제품 확정값이 아니다. 프로토타입 수치가 필요하면 `예시` 라벨과 계산 일관성을 함께 유지한다.
- 무료 추천 수, 유료 열람권, 무료 보상권, 코인과 두 보상 진행도는 모든 화면에서 동일한 하나의 실행 데이터 세트를 사용한다.
- `2-airbnb`는 읽기 전용이며 저작 대상은 `황선태` Page뿐이다.
