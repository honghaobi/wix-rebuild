import microscopeImage from '../assets/images/microscope.jpg';
import bloodCellsImage from '../assets/images/blood-cells.jpg';

export default function Vision() {
  return (
    <section id="visions" className="bg-white py-16 md:py-24">
      {/* Top Content Area - 3 column grid: 1-1-1 */}
      <div className="px-8 md:px-16 lg:px-24 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Heading - first column */}
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-black leading-tight">
              We Are
              <br />
              Visionaries
            </h2>
          </div>

          {/* First text - second column */}
          <div>
            <p className="text-base md:text-lg text-black leading-relaxed">
              Transforming the future of health care with our innovative genetic engineering technology.
            </p>
          </div>

          {/* Second text - third column */}
          <div>
            <p className="text-base md:text-lg text-black leading-relaxed">
              This is the space to introduce visitors to the business or brand. Briefly explain who's behind it, what it does and what makes it unique. Share its core values and what this site has to offer.
            </p>
          </div>
        </div>
      </div>

      {/* Images - First image 6 cols, second image 3 cols with gap */}
      <div className="grid grid-cols-12 gap-1">
        <div className="col-span-6">
          <img
            src={microscopeImage}
            alt="Laboratory microscope with petri dish"
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          />
        </div>
        <div className="col-span-3">
          <img
            src={bloodCellsImage}
            alt="Microscopic view of blood cells"
            className="w-full aspect-square object-cover"
          />
        </div>
      </div>
    </section>
  );
}
