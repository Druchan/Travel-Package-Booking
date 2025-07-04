import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, DollarSign, Clock } from 'lucide-react';
import { Booking } from '../types';
import { travelPackages } from '../data/packages';

const BookingHistory: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const savedBookings: Booking[] = JSON.parse(localStorage.getItem('bookings') || '[]');
    setBookings(savedBookings.sort((a, b) => new Date(b.bookingDate).getTime() - new Date(a.bookingDate).getTime()));
  }, []);

  if (bookings.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">My Booking History</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="mb-4">
              <Calendar className="h-16 w-16 text-gray-400 mx-auto" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No Bookings Yet</h2>
            <p className="text-gray-600 mb-6">
              You haven't made any bookings yet. Start exploring our amazing travel packages!
            </p>
            <Link
              to="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Browse Packages
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Booking History</h1>
          <p className="text-gray-600">Manage and track all your travel bookings</p>
        </div>

        <div className="space-y-6">
          {bookings.map((booking) => {
            const pkg = travelPackages.find(p => p.id === booking.packageId);
            const travelDate = new Date(booking.travelDate);
            const isUpcoming = travelDate > new Date();
            
            return (
              <div key={booking.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-start space-x-4">
                        {pkg && (
                          <img
                            src={pkg.image}
                            alt={booking.packageTitle}
                            className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                          />
                        )}
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{booking.packageTitle}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              isUpcoming 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {isUpcoming ? 'Upcoming' : 'Completed'}
                            </span>
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{travelDate.toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4" />
                              <span>{booking.numTravellers} {booking.numTravellers === 1 ? 'person' : 'people'}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <DollarSign className="h-4 w-4" />
                              <span>${booking.totalPrice}</span>
                            </div>
                            {pkg && (
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{pkg.duration}</span>
                              </div>
                            )}
                          </div>
                          
                          <div className="mt-3 text-xs text-gray-500">
                            Booking ID: {booking.id} • Booked on {new Date(booking.bookingDate).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col sm:flex-row lg:flex-col space-y-2 sm:space-y-0 sm:space-x-3 lg:space-x-0 lg:space-y-2">
                      {pkg && (
                        <Link
                          to={`/package/${pkg.id}`}
                          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors text-center"
                        >
                          View Package
                        </Link>
                      )}
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                        Download Voucher
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Book Another Trip
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingHistory;