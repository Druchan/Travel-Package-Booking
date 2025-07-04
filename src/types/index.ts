export interface TravelPackage {
  id: string;
  title: string;
  destination: string;
  price: number;
  duration: string;
  image: string;
  description: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    activities: string[];
  }[];
  included: string[];
  excluded: string[];
}

export interface Booking {
  id: string;
  packageId: string;
  packageTitle: string;
  fullName: string;
  email: string;
  phone: string;
  numTravellers: number;
  travelDate: string;
  totalPrice: number;
  bookingDate: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  numTravellers: number;
  travelDate: string;
}