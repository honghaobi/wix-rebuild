import JobPosting from './JobPosting';

const jobOpenings = [
  {
    title: 'Senior Project Manager',
    location: 'San Francisco, CA',
  },
  {
    title: 'Associate Director, Drug Delivery',
    location: 'San Francisco, CA',
  },
  {
    title: 'Data Scientist, IT',
    location: 'San Francisco, CA',
  },
];

export default function JoinOurTeam() {
  return (
    <section id="careers" className="bg-black py-16 md:py-24">
      <div className="px-8 md:px-16 lg:px-24">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
            Join Our Team
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-400 max-w-4xl leading-relaxed">
            We're looking for highly-motivated and talented people to join our innovative team. Submit your application today to join the BGS journey!
          </p>
        </div>

        {/* Job Listings */}
        <div className="mt-16 md:mt-24">
          {jobOpenings.map((job, index) => (
            <JobPosting
              key={index}
              title={job.title}
              location={job.location}
              onApply={() => console.log(`Applied to ${job.title}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
