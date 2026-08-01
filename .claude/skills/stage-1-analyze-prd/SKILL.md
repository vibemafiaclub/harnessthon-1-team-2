---
name: stage-1-analyze-prd
description: Claude Code 호환 진입점. PRD를 실행 단위 요구 계약으로 변환한다.
---

# Compatibility Entry Point

실행 전에 `.agents/skills/stage-1-analyze-prd/SKILL.md`를 끝까지 읽고 그대로 따른다. `assumption_mode=auto`에서 routine PRD 질문 대신 `ASM-NN`을 만들고, 외부 상태 위험만 `BLOCK-NN`으로 남긴다. 산출물은 반드시 호출받은 `<artifact_dir>/01-prd-contract.md` 하나에만 쓴다.
