export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 42, marginBottom: 12 }}>Kabbalah Guy</h1>
      <p style={{ fontSize: 18, maxWidth: 700 }}>
        Practical Kabbalah for daily life. Your Journey Map is coming next.
      </p>

      <div style={{ marginTop: 24 }}>
        <a
          href="/subscribe"
          style={{
            display: "inline-block",
            padding: "12px 18px",
            borderRadius: 10,
            background: "black",
            color: "white",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Get the Daily Kabbalah Life Tip
        </a>
      </div>
    </main>
  );
}
