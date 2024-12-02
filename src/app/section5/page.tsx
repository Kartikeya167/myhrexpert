import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const NewsSection = () => {
  const newsItems = [
    {
      date: "25.01.24",
      category: "Business consulting",
      title: "Building business agility begins with culture",
      image: "./image copy.png",
      link: "#"
    },
    {
      date: "25.01.24",
      category: "Business consulting",
      title: "Strategies to protect your profits",
      image: "./image copy 2.png",
      link: "#"
    },
    {
      date: "25.01.24",
      category: "Business consulting",
      title: "We Bring Flexibility & Cost Efficiency",
      image: "./image copy 3.png",
      link: "#"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-12">
          <div className="text-sm text-gray-600 uppercase mb-2">
            Business Consulting
          </div>
          <h2 className="text-4xl font-bold text-navy-900">
            Latest news
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {newsItems.map((item, index) => (
            <Card key={index} className="overflow-hidden bg-white rounded-none" style={{ width: '100%' }}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover"
                style={{ height: '16rem' }}
              />
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <span>{item.date}</span>
                  <span className="mx-2">/</span>
                  <span>{item.category}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-navy-900">
                  {item.title}
                </h3>
                <a
                  href={item.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;