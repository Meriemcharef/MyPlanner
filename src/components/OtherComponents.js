// OtherComponents.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

import { useAuth0 } from '@auth0/auth0-react';

const OtherComponents = () => {
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate(); // Initialize the navigate function

  // UseEffect to navigate when isAuthenticated changes
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/myday'); // Redirect to /myday when authenticated
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h2>Welcome, {user.name}!</h2>
          {/* No need for the Link in this case */}
        </div>
      ) : null}
    </div>
  );
};

export default OtherComponents;
