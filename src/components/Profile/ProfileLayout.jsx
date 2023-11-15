import React from 'react';
import ProfileNav from './ProfileNav';

function ProfileLayout({ children, role }) {
  return (
    <main className='main'>
      <div className='user-view'>
        <ProfileNav role={role} />
        {children}
      </div>
    </main>
  );
}

export default ProfileLayout;
