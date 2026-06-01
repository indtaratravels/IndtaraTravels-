const packages = {
    dubai: [
        {
            id: 'dubai-luxury-escape',
            title: 'Dubai Luxury Escape',
            duration: '5 Days / 4 Nights',
            price: 'Starting from $899',
            image: 'assets/dubai_burj.png',
            category: 'Luxury',
            highlights: ['Burj Khalifa At the Top', 'Desert Safari with BBQ Dinner', 'Dhow Cruise Marina', 'Dubai Mall & Aquarium'],
            tags: ['Luxury', 'Modern', 'City'],
            bestExperiences: [
                'Dinner in the clouds at Atmosphere',
                'Private yacht cruise around Palm Jumeirah',
                'VIP access to the Museum of the Future'
            ],
            itinerary: [
                { day: 1, title: 'Arrival in Opulence', description: 'Private transfer to your luxury hotel. Evening at leisure.' },
                { day: 2, title: 'The Sky is the Limit', description: 'Visit Burj Khalifa 148th floor and enjoy a fountain show dinner.' },
                { day: 3, title: 'Desert Majesty', description: 'Luxury desert safari with private camp and stargazing.' },
                { day: 4, title: 'Modern Wonders', description: 'Explore the Museum of the Future and Dubai Marina.' },
                { day: 5, title: 'Farewell', description: 'Last-minute shopping before your private transfer to the airport.' }
            ],
            upgrades: ['Suite upgrade with Burj view', 'Helicopter tour of Dubai'],
            similarPackages: ['dubai-adventure-seeker', 'singapore-modern-luxury']
        },
        {
            id: 'dubai-adventure-seeker',
            title: 'Desert Adventure & City Lights',
            duration: '4 Days / 3 Nights',
            price: 'Starting from $649',
            image: 'assets/dubai_desert.png',
            category: 'Adventure',
            highlights: ['Skydive Dubai', 'Dune Bashing', 'Ferrari World Abu Dhabi', 'IMG Worlds of Adventure'],
            tags: ['Adventure', 'Youth']
        },
        {
            id: 'dubai-shopping-spree',
            title: 'Dubai Ultimate Shopping & Spa',
            duration: '6 Days / 5 Nights',
            price: 'Starting from $1,099',
            image: 'assets/dubai_luxury_mall.png',
            category: 'Trending',
            highlights: ['Personal Shopper at Dubai Mall', 'Luxury Spa Treatments', 'Gold Souk Tour', 'Jumeirah Beach Relax'],
            tags: ['Shopping', 'Luxury', 'Relaxation']
        }
    ],
    india: [
        {
            id: 'rajasthan-royal-heritage',
            title: 'Rajasthan Royal Heritage',
            duration: '8 Days / 7 Nights',
            price: 'Starting from $1,299',
            image: 'assets/palace.png',
            category: 'Luxury',
            highlights: ['Jaipur City Palace', 'Udaipur Lake Pichola', 'Jodhpur Mehrangarh Fort', 'Jaisalmer Desert Camp'],
            tags: ['Heritage', 'Culture', 'Luxury'],
            bestExperiences: [
                'Vintage car rally in Udaipur',
                'Private dinner under the stars in Thar Desert',
                'Guided heritage walk through the Pink City'
            ],
            itinerary: [
                { day: 1, title: 'Welcome to the Pink City', description: 'Traditional welcome at your palace hotel in Jaipur.' },
                { day: 2, title: 'Forts & Folklore', description: 'Morning at Amber Fort followed by evening folk dance performance.' },
                { day: 3, title: 'The Blue City Beckons', description: 'Drive to Jodhpur and explore the Mehrangarh Fort.' },
                { day: 4, title: 'Desert Dreams', description: 'Jaisalmer dunes camel safari and luxury tented stay.' },
                { day: 5, title: 'Lake City Elegance', description: 'Arrival in Udaipur, the Venice of the East.' },
                { day: 6, title: 'Palaces & Temples', description: 'Visit City Palace and take a boat ride on Lake Pichola.' },
                { day: 7, title: 'Royal Relaxation', description: 'Spa day at the hotel or explore local artisan workshops.' },
                { day: 8, title: 'Journey Ends', description: 'Departure with memories of royal hospitality.' }
            ],
            upgrades: ['Private vintage car transfers', 'Signature Royal Spa treatments']
        },
        {
            id: 'kerala-backwaters-serenity',
            title: 'Kerala Backwaters Serenity',
            duration: '6 Days / 5 Nights',
            price: 'Starting from $749',
            image: 'assets/jaipur_night.png',
            category: 'Honeymoon',
            highlights: ['Alleppey Houseboat', 'Munnar Tea Gardens', 'Thekkady Wildlife', 'Kochi Fort'],
            tags: ['Nature', 'Relaxation', 'Couple']
        },
        {
            id: 'golden-triangle-spiritual',
            title: 'Golden Triangle & Spiritual Ganges',
            duration: '7 Days / 6 Nights',
            price: 'Starting from $999',
            image: 'assets/varanasi_night.png',
            category: 'Trending',
            highlights: ['Taj Mahal at Sunrise', 'Varanasi Ganga Aarti', 'Delhi Heritage Walk', 'Agra Fort'],
            tags: ['Spiritual', 'Heritage', 'Culture']
        }
    ],
    thailand: [
        {
            id: 'thailand-island-hopping',
            title: 'Phuket & Phi Phi Island Hopping',
            duration: '6 Days / 5 Nights',
            price: 'Starting from $599',
            image: 'assets/thailand_island.png',
            category: 'Adventure',
            highlights: ['Maya Bay Visit', 'James Bond Island', 'Patong Nightlife', 'Phi Phi Viewpoint'],
            tags: ['Beach', 'Nightlife', 'Island'],
            itinerary: [
                { day: 1, title: 'Phuket Arrival', description: 'Transfer to your beach resort. Evening Patong exploration.' },
                { day: 2, title: 'Phi Phi Bliss', description: 'Day trip to Maya Bay and snorkeling in turquoise waters.' },
                { day: 3, title: 'James Bond Island', description: 'Discover the iconic Phang Nga Bay by longtail boat.' },
                { day: 4, title: 'Island Leisure', description: 'Relax at the resort or optional scuba diving session.' },
                { day: 5, title: 'Old Phuket Charm', description: 'Visit the colorful Sino-Portuguese streets of Phuket Town.' },
                { day: 6, title: 'Departure', description: 'Final beach morning before airport transfer.' }
            ]
        }
    ],
    singapore: [
        {
            id: 'singapore-modern-luxury',
            title: 'Singapore Modern Luxury Living',
            duration: '4 Days / 3 Nights',
            price: 'Starting from $1,299',
            image: 'assets/singapore_luxury.png',
            category: 'Luxury',
            highlights: ['Marina Bay Sands Stay', 'Michelin Dining', 'Private Yacht Cruise', 'Orchard Road VIP Shopping'],
            tags: ['Luxury', 'Modern', 'City'],
            itinerary: [
                { day: 1, title: 'Arrival in Style', description: 'VIP limousine transfer to Marina Bay Sands.' },
                { day: 2, title: 'Skyline & Gardens', description: 'Private tour of Gardens by the Bay and infinity pool chill.' },
                { day: 3, title: 'Sea & Shopping', description: 'Private yacht cruise followed by personal shopper experience.' },
                { day: 4, title: 'Farewell', description: 'Gourmet breakfast before your luxury transfer out.' }
            ]
        }
    ],
    maldives: [
        {
            id: 'maldives-honeymoon-special',
            title: 'Maldives Overwater Villa Honeymoon',
            duration: '5 Days / 4 Nights',
            price: 'Starting from $1,899',
            image: 'assets/maldives_resort.png',
            category: 'Honeymoon',
            highlights: ['Private Dinner on Beach', 'Snorkeling Safari', 'Sunset Cruise', 'Overwater Spa'],
            tags: ['Honeymoon', 'Luxury', 'Beach'],
            itinerary: [
                { day: 1, title: 'Seaplane Arrival', description: 'Scenic flight to your private island resort.' },
                { day: 2, title: 'Ocean Romance', description: 'Snorkeling at the house reef and private beach lunch.' },
                { day: 3, title: 'Spa & Sunset', description: 'Couples overwater spa followed by a sunset yacht cruise.' },
                { day: 4, title: 'Island Bliss', description: 'Leisurely day for swimming and intimate dining.' },
                { day: 5, title: 'Farewell Paradise', description: 'Last sunrise swim before your seaplane back.' }
            ]
        }
    ],
    mauritius: [
        {
            id: 'mauritius-tropical-dream',
            title: 'Mauritius Tropical Dream',
            duration: '6 Days / 5 Nights',
            price: 'Starting from $1,199',
            image: 'assets/safari.png',
            category: 'Family',
            highlights: ['Ile aux Cerfs', 'Chamarel Seven Colored Earth', 'Port Louis Waterfront', 'Grand Bassin'],
            tags: ['Nature', 'Beach', 'Relaxation']
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = packages;
} else {
    window.travelPackages = packages;
}
