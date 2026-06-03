from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import create_tables
from .routes import visitors, scrum
from .config import settings

app = FastAPI(title="Portfolio API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    # credentials (cookies) can't be used with wildcard origins
    allow_credentials=settings.CORS_ORIGINS != ["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def startup():
    create_tables()
    from .seed import seed_scrum
    seed_scrum()


app.include_router(visitors.router, prefix="/api/visitors", tags=["visitors"])
app.include_router(scrum.router, prefix="/api/scrum", tags=["scrum"])


@app.get("/api/health")
def health():
    return {"status": "ok"}
