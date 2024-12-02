import React from 'react';
import { Button } from "@/components/ui/button";

const BlueArrow = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="10" fill="#2563EB"/>
    <path d="M8 6L12 10L8 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HeroSection = () => {
  return (
    <div style={{ backgroundColor: '#00053D', minHeight: '90vh', position: 'relative', overflow: 'hidden' }}>
      {/* Content Container */}
      <div style={{ paddingTop: '120px', paddingLeft: '64px' }}>
        {/* Left Content */}
        <div style={{ maxWidth: '600px', position: 'relative', zIndex: '10' }}>
          <p style={{ 
            color: '#94A3B8', 
            marginBottom: '12px',
            fontSize: '14px',
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}>
            BUSINESS CONSULTING
          </p>
          
          <h1 style={{ 
            color: 'white',
            fontSize: '56px',
            fontWeight: 'bold',
            marginBottom: '20px',
            lineHeight: '1.1'
          }}>
            Ultimate Solutions for<br/>
            Modern Businesses
          </h1>
          
          <p style={{
            color: '#94A3B8',
            fontSize: '18px',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci<br/>
            non rhoncus lobortis id neque...
          </p>

          {/* Features */}
          <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', gap: '64px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <BlueArrow />
                <span style={{ color: 'white' }}>Strategic excellence</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <BlueArrow />
                <span style={{ color: 'white' }}>Business consulting</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BlueArrow />
              <span style={{ color: 'white' }}>Innovation</span>
            </div>
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '24px' }}>
            <Button 
              style={{
                border: '2px solid #2563EB',
                color: '#2563EB',
                backgroundColor: 'transparent',
                padding: '12px 32px',
                fontSize: '16px',
                fontWeight: '500',
                borderRadius: '4px'
              }}
            >
              Button
            </Button>
            <Button 
              style={{
                backgroundColor: '#2563EB',
                color: 'white',
                padding: '12px 32px',
                fontSize: '16px',
                fontWeight: '500',
                borderRadius: '4px'
              }}
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>

      {/* Right Design Element */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '45%',
        height: '100%'
      }}>
        {/* White Shape */}
        <div style={{
          position: 'absolute',
          right: 0,
          height: '100%',
          width: '100%',
          backgroundColor: 'white',
          opacity: 0.1,
          transform: 'skew(-12deg) translateX(20%)'
        }}></div>
        
        {/* Blue Squares */}
        <div style={{
          position: 'absolute',
          right: '20%',
          top: '25%',
          width: '112px',
          height: '112px',
          backgroundColor: '#2563EB',
          transform: 'rotate(45deg)'
        }}></div>
        <div style={{
          position: 'absolute',
          right: '35%',
          top: '40%',
          width: '80px',
          height: '80px',
          backgroundColor: '#2563EB',
          transform: 'rotate(45deg)'
        }}></div>
        <div style={{
          position: 'absolute',
          right: '15%',
          top: '55%',
          width: '64px',
          height: '64px',
          backgroundColor: '#2563EB',
          transform: 'rotate(45deg)'
        }}></div>
      </div>

      {/* Stats Section */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        padding: '48px 64px'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px', textAlign: 'center' }}>
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
      </div>
    </div>
  );
};

export default HeroSection;