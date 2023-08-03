import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const userProfile = ['FlorianBetin', 'Snoupix', 'julien-go'];
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/"> Users </Link>
        </li>
        <ul>
          {userProfile.map((username) => {
            return (
              <li key={username}>
                <Link to={`/profiles/${username}`}> {username}</Link>
              </li>
            );
          })}
        </ul>
      </ul>
    </nav>
  );
}

export default Navbar;
