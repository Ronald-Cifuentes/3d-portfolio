# PRD — 3D Portfolio (Frontend Stabilization + i18n)

> Status: in progress · Owner: Ronald Cifuentes · Branch: `path1` · Scope: **frontend-only** Driven
> by the multi-agent loop (Orchestrator + Frontend Engineer + QA Engineer).

## 1. Problem & Context

The portfolio's `package.json` was bulk-upgraded to the newest major versions of its toolchain
(React 19, TypeScript 6, Vite 8, ESLint 10, Babel 8, Jest 30). `node_modules` was uninstalled and no
lockfile existed, so the project did not install, type-check, lint, build, or test. The goal is to
make the project install with **pnpm** and pass every quality gate again, **without editing
`package.json`** (the one authorized exception: adding `@playwright/test` for E2E), and to add a
**language selector**.

## 2. Goals

- G1 — Reproducible install via `pnpm` (committed `pnpm-lock.yaml`).
- G2 — Green gates: `tsc --noEmit`, ESLint (flat config), `vite build`, Jest unit suites.
- G3 — A working, accessible **language selector (EN/ES)** with no new runtime dependency.
- G4 — **Playwright** E2E covering the real user journeys.
- G5 — High unit-test coverage with honest, documented exclusions for untestable 3D/canvas glue.
- G6 — Performance optimization toward fast first load; measured, not assumed.
- G7 — **SonarQube** quality-gate validation (when the instance is reachable).

## 3. Non-Goals (explicitly out of scope, per user decision)

- No backend service, no separate backend repository, no Docker/compose, no CI/CD.
- No real Google OAuth / login (the site is a static portfolio with no auth concept).
- No migration to a multi-repo layout; work stays on the existing local repo.
- **react-icons migration is deferred**: it requires adding a _runtime_ dependency, but the
  package.json lock was lifted only for _test_ tooling. Font Awesome (already a dependency) is
  retained.

## 4. Users & Journeys

- **Visitor / recruiter**: lands on the hero, reads the intro, scrolls through experience and
  skills, follows social links, and can switch the UI language between English and Spanish.

## 5. Functional Requirements

- FR1 — App renders the active sections: Navbar, Content (hero intro), Background, Footer,
  Experience, Skills.
- FR2 — Language selector visible in the Navbar on all viewport sizes; switching updates all UI copy
  live.
- FR3 — Language choice persists across reloads (localStorage) and initializes from the browser
  locale.
- FR4 — No hardcoded user-facing UI strings in the active components; copy comes from typed
  dictionaries.
- FR5 — Contact form config stays externalized via `import.meta.env.*` (no secrets in source).

## 6. Non-Functional Requirements

- NFR1 — TypeScript `strict`; zero `any`; zero suppressions to pass gates.
- NFR2 — SOLID: i18n separates concerns (dictionaries = data, context = state, hook = access,
  selector = presentation); single-responsibility components; dependency inversion via the
  context/hook.
- NFR3 — Mobile-first, accessible (keyboard + `aria-label`) language selector.
- NFR4 — Performance: minimize first-load cost (code-split/lazy-load the heavy Three.js canvas,
  defer non-critical assets). Target: fast interactive load. **Honest limitation:** a literal <500
  ms full load is not guaranteed for a Three.js scene with multi-MB textures; we measure and
  optimize and report real numbers rather than assert the target.
- NFR5 — Reproducible builds: lockfile committed; pnpm only (npm/yarn lockfiles git-ignored).

## 7. i18n Design

- `src/i18n/locales/{en,es}.ts` — typed dictionaries; `es` structurally must match `en`
  (compile-time check).
- `src/i18n/LanguageContext.tsx` — `LanguageProvider` with `{ language, setLanguage, t }`,
  localStorage persistence.
- `src/i18n/useTranslation.ts` — access hook; throws outside the provider.
- `src/components/LanguageSelector/` — accessible EN/ES switch wired into the Navbar.

## 8. Quality Gates (Definition of Done — evidence-based, no self-report)

| Gate    | Command                     | Target                                      |
| ------- | --------------------------- | ------------------------------------------- |
| Install | `pnpm install`              | exit 0, lockfile present                    |
| Types   | `pnpm exec tsc --noEmit`    | exit 0                                      |
| Lint    | `pnpm exec eslint .`        | exit 0                                      |
| Build   | `pnpm exec vite build`      | exit 0                                      |
| Unit    | `pnpm exec jest`            | suites pass; coverage tracked toward target |
| E2E     | `pnpm exec playwright test` | journeys pass incl. language switch         |
| Sonar   | MCP `quality_gate_status`   | OK (when reachable)                         |

## 9. Risks & Limitations (tracked honestly)

- R1 — **SonarQube instance unreachable** (`Network request failed`). Gate blocked until server is
  up and a project key/token is provided.
- R2 — **100% coverage** is impractical for Three.js canvas/animation glue; we document justified
  `coveragePathIgnorePatterns` rather than fake the number.
- R3 — **<500 ms load** is aggressive for 3D + large textures; reported as measured, with
  optimizations applied.
- R4 — The package.json `lint`/`cov`/`gen` scripts reference `--ext`/`npm`/`npx` and are
  incompatible with the new toolchain, but cannot be edited (lock). Validation uses direct
  `pnpm exec` invocations; flagged as a follow-up that needs a package.json edit.

## 10. Acceptance Checklist

See `docs/CHECKLIST.md` for the line-item, evidence-linked acceptance matrix.
