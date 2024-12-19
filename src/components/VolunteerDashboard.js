import React, { useState } from "react";

const DashboardPage = () => {
  const [events, setEvents] = useState([
    {
      id: "1",
      name: "Summer Sports Meet",
      date: "2024-06-15",
      sport: "Table Tennis",
      applied: false,
    },
    {
      id: "2",
      name: "Chess Championship",
      date: "2024-06-20",
      sport: "Chess",
      applied: false,
    },
    {
      id: "3",
      name: "Badminton Tournament",
      date: "2024-07-01",
      sport: "Badminton",
      applied: false,
    },
  ]);

  const handleApply = (eventId) => {
    setEvents(
      events.map((event) =>
        event.id === eventId ? { ...event, applied: true } : event
      )
    );
  };

  const totalEvents = events.length;
  const appliedEvents = events.filter((e) => e.applied).length;
  const activeStatus = true;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #2F314B, #223D6C)",
        color: "#F1EEDB",
        fontFamily: "Arial, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: "-1",
        }}
      >
        <source src="/1001376547.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          backgroundColor: "#2F314B",
          borderBottom: "1px solid #88B0A2",
        }}
      >
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Volunteer Dashboard</h1>
        <button style={styles.button}>Logout</button>
      </header>

      <main style={{ padding: "2rem" }}>
        <section
          style={{
            textAlign: "center",
            padding: "3rem",
            background: "linear-gradient(to right, #4F46E5, #88B0A2)",
            borderRadius: "10px",
            marginBottom: "2rem",
            color: "#FFFFFF",
          }}
        >
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Welcome to Your Dashboard</h2>
          <p>Manage your volunteer events and track your progress.</p>
        </section>

        <div
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          <Card title="Total Events" value={totalEvents} />
          <Card title="Applied Events" value={appliedEvents} />
          <Card title="Volunteer Status" value={activeStatus ? "Active" : "Inactive"} />
        </div>

        <div style={{ marginTop: "2rem" }}>
          <div
            style={{
              background: "#223D6C",
              borderRadius: "8px",
              padding: "1.5rem",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <h2 style={{ marginBottom: "1rem" }}>Active Events</h2>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Sport</th>
                  <th style={{ textAlign: "right" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id}>
                    <td>{event.name}</td>
                    <td>{new Date(event.date).toLocaleDateString()}</td>
                    <td>{event.sport}</td>
                    <td style={{ textAlign: "right" }}>
                      <button
                        style={event.applied ? styles.buttonSecondary : styles.button}
                        onClick={() => handleApply(event.id)}
                        disabled={event.applied}
                      >
                        {event.applied ? "Applied" : "Apply"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

const Card = ({ title, value }) => (
  <div
    style={{
      background: "linear-gradient(to bottom, #4F46E5, #82B6A9)",
      borderRadius: "8px",
      padding: "1.5rem",
      textAlign: "center",
      color: "#FFFFFF",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    }}
  >
    <h3 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>{title}</h3>
    <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{value}</div>
  </div>
);

const styles = {
  button: {
    backgroundColor: "#4F46E5",
    color: "#FFFFFF",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },
  buttonSecondary: {
    backgroundColor: "#6B7280",
    color: "#D1D5DB",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "4px",
    cursor: "not-allowed",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "1rem",
    color: "#FFFFFF",
  },
};

export default DashboardPage;
