"use client";

import { useState } from "react";

const mockResponses = [
  "Clarity comes before action. Define the objective first.",
  "If it feels chaotic, you lack structure.",
  "Leverage is more powerful than effort.",
  "Remove distraction. Focus compounds.",
  "Most people seek speed. Few design direction.",
  "Skill first. Visibility later.",
];

export default function Home() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const sendMessage = () => {
    if (!input || loading) return;

    if (count >= 5) {
      setMessages(prev => [
        ...prev,
        "Treasure Logic: Demo limit reached."
      ]);
      return;
    }

    const userMsg = input;
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const reply =
        mockResponses[Math.floor(Math.random() * mockResponses.length)];

      setMessages(prev => [
        ...prev,
        `You: ${userMsg}`,
        `Treasure Logic: ${reply}`
      ]);

      setCount(prev => prev + 1);
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{
      maxWidth: "700px",
      margin: "0 auto",
      padding: "40px 20px",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>

      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ letterSpacing: "4px" }}>
          TREASURE LOGIC
        </h1>
        <p style={{ color: "#777" }}>
          Free Demo — Simulated Responses
        </p>
      </div>

      <div style={{ flex: 1 }}>
        {messages.map((msg, i) => (
          <p key={i} style={{ lineHeight: "1.6" }}>{msg}</p>
        ))}
        {loading && <p style={{ color: "#666" }}>Thinking...</p>}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        placeholder="Ask with intent."
        style={{
          padding: "15px",
          background: "transparent",
          border: "1px solid #333",
          color: "#fff",
          marginTop: "20px"
        }}
      />
    </div>
  );
}
