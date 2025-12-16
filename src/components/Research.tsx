import cellsPinkImage from '../assets/images/cells-pink.jpg';
import pipettesImage from '../assets/images/pipettes.jpg';
import cellCulturesImage from '../assets/images/cell-cultures.jpg';
import labEquipmentImage from '../assets/images/lab-equipment.jpg';
import ResearchCard from './ResearchCard';
import { useEffect, useRef } from 'react';

const researchAreas = [
  {
    number: 1,
    title: 'Gene Therapy',
    projectCount: 12,
    description:
      'Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust. Focus on what makes the business unique and how users can benefit from choosing it.',
    image: pipettesImage,
    imageAlt: 'Laboratory pipettes',
  },
  {
    number: 2,
    title: 'Oncology',
    projectCount: 5,
    description:
      'Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust. Focus on what makes the business unique and how users can benefit from choosing it.',
    image: cellCulturesImage,
    imageAlt: 'Cell cultures',
  },
  {
    number: 3,
    title: 'Drug Discovery & Delivery',
    projectCount: 8,
    description:
      'Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust. Focus on what makes the business unique and how users can benefit from choosing it.',
    image: labEquipmentImage,
    imageAlt: 'Laboratory equipment',
  },
];

export default function Research() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const bgEl = bgRef.current;
    if (!sectionEl || !bgEl) return;

    const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    let rafId: number | null = null;

    const applyMask = () => {
      rafId = null;

      const rect = sectionEl.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      // Start later (closer to entry), but finish at the *end* of the section.
      // progress 0 when section top reaches `startTopInViewport`
      // progress 1 when section bottom reaches the bottom of the viewport (end of section)
      const startTopInViewport = vh * 0.85;

      const scrollY = window.scrollY || window.pageYOffset || 0;
      const sectionTopY = rect.top + scrollY;
      const sectionBottomY = sectionTopY + rect.height;

      const startY = sectionTopY - startTopInViewport;
      const endY = sectionBottomY - vh;
      const denom = Math.max(1, endY - startY);

      const rawProgress = (scrollY - startY) / denom;
      const progress = clamp01(rawProgress);
      const eased = easeOutCubic(progress);

      const w = bgEl.clientWidth;
      const h = bgEl.clientHeight;
      const maxR = Math.hypot(w / 2, h / 2);
      const r = Math.max(0, maxR * eased);
      const r2 = r + 1;

      const mask = `radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 0px, rgba(0,0,0,1) ${r}px, rgba(0,0,0,0) ${r2}px, rgba(0,0,0,0) 100%)`;

      bgEl.style.webkitMaskImage = mask;
      bgEl.style.maskImage = mask;
    };

    const requestApply = () => {
      if (rafId != null) return;
      rafId = window.requestAnimationFrame(applyMask);
    };

    applyMask();
    window.addEventListener('scroll', requestApply, { passive: true });
    window.addEventListener('resize', requestApply);

    return () => {
      if (rafId != null) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', requestApply);
      window.removeEventListener('resize', requestApply);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="research"
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          willChange: 'mask-image',
        }}
      >
        <img
          src={cellsPinkImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24">
        {/* Header */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-4">
            Research & Technology
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-600 max-w-3xl italic">
            We leverage machine learning technology to ensure precise data analysis and research.
          </p>
        </div>

        {/* Research Cards */}
        <div className="space-y-6 md:space-y-8">
          {researchAreas.map((area) => (
            <ResearchCard key={area.number} {...area} />
          ))}
        </div>
      </div>
    </section>
  );
}
