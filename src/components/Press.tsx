import PressCard from './PressCard';

const articles = [
  {
    title: 'BGS appoints Andrew Kim as Board Director',
    source: 'AGIAI Science Journal',
    date: 'November 2035',
  },
  {
    title: 'Therapeutics Giant Announces Collaboration With San Francisco\'s BGS',
    source: 'Biotech Frontier Review',
    date: 'May 2035',
  },
  {
    title: 'There\'s a New Kid in Town, Changing the Face of Genetic Engineering.',
    source: 'IBRM Magazine',
    date: 'March 2035',
  },
];

export default function Press() {
  return (
    <section id="press" className="bg-black py-16 md:py-24">
      <div className="px-8 md:px-16 lg:px-24">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-12 md:mb-16">
          Press
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article, index) => (
            <PressCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}
