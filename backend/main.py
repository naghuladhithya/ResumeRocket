# backend/main.py
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os
from datetime import datetime

app = FastAPI()

# CORS for frontend (React runs on http://localhost:3000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@app.post("/upload-resume")
async def upload_resume(resume: UploadFile = File(...)):
    allowed_types = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ]

    if resume.content_type not in allowed_types:
        raise HTTPException(status_code=400, detail="Only PDF, DOC, DOCX files are allowed.")

    filename = f"{datetime.utcnow().isoformat()}_{resume.filename}"
    filepath = os.path.join(UPLOAD_DIR, filename)

    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(resume.file, buffer)

    return {"message": "Resume uploaded successfully!", "filename": filename}
