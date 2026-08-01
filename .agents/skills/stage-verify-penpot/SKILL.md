---
name: stage-verify-penpot
description: 실행별 모든 산출물과 지정 Penpot Page를 읽기 전용으로 재검사해 PRD 충족, 브랜드 계승, 신규 판단 근거, 구조와 PNG 품질을 독립적으로 PASS/FAIL 판정한다. $start의 마지막 검증 단계에 사용한다.
---

# Verify the Complete Brand Adaptation

## 입력과 출력

- 입력: `<artifact_dir>/01-prd-contract.md`~`06-visual-qa.md`, `prd_path`, `reference_pages`, `work_page`, `run_id`, `artifact_dir`, Penpot MCP
- 출력: `<artifact_dir>/99-verify.md`

## 실행 게이트

- 모든 입력, 정확한 작업 Page, 실행 식별자가 없으면 중단한다.
- 검증 중 Penpot과 01~06 산출물을 수정하지 않는다.
- Page를 추측하지 않으며 전환이 필요하면 별도 호출 후 이름을 재확인한다.

## 절차

1. 같은 `<artifact_dir>` 안에 01~06이 모두 존재하고, 각 파일의 `run_id`, `prd_path`, `work_page`, `artifact_dir`가 호출값과 서로 일치하는지 검사한다. 루트 `docs/artifacts/` 또는 다른 run 디렉터리의 파일은 증거로 사용하지 않는다. 필수 표와 ID가 비어 있거나 identity가 불일치하면 즉시 FAIL로 기록한다.
2. experience map의 모든 프레임이 지정 Page에 정확히 하나씩 존재하는지 확인한다. `Archive/<run_id>/` 보드는 최종 화면에서 제외하되 reconciliation 로그와 일치하는지 검사한다.
3. `REQ-NN → 목적지 → 실제 노드` 계보를 전부 검사한다.
4. 채택된 `REF-NN → 전달 규칙 → decision → 실제 노드` 계보를 검사한다.
5. 모든 `NEW-NN → 필요 → 도출 근거 → decision → 실제 노드` 계보를 검사한다.
6. 모든 `MECH-NN → source decision → adapted decision → entry/applied/result node` 계보를 검사한다.
7. `SLOT-NN → INH-NN → 분류 → 노드` 계보를 검사한다. 02의 모든 `SLOT-NN`이 03에서 분류됐는지, `②`가 04 명세대로의 자리·정렬·줄 수로 노드에 있는지, `③`이 화면에 없는지, `④`가 `NEW-NN`과 조합 근거를 갖는지 확인한다. 화면당 `④` 개수, 브랜드색 허용 위치 초과, weight 범위 이탈, 깨진 `SRULE-NN`을 각각 센다.
8. signature 적용, foundation 일관성, brand shell, primary/supplemental 경계와 원본 사업 의미 누출을 검사한다.
9. 컴포넌트·인스턴스, 의미 기반 이름, Frame 위계, Auto Layout, 토큰 일관성을 검사한다.
10. 모든 최종 프레임을 안정화 후 `export_shape`로 다시 확인한다. 빈 영역이면 한 번 재-export한다. export backend가 실패하면 실패 로그와 안정된 live Penpot screenshot을 함께 남긴 대체 검증만 허용한다.
11. 6단계 이중축 점수와 실제 화면이 일치하는지 확인한다.
12. 하나라도 실패하면 전체 FAIL로 쓰고 각 실패에 단일 `owner_stage`와 재실행 지침을 지정한다.

## 출력 형식

```markdown
## Run identity
| run_id | prd_path | work_page | primary_reference | supplemental_references | artifact_dir |

## Artifact checks
| artifact | exists | required_sections | run_id_match | status |

## Frame checks
| expected_frame | node_id | exported | visual_status |

## Requirement lineage
| requirement_id | destination | evidence_node | status | owner_stage |

## Reference lineage
| ref_id | transfer | decision_id | evidence_node | status | owner_stage |

## Mechanism lineage
| mechanism_id | source_decision | adapted_decision | entry_node | applied_or_result_node | safety_boundary | status | owner_stage |

## Brand shell checks
| shell_id | source_ref_ids | expected_expression | evidence_node | status | owner_stage |

## Novel decision lineage
| new_id | rationale | decision_id | evidence_node | status | owner_stage |

## Inheritance lineage
| slot_id | inh_id | class | decision_or_new_id | expected_position_line_count | evidence_node | status | owner_stage |

## Inheritance budget checks
| frame_name | new_grammar_count | brand_color_over_budget | weight_out_of_range | broken_structural_rules | leaked_class_3 | status | owner_stage |

## Brand-boundary checks
| check | evidence | status | owner_stage |

## Structure checks
| check | evidence | status | owner_stage |

## Failures
| id | severity | reason | owner_stage | rerun_instruction |

## Final verdict
PASS 또는 FAIL
```

## 자동 FAIL 조건

- 누락된 `REQ-NN` 또는 필수 상태
- 근거 없이 적용된 핵심 시각 결정
- primary signature 부재
- primary에서 `preserve` 또는 `translate`로 판정한 상태바·브랜드 앵커·하단 내비게이션 또는 핵심 탐색 메커니즘 부재
- supplemental 브랜드 혼입
- 원본 사업의 IA·카피·개체를 이름만 바꾼 복제
- 02 `Slot inventory`에 있는데 03에서 분류되지 않은 `SLOT-NN` 잔존
- `③`으로 판정한 원본 요소가 최종 화면에 존재
- 어느 한 화면의 `④` 개수가 2를 초과
- 조합 근거 `REF-NN`이 없는 `④`
- 02 `Brand color density`가 관찰하지 않은 위치에 브랜드색 적용
- 02가 관찰한 집합 밖의 타이포 weight 사용
- 02 `SRULE-NN`의 배타 관계를 깬 화면
- 최종 프레임 export 누락
- 6단계 blocker/major 잔존

## 금지

- 검증 중 수정
- 누락 요구 또는 불리한 REF/NEW 계보 제외
- export 없는 시각 판정
- 다른 단계 산출물 수정
