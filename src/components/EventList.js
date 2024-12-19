import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header'; // Import the Header component
import Footer from './Footer'; // Import the Footer component

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRoles, setSelectedRoles] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:8001/api/events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleRoleChange = async (eventId, role) => {
    try {
      setSelectedRoles((prevSelectedRoles) => ({
        ...prevSelectedRoles,
        [eventId]: role,
      }));

      const response = await fetch(`http://localhost:8001/api/notify-organizer/${eventId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ eventId, role }),
      });

      if (!response.ok) {
        throw new Error('Failed to notify organizer');
      }
      console.log('Organizer notified about role selection');
    } catch (error) {
      console.error('Error notifying organizer:', error);
    }
  };

  const handleSeeMore = (eventId) => {
    navigate(`/volunteer-dashboard`);
  };

  if (loading) {
    return <div style={{ color: '#fff', textAlign: 'center', marginTop: '2rem' }}>Loading events...</div>;
  }

  if (error) {
    return <div style={{ color: '#f00', textAlign: 'center', marginTop: '2rem' }}>Error: {error}</div>;
  }

  return (
    <div style={{ background: 'linear-gradient(135deg, #0f1033 0%, #2b1f5c 100%)', height: '100vh', overflow: 'auto' }}>
      <Header />
      <div
        style={{
          padding: '8rem 15%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#ffffff',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Explore Events</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          {events.map((event) => (
            <div
              key={event._id}
              style={{
                background: '#1f1f3a',
                borderRadius: '10px',
                padding: '1.5rem',
                width: '300px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{event.title}</h2>
              <p style={{ fontSize: '1rem', marginBottom: '0.5rem', textAlign: 'center' }}>{event.description}</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>📍 {event.location}</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>📅 {new Date(event.date).toLocaleDateString()}</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>👤 {event.createdBy?.name || 'Unknown Organizer'}</p>
              <div style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {event.roles && event.roles.length > 0 ? (
                  event.roles.map((role, index) => (
                    <label key={index} style={{ marginBottom: '0.5rem', color: '#fff' }}>
                      <input
                        type="radio"
                        name={`event-${event._id}-role`}
                        value={role}
                        onChange={() => handleRoleChange(event._id, role)}
                        style={{ marginRight: '0.5rem' }}
                      />
                      {role}
                    </label>
                  ))
                ) : (
                  <p>No roles available</p>
                )}
              </div>
              <button
                style={{
                  backgroundColor: selectedRoles[event._id] ? '#6c63ff' : '#444',
                  color: '#fff',
                  padding: '0.5rem 1rem',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: selectedRoles[event._id] ? 'pointer' : 'not-allowed',
                }}
                onClick={() => handleSeeMore(event._id)}
                disabled={!selectedRoles[event._id]}
              >
                See More
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventList;
