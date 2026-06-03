from datetime import datetime
from typing import Optional
from pydantic import BaseModel


class VisitorCreate(BaseModel):
    name: Optional[str] = None


class VisitorOut(BaseModel):
    id: int
    name: Optional[str]
    ip_address: Optional[str]
    visited_at: datetime

    model_config = {"from_attributes": True}


class VisitorCount(BaseModel):
    count: int


class ScrumItemCreate(BaseModel):
    title: str
    description: Optional[str] = None
    status: str = "todo"
    category: Optional[str] = None
    priority: str = "medium"
    is_pinned: bool = False


class ScrumItemUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    status: Optional[str] = None
    category: Optional[str] = None
    priority: Optional[str] = None
    is_pinned: Optional[bool] = None


class ScrumItemOut(BaseModel):
    id: int
    title: str
    description: Optional[str]
    status: str
    category: Optional[str]
    priority: str
    is_pinned: bool
    created_at: datetime
    updated_at: datetime

    model_config = {"from_attributes": True}


class AdminAuth(BaseModel):
    token: str
