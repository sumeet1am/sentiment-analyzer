from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from model import analyze_sentiment

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React dev server
    allow_methods=["*"],
    allow_headers=["*"],
)

class TextInput(BaseModel):
    text: str

@app.post("/analyze")
async def analyze(input: TextInput):
    if not input.text.strip():
        return {"error": "Text cannot be empty"}
    return analyze_sentiment(input.text)

@app.get("/")
def root():
    return {"message": "Sentiment Analyzer API is running!"}