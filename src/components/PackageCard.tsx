import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Star } from 'lucide-react';
import { TravelPackage } from '../types';

interface PackageCardProps {
  package: TravelPackage;
}

const PackageCard: React.FC<PackageCardProps> = ({ package: pkg }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full shadow-sm">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">4.8</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
        
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{pkg.destination}</span>
        </div>
        
        <div className="flex items-center text-gray-600 mb-4">
          <Clock className="h-4 w-4 mr-1" />
          <span className="text-sm">{pkg.duration}</span>
        </div>
        
        <p className="text-gray-700 mb-4 line-clamp-3">{pkg.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <DollarSign className="h-5 w-5 text-green-600" />
            <span className="text-2xl font-bold text-green-600">{pkg.price}</span>
            <span className="text-gray-500 ml-1">per person</span>
          </div>
          
          <Link
            to={`/package/${pkg.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;