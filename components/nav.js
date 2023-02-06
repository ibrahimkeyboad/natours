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
              <a>
                <svg>
                  <use xlinkHref='/img/icons.svg#icon-settings'></use>
                </svg>
                Settings
              </a>
            </Link>
          </li>

          <li>
            <Link href='/profile/bookings'>
              <a>
                <svg>
                  <use xlinkHref='/img/icons.svg#icon-briefcase'></use>
                </svg>
                My bookings
              </a>
            </Link>
          </li>
          <li>
            <Link href='/profile/reviews'>
              <a>
                <svg>
                  <use xlinkHref='/img/icons.svg#icon-star'></use>
                </svg>
                My reviews
              </a>
            </Link>
          </li>
          <li>
            <Link href='/profile/billing'>
              <a>
                <svg>
                  <use xlinkHref='/img/icons.svg#icon-credit-card'></use>
                </svg>
                Billing
              </a>
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
                <a>
                  <svg>
                    <use xlinkHref='/img/icons.svg#icon-settings'></use>
                  </svg>
                  Settings
                </a>
              </Link>
            </li>
            <li>
              <Link href='/profile/manage-tours'>
                <a>
                  <svg>
                    <use xlinkHref='/img/icons.svg#icon-map'></use>
                  </svg>
                  Manage tours
                </a>
              </Link>
            </li>
            <li>
              <Link href='/profile/manage-users'>
                <a>
                  <svg>
                    <use xlinkHref='/img/icons.svg#icon-users'></use>
                  </svg>
                  Manage users
                </a>
              </Link>
            </li>
            <li>
              <Link href='/profile/manage-reviews'>
                <a>
                  <svg>
                    <use xlinkHref='/img/icons.svg#icon-star'></use>
                  </svg>
                  Manage reviews
                </a>
              </Link>
            </li>
            <li>
              <Link href='/profile/manage-bookings'>
                <a>
                  <svg>
                    <use xlinkHref='/img/icons.svg#icon-briefcase'></use>
                  </svg>
                  Manage Bookings
                </a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
