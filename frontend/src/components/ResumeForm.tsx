import { useState } from "react";
import RoastResult from "./RoastResult";

function ResumeForm() {
  const [resumeText, setResumeText] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [roast, setRoast] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRoast() {
    if (!resumeText.trim()) return;

    setLoading(true);
    setRoast("");

    try {
      const res = await fetch("http://127.0.0.1:8000/roast", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resume_text: resumeText,
        }),
      });

      const data = await res.json();

      const text = data.roast;
      let i = 0;

      setLoading(false);

      const interval = setInterval(() => {
        setRoast(text.slice(0, i));
        i++;

        if (i > text.length) clearInterval(interval);
      }, 10);
    } catch {
      setRoast("⚠️ Error roasting text");
      setLoading(false);
    }
  }

  async function handlePdfRoast() {
    if (!file) return;

    setLoading(true);
    setRoast("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://127.0.0.1:8000/roast-pdf", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      const text = data.roast;
      let i = 0;

      setLoading(false);

      const interval = setInterval(() => {
        setRoast(text.slice(0, i));
        i++;

        if (i > text.length) clearInterval(interval);
      }, 10);
    } catch {
      setRoast("⚠️ Error roasting PDF");
      setLoading(false);
    }
  }

  return (
    <div className="page">
      <div className="card">
        <h2>Upload PDF Resume</h2>

        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => {
            if (e.target.files) {
              setFile(e.target.files[0]);
            }
          }}
        />

        <button className="button" onClick={handlePdfRoast} disabled={loading}>
          {loading ? "📄 Processing..." : "📄 Roast PDF"}
        </button>
      </div>

      <RoastResult roast={roast} loading={loading} />
      <h1>OR</h1>
      <div className="card">
        <h2>Paste Resume</h2>

        <textarea
          className="textarea"
          placeholder="Paste resume text..."
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
        />

        <button className="button" onClick={handleRoast} disabled={loading}>
          {loading ? "🔥 Roasting..." : "🔥 Roast Text"}
        </button>
      </div>
    </div>
  );
}

export default ResumeForm;