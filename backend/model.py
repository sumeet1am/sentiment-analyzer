from textblob import TextBlob

def analyze_sentiment(text: str) -> dict:
    blob = TextBlob(text)
    polarity = blob.sentiment.polarity  # -1 to 1

    if polarity > 0.1:
        label = "Positive"
        emoji = "😊"
    elif polarity < -0.1:
        label = "Negative"
        emoji = "😠"
    else:
        label = "Neutral"
        emoji = "😐"

    return {
        "label": label,
        "emoji": emoji,
        "score": round(polarity, 3),
        "confidence": round(abs(polarity) * 100, 1)
    }