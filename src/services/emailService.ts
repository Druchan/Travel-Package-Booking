import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_ohictxd';
const EMAILJS_TEMPLATE_ID_BOOKING = 'template_1nh7xi6';
const EMAILJS_TEMPLATE_ID_CONTACT = 'template_1nh7xi6';
const EMAILJS_PUBLIC_KEY = 'ik2F8GLrY03ks9JZm';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface BookingEmailData {
  to_email: string;
  to_name: string;
  booking_id: string;
  package_title: string;
  destination: string;
  travel_date: string;
  num_travellers: number;
  total_price: number;
  phone: string;
}

export interface ContactEmailData {
  to_email: string;
  from_name: string;
  from_email: string;
  phone?: string;
  subject: string;
  message: string;
}

export const sendBookingConfirmationEmail = async (data: BookingEmailData): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: data.to_email,
      to_name: data.to_name,
      booking_id: data.booking_id,
      package_title: data.package_title,
      destination: data.destination,
      travel_date: new Date(data.travel_date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      num_travellers: data.num_travellers,
      total_price: data.total_price,
      phone: data.phone,
      company_name: 'WanderWorld Tours',
      company_email: 'info@wanderworldtours.com',
      company_phone: '+1 (555) 123-4567'
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_BOOKING,
      templateParams
    );

    console.log('Booking confirmation email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send booking confirmation email:', error);
    return false;
  }
};

export const sendContactFormEmail = async (data: ContactEmailData): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: 'info@wanderworldtours.com',
      from_name: data.from_name,
      from_email: data.from_email,
      phone: data.phone || 'Not provided',
      subject: data.subject,
      message: data.message,
      reply_to: data.from_email
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_CONTACT,
      templateParams
    );

    console.log('Contact form email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send contact form email:', error);
    return false;
  }
};

export const sendAutoReplyEmail = async (customerEmail: string, customerName: string): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: customerEmail,
      to_name: customerName,
      company_name: 'WanderWorld Tours',
      company_email: 'info@wanderworldtours.com',
      company_phone: '+1 (555) 123-4567'
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      'template_auto_reply',
      templateParams
    );

    console.log('Auto-reply email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send auto-reply email:', error);
    return false;
  }
};