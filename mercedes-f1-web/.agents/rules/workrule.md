---
trigger: always_on
---

# Mercedes-AMG Petronas F1 Team Website Project Rules

## 1. Tech Stack & Architecture
- Framework: Next.js (App Router), TypeScript, Tailwind CSS.
- Animation: Framer Motion (用于实现符合 F1 速度感的高帧率流畅动画).
- 3D Rendering: Three.js / React Three Fiber (用于展示赛车 3D 模型).
- Data Fetching: SWR 或 React Query.

## 2. Design System & Brand Guidelines
- **Color Palette**: 
  - Background/Base: Mercedes Black (`#000000`), Obsidian Dark (`#111111`).
  - Primary/Metallic: Silver (`#C8C8C8`).
  - Accents: Petronas Green (`#00A19B`), INEOS Red (`#E10600` - 仅用于点缀).
- **Typography**: 极简、硬朗的无衬线字体。
- **UI 风格**: 科技感、暗黑模式主导、边缘锐利、适度使用毛玻璃效果（Glassmorphism）以体现现代感。

## 3. Domain-Specific Context (2026 Season)
- **Current Car**: W17 (2026全新引擎与空气动力学规则).
- **Active Drivers**: George Russell (#63), Kimi Antonelli (#12).
- 禁止在当前上下文中将 Lewis Hamilton 作为现役梅奔车手生成内容（已转会）。
- **Key Concepts**: Telemetry（遥测数据）, Downforce（下压力）, Hybrid Power Unit（混合动力单元）, Pitwall（指挥台）.

## 4. Coding Standards
- 默认输出精简、函数式的 React 组件，禁用 Class 组件。
- 必须为所有 API 响应和 Props 定义严格的 TypeScript Interfaces（特别是涉及到圈速、轮胎配方、遥测数据时）。
- 组件命名需语义化，例如：`RaceCountdown`, `DriverTelemetryCard`, `ConstructorStandings`.
- 样式代码中优先使用 Tailwind 预设的梅赛德斯品牌色变量（需在 tailwind.config.ts 中配置）。

## 5. Agent Instructions for this Workspace
- 当我要求生成 UI 时，直接给出带有 Tailwind 类名和 Petronas 绿点缀的完整代码。
- 如果涉及到比赛数据，假设我们将接入 OpenF1 API 或 Ergast 开发者 API，生成对应的 Mock 数据结构。