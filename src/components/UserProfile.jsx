import React from 'react';

// Component to display user profile. It takes in user as a prop
function UserProfile({ user }) {

  // Display image by randomly assigning seed using Math.random
  return (
    <div>
      {/* Display Image. We are using Math.random to generate a random 200x200 image */}
      <img src={user.profilePicture + `?random=${Math.random()}`} alt="profile" />

      {/* Diplay the firstname and lastname as an H2 */}
      <h2>{user.firstName} {user.lastName}</h2>

      {/* Diplay the rest of the details as an unordered list */}
      <ul>
        <li><strong>Username:</strong> {user.username}</li>
        <li><strong>Email:</strong> {user.email}</li>
        <li><strong>School:</strong> {user.school}</li>

        {/* Change the color based on the individual Class level. */}
        <li><strong>Class Level:</strong> <span style={{ color: user.classLevel === 'Freshmen' ? 'green' : 'black' }}>{user.classLevel}</span></li>
      </ul>
      <hr />
    </div>
  );
}

export default UserProfile;
