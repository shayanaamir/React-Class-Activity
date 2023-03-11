import React from 'react';
import { users } from '../user';
import UserProfile from './UserProfile';

function DisplayUserProfiles() {
  const userProfileList = [];
  // Loop through all user objects in the file user.js and display all components
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    userProfileList.push(<UserProfile key={user.username} user={user} />);
  }

  return <div className="user-profile-list">{userProfileList}</div>;
}

export default DisplayUserProfiles;
