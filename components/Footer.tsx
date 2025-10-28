
import React from 'react';
import { TwitterIcon, InstagramIcon, FacebookIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-800 text-stone-300">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-stone-100 tracking-wider uppercase">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-stone-400 hover:text-white">New Arrivals</a></li>
              <li><a href="#" className="text-base text-stone-400 hover:text-white">Best Sellers</a></li>
              <li><a href="#" className="text-base text-stone-400 hover:text-white">All Products</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-stone-100 tracking-wider uppercase">About</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-stone-400 hover:text-white">Our Story</a></li>
              <li><a href="#" className="text-base text-stone-400 hover:text-white">Sustainability</a></li>
              <li><a href="#" className="text-base text-stone-400 hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-stone-100 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-stone-400 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-base text-stone-400 hover:text-white">Shipping</a></li>
              <li><a href="#" className="text-base text-stone-400 hover:text-white">Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-stone-100 tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-stone-400 hover:text-white">Email Us</a></li>
              <li><a href="#" className="text-base text-stone-400 hover:text-white">Find a Store</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-stone-700 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a href="#" className="text-stone-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <FacebookIcon />
            </a>
            <a href="#" className="text-stone-400 hover:text-white">
              <span className="sr-only">Instagram</span>
              <InstagramIcon />
            </a>
            <a href="#" className="text-stone-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <TwitterIcon />
            </a>
          </div>
          <p className="mt-8 text-base text-stone-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Chic Threads Boutique. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
