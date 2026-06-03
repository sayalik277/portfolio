from .database import SessionLocal
from .models import ScrumItem

SEED_ITEMS = [
    # In Progress
    {"title": "Portfolio Website", "description": "Building my personal portfolio with React + FastAPI, seasonal theming, visitor tracking.", "status": "in_progress", "category": "Project", "priority": "high", "is_pinned": True},
    {"title": "TypeScript Backend Patterns", "description": "Exploring NestJS and Hono for type-safe backend development.", "status": "in_progress", "category": "Learning", "priority": "high"},
    {"title": "Thinking, Fast and Slow", "description": "Reading Daniel Kahneman's classic on cognitive bias and decision making.", "status": "in_progress", "category": "Reading", "priority": "medium"},
    # To Do
    {"title": "React Server Components Deep Dive", "description": "Understanding RSC patterns for Next.js 15 and server-driven UI.", "status": "todo", "category": "Learning", "priority": "high"},
    {"title": "AWS CDK Infrastructure Stack", "description": "Codify cloud infra for personal projects using AWS CDK v2.", "status": "todo", "category": "Cloud", "priority": "medium"},
    {"title": "Cloud Security Fundamentals", "description": "IAM best practices, VPC design, security groups & KMS.", "status": "todo", "category": "Cloud", "priority": "medium"},
    {"title": "'The Phoenix Project' Book", "description": "DevOps novel — already on the reading list.", "status": "todo", "category": "Reading", "priority": "low"},
    # Done
    {"title": "AI Learning Ledger MVP", "description": "Built a multi-agent AI learning platform with LangGraph, FastAPI, and React.", "status": "done", "category": "Project", "priority": "high"},
    {"title": "Docker & Kubernetes Setup", "description": "Containerised apps, wrote K8s manifests, set up local cluster with Kind.", "status": "done", "category": "Cloud", "priority": "high"},
    {"title": "FastAPI REST API Mastery", "description": "Built production-grade REST APIs with SQLAlchemy, Pydantic v2, and async routes.", "status": "done", "category": "Learning", "priority": "high"},
    {"title": "Atomic Habits", "description": "James Clear — finished and applying the principles daily.", "status": "done", "category": "Reading", "priority": "medium"},
]


def seed_scrum(db=None):
    close = False
    if db is None:
        db = SessionLocal()
        close = True
    try:
        if db.query(ScrumItem).count() == 0:
            for data in SEED_ITEMS:
                db.add(ScrumItem(**data))
            db.commit()
    finally:
        if close:
            db.close()
