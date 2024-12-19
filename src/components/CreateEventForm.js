import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header'; // Import the Header component
// import Footer from './Footer'; 

const CreateEventForm = () => {
  const navigate = useNavigate();
  const [eventDetails, setEventDetails] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    roles: [''],
    tasks: [''],
  });

  const [userId, setUserId] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (!storedUserId) {
      alert("User ID not found. Please log in again.");
      navigate('/login'); // Redirect to login page
    } else {
      setUserId(storedUserId);
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleRoleChange = (index, value) => {
    const updatedRoles = [...eventDetails.roles];
    updatedRoles[index] = value;
    setEventDetails((prevDetails) => ({ ...prevDetails, roles: updatedRoles }));
  };

  const handleTaskChange = (index, value) => {
    const updatedTasks = [...eventDetails.tasks];
    updatedTasks[index] = value;
    setEventDetails((prevDetails) => ({ ...prevDetails, tasks: updatedTasks }));
  };

  const addRoleField = () => {
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      roles: [...prevDetails.roles, ''],
    }));
  };

  const addTaskField = () => {
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      tasks: [...prevDetails.tasks, ''],
    }));
  };

  const createEvent = async (formData, token) => {
    try {
      const response = await axios.post('http://localhost:8001/api/events/create-event', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error creating event:', error.response ? error.response.data : error.message);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      alert('User ID not found. Please log in again.');
      return;
    }

    setErrorMessage('');

    if (!eventDetails.title) {
      setErrorMessage('Event title is required.');
      return;
    }
    if (!eventDetails.date) {
      setErrorMessage('Event date is required.');
      return;
    }
    if (!eventDetails.location) {
      setErrorMessage('Event location is required.');
      return;
    }

    try {
      const token = localStorage.getItem('token');

      console.log('Event Details:', eventDetails);
      console.log('Created By (User ID):', userId);

      const response = await createEvent(
        {
          ...eventDetails,
          createdBy: userId,
        },
        token
      );

      alert('Event created successfully!');
      navigate(`/create-event-payment`); // Navigate to the event details page after creation
    } catch (err) {
      if (err.response) {
        setErrorMessage(`Event created successfully!'}`);
        navigate(`/create-event-payment`)
      } else {
        setErrorMessage('Error: ' + err.message);
      }
    }
  };

  const wrapperStyle = {
    background: "linear-gradient(135deg, #0f1033 0%, #2b1f5c 100%)",
    height: "100vh",
    padding: "8rem 15%",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
    color: "white",
  };

  const cardStyle = {
    maxWidth: "640px",
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "24px",
    color: "#0f1033",
  };

  const buttonStyle = {
    backgroundColor: "#41436A",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "12px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
  };

  return (
    <div style={wrapperStyle}>
      <Header />
      <div style={cardStyle}>
        <h2>Create Event</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={eventDetails.title}
            onChange={handleInputChange}
            style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            type="text"
            name="description"
            placeholder="Event Description"
            value={eventDetails.description}
            onChange={handleInputChange}
            style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            type="date"
            name="date"
            value={eventDetails.date}
            onChange={handleInputChange}
            style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={eventDetails.location}
            onChange={handleInputChange}
            style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <button type="submit" style={buttonStyle}>Create Event</button>
        </form>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default CreateEventForm;
