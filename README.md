# Sayali Kamble — Portfolio

> Full-stack personal portfolio · React + TypeScript · Python FastAPI · Seasonal colour themes · Visitor tracking · Live scrum board

**Live:** _(add your URL here after deploying)_  
**GitHub:** [sayalik277](https://github.com/sayalik277) &nbsp;|&nbsp; **LinkedIn:** [sayalikamble](https://linkedin.com/in/sayalikamble)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎨 **Seasonal Theming** | Palette auto-switches by month — Spring / Summer / Fall / Winter |
| 👋 **Visitor Guestbook** | Modal asks first-time visitors for their name |
| 📊 **Live Visitor Counter** | Real-time visit count in navbar and footer |
| 📋 **Daily Scrum Board** | Live Kanban (To Do / In Progress / Done) |
| 🔐 **Admin Panel** | `/admin` — view visitors, manage scrum items |
| 🚀 **Projects Showcase** | Cards for every GitHub project with tech chips |
| 📅 **Experience Timeline** | Animated work history |
| 📖 **Bookshelf** | Reading list with status badges |

---

## 🛠 Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 18 · TypeScript · Vite · Tailwind CSS |
| Backend | Python 3.12 · FastAPI · SQLAlchemy · SQLite |
| Production | Docker · nginx · Render · Vercel |

---

## 🚀 Deploy (Free — shareable HTTPS link in ~10 min)

There are two deployment options. **Option A (Render)** is the simplest — one platform, one repo.

---

### Option A — Render (recommended, 100% free)

Render hosts both the backend API and the frontend static site for free.

#### Step 1 — Deploy the backend

1. Go to [render.com](https://render.com) → **New → Web Service**
2. Connect your GitHub and select **sayalik277/portfolio**
3. Fill in:

   | Field | Value |
   |---|---|
   | **Root Directory** | `backend` |
   | **Runtime** | `Python 3` |
   | **Build Command** | `pip install -r requirements.txt` |
   | **Start Command** | `uvicorn app.main:app --host 0.0.0.0 --port $PORT` |
   | **Plan** | Free |

4. Add environment variables:

   | Key | Value |
   |---|---|
   | `ADMIN_TOKEN` | _(pick a secret password)_ |
   | `CORS_ORIGINS` | `["*"]` |

5. Click **Deploy** — wait ~2 min. Copy the URL, e.g. `https://portfolio-api.onrender.com`

#### Step 2 — Deploy the frontend

1. Go to [render.com](https://render.com) → **New → Static Site**
2. Same repo — **sayalik277/portfolio**
3. Fill in:

   | Field | Value |
   |---|---|
   | **Root Directory** | `frontend` |
   | **Build Command** | `npm install && npm run build` |
   | **Publish Directory** | `dist` |

4. Add environment variable:

   | Key | Value |
   |---|---|
   | `VITE_API_URL` | `https://portfolio-api.onrender.com` _(URL from Step 1)_ |

5. Under **Redirects/Rewrites** → add rule: Source `/*` → Destination `/index.html` → Type **Rewrite**
6. Click **Deploy** — you'll get a URL like `https://portfolio-web.onrender.com` ✅

> **Free tier note:** Render's free backend spins down after 15 min of inactivity and takes ~30 s to wake up on the first request. For a portfolio this is perfectly fine.

---

### Option B — Vercel (frontend) + Render (backend)

Vercel gives faster frontend CDN and a nicer `.vercel.app` URL.

#### Backend — same as Option A Step 1

#### Frontend on Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import **sayalik277/portfolio**
3. Set **Root Directory** to `frontend`
4. Add environment variable:

   | Key | Value |
   |---|---|
   | `VITE_API_URL` | `https://portfolio-api.onrender.com` |

5. Click **Deploy** → get a URL like `https://sayali-portfolio.vercel.app` ✅

---

### Option C — Docker (self-hosted or VPS)

Runs the full stack locally or on any Linux server.

```bash
# Clone
git clone https://github.com/sayalik277/portfolio.git
cd portfolio

# Set your admin token
echo "ADMIN_TOKEN=your_secret_here" > .env

# Build and run both services
docker compose up --build

# Open http://localhost:3000
```

The database persists in a Docker volume across restarts.

To run on a VPS, point a domain at the server and add an SSL reverse proxy (e.g. Caddy).

---

## 💻 Running Locally (without Docker)

### Prerequisites
- Python 3.11+ (`py --version`)
- Node.js 18+ (`node --version`)

### Backend
```bash
cd backend
py -m venv .venv
.venv\Scripts\activate          # Windows
# source .venv/bin/activate     # macOS/Linux
pip install -r requirements.txt
copy .env.example .env           # then set ADMIN_TOKEN
uvicorn app.main:app --reload --port 8000
```

### Frontend (second terminal)
```bash
cd frontend
npm install
npm run dev
# → http://localhost:5173
```

---

## 🔐 Admin Panel

Visit `/admin` on your deployed URL.  
Enter the `ADMIN_TOKEN` you set during deployment.

- **Render:** check the environment variable you set in Step 1
- **Local:** value in `backend/.env`

---

## ✏️ Personalising Content

| File | What to edit |
|---|---|
| [`frontend/src/data/projects.ts`](frontend/src/data/projects.ts) | Add / edit projects |
| [`frontend/src/data/experience.ts`](frontend/src/data/experience.ts) | Work history |
| [`frontend/src/data/books.ts`](frontend/src/data/books.ts) | Reading list + status |
| [`frontend/src/data/skills.ts`](frontend/src/data/skills.ts) | Skills + levels (0–100) |
| [`frontend/src/components/About.tsx`](frontend/src/components/About.tsx) | Bio text, trait cards |
| [`frontend/src/components/Footer.tsx`](frontend/src/components/Footer.tsx) | Social links & email |
| [`frontend/src/components/Hero.tsx`](frontend/src/components/Hero.tsx) | `ROLES` typing array |
| [`backend/app/seed.py`](backend/app/seed.py) | Default scrum board items |

After editing any file:
```bash
git add . && git commit -m "chore: update content" && git push
```
Render and Vercel auto-deploy on every push. ✅

---

## 🌍 API Reference

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/api/visitors` | — | Register a visitor |
| `GET` | `/api/visitors/count` | — | Total visit count |
| `GET` | `/api/visitors?token=` | Admin | List all visitors |
| `GET` | `/api/scrum` | — | Scrum board items |
| `POST` | `/api/scrum?token=` | Admin | Create item |
| `PUT` | `/api/scrum/{id}?token=` | Admin | Update item |
| `DELETE` | `/api/scrum/{id}?token=` | Admin | Delete item |
| `POST` | `/api/scrum/verify-token` | — | Validate admin token |
| `GET` | `/api/health` | — | Health check |

---

## 🎨 Seasonal Colour Themes

| Season | Months | Palette |
|---|---|---|
| 🌸 Spring | Mar – May | Light mint, green + pink |
| ☀️ Summer | Jun – Aug | Deep navy, sunset orange + gold |
| 🍂 Fall | Sep – Nov | Dark warm, burnt orange + crimson |
| ❄️ Winter | Dec – Feb | Near-black, ice blue + indigo |

---

## 📄 License

MIT — fork it and make it yours.

---

<p align="center">
  Built with React · TypeScript · FastAPI · and a lot of ☕
  <br/>
  <a href="https://github.com/sayalik277">@sayalik277</a> &nbsp;·&nbsp;
  <a href="https://linkedin.com/in/sayalikamble">LinkedIn</a>
</p>
