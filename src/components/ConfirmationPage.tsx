import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Calendar, Users, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Booking } from '../types';
import { travelPackages } from '../data/packages';

const ConfirmationPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [booking, setBooking] = useState<Booking | null>(null);

  useEffect(() => {
    if (id) {
      const bookings: Booking[] = JSON.parse(localStorage.getItem('bookings') || '[]');
      const foundBooking = bookings.find(b => b.id === id);
      setBooking(foundBooking || null);
    }
  }, [id]);

  if (!booking) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Booking Not Found</h1>
          <Link to="/" className="text-blue-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const pkg = travelPackages.find(p => p.id === booking.packageId);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Thank you {booking.fullName}, your booking is confirmed!
          </h1>
          <p className="text-xl text-gray-600">
            Your booking for {booking.packageTitle} has been successfully processed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Booking Details */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Booking Details</h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Trip</h3>
                  <p className="text-gray-600">{booking.packageTitle}</p>
                  {pkg && <p className="text-gray-500 text-sm">{pkg.destination}</p>}
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Calendar className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Travel Date</h3>
                  <p className="text-gray-600">
                    {new Date(booking.travelDate).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  {pkg && <p className="text-gray-500 text-sm">{pkg.duration}</p>}
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Travellers</h3>
                  <p className="text-gray-600">
                    {booking.numTravellers} {booking.numTravellers === 1 ? 'person' : 'people'}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-orange-100 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Contact Information</h3>
                  <p className="text-gray-600">{booking.email}</p>
                  <p className="text-gray-600">{booking.phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Booking ID:</span>
                <span className="font-mono text-sm font-medium">{booking.id}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Booking Date:</span>
                <span className="font-medium">
                  {new Date(booking.bookingDate).toLocaleDateString()}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Price per person:</span>
                <span className="font-medium">${booking.totalPrice / booking.numTravellers}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Number of travellers:</span>
                <span className="font-medium">{booking.numTravellers}</span>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold">Total Paid:</span>
                  <span className="text-lg font-semibold text-green-600">${booking.totalPrice}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-green-800 text-sm">
                <strong>Payment Status:</strong> Confirmed ✓
              </p>
              <p className="text-green-700 text-sm mt-1">
                A confirmation email has been sent to {booking.email}
              </p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Next?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Check Your Email</h3>
              <p className="text-gray-600 text-sm">
                You'll receive a detailed itinerary and travel documents within 24 hours.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">We'll Contact You</h3>
              <p className="text-gray-600 text-sm">
                Our travel specialists will call you within 2 business days to finalize details.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Prepare for Your Trip</h3>
              <p className="text-gray-600 text-sm">
                Start planning and get ready for an amazing adventure!
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 text-center space-x-4">
          <Link
            to="/booking-history"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            View My Bookings
          </Link>
          <Link
            to="/"
            className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
          >
            Browse More Packages
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;