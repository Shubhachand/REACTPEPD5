import React from 'react';

function UserProfile({ firstName, lastName, age }) {
  return (
    <div style={styles.container}>
      <h2>User Profile</h2>
      <p><strong>First Name:</strong> {firstName}</p>
      <p><strong>Last Name:</strong> {lastName}</p>
      <p><strong>Age:</strong> {age}</p>
    </div>
  );
}

// Optional inline styles for structure
const styles = {
  container: {
    border: '2px solid',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '300px',
    margin: '20px auto',
    textAlign: 'left',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0'
  }
};

export default UserProfile;
