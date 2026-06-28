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
            id: 'goa-inner-coast-journey',
            title: 'Indtara — Goa Inner Coast Journey',
            duration: '10 Days (Sept 2026)',
            price: 'Limited to 8 Guests',
            image: 'assets/goa_retreat.png',
            category: 'Wellbeing',
            highlights: ['Sunrise yoga & sound healing', 'Pottery & artisan workshops', 'Spice plantation & cooking class', 'Private spa & breathwork'],
            tags: ['Wellbeing', 'Culture', 'Luxury', 'Reconnection'],
            gallery: ['assets/goa_yoga.png', 'assets/goa_mangroves.png'],
            description: 'A 10-day premium immersion designed for travellers seeking wellbeing, culture, luxury and emotional reconnection.',
            whatWeOffer: {
                intro: 'We design and personally accompany every journey.',
                details: 'We curate the route, coordinate logistics, manage the flow and provide continuous support.'
            },
            included: [
                'Flights from Madrid',
                'Boutique accommodation',
                'Breakfast, lunch and dinner',
                'Private luxury transport',
                'Private driver',
                'Workshops',
                'Yoga',
                'Spa experiences',
                'Cultural immersions',
                'Beach days',
                'Temple visits',
                'Artisan workshops'
            ],
            notIncluded: [
                'Travel insurance',
                'Visa fees',
                'Medical expenses',
                'Personal shopping',
                'Extra drinks',
                'Optional personal upgrades'
            ],
            itinerary: [
                { day: 1, title: 'Madrid departure', description: 'Depart from Madrid for your flight to India.' },
                { day: 2, title: 'Arrival Goa + private transfer + sunset welcome dinner', description: 'Arrive in Goa, meet your private transfer, and enjoy a sunset welcome dinner.' },
                { day: 3, title: 'Sunrise yoga + pottery workshop + sound healing', description: 'Begin with sunrise yoga, followed by a pottery workshop and sound healing session.' },
                { day: 4, title: 'Spice plantation + ayurvedic cooking class', description: 'Visit a local spice plantation and participate in an ayurvedic cooking class.' },
                { day: 5, title: 'Temple ritual + village immersion + meditation', description: 'Participate in a temple ritual, immerse yourself in local village life, and end with meditation.' },
                { day: 6, title: 'Transfer to South Goa + breathwork + beach ceremony', description: 'Transfer to South Goa, experience a breathwork session, and attend a beach ceremony.' },
                { day: 7, title: 'Private spa + yoga + free beach time', description: 'Indulge in a private spa experience, practice yoga, and enjoy free beach time.' },
                { day: 8, title: 'Kayaking mangroves + artisan workshop', description: 'Go kayaking through the mangroves and join an artisan workshop.' },
                { day: 9, title: 'Free integration day + farewell dinner', description: 'Spend a free day integrating your experiences, followed by a farewell dinner.' },
                { day: 10, title: 'Airport transfer + Madrid return', description: 'Private transfer to the airport for your return flight to Madrid.' }
            ]
        },
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
    ],
    usa: [
        {
            id: 'usa-east-coast-luxury',
            title: 'East Coast Luxury & History',
            duration: '7 Days / 6 Nights',
            price: 'Starting from $1,499',
            image: 'assets/usa_nyc.png',
            category: 'Luxury',
            highlights: ['Manhattan Private Helicopter Tour', 'Central Park Horse Carriage', 'Washington D.C. Monument Tour', 'Private Yacht Cruise'],
            tags: ['Luxury', 'City', 'History'],
            bestExperiences: [
                'Sunset dinner cruise in New York Harbor',
                'Private historical tour of the US Capitol',
                'Vintage town car ride in Washington D.C.'
            ],
            itinerary: [
                { day: 1, title: 'Arrival in New York', description: 'Private luxury transfer to your high-rise hotel in Manhattan.' },
                { day: 2, title: 'The Manhattan Skyline', description: 'Private helicopter tour followed by a sunset carriage ride in Central Park.' },
                { day: 3, title: 'Scenic Transit', description: 'Travel via luxury first-class train to Washington D.C.' },
                { day: 4, title: 'Historic Monuments', description: 'Bespoke guided tour of the D.C. monuments and museums.' },
                { day: 5, title: 'Philadelphia Heritage', description: 'Guided day-trip to Philadelphia to visit the Liberty Bell and Independence Hall.' },
                { day: 6, title: 'VIP NYC Experience', description: 'Return to New York for a Broadway show with VIP access.' },
                { day: 7, title: 'Farewell', description: 'Private transfer to JFK airport for your flight home.' }
            ],
            upgrades: ['Penthouse suite upgrade', 'Backstage Broadway access'],
            similarPackages: ['dubai-luxury-escape', 'singapore-modern-luxury']
        },
        {
            id: 'usa-canyon-adventure',
            title: 'Grand Canyon & Western Wonders',
            duration: '6 Days / 5 Nights',
            price: 'Starting from $1,299',
            image: 'assets/usa_grand_canyon.png',
            category: 'Adventure',
            highlights: ['Private Helicopter over Canyon', 'Scenic Desert Stargazing', 'Luxury Glamping Retreat', 'Route 66 Historic Drive'],
            tags: ['Adventure', 'Nature', 'Bespoke']
        }
    ],
    vietnam: [
        {
            id: 'vietnam-heritage-cruise',
            title: 'Vietnam Cultural Heritage & Luxury Cruise',
            duration: '8 Days / 7 Nights',
            price: 'Starting from $1,199',
            image: 'assets/vietnam_halong_bay.png',
            category: 'Luxury',
            highlights: ['Luxury Halong Bay Cruise', 'Hoi An Lantern Walk', 'Hanoi Old Quarter Tour', 'Imperial City of Hue'],
            tags: ['Heritage', 'Culture', 'Luxury'],
            bestExperiences: [
                'Overnight stay on a 5-star boutique junk boat',
                'Private lantern making workshop in Hoi An',
                'Sunset dinner overlooking the Perfume River'
            ],
            itinerary: [
                { day: 1, title: 'Arrival in Hanoi', description: 'VIP transfer to your luxury hotel in the French Quarter. Welcome dinner.' },
                { day: 2, title: 'Hanoi Traditions', description: 'Cyclo tour of the Old Quarter, Temple of Literature, and a traditional Water Puppet show.' },
                { day: 3, title: 'Halong Bay Cruise', description: 'Drive to Halong Bay and board a luxury cruise ship. Kayak through hidden limestone caves.' },
                { day: 4, title: 'Bay Sunrise & Flight to Danang', description: 'Tai Chi at sunrise, breakfast on board. Disembark and fly to Danang/Hoi An.' },
                { day: 5, title: 'Hoi An Ancient Town', description: 'Guided walking tour of the ancient town, Japanese Covered Bridge, and custom tailoring experience.' },
                { day: 6, title: 'Hoi An Eco-Village', description: 'Bamboo basket boat ride through coconut forests and organic cooking class.' },
                { day: 7, title: 'Imperial Hue', description: 'Scenic drive over the Hai Van Pass to Hue. Explore the ancient Citadel.' },
                { day: 8, title: 'Departure', description: 'Private transfer to Danang International Airport for your departure flight.' }
            ],
            upgrades: ['Suite cabin with private balcony', 'Private food tasting tour in Hanoi'],
            similarPackages: ['rajasthan-royal-heritage', 'thailand-island-hopping']
        },
        {
            id: 'vietnam-highlands-adventure',
            title: 'Emerald Highlands & Northern Adventure',
            duration: '6 Days / 5 Nights',
            price: 'Starting from $849',
            image: 'assets/vietnam_rice_fields.png',
            category: 'Adventure',
            highlights: ['Sapa Terraced Rice Fields Trek', 'Fansipan Peak Cable Car', 'Ninh Binh Karst Landscapes', 'Authentic Homestay Dinner'],
            tags: ['Adventure', 'Nature', 'Bespoke']
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = packages;
} else {
    window.travelPackages = packages;
}
