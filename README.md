# 🧠 Sentiment Analyzer

A full-stack AI web app that analyzes the sentiment of any text — Positive, Negative, or Neutral — built with **FastAPI** and **React**.

![Python](https://img.shields.io/badge/Python-3.10+-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-green)
![React](https://img.shields.io/badge/React-18+-61DAFB)
![TextBlob](https://img.shields.io/badge/TextBlob-NLP-orange)

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

### Backend
```bash
cd backend
pip install -r requirements.txt
python -m textblob.download_corpora
uvicorn main:app --reload
```
API runs at: `http://localhost:8000`  
Swagger docs: `http://localhost:8000/docs`

### Frontend
```bash
cd frontend
npm install
npm run dev
```
App runs at: `http://localhost:5173`

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

**Request:**
```json
{
  "text": "I love this project!"
}
```

**Response:**
```json
{
  "label": "Positive",
  "emoji": "😊",
  "score": 0.5,
  "confidence": 50.0
}
```

---

## 🔮 Future Improvements

- [ ] Upgrade to HuggingFace Transformers for better accuracy
- [ ] Add analysis history log
- [ ] Add Tailwind CSS for better UI
- [ ] Deploy to Render (backend) + Vercel (frontend)

---

## 👨‍💻 Author

Made with ❤️ by **Sumee**
