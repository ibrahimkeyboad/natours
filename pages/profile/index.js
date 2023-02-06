import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Nav from '../../components/nav';
import Loader from '../../components/spinner/loader';
import { useLogUserQuery } from '../../context/apiSlice';

function Profile() {
  const { data, isLoading } = useLogUserQuery();
  const user = data?.user;
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [password, setPassword] = useState('');
  function profileHandler() {}

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setName(user.name);
    }
  }, [user]);

  if (user && isLoading) {
    return <Loader />;
  }
  console.log('name', name);
  return (
    <main className='main'>
      <div className='user-view'>
        <Nav />
        <div className='user-view__content'>
          <div className='user-view__form-container'>
            <h2 className='heading-secondary ma-bt-md'>
              Your Profile settings
            </h2>
            <form className='form form-user-data' onSubmit={profileHandler}>
              <div className='form__group'>
                <label htmlFor='name' className='form__label'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  value={name}
                  name='name'
                  className='form__input'
                  required
                  onChange={() => {}}
                />
              </div>
              <div className='form__group ma-bt-md'>
                <label htmlFor='email' className='form__label'>
                  Email Address
                </label>
                <input
                  type='email'
                  value={email}
                  id='email'
                  name='email'
                  required
                  className='form__input'
                  onChange={() => {}}
                />
              </div>
              <div className='form__group form__photo-upload'>
                <figure
                  style={{ position: 'relative' }}
                  className='form__user-photo'>
                  <Image
                    layout='fill'
                    src={user?.photo}
                    alt='profile'
                    className='form__user-photo'
                  />
                </figure>
                <a href='' className='btn-text'>
                  Choose new photo
                </a>
              </div>
              <div className='form__group right'>
                <button className='btn btn--small btn--green'>
                  Save settings
                </button>
              </div>
            </form>
            <div className='line'>&nbsp;</div>
            <div className='user-view__form-container'>
              <h2 className='heading-secondary ma-bt-md'>Password change</h2>
              <form className='form form-user-settings'>
                <div className='form__group'>
                  <label htmlFor='password-current' className='form__label'>
                    Current password
                  </label>
                  <input
                    type='password'
                    name='password'
                    placeholder='••••••••'
                    id='password-current'
                    onChange={() => {}}
                    required
                    minLength='8'
                    className='form__input'
                  />
                </div>
                <div className='form__group ma-bt-lg'>
                  <label htmlFor='password' className='form__label'>
                    New password
                  </label>
                  <input
                    type='password'
                    id='password'
                    name='password'
                    className='form__input'
                    placeholder='••••••••'
                    onChange={() => {}}
                    required
                    minLength={8}
                  />
                </div>
                <div className='form__group ma-bt-lg'>
                  <label htmlFor='password-confirm' className='form__label'>
                    Confirm password
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password-confirm'
                    className='form__input'
                    placeholder='••••••••'
                    onChange={() => {}}
                    required
                    minLength='8'
                  />
                </div>
                <div className='form__group right'>
                  <button className='btn btn--small btn--green'>
                    Save password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
