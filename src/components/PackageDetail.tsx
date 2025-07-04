import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Calendar, Users, Check, X, Star } from 'lucide-react';
import { travelPackages } from '../data/packages';

const PackageDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const pkg = travelPackages.find(p => p.id === id);

  if (!pkg) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Package Not Found</h1>
          <Link to="/" className="text-blue-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-700">{pkg.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="relative rounded-lg overflow-hidden mb-8">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full shadow-sm">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">4.8</span>
                  <span className="text-xs text-gray-500">(124 reviews)</span>
                </div>
              </div>
            </div>

            {/* Package Info */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{pkg.title}</h1>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{pkg.destination}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{pkg.duration}</span>
                </div>
                <div className="flex items-center text-green-600">
                  <DollarSign className="h-5 w-5 mr-1" />
                  <span className="text-xl font-bold">{pkg.price}</span>
                  <span className="text-gray-500 ml-1">per person</span>
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">{pkg.description}</p>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tour Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {pkg.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Daily Itinerary</h2>
              <div className="space-y-6">
                {pkg.itinerary.map((day, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center mb-2">
                      <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                        {day.day}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{day.title}</h3>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {day.activities.map((activity, actIndex) => (
                        <li key={actIndex}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Included/Excluded */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Included
                </h3>
                <ul className="space-y-2">
                  {pkg.included.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <X className="h-5 w-5 text-red-500 mr-2" />
                  Not Included
                </h3>
                <ul className="space-y-2">
                  {pkg.excluded.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  ${pkg.price}
                </div>
                <p className="text-gray-500">per person</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{pkg.duration}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-gray-600">Group Size:</span>
                  <span className="font-medium">Max 12 people</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-gray-600">Difficulty:</span>
                  <span className="font-medium">Moderate</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-600">Best Season:</span>
                  <span className="font-medium">Year Round</span>
                </div>
              </div>

              <Link
                to={`/booking/${pkg.id}`}
                className="block w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg mb-4"
              >
                Book Now
              </Link>

              <div className="text-center text-sm text-gray-500">
                Free cancellation up to 48 hours before departure
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;