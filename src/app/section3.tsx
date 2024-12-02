'use client';
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: '#00053D',
          minHeight: '80vh',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            paddingTop: '120px',
            paddingLeft: '64px',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              maxWidth: '600px',
              zIndex: '10',
              marginBottom: '40px',
              padding: '0 16px',
              flex: '1 1 60%',
            }}
          >
            <p
              style={{
                color: '#94A3B8',
                marginBottom: '12px',
                fontSize: '14px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              BUSINESS CONSULTING
            </p>

            <h1
              style={{
                color: 'white',
                fontSize: '56px',
                fontWeight: 'bold',
                marginBottom: '20px',
                lineHeight: '1.1',
              }}
            >
              Progressive solutions <br />
              for progressive businesses.
            </h1>

            <p
              style={{
                color: '#94A3B8',
                fontSize: '18px',
                marginBottom: '40px',
                lineHeight: '1.6',
              }}
            >
              Sed lorem ut nulla tortor sit eget felis. Integer malesuada curabitur vel interdum leo justo at ultricies.
              Sit aliquet tempus elementum ac nibh lorem nulla morbi nullam. Tincidunt massa amet sagittis aliquam turpis
              volutpat. Vitae aliquam malesuada varius felis.
            </p>

            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <Button
                style={{
                  backgroundColor: '#2563EB',
                  color: 'white',
                  padding: '12px 32px',
                  fontSize: '16px',
                  fontWeight: '500',
                  borderRadius: '4px',
                }}
              >
                Learn more
              </Button>
            </div>
          </div>

          <div
            className="right-design-element"
            style={{
              flex: '1 1 40%',
              position: 'relative',
              padding: '0 16px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src="./Img (2).png"
              alt="Decorative Element"
              style={{
                maxWidth: '100%',
                height: 'auto',
                position: 'relative',
              }}
            />
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'white',
            padding: '48px 16px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '32px',
              textAlign: 'center',
            }}
          >
            {/* Stats content goes here */}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .right-design-element {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;