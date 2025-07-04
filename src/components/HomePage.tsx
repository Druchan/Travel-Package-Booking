import React, { useState } from 'react';
import { travelPackages } from '../data/packages';
import PackageCard from './PackageCard';
import SearchBar from './SearchBar';
import { Plane, MapPin, Users, Award } from 'lucide-react';

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  // Filter packages based on search and price
  const filteredPackages = travelPackages.filter(pkg => {
    const matchesSearch = pkg.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pkg.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesPrice = true;
    if (priceFilter) {
      if (priceFilter === '0-2000') {
        matchesPrice = pkg.price < 2000;
      } else if (priceFilter === '2000-3000') {
        matchesPrice = pkg.price >= 2000 && pkg.price < 3000;
      } else if (priceFilter === '3000-4000') {
        matchesPrice = pkg.price >= 3000 && pkg.price < 4000;
      } else if (priceFilter === '4000+') {
        matchesPrice = pkg.price >= 4000;
      }
    }
    
    return matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div 
          className="absolute inset-0 bg-black opacity-40"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1200)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Your Next Adventure
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Explore the world with WanderWorld Tours. From tropical paradises to mountain peaks, 
              we create unforgettable travel experiences tailored just for you.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">10,000+</h3>
              <p className="text-gray-600">Happy Travelers</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">50+</h3>
              <p className="text-gray-600">Destinations</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-orange-100 p-4 rounded-full mb-4">
                <Plane className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">500+</h3>
              <p className="text-gray-600">Tours Completed</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">4.9/5</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Packages Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Travel Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully curated selection of world-class destinations 
            and unforgettable experiences.
          </p>
        </div>

        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          priceFilter={priceFilter}
          setPriceFilter={setPriceFilter}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map(pkg => (
            <PackageCard key={pkg.id} package={pkg} />
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No packages found matching your search criteria.
            </p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of travelers who have trusted us to create their perfect getaway.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
            Book Your Trip Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;