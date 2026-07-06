import { useState } from "react";

function ResumeUpload() {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Resume:", resume);
    console.log("Job Description:", jobDescription);

    alert("Frontend upload form is working. Backend will be connected later.");
  };

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      <label>
        Resume File
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(event) => setResume(event.target.files[0])}
        />
      </label>

      <label>
        Job Description
        <textarea
          rows="8"
          placeholder="Paste the job description here..."
          value={jobDescription}
          onChange={(event) => setJobDescription(event.target.value)}
        />
      </label>

      <button type="submit">Analyze Resume</button>
    </form>
  );
}

export default ResumeUpload;