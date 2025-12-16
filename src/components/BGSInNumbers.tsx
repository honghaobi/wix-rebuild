import StatCard from './StatCard';
import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    icon: <span className="text-yellow-200">✦</span>,
    value: '75',
    label: 'Employees',
    bgColor: 'bg-[#E07B6B]', // Coral/salmon
  },
  {
    icon: <span className="text-yellow-400">+</span>,
    value: '$100',
    label: 'In Investments',
    bgColor: 'bg-[#A8B4C4]', // Slate blue
  },
  {
    icon: <span className="text-gray-600">❝</span>,
    value: '224',
    label: 'Partners Worldwide',
    bgColor: 'bg-[#F7E96C]', // Yellow
  },
  {
    icon: <span className="text-gray-400">◆</span>,
    value: '15',
    label: 'Publications',
    bgColor: 'bg-[#5C6670]', // Dark gray
    textColor: 'text-white',
  },
  {
    icon: <span className="text-gray-500">●</span>,
    value: '25',
    label: 'Ongoing Research Programs',
    bgColor: 'bg-[#E8E8E8]', // Light gray
  },
];

export default function BGSInNumbers() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={[
        'py-16 md:py-24 transition-colors duration-700 ease-in-out',
        isInView ? 'bg-black text-white' : 'bg-white text-black',
      ].join(' ')}
    >
      <div className="px-8 md:px-16 lg:px-24">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-12 md:mb-16 transition-colors duration-700 ease-in-out">
          BGS in Numbers
        </h2>

        {/* Stats Grid */}
        <div className="flex flex-col items-center">
          {/* Top Row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mb-4">
            {stats.slice(0, 3).map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                bgColor={stat.bgColor}
                textColor={stat.textColor}
                labelColor={isInView ? 'text-white' : 'text-black'}
              />
            ))}
          </div>

          {/* Bottom Row - 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[calc(66.666%+0.5rem)] md:max-w-[calc(66.666%*0.75)]">
            {stats.slice(3).map((stat, index) => (
              <StatCard
                key={index + 3}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                bgColor={stat.bgColor}
                textColor={stat.textColor}
                labelColor={isInView ? 'text-white' : 'text-black'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
