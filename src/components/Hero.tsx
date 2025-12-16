import heroImage from '../assets/images/hero-lab.jpg';
import { useEffect, useRef } from 'react';

export default function Hero() {
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
      // 0 when hero top is at viewport top, 1 when hero is fully scrolled away
      const rawProgress = -rect.top / Math.max(1, rect.height);
      const progress = clamp01(rawProgress);
      const eased = easeOutCubic(progress);

      const w = bgEl.clientWidth;
      const h = bgEl.clientHeight;
      const maxR = Math.hypot(w / 2, h / 2); // covers all corners from center
      const r = Math.max(0, maxR * (1 - eased));
      const r2 = r + 1; // thin feather to avoid aliasing edge

      const mask = `radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 0px, rgba(0,0,0,1) ${r}px, rgba(0,0,0,0) ${r2}px, rgba(0,0,0,0) 100%)`;

      // Apply to the whole background layer (image + overlay)
      bgEl.style.webkitMaskImage = mask;
      bgEl.style.maskImage = mask;
    };

    const requestApply = () => {
      if (rafId != null) return;
      rafId = window.requestAnimationFrame(applyMask);
    };

    // Initial + listeners
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
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
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
          src={heroImage}
          alt="Laboratory research"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end px-8 md:px-16 lg:px-24 pb-16 md:pb-24">
        {/* Main Heading - Bottom Left */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight max-w-4xl">
          Pioneering Genetic
          <br />
          Engineering
        </h1>

        {/* Subheading - Bottom Right */}
        <div className="absolute bottom-16 md:bottom-24 right-8 md:right-16 lg:right-24 text-right">
          <p className="text-lg md:text-xl font-medium text-white">
            Discover Our Cutting-Edge
            <br />
            AI-Driven Technology
          </p>
        </div>
      </div>
    </section>
  );
}
