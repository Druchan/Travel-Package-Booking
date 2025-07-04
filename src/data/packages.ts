import { TravelPackage } from '../types';

export const travelPackages: TravelPackage[] = [
  {
    id: '1',
    title: 'Tropical Paradise Escape',
    destination: 'Maldives',
    price: 2899,
    duration: '7 Days / 6 Nights',
    image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Experience the ultimate tropical getaway in the pristine waters of the Maldives. Stay in overwater bungalows and enjoy world-class dining, spa treatments, and crystal-clear lagoons.',
    highlights: [
      'Overwater villa accommodation',
      'Private beach access',
      'Snorkeling and diving included',
      'Sunset dinner cruise',
      'Spa treatments'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Welcome',
        activities: ['Airport transfer', 'Resort check-in', 'Welcome dinner', 'Beach walk']
      },
      {
        day: 2,
        title: 'Water Adventures',
        activities: ['Snorkeling excursion', 'Dolphin watching', 'Beach relaxation', 'Sunset cocktails']
      },
      {
        day: 3,
        title: 'Island Exploration',
        activities: ['Local island visit', 'Cultural tour', 'Traditional lunch', 'Spa session']
      },
      {
        day: 4,
        title: 'Marine Life Discovery',
        activities: ['Diving adventure', 'Underwater photography', 'Marine biology session', 'Beachside dinner']
      },
      {
        day: 5,
        title: 'Relaxation Day',
        activities: ['Spa treatments', 'Yoga session', 'Private beach time', 'Romantic dinner']
      },
      {
        day: 6,
        title: 'Adventure & Farewell',
        activities: ['Water sports', 'Jet skiing', 'Parasailing', 'Farewell party']
      },
      {
        day: 7,
        title: 'Departure',
        activities: ['Final breakfast', 'Check-out', 'Airport transfer', 'Flight home']
      }
    ],
    included: ['Accommodation', 'All meals', 'Airport transfers', 'Activities mentioned', 'Tour guide'],
    excluded: ['International flights', 'Travel insurance', 'Personal expenses', 'Alcoholic beverages', 'Tips']
  },
  {
    id: '2',
    title: 'European Heritage Tour',
    destination: 'Italy & France',
    price: 3499,
    duration: '10 Days / 9 Nights',
    image: 'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Discover the rich cultural heritage of Europe with visits to iconic landmarks, world-renowned museums, and charming medieval towns across Italy and France.',
    highlights: [
      'Visit Rome, Florence, and Paris',
      'Guided tours of major landmarks',
      'Art museum experiences',
      'Local cuisine tastings',
      'Historic city walks'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Rome',
        activities: ['Airport pickup', 'Hotel check-in', 'Welcome dinner', 'Evening city walk']
      },
      {
        day: 2,
        title: 'Ancient Rome',
        activities: ['Colosseum tour', 'Roman Forum visit', 'Pantheon exploration', 'Traditional lunch']
      },
      {
        day: 3,
        title: 'Vatican City',
        activities: ['Vatican Museums', "Sistine Chapel", "St. Peter's Basilica", 'Italian cooking class']
      },
      {
        day: 4,
        title: 'Florence Journey',
        activities: ['Travel to Florence', 'Uffizi Gallery', 'Ponte Vecchio walk', 'Tuscan dinner']
      },
      {
        day: 5,
        title: 'Renaissance Florence',
        activities: ['Duomo visit', 'Michelangelo\'s David', 'Local market tour', 'Wine tasting']
      },
      {
        day: 6,
        title: 'Paris Arrival',
        activities: ['Flight to Paris', 'Hotel check-in', 'Seine River cruise', 'French cuisine dinner']
      },
      {
        day: 7,
        title: 'Iconic Paris',
        activities: ['Eiffel Tower visit', 'Louvre Museum', 'Champs-Élysées walk', 'Cabaret show']
      },
      {
        day: 8,
        title: 'Historic Paris',
        activities: ['Notre-Dame area', 'Montmartre district', 'Sacré-Cœur Basilica', 'Artist quarter tour']
      },
      {
        day: 9,
        title: 'Versailles Day Trip',
        activities: ['Palace of Versailles', 'Gardens tour', 'Marie Antoinette\'s Estate', 'Farewell dinner']
      },
      {
        day: 10,
        title: 'Departure',
        activities: ['Final breakfast', 'Shopping time', 'Airport transfer', 'Flight home']
      }
    ],
    included: ['Accommodation', 'Daily breakfast', 'Internal flights', 'Guided tours', 'Museum entries'],
    excluded: ['International flights', 'Lunch and dinner (except mentioned)', 'Travel insurance', 'Personal shopping', 'Tips']
  },
  {
    id: '3',
    title: 'Mountain Adventure Trek',
    destination: 'Nepal Himalayas',
    price: 1899,
    duration: '12 Days / 11 Nights',
    image: 'https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Embark on an unforgettable trekking adventure through the majestic Himalayas. Experience breathtaking mountain views, authentic Sherpa culture, and personal achievement.',
    highlights: [
      'Everest Base Camp trek',
      'Sherpa village visits',
      'Mountain photography',
      'Cultural immersion',
      'Professional guides'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Kathmandu Arrival',
        activities: ['Airport pickup', 'Hotel check-in', 'Gear check', 'Welcome briefing']
      },
      {
        day: 2,
        title: 'Fly to Lukla',
        activities: ['Morning flight', 'Trek to Phakding', 'Dudh Koshi river walk', 'Lodge stay']
      },
      {
        day: 3,
        title: 'Trek to Namche',
        activities: ['Hillary Suspension Bridge', 'Sagarmatha National Park', 'Namche Bazaar', 'Mountain views']
      },
      {
        day: 4,
        title: 'Acclimatization Day',
        activities: ['Rest day in Namche', 'Everest View Hotel hike', 'Sherpa museum visit', 'Local exploration']
      },
      {
        day: 5,
        title: 'Trek to Tengboche',
        activities: ['Tengboche Monastery', 'Panoramic views', 'Spiritual experience', 'Evening prayers']
      },
      {
        day: 6,
        title: 'Trek to Dingboche',
        activities: ['Alpine scenery', 'Yak herds', 'Mountain photography', 'High altitude adaptation']
      },
      {
        day: 7,
        title: 'Acclimatization Hike',
        activities: ['Day hike to Nagarjun Hill', 'Return to Dingboche', 'Rest and recovery', 'Evening briefing']
      },
      {
        day: 8,
        title: 'Trek to Lobuche',
        activities: ['Thukla Pass', 'Memorial monuments', 'Glacier views', 'Lodge accommodation']
      },
      {
        day: 9,
        title: 'Everest Base Camp',
        activities: ['Early morning start', 'Everest Base Camp arrival', 'Celebration photos', 'Return to Gorak Shep']
      },
      {
        day: 10,
        title: 'Kala Patthar & Return',
        activities: ['Sunrise from Kala Patthar', 'Panoramic Everest views', 'Trek to Pheriche', 'Descent begins']
      },
      {
        day: 11,
        title: 'Trek to Namche',
        activities: ['Long descent day', 'Return through forests', 'Namche Bazaar', 'Celebration dinner']
      },
      {
        day: 12,
        title: 'Return to Kathmandu',
        activities: ['Trek to Lukla', 'Flight to Kathmandu', 'Certificate ceremony', 'Farewell dinner']
      }
    ],
    included: ['Accommodation', 'All meals during trek', 'Domestic flights', 'Professional guide', 'Permits and fees'],
    excluded: ['International flights', 'Nepal visa', 'Travel insurance', 'Personal gear', 'Emergency evacuation']
  },
  {
    id: '4',
    title: 'African Safari Adventure',
    destination: 'Kenya & Tanzania',
    price: 4299,
    duration: '8 Days / 7 Nights',
    image: 'https://images.pexels.com/photos/1107929/pexels-photo-1107929.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Witness the incredible wildlife of East Africa on this exclusive safari adventure. Experience the Great Migration, Big Five encounters, and authentic African culture.',
    highlights: [
      'Big Five game viewing',
      'Great Migration witness',
      'Masai Mara and Serengeti',
      'Cultural village visits',
      'Professional safari guides'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Nairobi Arrival',
        activities: ['Airport pickup', 'Safari briefing', 'Gear check', 'Welcome dinner']
      },
      {
        day: 2,
        title: 'Masai Mara',
        activities: ['Drive to Masai Mara', 'Afternoon game drive', 'Big cat spotting', 'Bush dinner']
      },
      {
        day: 3,
        title: 'Full Day Safari',
        activities: ['Dawn game drive', 'Hippo pools visit', 'Picnic lunch', 'Evening wildlife viewing']
      },
      {
        day: 4,
        title: 'Cultural Experience',
        activities: ['Masai village visit', 'Traditional ceremonies', 'Local crafts', 'Storytelling evening']
      },
      {
        day: 5,
        title: 'Serengeti Transfer',
        activities: ['Border crossing to Tanzania', 'Serengeti entry', 'Game drive en route', 'Lodge check-in']
      },
      {
        day: 6,
        title: 'Serengeti Exploration',
        activities: ['Hot air balloon safari', 'Champagne breakfast', 'Migration herds', 'Predator tracking']
      },
      {
        day: 7,
        title: 'Ngorongoro Crater',
        activities: ['Crater descent', 'Big Five viewing', 'Flamingo lakes', 'Picnic in the crater']
      },
      {
        day: 8,
        title: 'Departure',
        activities: ['Morning game drive', 'Return to Arusha', 'Airport transfer', 'Flight home']
      }
    ],
    included: ['Accommodation', 'All meals', 'Game drives', 'Park fees', 'Professional guide'],
    excluded: ['International flights', 'Tanzania visa', 'Travel insurance', 'Alcoholic beverages', 'Personal items']
  },
  {
    id: '5',
    title: 'Asian Cultural Journey',
    destination: 'Japan & Thailand',
    price: 3799,
    duration: '14 Days / 13 Nights',
    image: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Immerse yourself in the contrasting cultures of Asia, from Japan\'s ancient traditions and modern innovations to Thailand\'s tropical beauty and spiritual heritage.',
    highlights: [
      'Tokyo and Kyoto exploration',
      'Thai beach paradise',
      'Temple and shrine visits',
      'Authentic cuisine experiences',
      'Cultural workshops'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Tokyo Arrival',
        activities: ['Airport pickup', 'Hotel check-in', 'Shibuya crossing', 'Welcome dinner']
      },
      {
        day: 2,
        title: 'Modern Tokyo',
        activities: ['Tokyo Skytree', 'Senso-ji Temple', 'Harajuku district', 'Sushi making class']
      },
      {
        day: 3,
        title: 'Traditional Japan',
        activities: ['Imperial Palace', 'Meiji Shrine', 'Tea ceremony', 'Kabuki performance']
      },
      {
        day: 4,
        title: 'Mount Fuji Day Trip',
        activities: ['Bullet train to Kawaguchi', 'Lake Kawaguchi', 'Mount Fuji views', 'Hot springs']
      },
      {
        day: 5,
        title: 'Kyoto Journey',
        activities: ['Shinkansen to Kyoto', 'Fushimi Inari Shrine', 'Bamboo grove', 'Geisha district']
      },
      {
        day: 6,
        title: 'Ancient Kyoto',
        activities: ['Kinkaku-ji Temple', 'Zen meditation', 'Traditional lunch', 'Pottery workshop']
      },
      {
        day: 7,
        title: 'Nara Day Trip',
        activities: ['Todai-ji Temple', 'Deer park', 'Buddha statue', 'Return to Kyoto']
      },
      {
        day: 8,
        title: 'Flight to Bangkok',
        activities: ['Morning in Kyoto', 'Flight to Thailand', 'Bangkok arrival', 'Street food tour']
      },
      {
        day: 9,
        title: 'Bangkok Temples',
        activities: ['Grand Palace', 'Wat Pho temple', 'Emerald Buddha', 'Chao Phraya river cruise']
      },
      {
        day: 10,
        title: 'Floating Markets',
        activities: ['Damnoen Saduak market', 'Long-tail boat ride', 'Local shopping', 'Thai cooking class']
      },
      {
        day: 11,
        title: 'Phuket Paradise',
        activities: ['Flight to Phuket', 'Beach resort check-in', 'Sunset viewing', 'Seafood dinner']
      },
      {
        day: 12,
        title: 'Island Hopping',
        activities: ['Phi Phi Islands tour', 'Snorkeling', 'Maya Bay visit', 'Beach relaxation']
      },
      {
        day: 13,
        title: 'Thai Spa & Culture',
        activities: ['Traditional Thai massage', 'Elephant sanctuary visit', 'Local village tour', 'Farewell dinner']
      },
      {
        day: 14,
        title: 'Departure',
        activities: ['Beach morning', 'Final shopping', 'Airport transfer', 'Flight home']
      }
    ],
    included: ['Accommodation', 'Daily breakfast', 'Internal flights', 'Guided tours', 'Cultural activities'],
    excluded: ['International flights', 'Visa fees', 'Lunch and dinner (except mentioned)', 'Personal expenses', 'Tips']
  },
  {
    id: '6',
    title: 'Northern Lights Expedition',
    destination: 'Iceland & Norway',
    price: 2699,
    duration: '9 Days / 8 Nights',
    image: 'https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Chase the magical Northern Lights across Iceland and Norway. Experience dramatic landscapes, ice caves, hot springs, and the ethereal beauty of the Aurora Borealis.',
    highlights: [
      'Northern Lights hunting',
      'Ice cave exploration',
      'Geothermal hot springs',
      'Fjord cruising',
      'Arctic wildlife viewing'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Reykjavik Arrival',
        activities: ['Airport pickup', 'City orientation', 'Northern Lights briefing', 'Icelandic dinner']
      },
      {
        day: 2,
        title: 'Golden Circle',
        activities: ['Geysir geothermal area', 'Gullfoss waterfall', 'Thingvellir National Park', 'Aurora hunt']
      },
      {
        day: 3,
        title: 'South Coast Adventure',
        activities: ['Seljalandsfoss waterfall', 'Black sand beaches', 'Ice cave exploration', 'Northern Lights viewing']
      },
      {
        day: 4,
        title: 'Glacier Lagoon',
        activities: ['Jokulsarlon glacier lagoon', 'Iceberg boat tour', 'Diamond Beach', 'Evening Aurora search']
      },
      {
        day: 5,
        title: 'Blue Lagoon & Flight',
        activities: ['Blue Lagoon spa', 'Geothermal relaxation', 'Flight to Norway', 'Tromso arrival']
      },
      {
        day: 6,
        title: 'Arctic Tromso',
        activities: ['Cable car to Mount Storsteinen', 'Arctic Cathedral', 'Husky sledding', 'Northern Lights tour']
      },
      {
        day: 7,
        title: 'Sami Culture',
        activities: ['Reindeer farm visit', 'Sami cultural experience', 'Traditional lunch', 'Aurora photography workshop']
      },
      {
        day: 8,
        title: 'Fjord Expedition',
        activities: ['Fjord cruise', 'Whale watching', 'Arctic scenery', 'Final Aurora hunt']
      },
      {
        day: 9,
        title: 'Departure',
        activities: ['Morning in Tromso', 'Last-minute shopping', 'Airport transfer', 'Flight home']
      }
    ],
    included: ['Accommodation', 'Daily breakfast', 'Internal flights', 'Northern Lights tours', 'Activities mentioned'],
    excluded: ['International flights', 'Lunch and dinner (except mentioned)', 'Travel insurance', 'Winter clothing rental', 'Personal expenses']
  }
];