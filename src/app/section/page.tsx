import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: "./image copy 4.png",
    title: "Marketing Strategy",
    description: "Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non rhoncus lobortis",
    bgColor: "bg-white hover:bg-[#1a1b3f] hover:text-white"
  },
  {
    icon: "./abstract-shape(2).png",
    title: "Financial management",
    description: "Sed lorem ut nulla tortor sit eget felis.Sit aliquet elementum ac nibh lorem nulla",
    bgColor: "bg-white hover:bg-[#1a1b3f] hover:text-white"
  },
  {
    icon: "./marble 2.png",
    title: "Business Strategy",
    description: "Vitae aliquam malesuada varius felis. Risus aliquam consequat habitant",
    bgColor: "bg-white hover:bg-[#1a1b3f] hover:text-white"
  },
  {
    icon: "./abstract(3) 2.png",
    title: "Sales and Marketing",
    description: "Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non rhoncus lobortis id neque",
    bgColor: "bg-white hover:bg-[#1a1b3f] hover:text-white"
  },
  {
    icon: "./abstract(1).png",
    title: "Digital Technology",
    description: "Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non rhoncus lobortis id neque",
    bgColor: "bg-white hover:bg-[#1a1b3f] hover:text-white"
  },
  {
    icon: "./img.png",
    title: "Human Resources",
    description: "Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non rhoncus lobortis id neque",
    bgColor: "bg-white hover:bg-[#1a1b3f] hover:text-white"
  }
];

const BusinessServices = () => {
  return (
    <section className="py-8 md:py-16 px-4 md:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-8 md:mb-12">
          <div className="max-w-xl">
            <h6 className="text-sm uppercase tracking-wider text-gray-600 mb-2 text-center lg:text-left">
              BUSINESS CONSULTING
            </h6>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center lg:text-left">
              What services do we offer for your business
            </h2>
          </div>
          <div className="flex flex-col items-center lg:items-end">
            <p className="text-gray-500 max-w-md text-center lg:text-right mb-2">
              Sit aliquet tempus elementum ac nibh lorem nulla morbi nullam. Tincidunt massa amet sagittis aliquam turpis volutpat. Vitae aliquam malesuada varius felis...
            </p>
            <Button 
              variant="link" 
              className="text-[#2563EB] hover:text-blue-700"
            >
              All services
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4 md:px-8 lg:px-[188px]">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`${service.bgColor} border-none shadow-md hover:shadow-lg transition-shadow duration-300 max-w-sm lg:w-[219px] rounded-none mx-auto`}
            >
              <CardContent className="p-6">
                <div className="mb-4 w-10 h-10 relative">
                  <img
                    src={service.icon}
                    alt={`${service.title} icon`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg lg:text-base font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-sm mb-4 text-gray-600">
                  {service.description}
                </p>
                <Button 
                  variant="default"
                  className="bg-[#2563EB] hover:bg-blue-700 text-white w-full lg:w-auto px-4 py-2 text-sm"
                >
                  Details →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-white p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <h3 className="text-3xl md:text-4xl font-bold text-[#00053D] mb-2">10k+</h3>
              <p className="text-gray-500">Supported businesses</p>
            </div>
            <div className="p-4">
              <h3 className="text-3xl md:text-4xl font-bold text-[#00053D] mb-2">12k+</h3>
              <p className="text-gray-500">Projects done</p>
            </div>
            <div className="p-4">
              <h3 className="text-3xl md:text-4xl font-bold text-[#00053D] mb-2">4k+</h3>
              <p className="text-gray-500">Clients worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessServices;