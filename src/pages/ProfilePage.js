// ProfilePage.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OtherComponents from '../components/OtherComponents';

const ProfilePage = () => {
  return (
    <div>
      {/* Use Routes and Route to render OtherComponents when URL matches /myday */}
      <Routes>
        <Route path="/" element={<OtherComponents />} />
      </Routes>
    </div>
  );
};

export default ProfilePage;