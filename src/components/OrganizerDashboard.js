import React, { useState, useEffect } from "react";
import { Calendar, Users, BarChart, PlusCircle, Bell, LogOut, Clock, Target, TrendingUp, Loader2 } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const darkThemeStyles = {
  container: {
    display: 'flex',
    height: '100vh',
    background: 'linear-gradient(135deg, #0f1033 0%, #2b1f5c 100%)',
    color: '#ffffff',
  },
  sidebar: {
    width: '16rem',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column' ,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  sidebarHeader: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
  },
  sidebarButton: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.75rem',
    color: 'white',
    width: '100%',
    justifyContent: 'flex-start',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  sidebarButtonHover: {
    background: 'rgba(255, 255, 255, 0.2)',
  },
  logoutButton: {
    marginTop: 'auto',
    backgroundColor: '#E27D60',
  },
  mainContent: {
    flex: 1,
    padding: '1.5rem',
    overflowY: 'auto',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '0.5rem',
  },
  topBarButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    border: 'none',
    backgroundColor: '#E27D60',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '0.25rem',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  statCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '1rem',
    borderRadius: '0.5rem',
  },
  statValue: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginTop: '0.5rem',
  },
  eventsActivity: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '1rem',
    borderRadius: '0.5rem',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1rem',
  },
  scrollable: {
    maxHeight: '300px',
    overflowY: 'auto',
  },
  eventItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.75rem',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '0.5rem',
    marginBottom: '0.5rem',
  },
  activityItem: {
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '10px 0',
  },
  activityButton: {
    backgroundColor: '#E27D60',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    marginTop: '10px',
  },
};

