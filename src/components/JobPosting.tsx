import { motion } from 'framer-motion';

interface JobPostingProps {
  title: string;
  location: string;
  onApply?: () => void;
}

export default function JobPosting({ title, location, onApply }: JobPostingProps) {
  return (
    <motion.div
      className="border-b border-gray-700 py-8 will-change-transform"
      whileHover={{ x: -12 }}
      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Job Title */}
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-white flex-1">
          {title}
        </h3>

        {/* Location */}
        <p className="text-sm md:text-base text-gray-300 md:w-48">
          {location}
        </p>

        {/* Apply Button */}
        <button
          onClick={onApply}
          className="flex items-center gap-2 px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors w-fit"
        >
          <span className="text-sm font-medium">APPLY</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
