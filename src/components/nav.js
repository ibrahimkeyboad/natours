import React from 'react';
import Link from 'next/link';
import { useLogUserQuery } from '../context/apiSlice';
function Nav() {
  const { data } = useLogUserQuery();
  const user = data?.user;
  console.log(user);
  return (
    <nav className='user-view__menu'>
      {user?.role === 'user' && (
        <ul className='side-nav'>
          <li>
            <Link href='/profile'>
              <svg>
                <use xlinkHref='/img/icons.svg#icon-settings'></use>
              </svg>
              Settings
            </Link>
          </li>

          <li>
            <Link href='/profile/bookings'>
              <svg>
                <use xlinkHref='/img/icons.svg#icon-briefcase'></use>
              </svg>
              My bookings
            </Link>
          </li>
          <li>
            <Link href='/profile/reviews'>
              <svg>
                <use xlinkHref='/img/icons.svg#icon-star'></use>
              </svg>
              My reviews
            </Link>
          </li>
          <li>
            <Link href='/profile/billing'>
              <svg>
                <use xlinkHref='/img/icons.svg#icon-credit-card'></use>
              </svg>
              Billing
            </Link>
          </li>
        </ul>
      )}
      {user?.role === 'admin' && (
        <div className='admin-nav'>
          <h5 className='admin-nav__heading'>Admin</h5>
          <ul className='side-nav'>
            <li>
              <Link href='/profile'>
                <svg>
                  <use xlinkHref='/img/icons.svg#icon-settings'></use>
                </svg>
                Settings
              </Link>
            </li>
            <li>
              <Link href='/profile/manage-tours'>
                <svg>
                  <use xlinkHref='/img/icons.svg#icon-map'></use>
                </svg>
                Manage tours
              </Link>
            </li>
            <li>
              <Link href='/profile/manage-users'>
                <svg>
                  <use xlinkHref='/img/icons.svg#icon-users'></use>
                </svg>
                Manage users
              </Link>
            </li>
            <li>
              <Link href='/profile/manage-reviews'>
                <svg>
                  <use xlinkHref='/img/icons.svg#icon-star'></use>
                </svg>
                Manage reviews
              </Link>
            </li>
            <li>
              <Link href='/profile/manage-bookings'>
                <svg>
                  <use xlinkHref='/img/icons.svg#icon-briefcase'></use>
                </svg>
                Manage Bookings
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
