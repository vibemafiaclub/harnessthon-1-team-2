---
name: scaffold-harness
description: 팀이 확정한 중간 단계 목록으로 프로젝트용 Codex 하네스 초안인 `start` 진입점과 단계별 sub-agent skill을 생성한다. "$scaffold-harness", "/scaffold-harness", "하네스 초안", "단계 확정", "sub agent 만들어줘", "파이프라인 뼈대" 요청에 사용한다.
---

# Scaffold harness

확정된 단계 목록을 `.agents/skills/` 아래의 Codex skill 기반 하네스로 만든다. 이 작업은 공용 오케스트레이션 계약을 바꾸므로 실행 전에 사용자가 조장인지 확인한다.

## 1. 입력 게이트

단계 목록은 대화, 팀 설계 문서, 기존 `.agents/skills/stage-*/SKILL.md` 중 하나에서 확보한다. 각 단계마다 이름, 단일 산출물, 입력, 담당자가 있어야 한다. 빠진 값이 있으면 묻고 임의 생성하지 않는다.

다음 문제를 조장에게 알리고 결정받는다.

- 산출물이 없거나 둘 이상인 단계
- 전체가 한 단계뿐이거나 여덟 단계를 초과하는 구성
- 입력과 출력이 순환하는 구성

## 2. 파일 계약과 실행 DAG

- 실행마다 `run_id`를 만들고 중간 산출물은 `docs/artifacts/<run_id>/{NN}-{slug}.md`로 격리한다.
- 산출물은 다음 단계가 바로 읽을 수 있는 표·목록·키값 형식으로 정의한다.
- 파일 의존성으로 DAG를 만들고 병렬 가능한 구간을 표시해 조장에게 확인받는다.
- 같은 파일을 쓰는 단계는 병렬로 두지 않는다.
- 회사 레퍼런스를 쓰는 하네스라면 하나의 primary와 선택적 supplemental 역할을 입력 계약에 둔다.
- PRD 요구, 레퍼런스 근거, 신규 도출 판단이 최종 노드까지 추적되는 계약을 둔다.

## 3. Penpot 완성 단계 보장

Penpot MCP로 실제 도형을 만드는 단계가 없으면 `stage-{n}-author-penpot`을 제안하고 담당자를 확인한 뒤 추가한다. 마지막에는 항상 `stage-verify-penpot`을 추가해 `<artifact_dir>/99-verify.md`를 만들게 한다.

저작·검증 skill에는 아래 게이트를 반드시 포함한다.

- Page 이름을 인자로 받고, 없으면 시작 전에 사용자에게 묻는다.
- 첫 Page를 기본 선택하지 않는다.
- `기존파일`은 읽기 전용으로 취급한다.
- `중간공유`·`최종제출`에서 처음부터 저작하지 않는다.
- 모든 Penpot 스크립트에서 작업 Page를 다시 고정하고, Page 전환은 별도 호출로 한다.
- 저작 후 `export_shape` PNG를 확인하고 문제를 수정한다.

## 4. 단계 skill 생성

각 단계를 `.agents/skills/stage-{n}-{slug}/SKILL.md`로 만든다. 기존 단계 skill은 덮어쓰지 않는다. skill frontmatter에는 `name`과 호출 조건이 명확한 `description`만 둔다. 본문에는 다음 계약을 적는다.

```markdown
## 담당자
{담당자}만 이 skill을 수정한다.

## 입력
- `docs/PRD.md`
- `<artifact_dir>/{선행 단계}.md`
- 작업 Page 이름

## 출력
- `<artifact_dir>/{NN}-{slug}.md`

## 절차
1. 입력 파일을 확인하고 없으면 즉시 중단한다.
2. 단계 작업을 수행한다.
3. 정해진 출력 형식으로 단일 산출물을 쓴다.

## 금지
- 입력에 없는 값 추측
- 특정 예시 PRD의 고유명사·화면 수 하드코딩
- 다른 단계 산출물 수정
```

각 skill은 `skill-creator`의 초기화 도구로 만들고 `agents/openai.yaml`을 생성한다.

## 5. start 갱신

`.agents/skills/start/SKILL.md`의 단계 정의 표와 실행 순서를 실제 DAG로 교체한다. `start`는 오케스트레이션만 하며 직접 저작하지 않는다. 공용 원본 `.claude/skills/start/SKILL.md`는 별도 조장 승인 없이는 수정하지 않는다.

## 6. 검증과 보고

모든 신규/수정 skill에 `quick_validate.py`를 실행한다. 만든 skill, 유지한 skill, 자동 추가 단계, 미정 담당자, 병렬 실행 구간을 보고한다. 다음 액션은 `$start` 1회 실행과 `<artifact_dir>/99-verify.md` 확인이다.
