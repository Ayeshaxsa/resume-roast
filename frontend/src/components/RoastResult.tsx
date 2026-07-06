type RoastResultProps = {
  roast: string;
  loading: boolean;
};

function RoastResult({ roast, loading }: RoastResultProps) {
  if (loading) {
    return <p className="loading">🧠 AI is analyzing your resume...</p>;
  }

  if (!roast) {
    return null;
  }

  return (
    <div className="card result">
      <h2>🔥 Roast Result</h2>
      <pre>{roast}</pre>
    </div>
  );
}

export default RoastResult;
