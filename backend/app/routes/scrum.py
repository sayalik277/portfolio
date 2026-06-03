from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import models, schemas
from ..database import get_db
from ..config import settings

router = APIRouter()


def require_admin(token: str):
    if token != settings.ADMIN_TOKEN:
        raise HTTPException(status_code=401, detail="Unauthorized")


@router.get("", response_model=list[schemas.ScrumItemOut])
def list_scrum_items(db: Session = Depends(get_db)):
    return (
        db.query(models.ScrumItem)
        .order_by(models.ScrumItem.is_pinned.desc(), models.ScrumItem.updated_at.desc())
        .all()
    )


@router.post("", response_model=schemas.ScrumItemOut, status_code=201)
def create_scrum_item(
    token: str,
    payload: schemas.ScrumItemCreate,
    db: Session = Depends(get_db),
):
    require_admin(token)
    item = models.ScrumItem(**payload.model_dump())
    db.add(item)
    db.commit()
    db.refresh(item)
    return item


@router.put("/{item_id}", response_model=schemas.ScrumItemOut)
def update_scrum_item(
    item_id: int,
    token: str,
    payload: schemas.ScrumItemUpdate,
    db: Session = Depends(get_db),
):
    require_admin(token)
    item = db.query(models.ScrumItem).filter(models.ScrumItem.id == item_id).first()
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    for field, value in payload.model_dump(exclude_none=True).items():
        setattr(item, field, value)
    db.commit()
    db.refresh(item)
    return item


@router.delete("/{item_id}", status_code=204)
def delete_scrum_item(
    item_id: int,
    token: str,
    db: Session = Depends(get_db),
):
    require_admin(token)
    item = db.query(models.ScrumItem).filter(models.ScrumItem.id == item_id).first()
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    db.delete(item)
    db.commit()


@router.post("/verify-token")
def verify_token(payload: schemas.AdminAuth):
    if payload.token != settings.ADMIN_TOKEN:
        raise HTTPException(status_code=401, detail="Invalid token")
    return {"valid": True}
