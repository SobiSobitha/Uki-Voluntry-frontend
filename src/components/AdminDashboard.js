'use client'

import React, { useState } from 'react';
import { Bell, ChevronDown, Home, Users, CreditCard, MessageSquare, Moon, Sun, Search, Menu, LogOut } from 'lucide-react'; // Import LogOut here
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const navigate = useNavigate(); // Initialize navigate

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div style={{
      fontFamily: "'Inter', sans-serif",
      backgroundColor: darkMode ? '#1a1a2e' : '#ffffff',
      color: darkMode ? '#e0e0e0' : '#333333',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: darkMode ? '#16213e' : '#f0f0f0',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}>
        <button onClick={toggleSidebar} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}>
          <Menu size={24} />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: darkMode ? '#2a2a3a' : '#ffffff',
            borderRadius: '20px',
            padding: '0.5rem 1rem',
          }}>
            <Search size={20} style={{ marginRight: '0.5rem' }} />
            <input
              type="text"
              placeholder="Search..."
              style={{
                background: 'none',
                border: 'none',
                color: 'inherit',
                outline: 'none',
              }}
            />
          </div>
          <button onClick={toggleDarkMode} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}>
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <Bell size={24} style={{ cursor: 'pointer' }} />
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <img
              src="https://i.pravatar.cc/40"
              alt="User Avatar"
              style={{ borderRadius: '50%', marginRight: '0.5rem' }}
            />
            <ChevronDown size={20} />
          </div>
        </div>
      </header>

      <div style={{ display: 'flex', flex: 1 }}>
        {/* Sidebar */}
        <nav style={{
          width: sidebarOpen ? '250px' : '0',
          backgroundColor: darkMode ? '#0f3460' : '#e0e0e0',
          transition: 'width 0.3s ease',
          overflow: 'hidden',
          paddingBottom: '1rem', // To ensure the logout button is placed nicely
        }}>
          <ul style={{ listStyle: 'none', padding: '1rem' }}>
            {[
              { icon: <Home size={20} />, text: 'Dashboard' },
              { icon: <Users size={20} />, text: 'Users' },
              { icon: <MessageSquare size={20} />, text: 'Messages' },
            ].map((item, index) => (
              <li key={index} style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.75rem',
                marginBottom: '0.5rem',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                backgroundColor: index === 0 ? (darkMode ? '#1a1a2e' : '#d0d0d0') : 'transparent',
              }}>
                {item.icon}
                <span style={{ marginLeft: '0.75rem' }}>{item.text}</span>
              </li>
            ))}
          </ul>

          {/* Logout Button */}
          <button
            style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              border: 'none',
              padding: '0.6rem 1.5rem',
              borderRadius: '24px',
              color: '#fff',
              fontSize: '1.2rem',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              fontWeight: 'bold',
              boxShadow: "0 10px 20px rgba(99, 102, 241, 0.5)",
              marginTop: 'auto',
              marginBottom: '1rem', // Added margin for spacing from other elements
              alignItems:'center',
              marginRight:'1rem',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
            onClick={() => navigate('/')} // Use navigate to redirect
          >
            <LogOut style={{ marginRight: '1rem' }} /> Logout
          </button>
        </nav>

        {/* Main Content */}
        <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
          <h1 style={{
            fontSize: '2rem',
            marginBottom: '2rem',
            color: darkMode ? '#e0e0e0' : '#333333',
          }}>Dashboard Overview</h1>

          {/* Stats Section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem',
          }}>
            {[
              { title: 'Total Volunteers', value: '24', color: '#4e54c8' },
              { title: 'Pending Organizers', value: '0', color: '#ff6b6b' },
              { title: 'Engagement Rate', value: '20%', color: '#1abc9c' },
            ].map((stat, index) => (
              <div key={index} style={{
                backgroundColor: darkMode ? '#16213e' : '#ffffff',
                borderRadius: '8px',
                padding: '1.5rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
                ':hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
                },
              }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: stat.color }}>{stat.title}</h3>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Table Section */}
          <div style={{
            backgroundColor: darkMode ? '#16213e' : '#ffffff',
            borderRadius: '8px',
            padding: '1.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            marginBottom: '2rem',
          }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: darkMode ? '#e0e0e0' : '#333333' }}>Recent Activities</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${darkMode ? '#2a2a3a' : '#e0e0e0'}` }}>
                  <th style={{ textAlign: 'left', padding: '0.75rem', color: darkMode ? '#a0a0a0' : '#666666' }}>User</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem', color: darkMode ? '#a0a0a0' : '#666666' }}>Action</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem', color: darkMode ? '#a0a0a0' : '#666666' }}>Date</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { user: 'Vaishu', action: 'Signed up', date: '2024-12-05' },
                  { user: 'Jana', action: 'Joined as Volunteer', date: '2024-11-26' },
                  { user: 'Abi', action: 'Signed up', date: '2024-11-12' },
                ].map((activity, index) => (
                  <tr key={index} style={{
                    backgroundColor: index % 2 === 0 ? (darkMode ? '#1a1a2e' : '#f8f8f8') : 'transparent',
                    transition: 'background-color 0.2s',
                  }}>
                    <td style={{ padding: '0.75rem' }}>{activity.user}</td>
                    <td style={{ padding: '0.75rem' }}>{activity.action}</td>
                    <td style={{ padding: '0.75rem' }}>{activity.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Messages Section */}
          <div style={{
            backgroundColor: darkMode ? '#16213e' : '#ffffff',
            borderRadius: '8px',
            padding: '1.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: darkMode ? '#e0e0e0' : '#333333' }}>Recent Messages</h2>
            <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
              {[
                { user: 'Anu', message: 'Hey, I have a question about Event creation', time: '2 hours ago' },
                { user: 'Kamal', message: 'Thanks for your help!', time: '1 day ago' },
                { user: 'Abhimanyu', message: 'Can you please review my messages', time: '2 days ago' },
              ].map((message, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '1rem',
                  borderBottom: `1px solid ${darkMode ? '#2a2a3a' : '#e0e0e0'}`,
                }}>
                  <img
                    src={`https://i.pravatar.cc/40?img=${index + 1}`}
                    alt={message.user}
                    style={{
                      borderRadius: '50%',
                      marginRight: '1rem',
                    }}
                  />
                  <div style={{
                    flex: 1,
                    fontWeight: 'bold',
                    color: darkMode ? '#e0e0e0' : '#333333',
                  }}>
                    {message.user}
                    <p style={{
                      fontSize: '0.875rem',
                      color: darkMode ? '#a0a0a0' : '#666666',
                      margin: '0.25rem 0 0',
                    }}>
                      {message.message}
                    </p>
                  </div>
                  <span style={{
                    fontSize: '0.875rem',
                    color: darkMode ? '#a0a0a0' : '#666666',
                  }}>
                    {message.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
