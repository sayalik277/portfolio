from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    ADMIN_TOKEN: str = "admin_secret"
    DATABASE_URL: str = "sqlite:///./portfolio.db"
    # In production set this to your actual frontend URL, e.g. ["https://yoursite.vercel.app"]
    CORS_ORIGINS: List[str] = ["*"]

    model_config = {"env_file": ".env"}


settings = Settings()
