---
name: start
description: 회사별 레퍼런스의 브랜드 정체성을 유지하면서 신규 PRD에 맞는 Penpot UI를 만드는 7단계 하네스를 실행한다. "/start", "PRD 실행", "하네스 돌려줘" 요청에 사용한다.
---

# Compatibility Entry Point

공용 호환 진입점이다. 실행 전에 저장소의 정식 계약인 `.agents/skills/start/SKILL.md`를 끝까지 읽고 그대로 따른다.

Claude Code에서는 다음 custom sub-agent를 사용한다. 각 agent는 동명의 `.claude/skills/<stage>/SKILL.md`를 먼저 읽고, 다시 `.agents/skills/<stage>/SKILL.md`의 정식 계약을 따른다.

1. `stage-1-analyze-prd`와 `stage-2-audit-reference`를 병렬 실행한다.
2. 두 산출물의 handoff 잠금이 통과한 뒤 `stage-3-architect-experience`를 실행한다.
3. 이어서 `stage-4-specify-ui-system`, `stage-5-author-penpot`, `stage-6-critique-fix`, `stage-verify-penpot`을 직렬 실행한다.

`work_page`, primary `reference_pages`, `run_id`, `artifact_dir`를 모든 sub-agent prompt에 명시한다. `.agents`의 정식 계약과 이 호환 설명이 다르면 정식 계약을 우선한다.

브랜드 판단 기준은 `docs/brand-inheritance.md`다. 모든 sub-agent prompt에 이 경로를 함께 전달한다. 2단계가 실측하고, 3단계가 판별하고, 4·5단계가 강제하고, 6·7단계가 감사한다.

필수 입력은 `prd_path`, `work_page`, 하나의 primary를 포함한 `reference_pages`다. 모든 단계는 `.agents/skills/stage-*/SKILL.md`의 계약으로 별도 sub-agent가 수행하며 산출물은 `docs/artifacts/<run_id>/`에 격리한다.

Page 이름이나 primary 레퍼런스를 추측하지 않는다. 레퍼런스·다른 팀·공용 Page를 수정하지 않는다.
