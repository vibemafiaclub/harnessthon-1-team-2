---
name: stage-6-critique-fix
description: 저작된 Penpot 화면을 신규 PRD 적합성과 primary 회사 브랜드 충실도라는 독립된 두 축으로 비평하고 blocker·major 문제를 지정 Page에서 직접 수정한다. $start의 시각 QA 단계에 사용한다.
---

# Critique and Fix on Two Axes

## 입력과 출력

- 입력: `<artifact_dir>/01-prd-contract.md`~`05-author-log.md`, `reference_pages`, `work_page`, `run_id`, `artifact_dir`, Penpot MCP
- 출력: `<artifact_dir>/06-visual-qa.md`
- 외부 효과: 지정 `work_page`의 blocker·major 수정

## 실행 게이트

- 입력과 작업 Page가 없으면 중단한다.
- 01~05의 `run_id`, `prd_path`, `work_page`, `artifact_dir`가 호출값과 서로 일치하고, 05에 모든 expected frame의 node ID와 lineage가 있는지 확인한다. 불일치·누락이면 수정하지 않고 owner stage로 반려한다.
- 작업 Page 외에는 수정하지 않는다.
- Page 전환은 별도 호출로 하고 모든 스크립트에서 이름으로 다시 확인한다.

## 절차

1. author log의 모든 보드를 안정화 후 `export_shape`로 다시 확인한다.
2. PRD 축에서 과업 완결성, 상태, 정보 위계, 카피, 접근성과 직관성을 평가한다.
3. 브랜드 축에서 signature 인지성, foundation 일관성, 어조, 밀도, primary 충실도를 평가한다. `Brand shell evidence`에 있던 상태바·브랜드 앵커·하단 내비게이션이 적절한 화면에 실제로 계승됐는지 별도 평가한다.
4. 공통 품질로 레이아웃·정렬, 타이포·컬러, 디테일, 이미지, 터치 영역, 구조를 평가한다.
5. 다음 두 실패를 명시적으로 탐지한다.
   - `generic_brand_loss`: 범용 템플릿에 색만 입혀 회사 특징이 사라짐
   - `source_product_clone`: 원본 사업의 화면·콘텐츠를 새 이름으로 복제함
6. supplemental의 스타일이 primary를 압도하는 `brand_contamination`을 검사한다.
7. `Mechanism transfer ledger`의 검색·필터·지도/리스트·위치 같은 핵심 판단 도구가 새 도메인의 문제를 실제로 해결하는지, entry·applied state·결과가 모두 보이는지 평가한다. 민감한 도메인의 위치 표현은 안전 경계를 지키는지 검사한다.
8. **승계 축을 감사한다.** 03 `Inheritance decision table`과 04 `Slot fidelity spec`을 실제 노드·PNG와 대조한다.
   - 모든 `②`가 원본과 같은 자리·정렬·줄 수로 나타나는가. 자리가 밀렸거나 줄이 빠졌으면 major다.
   - `③`으로 판정한 원본 요소가 화면에 새어 들어오지 않았는가. 새어 들어왔으면 blocker다.
   - 화면당 `④` 개수를 센다. 2개를 넘으면 major이며 `owner_stage=3`으로 반려한다.
   - 브랜드색이 03 `Brand color budget`의 허용 위치 밖에 칠해졌는지 PNG에서 확인한다. 초과면 major다.
   - 타이포 weight가 02 관찰 집합 밖인지 노드에서 확인한다. 벗어났으면 major다.
   - 02 `SRULE-NN`의 배타 관계가 깨진 화면이 있는지 확인한다. 하단 내비와 하단 액션바 공존처럼 원본이 금지한 조합이 있으면 major다.
9. 실제 노드에서 `REQ-NN`, `REF-NN`, `MECH-NN`, `NEW-NN`, `INH-NN` 계보를 대조한다.
10. blocker와 major를 직접 수정한다. 위험한 rename/remove 대신 새 고유 이름 컴포넌트로 교체한다. 다만 `④` 초과와 `③` 누출은 UX 판단이므로 이 단계에서 임의로 새 문법을 만들지 말고 `owner_stage=3`으로 반려한다.
11. 수정 화면을 재-export하고 PRD 축과 브랜드 축 모두에서 회귀가 없는지 확인한다.

## 출력 형식

```markdown
## Run metadata
| run_id | prd_path | work_page | artifact_dir | input_01_to_05 |

## Dual-axis scorecard
| frame_name | prd_fit | brand_fidelity | brand_shell | mechanism_transfer | domain_fit | layout | type_color | polish | structure |

## Findings and fixes
| id | severity | axis | frame_name | evidence | fix | reexport_status |

## Requirement audit
| requirement_id | frame_name | evidence_node | status |

## Brand audit
| ref_id | intended_transfer | evidence_node | fidelity | status |

## Shell and mechanism audit
| shell_or_mechanism_id | source_ref_ids | intended_transfer | evidence_node | applied_state_evidence | safety_status | status |

## Inheritance audit
| inh_id | class | slot_id | frame_name | evidence_node | position_kept | alignment_kept | line_count_kept | status |

## Inheritance budget audit
| frame_name | new_grammar_count | brand_color_positions_over_budget | weight_out_of_range | structural_rule_broken | leaked_class_3_elements | status | owner_stage |

## Novel decision audit
| new_id | evidence_node | derivation_fit | status |

## Failure-mode audit
| mode | evidence | status |

## Remaining risks
| id | severity | reason | owner_stage |

## Verdict
| blocker_count | major_count | ready_for_verify |
```

## 합격 기준

- 모든 화면의 `prd_fit`, `brand_fidelity`, `domain_fit`이 각각 4 이상이다.
- blocker와 major가 0이다.
- 세 실패 모드가 모두 통과한다.
- primary에서 `preserve` 또는 `translate`로 지정한 shell/mechanism의 부재는 major로 처리한다.
- 모든 `②`가 자리·정렬·줄 수를 유지한다.
- `③` 요소의 화면 누출이 0이다.
- 모든 화면의 `④` 개수가 2를 넘지 않는다. 목표는 1이며 2인 화면은 `Remaining risks`에 `owner_stage=3`으로 남긴다.
- 브랜드색 허용 위치 초과와 weight 범위 이탈이 0이다.
- 깨진 `SRULE-NN`이 0이다.

## 금지

- PNG 확인 없는 합격
- PRD 적합성과 브랜드 충실도를 한 점수로 뭉개기
- 개인 취향으로 근거 있는 primary 규칙 교체
- 이 단계에서 새 `NEW-NN` 문법을 만들어 `④` 초과를 덮기
- 자리가 안 맞는다는 이유로 승계한 슬롯을 옮기거나 줄 수를 줄이기
- 작업 Page 외 수정 또는 다른 단계 산출물 수정
