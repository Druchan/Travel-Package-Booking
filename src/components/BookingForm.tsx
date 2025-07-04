import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Users, Mail, Phone, User, CheckCircle, AlertCircle } from 'lucide-react';
import { travelPackages } from '../data/packages';
import { BookingFormData, Booking } from '../types';
import { sendBookingConfirmationEmail } from '../services/emailService';

const BookingForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const pkg = travelPackages.find(p => p.id === id);

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    numTravellers: 1,
    travelDate: ''
  });

  const [errors, setErrors] = useState<Partial<BookingFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  if (!pkg) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Package Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:underline"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<BookingFormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }

    if (formData.numTravellers < 1) {
      newErrors.numTravellers = 'Number of travellers must be at least 1';
    }

    if (!formData.travelDate) {
      newErrors.travelDate = 'Travel date is required';
    } else {
      const selectedDate = new Date(formData.travelDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        newErrors.travelDate = 'Travel date cannot be in the past';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setEmailStatus('sending');

    try {
      // Create booking
      const booking: Booking = {
        id: Date.now().toString(),
        packageId: pkg.id,
        packageTitle: pkg.title,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        numTravellers: formData.numTravellers,
        travelDate: formData.travelDate,
        totalPrice: pkg.price * formData.numTravellers,
        bookingDate: new Date().toISOString()
      };

      // Save to localStorage
      const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
      existingBookings.push(booking);
      localStorage.setItem('bookings', JSON.stringify(existingBookings));

      // Send confirmation email
      const emailSent = await sendBookingConfirmationEmail({
        to_email: formData.email,
        to_name: formData.fullName,
        booking_id: booking.id,
        package_title: pkg.title,
        destination: pkg.destination,
        travel_date: formData.travelDate,
        num_travellers: formData.numTravellers,
        total_price: booking.totalPrice,
        phone: formData.phone
      });

      if (emailSent) {
        setEmailStatus('success');
      } else {
        setEmailStatus('error');
      }

      // Navigate to confirmation page after a short delay
      setTimeout(() => {
        navigate(`/confirmation/${booking.id}`);
      }, 2000);

    } catch (error) {
      console.error('Booking submission error:', error);
      setEmailStatus('error');
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseInt(value) || 0 : value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof BookingFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const totalPrice = pkg.price * formData.numTravellers;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Book Your Adventure</h1>
          <p className="text-gray-600">Complete the form below to secure your spot on this amazing journey.</p>
        </div>

        {/* Email Status Banner */}
        {emailStatus === 'sending' && (
          <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 mr-3"></div>
              <p className="text-blue-800">Sending confirmation email...</p>
            </div>
          </div>
        )}

        {emailStatus === 'success' && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              <p className="text-green-800">Confirmation email sent successfully to {formData.email}</p>
            </div>
          </div>
        )}

        {emailStatus === 'error' && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
              <p className="text-red-800">Failed to send confirmation email. Your booking is still confirmed.</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Booking Details</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`block w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.fullName ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`block w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.email ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email address"
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`block w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.phone ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>

                {/* Number of Travellers */}
                <div>
                  <label htmlFor="numTravellers" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Travellers *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Users className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="number"
                      id="numTravellers"
                      name="numTravellers"
                      min="1"
                      max="12"
                      value={formData.numTravellers}
                      onChange={handleInputChange}
                      className={`block w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.numTravellers ? 'border-red-300' : 'border-gray-300'
                      }`}
                    />
                  </div>
                  {errors.numTravellers && <p className="mt-1 text-sm text-red-600">{errors.numTravellers}</p>}
                </div>

                {/* Travel Date */}
                <div>
                  <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Travel Date *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      id="travelDate"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`block w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.travelDate ? 'border-red-300' : 'border-gray-300'
                      }`}
                    />
                  </div>
                  {errors.travelDate && <p className="mt-1 text-sm text-red-600">{errors.travelDate}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg transition-colors"
                >
                  {isSubmitting ? 'Processing...' : 'Confirm Booking'}
                </button>
              </form>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Booking Summary</h3>
              
              <div className="space-y-4">
                <div>
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900">{pkg.title}</h4>
                  <p className="text-gray-600 text-sm">{pkg.destination}</p>
                  <p className="text-gray-600 text-sm">{pkg.duration}</p>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price per person:</span>
                    <span className="font-medium">${pkg.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Travellers:</span>
                    <span className="font-medium">{formData.numTravellers}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="font-semibold">Total:</span>
                    <span className="font-semibold text-green-600">${totalPrice}</span>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 text-sm text-blue-800">
                  <p className="font-medium mb-1">What's included:</p>
                  <ul className="text-xs space-y-1">
                    {pkg.included.slice(0, 3).map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                    {pkg.included.length > 3 && (
                      <li>• And {pkg.included.length - 3} more...</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;