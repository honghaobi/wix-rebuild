interface PressCardProps {
  title: string;
  source: string;
  date: string;
  href?: string;
}

export default function PressCard({ title, source, date, href }: PressCardProps) {
  return (
    <article className="bg-[#D97969] rounded-3xl p-8 md:p-10 lg:p-12 flex flex-col justify-between text-white shadow-lg">
      <div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight mb-6">
          {title}
        </h3>
        <p className="text-black text-base md:text-lg font-normal mb-1">{source}</p>
        <p className="text-black text-base md:text-lg font-normal">{date}</p>
      </div>

      <div className="flex items-center gap-3 pt-8">
        <a
          href={href || '#'}
          className="text-sm md:text-base font-semibold tracking-wide text-black flex items-center gap-3"
        >
          <span>READ ARTICLE</span>
          <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 17L17 7M9 7h8v8"
              />
            </svg>
          </span>
        </a>
      </div>
    </article>
  );
}
