from fastapi import APIRouter, Depends, Request
from sqlalchemy.orm import Session
from .. import models, schemas
from ..database import get_db
from ..config import settings

router = APIRouter()


@router.post("", response_model=schemas.VisitorOut, status_code=201)
def register_visitor(
    payload: schemas.VisitorCreate,
    request: Request,
    db: Session = Depends(get_db),
):
    ip = request.headers.get("X-Forwarded-For") or request.client.host
    ua = request.headers.get("User-Agent", "")[:500]
    visitor = models.Visitor(
        name=payload.name or None,
        ip_address=ip,
        user_agent=ua,
    )
    db.add(visitor)
    db.commit()
    db.refresh(visitor)
    return visitor


@router.get("/count", response_model=schemas.VisitorCount)
def get_visitor_count(db: Session = Depends(get_db)):
    count = db.query(models.Visitor).count()
    return {"count": count}


@router.get("", response_model=list[schemas.VisitorOut])
def list_visitors(
    token: str,
    db: Session = Depends(get_db),
):
    if token != settings.ADMIN_TOKEN:
        from fastapi import HTTPException
        raise HTTPException(status_code=401, detail="Unauthorized")
    return db.query(models.Visitor).order_by(models.Visitor.visited_at.desc()).all()
