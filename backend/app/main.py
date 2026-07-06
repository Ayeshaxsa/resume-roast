from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.roast import router as roast_router

app = FastAPI()

# CORS FIX
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(roast_router)