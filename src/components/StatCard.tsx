import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
  bgColor: string;
  textColor?: string;
  labelColor?: string;
}

export default function StatCard({
  icon,
  value,
  label,
  bgColor,
  textColor = 'text-black',
  labelColor = 'text-black',
}: StatCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col">
      <div
        className={`${bgColor} rounded-2xl aspect-square flex flex-col justify-between p-6 relative transition-colors duration-700 ease-in-out`}
      >
        {/* Icon - top left */}
        <motion.div
          className="text-xl inline-flex w-fit"
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
          {icon}
        </motion.div>

        {/* Value - centered */}
        <div
          className={`text-6xl md:text-7xl lg:text-8xl font-light ${textColor} text-center transition-colors duration-700 ease-in-out`}
        >
          {value}
        </div>

        {/* Spacer for bottom */}
        <div />
      </div>

      {/* Label - below card */}
      <p className={`mt-4 text-base md:text-lg ${labelColor} transition-colors duration-700 ease-in-out`}>
        {label}
      </p>
    </div>
  );
}
