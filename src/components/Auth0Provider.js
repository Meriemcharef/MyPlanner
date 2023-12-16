// Auth0Provider.js
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = 'dev-k715xqa7zi6orvjq.us.auth0.com';
  const clientId = 'oALWN4FNI5XmmGHsdE436XrqI0cfNHVO';

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
