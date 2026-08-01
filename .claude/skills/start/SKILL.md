---
name: start
description: 회사별 레퍼런스의 브랜드 정체성을 유지하면서 신규 PRD에 맞는 Penpot UI를 만드는 7단계 하네스를 실행한다. "/start", "PRD 실행", "하네스 돌려줘" 요청에 사용한다.
---

# Compatibility Entry Point

공용 호환 진입점이다. 실행 전에 저장소의 정식 계약인 `.agents/skills/start/SKILL.md`를 끝까지 읽고 그대로 따른다.

필수 입력은 `prd_path`, `work_page`, 하나의 primary를 포함한 `reference_pages`다. 모든 단계는 `.agents/skills/stage-*/SKILL.md`의 계약으로 별도 sub-agent가 수행하며 산출물은 `docs/artifacts/<run_id>/`에 격리한다.

Page 이름이나 primary 레퍼런스를 추측하지 않는다. 레퍼런스·다른 팀·공용 Page를 수정하지 않는다.
