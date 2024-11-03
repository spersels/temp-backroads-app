import { navLinks } from '../data/navlinks';
import { social_links } from '../data/social_links';
const Footer = () => {
  const copyright = new Date().getFullYear();
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {navLinks.map(({ id, href, text }) => {
          return (
            <li key={id}>
              <a href={href} className='footer-link'>
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='footer-icons'>
        {social_links.map(({ id, href, icon }) => {
          return (
            <li key={id}>
              <a
                href={href}
                target='_blank'
                rel='noreferrer'
                className='nav-icon'
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{copyright}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
