# 🧠 Sentiment Analyzer

> Analyze the sentiment of any text — **Positive**, **Negative**, or **Neutral** — instantly!

🌐 **Live Demo:** [sentiment-analyzer-cqzi.vercel.app](https://sentiment-analyzer-cqzi.vercel.app)

![Python](https://img.shields.io/badge/Python-3.10+-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-green)
![React](https://img.shields.io/badge/React-19+-61DAFB)
![TextBlob](https://img.shields.io/badge/TextBlob-NLP-orange)

---

## ✨ Features

- 🔍 Detects Positive, Negative and Neutral sentiment
- 📊 Shows polarity score and confidence %
- ⚡ Fast REST API with FastAPI
- 🎨 Clean React frontend

---

## 🗂️ Project Structure
```
sentiment-analyzer/
├── backend/
│   ├── main.py
│   ├── model.py
│   └── requirements.txt
└── frontend/
    ├── src/
    │   ├── App.jsx
    │   └── components/
    │       └── SentimentCard.jsx
    └── package.json
```

---

## ⚙️ Setup & Run

### 1️⃣ Backend
```bash
cd backend
pip install -r requirements.txt
python -m textblob.download_corpora
uvicorn main:app --reload
```
> API → `http://localhost:8000` | Docs → `http://localhost:8000/docs`

### 2️⃣ Frontend
```bash
cd frontend
npm install
npm run dev
```
> App → `http://localhost:5173`

---

## 🧪 Example Inputs

| Input | Result |
|-------|--------|
| "I absolutely love this!" | 😊 Positive |
| "This is the worst experience." | 😠 Negative |
| "The meeting is at 10am." | 😐 Neutral |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | FastAPI, Uvicorn |
| NLP Model | TextBlob |
| Frontend | React, Vite |

---

## 📬 API Reference

### `POST /analyze`
```json
// Request
{ "text": "I love this project!" }

// Response
{
  "label": "Positive",
  "emoji": "😊",
  "score": 0.5,
  "confidence": 50.0
}
```

---

## 🔮 What's Next

- [ ] Upgrade to HuggingFace Transformers for better accuracy
- [ ] Add analysis history log
- [ ] Add Tailwind CSS for better UI

---
