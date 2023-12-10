import React from 'react';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
  },
  message: {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '10px',
    color: '#333333',
  },
  subHeading: {
    fontSize: '18px',
    color: '#666666',
  },
};

const NoPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.message}>
        <h1 style={styles.heading}>Sorry, Page Not Found!</h1>
        <p style={styles.subHeading}>The page you are looking for doesn't exist.</p>
      </div>
    </div>
  );
};

export default NoPage;
