import React from 'react';
import './styles.css';

const Business = () => {
  const sectors = [
    {
      title: "Real Estate",
      image: "./blurimg.png", // Replace with your actual image paths
      alt: "Real Estate Sector"
    },
    {
      title: "Agriculture",
      image: "./image2.png",
      alt: "Agriculture Sector"
    },
    {
      title: "Travel",
      image: "./image3.png",
      alt: "Travel Sector"
    },
    {
      title: "Automotive",
      image: "./image4.png",
      alt: "Automotive Sector"
    },
    {
      title: "Financial Services",
      image: "./image5.png",
      alt: "Financial Services Sector"
    },
    {
      title: "Construction",
      image: "./image6.png",
      alt: "Construction Sector"
    },
    {
      title: "Retail",
      image: "./image7.png",
      alt: "Retail Sector"
    },
    {
      title: "Logistic",
      image: "./image8.png",
      alt: "Logistic Sector"
    }
  ];

  return (
    <>
      <div className="business-info">
        <p className="InfoOne">
          <span>BUSINESS CONSULTING</span>
          <br />
          <span>What sectors of the economy do we serve</span>
        </p>
        <p>
          <img src="./image.png" alt="Business Icon" className="BussIcon" />
          <span>
            Sed lorem ut nulla tortor sit eget felis. Integer malesuada curabitur vel interdum leo justo at ultricies. Tincidunt massa amet sagittis aliquam turpis volutpat.
          </span>
        </p>
      </div>
      <div className="business-gallery">
        {sectors.map((sector, index) => (
          <div key={index} className="box">
            <img src={sector.image} alt={sector.alt} />
            <div className="box-text">{sector.title}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Business;