export default function Dashboard() {
  const [events, setEvents] = useState([]);
  const [volunteers, setVolunteers] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setNotifications([
      { id: 1, userId: "66f501d6ea1577bde98eaefc", message: "Eco Warriers was selected.", isDisabled: true },
      { id: 2, userId: "66f5081b5c41a030788b7f8b", message: "Community clean up was selected.", isDisabled: true },
      { id: 3, userId: "66f501d6ea1577bde98eaefc", message: "Beach Clean up was selected.", isDisabled: true },
      { id: 4, userId: "66f5081b5c41a030788b7f8b", message: "Community clean up was selected.", isDisabled: true },
      { id: 5, userId: "66f51f36acb4a32a7895ff65", message: "Food Donation was selected", isDisabled: true },
      { id: 6, userId: "66f5081b5c41a030788b7f8b", message: "Shiramadhana Champaign was selected.", isDisabled: true },
      { id: 7, userId: "66f5081b5c41a030788b7f8b", message: "Workshop was selected", isDisabled: true},
      { id: 8, userId: "66f501d6ea1577bde98eaefc", message: "Food Donation was selected", isDisabled: true},
    ]);

    setEvents([
      { id: '673322e551180b2e9320d6b4', name: "Eco Warriers", date: "2024-12-20" },
      { id: '67349a8e29ed106049cbb5fd', name: "jdfj", date: "2024-12-25" },
      { id: '67349cbb29ed106049cbb611', name: "Community Clean-up", date: "2024-12-02" },
      { id: '66f7a923862a2f1d661b1bae', name: "Shiramadhana Champaign", date: "2024-12-01"},
      { id: '673322e551180b2e9320d6b4', name: "Workshop", date: "2024-12-05"},
      { id: '67349cbb29ed106049cbb611', name: "Food Donation", date: "2024-12-10"},
    ]);

    if (!localStorage.getItem("hasVisitedDashboard")) {
      alert("Welcome Organizer... here you can manage your volunteers");
      localStorage.setItem("hasVisitedDashboard", "true");
    }
  }, []);

  const handleNotificationClick = (notificationId) => {
    setNotifications(notifications.map(notification =>
      notification.id === notificationId ? { ...notification, isDisabled: true } : notification
    ));
  };

  if (isLoading) {
    return (
      <div style={{ ...darkThemeStyles.container, alignItems: 'center', justifyContent: 'center' }}>
        <Loader2 style={{ height: '3rem', width: '3rem', animation: 'spin 1s linear infinite' }} />
      </div>
    );
  }

  return (
    <div style={darkThemeStyles.container}>
      {/* Sidebar */}
      <div style={darkThemeStyles.sidebar}>
        <div>
          <h1 style={{ ...darkThemeStyles.sidebarHeader,padding:'1rem'}}>Organizer Dashboard</h1>
          <nav>
            {['New Event', 'Events', 'Manage Volunteers'].map((text, index) => (
              <button
                key={text}
                style={{...darkThemeStyles.sidebarButton, marginBottom:'2rem'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = darkThemeStyles.sidebarButtonHover.background;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
                onClick={() => navigate(index === 0 ? '/create-event' : index === 1 ? '/events' : '/manage-volunteers')}
              >
                {index === 0 ? <PlusCircle style={{ marginRight: '0.5rem',color:'#fff', boxShadow:'0 10px 20px rgba(99, 102, 241, 0.5)'  }} /> :
                 index === 1 ? <Calendar style={{ marginRight: '0.5rem',color:'#fff', boxShadow:'0 10px 20px rgba(99, 102, 241, 0.5)'  }} /> :
                 <Users style={{ marginRight: '0.5rem' ,color:'#fff', boxShadow:'0 10px 20px rgba(99, 102, 241, 0.5)' }} />}
                {text}
              </button>
            ))}
          </nav>
        </div>
        <button
          style={{
            ...darkThemeStyles.sidebarButton,
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
            marginBottom:'30rem'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
          onClick={() => navigate('/')}
        >
          <LogOut style={{ marginRight: '1rem' }} /> Logout
        </button>
      </div>

      {/* Main Content */}
      <div style={darkThemeStyles.mainContent}>
        {/* Top Bar */}
        <div style={darkThemeStyles.topBar}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold',boxShadow:'0 10px 20px rgba(99, 102, 241, 0.5)' }}>Welcome Organizer!!!</h2>
          <div style={{ display: 'flex', gap: '1rem' ,color:'#fff', boxShadow:'0 10px 20px rgba(99, 102, 241, 0.5)'}}>
            {[<Bell />, <PlusCircle />].map((icon, index) => (
              <button
                key={index}
                style={{...darkThemeStyles.topBarButton, background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',boxShadow:'0 10px 20px rgba(99, 102, 241, 0.5)'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                onClick={() => index === 1 && navigate('/create-event')}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Content */}
        <div style={{ marginTop: '2rem' }}>
          {/* Stats Grid */}
          <div style={darkThemeStyles.statsGrid}>
            <div style={darkThemeStyles.statCard}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Calendar />
                <h3>Total Events</h3>
              </div>
              <div style={darkThemeStyles.statValue}>{events.length}</div>
              <p style={{ fontSize: '0.875rem', color: 'white' }}>+2 from last month</p>
            </div>
            <div style={darkThemeStyles.statCard}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Users />
                <h3>Active Volunteers</h3>
              </div>
              <div style={darkThemeStyles.statValue}>{volunteers}</div>
              <p style={{ fontSize: '0.875rem', color: 'white' }}>+12 from last month</p>
            </div>
            <div style={darkThemeStyles.statCard}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <TrendingUp />
                <h3>Engagement Rate</h3>
              </div>
              <div style={darkThemeStyles.statValue}>20%</div>
              <p style={{ fontSize: '0.875rem', color: 'white' }}>+5% from last month</p>
            </div>
          </div>

          {/* Upcoming Events and Recent Activity */}
          <div style={darkThemeStyles.eventsActivity}>
            {/* Upcoming Events */}
            <div style={darkThemeStyles.card}>
              <div style={darkThemeStyles.cardHeader}>
                <Clock />
                <h3>Upcoming Events</h3>
              </div>
              <div style={darkThemeStyles.scrollable}>
                {events.slice(0, 5).map((event) => (
                  <div key={event.id} style={darkThemeStyles.eventItem}>
                    <div>
                      <h4 style={{ fontWeight: 'bold' }}>{event.name}</h4>
                      <p style={{ fontSize: '0.875rem', color: 'rgb(206, 207, 235) ' }}>{event.date}</p>
                    </div>
                    <div style={{ fontSize: '0.875rem' }}>
                      <strong>ID:</strong> {event.id}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div style={darkThemeStyles.card}>
              <div style={darkThemeStyles.cardHeader}>
                <Target />
                <h3>Recent Activity</h3>
              </div>
              <div style={darkThemeStyles.scrollable}>
                {notifications.map((notification) => (
                  <div key={notification.id} style={darkThemeStyles.activityItem}>
                    <p><strong>User ID:</strong> {notification.userId}</p>
                    <p>{notification.message}</p>
                    <button
  style={{
    ...darkThemeStyles.activityButton,
    ...(notification.isDisabled
      ? {
          ...darkThemeStyles.sidebarButton,
          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
          border: 'none',
          padding: '0.6rem 1.5rem',
          borderRadius: '24px',
          color: '#fff',
          fontSize: '1.2rem',
          cursor: 'not-allowed',  // Make sure the cursor is "not-allowed" when disabled
          opacity: 0.5, // Reduce opacity when disabled
          fontWeight: 'bold',
          boxShadow: '0 10px 20px rgba(99, 102, 241, 0.5)',
          marginTop: 'auto',
          textAlign: 'center',
          marginRight:'2.5rem',
          width:'120px',
        }
      : {
          opacity: 1,
          cursor: 'pointer',  // Normal pointer cursor when enabled
        }),
    transition: 'transform 0.2s ease',  // Apply transition globally
  }}
  onMouseEnter={(e) => {
    if (!notification.isDisabled) {
      e.currentTarget.style.transform = 'translateY(-2px)';
    }
  }}
  onMouseLeave={(e) => {
    if (!notification.isDisabled) {
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }}
  onClick={() => handleNotificationClick(notification.id)}
  disabled={notification.isDisabled}
>
  Disable
</button>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

