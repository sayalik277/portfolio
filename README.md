# 🌐 Dev Portfolio

> A full-stack personal portfolio that changes its colour palette with the season, tracks visitors, and shows a live daily scrum board.

**Live demo:** _(add your deployment URL here)_  
**GitHub:** [sayalik277](https://github.com/sayalik277)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎨 **Seasonal Theming** | Colour palette auto-switches by month — Spring / Summer / Fall / Winter |
| 👋 **Visitor Guestbook** | Modal asks first-time visitors for their name; stored in the backend |
| 📊 **Live Visitor Counter** | Real-time visit count in the navbar and footer |
| 📋 **Daily Scrum Board** | Live Kanban (To Do / In Progress / Done) showing what you're working on |
| 🔐 **Admin Panel** | `/admin` — view all visitors, add/edit/delete scrum items (token-protected) |
| 🚀 **Projects Showcase** | Cards for every GitHub project with tech chips and live links |
| 📅 **Experience Timeline** | Animated work history with role details and tech used |
| 📖 **About + Bookshelf** | Personality section with a reading list and trait cards |
| ⌨️ **Typing Animation** | Hero section cycles through your roles with a terminal cursor |

---

## 🛠 Tech Stack

```
Frontend          Backend            Database   DevOps
──────────────    ──────────────     ────────   ──────────
React 18          Python 3.12        SQLite     Docker (optional)
TypeScript        FastAPI            SQLAlchemy
Vite              Pydantic v2
Tailwind CSS      Uvicorn
React Query
React Router 6
React Icons
```

---

## 🗂 Project Structure

```
portfolio/
├── backend/                   # Python FastAPI server
│   ├── app/
│   │   ├── main.py            # FastAPI app + startup hooks
│   │   ├── config.py          # Settings (reads from .env)
│   │   ├── database.py        # SQLAlchemy engine + session
│   │   ├── models.py          # Visitor, ScrumItem ORM models
│   │   ├── schemas.py         # Pydantic request/response schemas
│   │   ├── seed.py            # Seeds scrum board on first start
│   │   └── routes/
│   │       ├── visitors.py    # POST /api/visitors, GET /api/visitors/count
│   │       └── scrum.py       # CRUD /api/scrum, POST /api/scrum/verify-token
│   ├── requirements.txt
│   ├── .env.example
│   └── .env                   # ← create from .env.example (gitignored)
│
└── frontend/                  # React + Vite app
    ├── src/
    │   ├── components/
    │   │   ├── Hero.tsx        # Typing animation, stats bar
    │   │   ├── About.tsx       # Bio, bookshelf, trait cards
    │   │   ├── Skills.tsx      # Skill groups with progress bars
    │   │   ├── Projects.tsx    # Project cards grid
    │   │   ├── Experience.tsx  # Animated timeline
    │   │   ├── ScrumBoard.tsx  # Live Kanban board
    │   │   ├── Navbar.tsx      # Sticky nav + visitor badge
    │   │   ├── Footer.tsx      # Social links + visitor count
    │   │   └── VisitorModal.tsx
    │   ├── pages/
    │   │   └── AdminPanel.tsx  # Visitor list + scrum CRUD
    │   ├── data/
    │   │   ├── projects.ts     # ← edit YOUR projects here
    │   │   └── experience.ts   # ← edit YOUR work history here
    │   ├── utils/season.ts     # Season detection + CSS variable injection
    │   ├── hooks/
    │   │   ├── useSeason.ts    # Applies seasonal theme on mount
    │   │   └── useVisitor.ts   # Visitor modal logic + localStorage
    │   └── api/client.ts       # Axios API client
    ├── vite.config.ts          # Proxies /api → localhost:8000
    └── tailwind.config.js
```

---

## 🚀 Running Locally

### Prerequisites

- **Python 3.11+** (`py --version`)
- **Node.js 18+** (`node --version`)
- **Git**

---

### 1 — Backend

```bash
# Clone the repo
git clone https://github.com/sayalik277/portfolio.git
cd portfolio/backend

# Create & activate virtual environment
py -m venv .venv

# Windows
.venv\Scripts\activate
# macOS / Linux
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create your .env (copy the example and set your admin token)
copy .env.example .env       # Windows
# cp .env.example .env       # macOS/Linux

# Edit .env — change ADMIN_TOKEN to something secret:
# ADMIN_TOKEN=your_secret_token_here

# Start the API server (auto-reloads on file changes)
uvicorn app.main:app --reload --port 8000
```

> API is now running at **http://localhost:8000**  
> Interactive docs: **http://localhost:8000/docs**

On first start the database (`portfolio.db`) is created automatically and the scrum board is seeded with 11 sample items.

---

### 2 — Frontend

Open a **second terminal**:

```bash
cd portfolio/frontend

# Install packages
npm install

# Start the dev server
npm run dev
```

> App is now running at **http://localhost:5173**  
> Vite automatically proxies all `/api/*` requests to `http://localhost:8000`

---

### 3 — Admin Panel

Visit **http://localhost:5173/admin**  
Enter the `ADMIN_TOKEN` value you set in `backend/.env` (default: `changeme123`).

From the admin panel you can:
- View every visitor (name + IP + timestamp)
- Add, edit, and delete scrum board items

---

## 🎨 Seasonal Colour Themes

The colour palette is chosen automatically from the current calendar month:

| Season | Months | Palette |
|---|---|---|
| 🌸 Spring | Mar – May | Light mint background, fresh green + cherry-blossom pink |
| ☀️ Summer | Jun – Aug | Deep navy background, sunset orange + golden yellow |
| 🍂 Fall | Sep – Nov | Warm dark-brown background, burnt orange + crimson |
| ❄️ Winter | Dec – Feb | Near-black background, ice blue + indigo/aurora |

To change the palette or add a new season, edit [`frontend/src/utils/season.ts`](frontend/src/utils/season.ts).

---

## ✏️ Personalising Your Portfolio

| File | What to change |
|---|---|
| [`frontend/src/data/projects.ts`](frontend/src/data/projects.ts) | Add / edit your projects (title, description, tech, GitHub URL) |
| [`frontend/src/data/experience.ts`](frontend/src/data/experience.ts) | Work history, roles, and companies |
| [`frontend/src/components/About.tsx`](frontend/src/components/About.tsx) | Bio text, bookshelf, and personality trait cards |
| [`frontend/src/components/Footer.tsx`](frontend/src/components/Footer.tsx) | Social media links (GitHub, LinkedIn, Twitter, Email) |
| [`frontend/src/components/Hero.tsx`](frontend/src/components/Hero.tsx) | `ROLES` array — the phrases in the typing animation |
| [`frontend/index.html`](frontend/index.html) | `<title>` tag and meta description |
| [`backend/app/seed.py`](backend/app/seed.py) | Default scrum board items (runs once on first start) |
| [`backend/.env`](backend/.env) | `ADMIN_TOKEN` — **change before deploying** |

---

## 🔌 API Reference

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/api/visitors` | — | Register a visitor (name optional) |
| `GET` | `/api/visitors/count` | — | Get total visit count |
| `GET` | `/api/visitors?token=` | Admin | List all visitors |
| `GET` | `/api/scrum` | — | Get all scrum items |
| `POST` | `/api/scrum?token=` | Admin | Create a scrum item |
| `PUT` | `/api/scrum/{id}?token=` | Admin | Update a scrum item |
| `DELETE` | `/api/scrum/{id}?token=` | Admin | Delete a scrum item |
| `POST` | `/api/scrum/verify-token` | — | Validate admin token |
| `GET` | `/api/health` | — | Health check |

---

## 🐳 Docker (Optional)

```bash
# Build and run both services
docker compose up --build

# Frontend → http://localhost:3000
# Backend  → http://localhost:8000
```

Add a `docker-compose.yml` at the project root to wire the two services together (see the AI Learning Ledger repo for a reference implementation).

---

## 📦 Build for Production

```bash
# Frontend — generates optimised files in frontend/dist/
cd frontend
npm run build

# Backend — run with workers for production
cd backend
uvicorn app.main:app --host 0.0.0.0 --port 8000 --workers 2
```

---

## 🤝 Contributing

This is a personal portfolio, but feel free to fork it and make it your own. If you spot a bug or have a suggestion, open an issue — always happy to chat.

---

## 📄 License

MIT — do whatever you like with it.

---

<p align="center">
  Built with React · TypeScript · FastAPI · and a lot of ☕
  <br/>
  <a href="https://github.com/sayalik277">@sayalik277</a>
</p>
