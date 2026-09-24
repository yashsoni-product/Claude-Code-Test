# Ti7 variant structure redesign

_Started 2026-09-24 07:52 UTC_

---

## User

Attached is my current design on how i show variants for ti7 car on website.
I am now in the process of onboarding 7 seater version. So the ti7 will be available in 2 types [5 seater & 7 seater] For each type -- there can be multiple variations [Design, Premium, Urban adventure] --please redesign this accordingly for me,

## User

Attached is my current design on how i show variants for ti7 car on website.
I am now in the process of onboarding 7 seater version. So the ti7 will be available in 2 types [5 seater & 7 seater] For each type -- there can be multiple variations [Design, Premium, Urban adventure] --please redesign this accordingly for me,

## User

Answered — Asked Claude to decide; hierarchy: option_3; scope: Section + sticky compare

## Assistant

_[tool: ask_user]_

No answers came through, so I'll decide: seater toggle above variant tabs, placeholder 7-seater data, this section only.

_[tool: grep]_

_[tool: list_files]_

_[tool: list_files]_

_[tool: list_files]_

_[tool: copy_files]_

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: image_metadata]_

_[tool: run_script]_

_[tool: view_image]_

Now building the redesigned variant selector.

_[tool: dc_write]_

Answers arrived — switching to layout C (variant tabs first, seater toggle in the card) and adding a sticky compare strip.

_[tool: dc_write]_

_[tool: ready_for_verification]_

Redesign is up for review, per your picks: variant tabs (Design / Premium / Urban Adventure) on top, 5/7-seater toggle inside the detail card, and "Add to comparison" now feeds a sticky compare bar (max 3, mixable across seater types).

Caveats: all 7-seater prices/specs and the Premium/Urban Adventure figures are plausible placeholders — send real numbers and I'll swap them in. The 7-seater reuses the 5-seater photo (flagged under the image) until you have photography.

