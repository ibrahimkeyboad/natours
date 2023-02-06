const { default: Image } = require('next/image');
const { default: Link } = require('next/link');

function Footer() {
  return (
    <footer className='footer'>
      <Link href='/'>
        <a className='footer__logo'>
          <Image
            height={30}
            width={150}
            src='/img/logo-green.png'
            alt='Nahrefurs logo'
          />
        </a>
      </Link>
      <ul className='footer__nav'>
        <li>
          <Link href='#'>About us</Link>
        </li>
        <li>
          <Link href='#'>Download apps</Link>
        </li>
        <li>
          <Link href='#'>Become a guide</Link>
        </li>
        <li>
          <Link href='#'>Careers</Link>
        </li>
        <li>
          <Link href='#'>Contact</Link>
        </li>
      </ul>
      <p className='footer__copyright'>&copy; All rights reserved.</p>
    </footer>
  );
}

export default Footer;
