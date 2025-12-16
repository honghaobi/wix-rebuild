import ceoImage from '../assets/images/ceo.jpg';

export default function WhatWeStandFor() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="px-8 md:px-16 lg:px-24">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-2">
            What We Stand For
          </h2>
          <p className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-400">
            Innovation, Health, Humanity.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left side - Quote and Name */}
          <div className="flex flex-col justify-end">
            {/* Quote - positioned at top right of left column */}
            <div className="lg:ml-auto lg:max-w-md mb-12 md:mb-16 lg:mb-24">
              <p className="text-base md:text-lg text-black leading-relaxed">
                Use this space to share a testimonial quote about the business, its products or its services. Insert a quote from a real customer or client here to build trust and win over site visitors.
              </p>
            </div>

            {/* Name and Title - bottom right of left column */}
            <div className="lg:ml-auto text-right">
              <p className="text-lg md:text-xl font-medium text-black">
                Megan Brown
              </p>
              <p className="text-base md:text-lg text-gray-600">
                CEO and Co-Founder of BGS
              </p>
            </div>
          </div>

          {/* Right side - CEO Image */}
          <div>
            <img
              src={ceoImage}
              alt="Megan Brown, CEO and Co-Founder of BGS"
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
