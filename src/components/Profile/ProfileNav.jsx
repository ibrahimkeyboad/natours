import { IoBriefcase, IoMap, IoSettingsOutline, IoStar } from 'react-icons/io5';
import { HiCreditCard, HiUser } from 'react-icons/hi';
import Link from 'next/link';
import { useRouter } from 'next/router';

function ProfileNav({ role }) {
  const { asPath } = useRouter();

  return (
    <nav className='user-view__menu'>
      {!role === 'admin' ? (
        <ul className='side-nav'>
          <li>
            <Link
              className={`${asPath === '/profile' ? 'active' : ''}`}
              href='/profile'>
              <IoSettingsOutline />
              Settings
            </Link>
          </li>
          <li>
            <Link
              className={`${asPath === '/profile/bookings' ? 'active' : ''}`}
              href='/profile/bookings'>
              <IoBriefcase />
              My bookings
            </Link>
          </li>
          <li>
            <Link
              className={`${asPath === '/profile/reviews' ? 'active' : ''}`}
              href='/profile/reviews'>
              <IoStar />
              My reviews
            </Link>
          </li>
          <li>
            <Link
              className={`${asPath === '/profile/billings' ? 'active' : ''}`}
              href='/profile/billings'>
              <HiCreditCard />
              Billing
            </Link>
          </li>
        </ul>
      ) : (
        <div className='admin-nav'>
          <h5 className='admin-nav__heading'>Admin</h5>
          <ul className='side-nav'>
            <li className='side-nav '>
              <Link
                className={`${asPath === '/profile' ? 'active' : ''}`}
                href='/profile'>
                <IoSettingsOutline />
                Settings
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  asPath === '/profile/admin/tour' ? 'active' : ''
                }`}
                href='/profile/admin/tour'>
                <IoMap />| Manage tours
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  asPath === '/profile/admin/user' ? 'active' : ''
                }`}
                href='/profile/admin/user'>
                <HiUser />| Manage users
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  asPath === '/profile/admin/review' ? 'active' : ''
                }`}
                href='/profile/admin/review'>
                <IoStar />| Manage reviews
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default ProfileNav;
