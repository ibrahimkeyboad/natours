import Image from 'next/image';
import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io';
import { useLogUserQuery } from '../context/apiSlice';
import { useSession } from 'next-auth/react';

function Header() {
  // const { data } = useLogUserQuery();
  // const user = data?.user;

  const { data } = useSession();
  console.log(data);

  // se = 'no';
  function logoutHandler() {}
  return (
    <header className='header'>
      <nav className='nav nav--tours'>
        <div className='header__logo'>
          <Image
            width={60}
            height={30}
            src='/img/logo-white.png'
            alt='Natours logo'
          />
        </div>
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
          <Link href='/profile' passHref>
            <a className='nav__el'>
              <figure className='nav__user-img'>
                <Image
                  width={500}
                  height={500}
                  src={user?.photo}
                  alt={user.name}
                />
              </figure>
              <span>{user.name?.split(' ')[0]}</span>
            </a>
          </Link>
        </nav>
      ) : (
        <nav className='nav nav--user'>
          <Link href='/login'>
            <a className='nav__el'>Log in</a>
          </Link>
          <Link href='/signup'>
            <a className='nav__el nav__el--cta'>Sign up</a>
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
