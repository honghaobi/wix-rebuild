import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ResearchCardProps {
  number: number;
  title: string;
  projectCount: number;
  description: string;
  image: string;
  imageAlt: string;
}

export default function ResearchCard({
  number,
  title,
  projectCount,
  description,
  image,
  imageAlt,
}: ResearchCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={isInView ? "in" : "out"}
      variants={{
        in: {
          rotateX: 0,
          opacity: 1,
          transformPerspective: 1200,
          transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        },
        out: {
          rotateX: 90,
          opacity: 0,
          transformPerspective: 1200,
          transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      style={{
        transformOrigin: "center center",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        willChange: "transform, opacity",
      }}
      className="relative flex items-stretch"
    >
      {/* Number on the left */}
      <div className="shrink-0 w-20 flex items-center justify-center">
        <span className="text-6xl md:text-7xl lg:text-8xl font-light text-black/20">
          {number}
        </span>
      </div>

      {/* White Card */}
      <div className="flex-1 bg-white rounded-3xl overflow-hidden flex">
        {/* Content */}
        <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-black mb-8 md:mb-12">
            {title}
          </h3>

          {/* Divider */}
          <div className="w-full h-px bg-gray-300 mb-6" />

          {/* Project Count */}
          <p className="text-xs md:text-sm font-medium tracking-widest text-black mb-4">
            {projectCount} ONGOING RESEARCH PROJECTS
          </p>

          {/* Description */}
          <p className="text-sm md:text-base text-black leading-relaxed">
            {description}
          </p>
        </div>

        {/* Image */}
        <div className="hidden md:block w-1/3 shrink-0">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}
