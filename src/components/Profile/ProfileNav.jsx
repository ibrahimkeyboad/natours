import { IoBriefcase, IoMap, IoSettingsOutline, IoStar } from 'react-icons/io5';
import { HiCreditCard, HiUser } from 'react-icons/hi';
import Link from 'next/link';

function ProfileNav() {
  return (
    <nav className='user-view__menu'>
      <ul className='side-nav'>
        <li className='side-nav '>
          <Link className='active' href='/profile'>
            <IoSettingsOutline />
            Settings
          </Link>
        </li>
        <li>
          <Link href='/profile/bookings'>
            <IoBriefcase />
            My bookings
          </Link>
        </li>
        <li>
          <Link href='/profile/reviews'>
            <IoStar />
            My reviews
          </Link>
        </li>
        <li>
          <Link href='/profile/billings'>
            <HiCreditCard />
            Billing
          </Link>
        </li>
      </ul>
      <div className='admin-nav'>
        <h5 className='admin-nav__heading'>Admin</h5>
        <ul className='side-nav'>
          <li>
            <Link href='#'>
              <IoMap />| Manage tours
            </Link>
          </li>
          <li>
            <Link href='#'>
              <HiUser />| Manage users
            </Link>
          </li>
          <li>
            <Link href='#'>
              <IoStar />| Manage reviews
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default ProfileNav;
