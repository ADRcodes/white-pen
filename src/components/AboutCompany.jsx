import React, { useEffect, useRef, useState } from 'react';

const AboutCompany = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    });

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section ref={ref} className={`py-12 bg-text transition-opacity delay-500 duration-1000 text-background ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="section-container flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-center"><span className='italic'>The</span> White Pen Company</h2>
        <p className={`text-center lg:max-w-[50%] mt-4 transition-transform duration-1000 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
          We started The White Pen Company with a simple mission: to revolutionize the way people think about writing instruments. Our pens are not just tools; they're a bridge between tradition and innovation.
        </p>
      </div>
    </section>
  );
};

export default AboutCompany;
