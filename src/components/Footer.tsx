import { motion, useReducedMotion } from 'framer-motion';

const footerLinks = [
  { label: 'VISIONS', href: '#visions' },
  { label: 'RESEARCH & TECHNOLOGY', href: '#research' },
  { label: 'CAREERS', href: '#careers' },
  { label: 'PRESS', href: '#press' },
  { label: 'TERMS & CONDITIONS', href: '#terms' },
  { label: 'PRIVACY POLICY', href: '#privacy' },
  { label: 'ACCESSIBILITY STATEMENT', href: '#accessibility' },
];

function BrandSpinner() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.svg
      preserveAspectRatio="xMidYMid meet"
      data-bbox="20 20 159.999 160"
      viewBox="20 20 159.999 160"
      width="200"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
      data-type="color"
      role="img"
      aria-label="Homepage"
      className="h-40 w-40 md:h-48 md:w-48 text-[#DF7162]"
      style={{ transformOrigin: '50% 50%' }}
      animate={shouldReduceMotion ? undefined : { rotate: 360 }}
      transition={
        shouldReduceMotion
          ? undefined
          : {
              duration: 2.2,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'loop',
              repeatDelay: 1.0,
            }
      }
    >
      <g>
        <path
          fill="#df7162"
          d="m119.672 114.688-8.31-6.355V180l8.745-3.091c4.068-1.44 6.802-5.187 6.801-9.342l-.272-39.153c-.037-5.367-2.575-10.37-6.965-13.727Z"
          data-color="1"
        ></path>
        <path
          fill="#df7162"
          d="M40.253 155.067c1.85 1.464 4.135 2.236 6.448 2.281a10.83 10.83 0 0 0 5.431-1.329L87.53 136.22c4.853-2.718 8.125-7.317 8.976-12.623l1.613-10.044-65.04 35.833 7.176 5.681Z"
          data-color="1"
        ></path>
        <path
          fill="#df7162"
          d="M69.695 110.126a19.423 19.423 0 0 0 7.138-1.214l9.924-3.689-65.044-35.835-1.566 8.772c-.731 4.081 1.304 8.214 5.075 10.293l35.669 19.351a19.236 19.236 0 0 0 8.804 2.322Z"
          data-color="1"
        ></path>
        <path
          fill="#df7162"
          d="m80.328 85.31 8.31 6.355V20l-8.745 3.09c-4.068 1.439-6.802 5.187-6.801 9.341l.272 39.151c.037 5.367 2.575 10.371 6.965 13.728Z"
          data-color="1"
        ></path>
        <path
          fill="#df7162"
          d="M159.749 44.928h-.002c-3.34-2.644-8.106-3.03-11.879-.951l-35.398 19.8c-4.853 2.715-8.124 7.314-8.976 12.62l-1.613 10.046 65.043-35.834-7.176-5.681Z"
          data-color="1"
        ></path>
        <path
          fill="#df7162"
          d="m174.789 111.553-35.682-19.359a19.309 19.309 0 0 0-15.942-1.108l-9.924 3.689 65.044 35.836 1.567-8.773c.729-4.081-1.305-8.214-5.064-10.285Z"
          data-color="1"
        ></path>
      </g>
    </motion.svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row md:items-start md:justify-between">
        <div className="flex md:flex-1 md:justify-start">
          <BrandSpinner />
        </div>

        <nav className="md:flex-1">
          <ul className="space-y-2 text-sm tracking-wide text-black/80">
            {footerLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="hover:text-black transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:flex-1 md:text-right">
          <div className="space-y-1 text-sm tracking-wide text-black/80">
            <p className="uppercase">info@mysite.com</p>
            <p className="uppercase">tel: 123-456-7890</p>
            <p className="uppercase">500 terry francine st.</p>
            <p className="uppercase">sf, ca 94158</p>
          </div>

          <div className="mt-6 flex items-center gap-4 md:justify-end">
            <a
              href="#linkedin"
              aria-label="LinkedIn"
              className="text-black/70 hover:text-black transition-colors"
            >
              in
            </a>
            <a
              href="#facebook"
              aria-label="Facebook"
              className="text-black/70 hover:text-black transition-colors"
            >
              f
            </a>
            <a
              href="#x"
              aria-label="X"
              className="text-black/70 hover:text-black transition-colors"
            >
              x
            </a>
            <a
              href="#instagram"
              aria-label="Instagram"
              className="text-black/70 hover:text-black transition-colors"
            >
              ig
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
