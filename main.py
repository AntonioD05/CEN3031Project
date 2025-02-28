from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from passlib.context import CryptContext
from typing import Optional

app = FastAPI()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class LoginData(BaseModel):
    email: str
    password: str

@app.get("/")
def read_root():
    return {"message": "Welcome to Club Companion API"}

@app.post("/api/login/student")
async def student_login(login_data: LoginData):
    # TODO: Implement student login logic
    # 1. Get student from database
    # 2. Verify password
    # 3. Return JWT token or session
    pass

@app.post("/api/login/club")
async def club_login(login_data: LoginData):
    # TODO: Implement club login logic
    # 1. Get club from database
    # 2. Verify password
    # 3. Return JWT token or session
    pass