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
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex justify-between items-start">
          <div className="max-w-xl">
            <h6 className="text-sm uppercase tracking-wider text-gray-600 mb-2">
              BUSINESS CONSULTING
            </h6>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What services do we offer for your business
            </h2>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-gray-500 max-w-md text-right mb-2">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`${service.bgColor} border-none shadow-md hover:shadow-lg transition-shadow duration-300 rounded-none`}
            >
              <CardContent className={`p-6`}>
                <div className="mb-4 w-10 h-10 relative">
                  <img
                    src={service.icon}
                    alt={`${service.title} icon`}
                    className={`w-full h-full object-contain`}
                  />
                </div>
                <h3 className={`text-base font-semibold mb-2`}>
                  {service.title}
                </h3>
                <p className={`mb-4 text-sm`}>
                  {service.description}
                </p>
                <Button 
                  variant="default"
                  className={`bg-[#2563EB] hover:bg-blue-700 text-white px-4 py-2 text-sm`}
                >
                  Details →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px', textAlign: 'center', margin: '0 auto', marginTop: '32px', backgroundColor: 'white', padding: '24px' }}>
          <div>
            <h3 style={{ fontSize: '36px', fontWeight: 'bold', color: '#00053D', marginBottom: '8px' }}>10k+</h3>
            <p style={{ color: '#64748B' }}>Supported businesses</p>
          </div>
          <div>
            <h3 style={{ fontSize: '36px', fontWeight: 'bold', color: '#00053D', marginBottom: '8px' }}>12k+</h3>
            <p style={{ color: '#64748B' }}>Projects done</p>
          </div>
          <div>
            <h3 style={{ fontSize: '36px', fontWeight: 'bold', color: '#00053D', marginBottom: '8px' }}>4k+</h3>
            <p style={{ color: '#64748B' }}>Clients worldwide</p>
          </div>
      </div>
      
    </section>
  );
};

export default BusinessServices;