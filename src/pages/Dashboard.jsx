function Dashboard() {
  return (
    <section>
      <h1>Dashboard</h1>

      <div className="dashboard-grid">
        <div className="stat-card">
          <h2>3</h2>
          <p>Total Candidates</p>
        </div>

        <div className="stat-card">
          <h2>92%</h2>
          <p>Top Match Score</p>
        </div>

        <div className="stat-card">
          <h2>84%</h2>
          <p>Average Match Score</p>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;