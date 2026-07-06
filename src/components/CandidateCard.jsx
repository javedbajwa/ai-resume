function CandidateCard({ candidate }) {
  return (
    <div className="candidate-card">
      <h2>{candidate.name}</h2>
      <p className="score">Match Score: {candidate.score}%</p>

      <div className="skills">
        {candidate.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      <p>{candidate.explanation}</p>
    </div>
  );
}

export default CandidateCard;