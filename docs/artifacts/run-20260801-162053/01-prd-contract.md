## Run metadata
| run_id | prd_path | work_page | artifact_dir | top_frame_rule |
|---|---|---|---|---|
| run-20260801-162053 | docs/PRD.md | 황선태 | docs/artifacts/run-20260801-162053 | No product frame may be specified: the supplied document contains only harness-operation instructions, not a product brief. |

## Product contract
| goal | target_user | core_job | success_signal | constraint | evidence |
|---|---|---|---|---|---|
| Unspecified | Unspecified | Unspecified | Unspecified | The harness must read `docs/PRD.md` and create a design, but no product requirements are present. | `docs/PRD.md`: “하네스는 이 파일을 읽어 디자인을 만들어야 합니다.” and the document directs development to copy an example PRD first. |

## Requirement matrix
| id | source | user_need | required_element | destination | state | priority | acceptance |
|---|---|---|---|---|---|---|---|
| BLOCK-01 | PRD introduction | A product task and requirements to design | A substantive PRD replacing the current template | N/A | blocked before screen definition | P0 | The input names a product goal, users, core task, required screens/elements, and relevant states. |

## Domain vocabulary
| term | meaning | data_shape | allowed_copy | evidence |
|---|---|---|---|---|
| PRD | Input document for the design harness; this instance is a template rather than a product brief. | Markdown document | “PRD (입력 문서)” only; no product-domain copy is authorized. | `docs/PRD.md` heading and introductory text. |

## Exploration contract
| id | user_decision | discovery_context | required_control_or_entry | destination_or_result | privacy_or_safety_constraint | evidence |
|---|---|---|---|---|---|---|
| BLOCK-01 | Unspecified | No user, content, or task is defined. | Cannot determine | Cannot determine | Cannot determine | The supplied file contains no product scenario or user story. |

## Screen candidates
| screen_key | priority | purpose | requirement_ids | states | entry | exit |
|---|---|---|---|---|---|---|
| None | N/A | Screen candidates cannot be derived without a product task. | BLOCK-01 | blocked | N/A | N/A |

## Structural rules
| rule | requirement_ids | acceptance |
|---|---|---|
| Do not invent a product domain, information architecture, or user flow from the example-file copy commands. | BLOCK-01 | A substantive PRD is supplied before architecture or Penpot authoring starts. |

## Open questions
| id | ambiguity | blocking | evidence |
|---|---|---|
| BLOCK-01 | The actual product PRD is absent; only instructions to copy one of two examples during development are present. | yes | `docs/PRD.md` says development should copy a PRD from `docs/examples/`, but neither is embedded in this input. |

## Assumption ledger
| id | class | source_gap | minimum_assumption | affected_requirement_ids | affected_screens | visible_label_or_boundary | replaceable_design_rule |
|---|---|---|---|---|---|---|---|
| None | N/A | No bounded presentation or policy gap can be assessed until a product task exists. | No assumption is safe. | BLOCK-01 | None | N/A | Replace the input PRD, then rerun Stage 1. |

## Blocking conditions
| id | reason | external_state_risk_or_missing_core | evidence |
|---|---|---|---|
| BLOCK-01 | `docs/PRD.md` contains only a harness template and has no product goal, target user, user stories, required UI, content, or states. | Missing core product task; authoring would require inventing the entire product and would violate the PRD-driven contract. | The file’s only actionable content tells developers to copy `docs/examples/daangn-stock.md` or `docs/examples/airbnb-dating.md` into `docs/PRD.md`. |
