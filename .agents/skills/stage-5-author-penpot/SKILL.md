---
name: stage-5-author-penpot
description: 근거가 연결된 브랜드 적응형 UI 블루프린트를 지정 Penpot Page에 컴포넌트 기반으로 저작하고 화면별 PNG 및 추적 계보를 검증한다. $start의 실제 디자인 저작 단계에 사용한다.
---

# Author the Adapted Design in Penpot

## 입력과 출력

- 입력: `<artifact_dir>/01-prd-contract.md`~`04-ui-blueprint.md`, `prd_path`, `reference_pages`, `work_page`, `run_id`, `artifact_dir`, 선택적 `revision_id`와 기존 `05-author-log.md`, Penpot MCP
- 출력: `<artifact_dir>/05-author-log.md`
- 외부 효과: 지정 `work_page`의 Penpot 노드

## 실행 게이트

1. 모든 입력, `work_page`, expected frame 목록을 확인한다. 01~04의 `run_id`, `prd_path`, `work_page`, `artifact_dir`가 호출값과 서로 일치하고 04의 모든 board가 03의 frame manifest에 존재하는지 확인한다. 04의 `assumption_ids`가 03의 `Assumption application ledger`와 일치하고, 모든 적용 가정에 예시/교체 경계가 있는지도 확인한다. 누락·불일치면 저작하지 않고 owner stage로 반려한다.
2. 작업 Page가 실제로 존재하고 reference·공용·다른 팀 Page가 아닌지 확인한다.
3. Page를 추측하거나 첫 Page를 기본 선택하지 않는다.
4. Page 전환만 하는 별도 `use_figma` 호출을 먼저 실행한다. 같은 호출에서 노드를 만지지 않는다.

## 절차

1. 이후 모든 스크립트 첫 부분에서 작업 Page를 이름으로 다시 확인한다.
2. `penpot.fonts.all`로 폰트를 확인하고 대체가 필요하면 근거와 영향을 기록한다.
3. 블루프린트 토큰을 JS 상수 객체로 선언하고 일관 적용한다.
4. 컴포넌트 이름에 `run_id` 기반 고유 프리픽스와 의미 기반 이름을 처음부터 사용한다.
5. 반복 UI는 컴포넌트 인스턴스로 만들고 인스턴스 채움은 Penpot 형식 `{fillColor, fillOpacity}`을 사용한다.
6. foundation, **brand shell**, signature, 신규 기능 컴포넌트 순으로 작은 배치로 저작한다. P0/P1 프레임을 모두 export 확인한 뒤에만 P2/P3을 저작한다. 블루프린트가 요구하면 primary 레퍼런스의 상태바 구조를 clone/recreate하고, 브랜드 앵커·하단 내비게이션을 재사용 컴포넌트로 먼저 만든다. 임의의 시간·와이파이·배터리 텍스트로 status bar를 흉내 내지 않는다.
7. 각 주요 노드가 `REQ-NN`, `REF-NN`, `NEW-NN`, `ASM-NN` 중 무엇을 구현하는지 로그에 연결한다. `ASM-NN` 기반 값은 블루프린트의 예시/교체 경계를 그대로 노출한다.
8. 비-Auto Layout 부모의 자식은 절대 좌표를 다시 설정한다. Auto Layout 축·사이징은 블루프린트를 따른다.
9. 가변 텍스트는 `growType="auto-height"`, 가변 칸은 고정 폭과 정렬을 사용한다. 하단 고정 요소의 Spacer는 계산값을 쓴다.
10. 실제 이미지가 필요하면 `penpot.uploadMediaUrl`을 사용하고 실패 시 지정 fallback을 적용한다. 탐색 메커니즘이 지도/위치라면 사용자 안전 경계에 맞는 범위·클러스터·가명화 표현을 사용한다.
11. 각 화면 또는 의미 있는 배치 뒤 `export_shape` PNG를 확인해 정렬·잘림·빈 렌더링을 수정한다. 빈 것처럼 보이면 안정화 후 재-export한다.
12. 마지막에 auto-height 텍스트를 resize하고 모든 최종 프레임을 다시 export한다.
13. 원본 사업 콘텐츠 복제, supplemental 스타일 혼입, signature 누락, 가정값의 사실 단정을 자체 점검한다. Shell과 `MECH-NN`이 요구된 화면에서는 상태바·브랜드 앵커·하단 내비게이션·검색/필터·지도/리스트 전이 중 해당 항목의 노드와 열린/적용 상태를 로그에 남긴다.

## 재실행 reconciliation

1. `revision_id`가 있으면 기존 author log의 node ID로 이 실행이 소유한 보드·컴포넌트만 식별한다. 이름만으로 대상을 찾지 않는다.
2. 호환되는 보드와 노드는 제자리에서 속성·콘텐츠·인스턴스를 갱신하고 새 보드를 중복 생성하지 않는다.
3. 컴포넌트 구조가 달라졌으면 기존 컴포넌트를 rename/remove하지 말고 `<run_id>/<revision_id>/<SemanticName>`으로 새 버전을 만든 뒤 소유 인스턴스만 교체한다.
4. 새 manifest에서 빠진 기존 최상위 보드는 삭제하지 않는다. 보드 이름을 `Archive/<run_id>/<revision_id>/<old-name>`으로 바꾸고 최종 보드 영역 밖으로 이동한다. 컴포넌트 이름은 바꾸지 않는다.
5. 새로 필요한 보드만 만들고 expected frame 이름이 작업 Page에서 정확히 하나인지 확인한다.
6. 새 로그는 최종 node ID, archive된 node ID, 교체 관계를 기록해 이전 로그를 대체한다.

## 출력 형식

```markdown
## Run
| run_id | prd_path | work_page | artifact_dir | started_at | completed_at |

## Components
| component_name | node_id | instances | decision_ids | ref_ids | new_ids | mechanism_ids | assumption_ids | blueprint_match |

## Boards
| frame_name | node_id | requirement_ids | signature_ref_ids | mechanism_ids | decision_ids | assumption_ids | export_checked | issues_fixed |

## Node lineage
| node_id | node_name | requirement_ids | ref_ids | mechanism_ids | new_ids | assumption_ids | decision_ids |

## Deviations
| blueprint_item | actual | reason | impact | lineage_preserved |

## Reconciliation
| revision_id | old_node_id | action | final_node_id | archive_name | status |

## Contamination audit
| check | evidence | status |

## Completion
| expected_frame | exists | exported | status |
```

## 금지

- 작업 Page 외 수정
- 전체 화면 일괄 저작 또는 PNG 미확인
- 생성한 컴포넌트 rename·자식 remove
- `figma.variables`에 토큰 보존을 의존
- 원본 사업 화면을 복제한 뒤 텍스트만 교체
- 다른 단계 산출물 수정
