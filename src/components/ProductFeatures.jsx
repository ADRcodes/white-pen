import React from 'react';

// Paths to the images (replace with the correct paths after downloading the images)
const elegantDesignImage = 'src/assets/images/pen-design.png';
const premiumInkImage = 'src/assets/images/ink-design.png';
const ergonomicGripImage = 'src/assets/images/grip-design.png';

const FeatureCard = ({ title, description, imageUrl }) => {
  return (
    <div className="card text-center">
      <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
      <div className="card-body">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const ProductFeatures = () => {
  const features = [
    {
      title: 'Elegant Design',
      description: 'Sleek, minimalist design that stands out in simplicity and elegance.',
      imageUrl: elegantDesignImage
    },
    {
      title: 'Premium Ink',
      description: 'High-quality, long-lasting white ink for a smooth and consistent writing experience.',
      imageUrl: premiumInkImage
    },
    {
      title: 'Ergonomic Grip',
      description: 'Ergonomically designed for comfort and ease, perfect for long writing sessions.',
      imageUrl: ergonomicGripImage
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="section-container">
        <h2 className="text-3xl font-semibold text-center">Why The White Pen?</h2>
        <p className="text-center mt-4">Discover the unique features that make our pen a masterpiece of design and functionality.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
