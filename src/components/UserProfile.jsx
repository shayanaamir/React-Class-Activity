import React from 'react';

// Component to display user profile. It takes in user as a prop
function UserProfile({ user }) {

  // Display image by randomly assigning seed using Math.random
  return (
    <div>

      <img src={user.profilePicture + `?random=${Math.random()}`} alt="profile" />

      <h2>{user.firstName} {user.lastName}</h2>
      <ul>
        <li><strong>Username:</strong> {user.username}</li>
        <li><strong>Email:</strong> {user.email}</li>
        <li><strong>School:</strong> {user.school}</li>
        <li><strong>Class Level:</strong> <span style={{ color: user.classLevel === 'Freshmen' ? 'green' : 'black' }}>{user.classLevel}</span></li>
      </ul>
      <hr />
    </div>
  );
}

export default UserProfile;
