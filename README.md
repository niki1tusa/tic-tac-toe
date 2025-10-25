# TicTacToe
A minimalist Tic‑Tac‑Toe game with state management and a clean UI.
![React](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6) ![Zustand](https://img.shields.io/badge/State-Zustand-4B5563) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38BDF8)
## ✨ Features
- ⚡ Instant gameplay with responsive grid interactions
- 🧠 Simple, reliable state management with Zustand
- 🎯 Win & draw detection, turn indicator, and restart flow
- 🧩 Clean, componentized architecture

## 🗂️ Project Structure (excerpt)
- `./` — 
- `tic-tac-toe-main/` — .gitignore, .prettierrc, README.md, eslint.config.js, index.html, package.json, pnpm-lock.yaml, tsconfig.app.json, tsconfig.json, tsconfig.node.json, vite.config.ts
- `tic-tac-toe-main/src/` — App.tsx, index.css, main.tsx
- `tic-tac-toe-main/src/components/` — Bar.tsx, ListHistoryGame.tsx, Modal.tsx, TextWinner.tsx, Title.tsx
- `tic-tac-toe-main/src/hooks/` — useGameLogic.ts
- `tic-tac-toe-main/src/store/` — store.ts
- `tic-tac-toe-main/src/types/` — global.types.ts

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm (or pnpm/yarn)

### Setup
```bash
git clone <your-fork-url>
cd tic-tac-toe
npm install
npm run dev
```

### Build
```bash
npm run build
```
### Lint
```bash
npm run lint
```
## 🧩 Tech Stack
- React, TypeScript, Zustand, Tailwind CSS, lucide-react
- Zustand for state management
- (Optional) Tailwind CSS & lucide-react for UI

## 📦 Scripts
- `dev` — `vite`
- `build` — `tsc -b && vite build`
- `lint` — `eslint .`
- `preview` — `vite preview`

## 🔌 Example: Using the History Store
```tsx
import { useHistoryStore } from '@/store/store';

const add = useHistoryStore(s => s.addGameResult);
add('x'); // store last winner
```

## 🧠 Game Logic Highlights
- Immutable updates for the grid
- Winner detection (rows, columns, diagonals)
- Draw detection when the board is full
- History log of match results (last 10 shown)

## 🧪 Ideas to Improve
- Add CPU opponent (minimax with depth limit)
- Add score board and session persistence (localStorage)
- Add animations and sound feedback
- Extend to NxN boards and custom win-length
- Add Play Again modal & shareable match link

## 📸 Screenshots
_Add a few GIFs or images here (gameplay, win/draw states)._

## 🛡️ License
MIT — feel free to fork and build on it.

---

Built with ❤️ and a love for tiny games.
