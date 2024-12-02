import React from 'react';

const TestimonialSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      <div className="bg-white rounded-lg shadow-lg p-12 flex flex-col md:flex-row gap-12 items-start relative">
        {/* Left side - Image */}
        <div className="w-full md:w-96 h-96 bg-blue-600 rounded-lg flex-shrink-0 overflow-hidden">
          {/* Custom image */}
          <img
            src="./Img (3).png" // Replace with your image path
            alt="Testimonial"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side - Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-8 text-navy-900">Testimonials</h2>
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non rhoncus lobortis id neque. Sed lorem ut nulla tortor sit eget felis. Integer malesuada curabitur vel interdum leo justo at ultricies. Sit aliquet tempus elementum ac nibh lorem nulla morb...
          </p>
          
          <div className="mt-4">
            <h3 className="font-medium text-xl">Lorene Hudson</h3>
            <p className="text-gray-500">CEO / Ritchie Group</p>
          </div>
        </div>

        {/* Quote mark - now positioned inside the box */}
        <div className="absolute bottom-12 right-12">
          <span className="text-6xl font-serif text-navy-900">"</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
