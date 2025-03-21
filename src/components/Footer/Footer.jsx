import { useNavigate, useLocation } from 'react-router-dom';

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
    <footer className="bg-white text-[#182451] shadow-[0_-4px_8px_rgba(0,0,0,0.1)]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img
                src="https://fiberfluent.com/wp-content/uploads/2025/01/qtq_95-1.webp"
                className="h-16 me-3"
                alt="Fiber Fluent Logo"
              />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Pages</h2>
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
              <h2 className="mb-6 text-sm font-semibold uppercase">Sections</h2>
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
              <h2 className="mb-6 text-sm font-semibold uppercase">Contact</h2>
              <ul className="text-sm">
                <li className="mb-4">2423 SW 147th Ave, Suite 263</li>
                <li className="mb-4">Miami, FL 33185</li>
                <li className="mb-4">(001) 24568 365 987</li>
                <li className="mb-4">info@example.com</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm">© 2025 Fiber Fluent LLC. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
