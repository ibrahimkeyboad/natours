import ProfileLayout from '@/components/Profile/ProfileLayout';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]';
import User from '@/models/userModel';
import connectDB from '@/db';
import Image from 'next/image';

function ProfilePage({ user }) {
  return (
    <ProfileLayout role={user.role}>
      <div className='user-view__content'>
        <div className='user-view__form-container'>
          <h2 className='heading-secondary ma-bt-md'>Your account settings</h2>
          <form className='form form-user-data'>
            <div className='form__group'>
              <label htmlFor='name' className='form__label'>
                Name
              </label>
              <input
                type='text'
                value={user.name}
                id='name'
                className='form__input'
                required
              />
            </div>
            <div className='form__group ma-bt-md'>
              <label htmlFor='email' className='form__label'>
                Email address
              </label>
              <input
                type='text'
                id='email'
                value={user.email}
                className='form__input'
                required
              />
            </div>
            <div className='form__group form__photo-upload'>
              <Image
                height={100}
                width={100}
                src={user.photo}
                alt={user.name}
                className='form__user-photo'
              />
              <button className='btn-text'>Choose new photo</button>
            </div>
            <div className='form__group right'>
              <button className='btn btn--small btn--green'>
                Save settings
              </button>
            </div>
            <div className='line' />
          </form>
        </div>
        <div className='user-view__form-container'>
          <h2 className='heading-secondary ma-bt-md'>Password change</h2>
          <form className='form form-user-settings'>
            <div className='form__group'>
              <label htmlFor='current-password' className='form__label'>
                Current password
              </label>
              <input
                type='password'
                id='current-password'
                className='form__input'
                placeholder='••••••••'
                required
              />
            </div>
            <div className='form__group ma-bt-lg'>
              <label htmlFor='password' className='form__label'>
                Current password
              </label>
              <input
                type='password'
                id='password'
                className='form__input'
                placeholder='••••••••'
                required
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
    </ProfileLayout>
  );
}

export default ProfilePage;

export async function getServerSideProps({ req, res }) {
  connectDB();
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const data = await User.findOne({ email: session.user.email });

  const user = JSON.parse(JSON.stringify(data));

  console.log(user);

  return {
    props: { user },
  };
}
