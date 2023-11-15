import React from 'react';
import ProfileNav from './ProfileNav';

function ProfileLayout({ children }) {
  return (
    <main className='main'>
      <div className='user-view'>
        <ProfileNav />
        {children}
      </div>
    </main>
  );
}

export default ProfileLayout;
