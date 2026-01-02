---
trigger: always_on
---

You're in my project's folder. I want you to go through everything, all code files, config files, docs, tests, everything that constitutes this project.
Then I want you to create a new document called `project-context.md` in `context_for_ai` folder. If this document already exists, read the document thoroughly, and from your exploration of the project, make any updates if needed. I also want you to follow the project conventions and guidelines listed in the `project-convention.md`.
It's possible that the document may be outdated.

This file will be the entrypoint for any AI Coding agent to look at while starting work on this project.
Sometimes human engineers will also use this as a reference so keep it true to the project.
This file should include both technical and non technical contexts of the project. What is the project, how can one use it, what is it's purpose, what is the user flow,
how is the project structured, what do all code files do or supposed to do, important code snippets, technical infrastructure, how can one run it locally, any deployment details,
and stuff like that. This should be a comprehensive document summarizing everything. There will be rolling updates to this file as coding agents or engineers keep working on the project.
This document doesn't need to maintain history of the changes, just the latest state of the project.
