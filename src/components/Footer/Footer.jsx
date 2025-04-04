import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo1.png'

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (e, path, targetId = null) => {
    e.preventDefault();

    const isSamePage = location.pathname === path;

    if (!isSamePage) {
      navigate(path);
    }

    requestAnimationFrame(() => {
      if (targetId) {
        const section = document.getElementById(targetId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  };

  return (
    <footer className="bg-[#FF6600] text-white shadow-[0_-6px_20px_rgba(0,0,0,0.3)]">
      <div className="mx-auto w-full max-w-screen-xl pb-1 pt-4">
        <div className="md:flex md:justify-between">
          <div className="mb-4 md:mb-0">
            <a href="/" className="flex items-center">
              <img
                src={Logo}
                className="h-16 me-3"
                alt="Fiber Fluent Logo"
              />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:grid-cols-4">
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase ">Pages</h2>
              <ul className="text-sm">
                <li className="mb-4">
                  <a href="/" className="hover:underline" onClick={(e) => handleScroll(e, '/')}>Home</a>
                </li>
                <li className="mb-4">
                  <a href="/about-us" className="hover:underline" onClick={(e) => handleScroll(e, '/about-us')}>About Us</a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline" onClick={(e) => handleScroll(e, '/contact')}>Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase">Sections</h2>
              <ul className="text-sm">
                <li className="mb-4">
                  <a href="/#services" className="hover:underline" onClick={(e) => handleScroll(e, '/', 'services')}>Services</a>
                </li>
                <li className="mb-4">
                  <a href="/#installation" className="hover:underline" onClick={(e) => handleScroll(e, '/', 'installation')}>Installation</a>
                </li>
                <li>
                  <a href="/#night_work" className="hover:underline" onClick={(e) => handleScroll(e, '/', 'night_work')}>Night Work</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase">Contact</h2>
              <ul className="text-sm">
                <li className="mb-4">2423 SW 147th Ave, Suite 263</li>
                <li className="mb-4">Miami, FL 33175</li>
                <li className="mb-4">305-204-8040</li>
                <li className="mb-4">info@fiberfluent.com</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-1 border-gray-300" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm">© 2025 Fiber Fluent LLC. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
