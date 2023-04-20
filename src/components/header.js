import Image from 'next/image';
import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io';
// import { useLogUserQuery } from '../context/apiSlice';
// import { useSession } from 'next-auth/react';

function Header() {
  // const { data } = useLogUserQuery();
  const data = {};
  const user = data?.user;

  // const { data } = useSession();
  console.log(data);

  // se = 'no';
  function logoutHandler() {}
  return (
    <header className='header'>
      <nav className='nav nav--tours'>
        <Image
          width={650}
          height={150}
          className='header__logo'
          src='/imgs/logo-white.png'
          alt='Natours logo'
        />
        {/* {se === 'no' ? null : (
          <form className='nav__search'>
            <button className='nav__search-btn'>
              <IoSearchOutline />
            </button>
            <input
              type='search'
              placeholder='Searching'
              className='nav__search-input'
            />
          </form>
        )} */}
      </nav>
      {data ? (
        <nav className='nav nav--user'>
          <button onClick={logoutHandler} className='nav__el nav__el--logout'>
            Log out
          </button>
          <Link className='nav__el' href='/profile' passHref>
            <figure className='nav__user-img'>
              <Image
                width={500}
                height={500}
                src={user?.photo}
                alt={user?.name}
              />
            </figure>
            <span>{user?.name?.split(' ')[0]}</span>
          </Link>
        </nav>
      ) : (
        <nav className='nav nav--user'>
          <Link className='nav__el' href='/login'>
            Log in
          </Link>
          <Link className='nav__el nav__el--cta' href='/signup'>
            Sign up
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
