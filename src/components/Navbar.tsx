import { useState } from 'react';

const navItems = [
  { label: 'VISIONS', href: '#visions' },
  { label: 'RESEARCH & TECHNOLOGY', href: '#research' },
  { label: 'CAREERS', href: '#careers' },
  { label: 'PRESS', href: '#press' },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('VISIONS');

  function scrollToSection(hash: string) {
    const id = hash.startsWith('#') ? hash.slice(1) : hash;
    if (!id) return false;

    const el = document.getElementById(id);
    if (!el) return false;

    // Offset for fixed navbar so section headings aren't hidden.
    const NAV_OFFSET_PX = 96;
    const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET_PX;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    return true;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4">
      <div className="flex items-center gap-6 px-6 py-3 bg-white/70 backdrop-blur-md rounded-full shadow-lg">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 mr-4">
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8"
            fill="currentColor"
          >
            <path d="M12 2L12 10M12 14L12 22M2 12L10 12M14 12L22 12M4.93 4.93L10.59 10.59M13.41 13.41L19.07 19.07M4.93 19.07L10.59 13.41M13.41 10.59L19.07 4.93" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  fill="none"
            />
          </svg>
          <span className="text-lg font-semibold tracking-wide">BGS</span>
        </a>

        {/* Nav Items */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                setActiveItem(item.label);
                const didScroll = scrollToSection(item.href);
                if (didScroll) e.preventDefault();
              }}
              className={`px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200 rounded-full ${
                activeItem === item.label
                  ? 'bg-gray-200/80 text-black'
                  : 'text-black/80 hover:bg-gray-100/50'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Subscribe Button */}
        <a
          href="#subscribe"
          onClick={(e) => {
            const didScroll = scrollToSection('#subscribe');
            if (didScroll) e.preventDefault();
          }}
          className="ml-4 px-6 py-2 bg-black text-white text-sm font-medium tracking-wide rounded-full hover:bg-gray-800 transition-colors"
        >
          SUBSCRIBE
        </a>
      </div>
    </nav>
  );
}
