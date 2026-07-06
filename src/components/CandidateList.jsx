import CandidateCard from "./CandidateCard";

const candidates = [
  {
    id: 1,
    name: "Aisha Khan",
    score: 92,
    skills: ["Python", "FastAPI", "SQL", "React"],
    explanation:
      "Strong match because the candidate has backend development, API, and database experience.",
  },
  {
    id: 2,
    name: "Omar Ali",
    score: 84,
    skills: ["JavaScript", "React", "Node.js"],
    explanation:
      "Good match for frontend requirements but missing some AI and database experience.",
  },
  {
    id: 3,
    name: "Sara Ahmed",
    score: 76,
    skills: ["Python", "Data Analysis", "Machine Learning"],
    explanation:
      "Good AI/ML background, but limited full-stack application experience.",
  },
];

function CandidateList() {
  return (
    <div className="candidate-list">
      {candidates.map((candidate) => (
        <CandidateCard key={candidate.id} candidate={candidate} />
      ))}
    </div>
  );
}

export default CandidateList;