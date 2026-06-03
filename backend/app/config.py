from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    ADMIN_TOKEN: str = "admin_secret"
    DATABASE_URL: str = "sqlite:///./portfolio.db"
    CORS_ORIGINS: List[str] = ["http://localhost:5173", "http://localhost:3000"]

    model_config = {"env_file": ".env"}


settings = Settings()
