const colors = {
  Positive: "#d1fae5",
  Negative: "#fee2e2",
  Neutral: "#f3f4f6",
};

export default function SentimentCard({ result }) {
  return (
    <div style={{
      marginTop: 24, padding: 20, borderRadius: 12,
      backgroundColor: colors[result.label] || "#f3f4f6",
      textAlign: "center"
    }}>
      <div style={{ fontSize: 48 }}>{result.emoji}</div>
      <h2 style={{ margin: "8px 0" }}>{result.label}</h2>
      <p>Polarity Score: <strong>{result.score}</strong></p>
      <p>Confidence: <strong>{result.confidence}%</strong></p>
    </div>
  );
}