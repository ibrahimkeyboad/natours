import Image from 'next/image';
import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/router';

function Header() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  console.log(session);

  // se = 'no';
  function logoutHandler() {
    signOut();
    router.push('/');
  }
  return (
    <header className='header'>
      <nav className='nav nav--tours'>
        <Link href='/'>
          <Image
            width={400}
            height={400}
            src='/imgs/logo-white.png'
            alt='Natours logo'
            className={`header__logo ${
              loading ? 'blur-2xl grayscale' : 'blur-0 grayscale-0'
            }`}
            onLoadingComplete={() => setLoading(false)}
          />
        </Link>
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
      {session ? (
        <nav className='nav nav--user'>
          <button onClick={logoutHandler} className='nav__el nav__el--logout'>
            Log out
          </button>
          <Link className='nav__el' href='/profile' passHref>
            <figure className='nav__user-img'>
              <Image
                width={500}
                height={500}
                src={session?.user?.image}
                alt={session?.user?.name}
                className={` ${
                  loading ? 'blur-2xl grayscale' : 'blur-0 grayscale-0'
                }`}
                onLoadingComplete={() => setLoading(false)}
              />
            </figure>
            <span>{session.user?.name?.split(' ')[0]}</span>
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
