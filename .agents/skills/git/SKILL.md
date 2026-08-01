---
name: git
description: 현재 저장소의 변경을 검토해 한 문장으로 요약하고 사용자 확인 후 main 브랜치에 커밋·푸시한다. "$git", "/git", "작업 저장", "커밋", "푸시" 요청에 사용한다.
---

# 작업 저장

## 절차

1. `git status --porcelain`, `git diff`, `git diff --cached`로 변경을 파악한다.
2. 파일 목록이 아니라 개선된 내용을 한 문장으로 요약한다.
3. 그 문장을 사용자에게 보여주고 commit message로 써도 되는지 반드시 확인한다.
4. 사용자가 확정한 문장 그대로 `git add -A`와 `git commit -m`을 실행한다.
5. 현재 브랜치가 `main`인지 확인하고 `git push origin main`을 실행한다. 다른 브랜치를 만들지 않는다.

push가 거부되면 `git pull --rebase origin main` 후 다시 push한다. 충돌이 나면 즉시 다음을 알린다.

> **작업 충돌이 발생했습니다. 이후부터는 조장과 동행해서 진행하세요.**

충돌 구간에서 양쪽 변경을 설명하고 어느 쪽을 살릴지 사용자에게 물은 뒤 해결한다. `git push --force`는 사용하지 않는다. 충돌 원인이 담당 외 단계 또는 승인 없는 공용 파일 수정인지도 확인한다.
