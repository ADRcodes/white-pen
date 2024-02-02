import React from 'react';

// Paths to the profile images (replace with the actual paths after downloading the images)
const profileImage1 = '/testimonial1.png';
const profileImage2 = '/testimonial2.png';
const profileImage3 = '/testimonial3.png';

const TestimonialCard = ({ image, name, review }) => {
  return (
    <div className="card max-w-sm mx-auto">
      <img src={image} alt={name} className="w-16 h-16 rounded-full mx-auto mt-4" />
      <div className="card-body">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">{review}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      review: 'The White Pen is a game-changer! Its elegant design and smooth ink flow make it my go-to for all my writing needs.',
      image: profileImage1
    },
    {
      name: 'Jane Smith',
      review: 'I love this pen! It writes beautifully and looks so sleek. Absolutely worth every penny!',
      image: profileImage2
    },
    {
      name: 'Alex Johnson',
      review: 'As a designer, I appreciate the attention to detail in The White Pen. It’s not just a writing tool; it’s a piece of art.',
      image: profileImage3
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="section-container">
        <h2 className="text-3xl font-semibold text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
