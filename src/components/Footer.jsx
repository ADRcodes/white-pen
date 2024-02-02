import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-text text-gray-400 pb-8 pt-3">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold">The White Pen Company</h3>
            <p className="mt-4">
              Revolutionizing the way you write with our exclusive range of white pens. Crafted for writers who value aesthetics and quality.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4">
              <li><a href="#!" className="hover:text-gray-400">Home</a></li>
              <li><a href="#!" className="hover:text-gray-400">About</a></li>
              <li><a href="#!" className="hover:text-gray-400">Products</a></li>
              <li><a href="#!" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="mt-4">
              {/* Add social media links/icons here */}
              <a href="#!" className="hover:text-gray-400">Facebook</a><br />
              <a href="#!" className="hover:text-gray-400">Instagram</a><br />
              <a href="#!" className="hover:text-gray-400">Twitter</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} The White Pen Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
