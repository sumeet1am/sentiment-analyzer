import { useState } from "react";
import SentimentCard from "./components/SentimentCard";

export default function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    if (!text.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error("API error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "60px auto", fontFamily: "sans-serif", padding: "0 16px" }}>
      <h1>🧠 Sentiment Analyzer</h1>
      <textarea
        rows={5}
        style={{ width: "100%", padding: 12, fontSize: 16, borderRadius: 8, border: "1px solid #ccc" }}
        placeholder="Type something to analyze..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button
        onClick={analyze}
        disabled={loading}
        style={{ marginTop: 12, padding: "10px 24px", fontSize: 16,
          backgroundColor: "#4f46e5", color: "white", border: "none",
          borderRadius: 8, cursor: "pointer" }}
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      {result && <SentimentCard result={result} />}
    </div>
  );
}