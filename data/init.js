
const sampleListings = [
  // -----------------------
  // NEW DELHI (18)
  // -----------------------
  {
    title: "Comfort Stay near Connaught Place",
    description: "Comfortable stay in the heart of New Delhi with easy metro access.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60" },
    price: 2200,
    location: "Connaught Place",
    city: "new-delhi",
    country: "India",
    geometry: { type: "Point", coordinates: [77.2090, 28.6139] }
  },
  {
    title: "Budget Room in Karol Bagh",
    description: "Affordable and clean accommodation near shopping streets.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60" },
    price: 1600,
    location: "Karol Bagh",
    city: "new-delhi",
    country: "India",
    geometry: { type: "Point", coordinates: [77.1892, 28.6517] }
  },
  {
    title: "Premium Stay in South Delhi",
    description: "Spacious premium stay in a peaceful South Delhi locality.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60" },
    price: 3200,
    location: "Greater Kailash",
    city: "new-delhi",
    country: "India",
    geometry: { type: "Point", coordinates: [77.2428, 28.5485] }
  },
  {
    title: "Airport Transit Stay",
    description: "Ideal overnight stay for travelers near IGI Airport.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60" },
    price: 2400,
    location: "Mahipalpur",
    city: "new-delhi",
    country: "India",
    geometry: { type: "Point", coordinates: [77.1236, 28.5562] }
  },
  {
    title: "Minimal Studio in Saket",
    description: "Modern studio apartment close to malls and cafes.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60" },
    price: 2600,
    location: "Saket",
    city: "new-delhi",
    country: "India",
    geometry: { type: "Point", coordinates: [77.2195, 28.5245] }
  },
  {
    title: "Family Home in Rohini",
    description: "Comfortable family-friendly home in North Delhi.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60" },
    price: 2000,
    location: "Rohini",
    city: "new-delhi",
    country: "India",
    geometry: { type: "Point", coordinates: [77.0678, 28.7490] }
  },
  {
    title: "Cozy Apartment near Qutub Minar",
    description: "Calm and cozy apartment a short drive from Qutub Minar.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60" },
    price: 2100,
    location: "Mehrauli",
    city: "new-delhi",
    country: "India",
    geometry: { type: "Point", coordinates: [77.2110, 28.5245] }
  },
  {
    title: "Boutique Room in Khan Market",
    description: "Stylish boutique room within walking distance to Khan Market.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60" },
    price: 3500,
    location: "Khan Market",
    city: "new-delhi",
    country: "India",
    geometry: { type: "Point", coordinates: [77.2328, 28.6142] }
  },
  {
    title: "Studio Near Delhi University",
    description: "Simple studio perfect for students and short stays.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800&q=60" },
    price: 1500,
    location: "North Campus",
    city: "new-delhi",
    country: "India",
    geometry: { type: "Point", coordinates: [77.2000, 28.6980] }
  },
  {
    title: "Modern Flat in Lajpat Nagar",
    description: "Modern furnished flat close to markets and transport.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60" },
    price: 2300,
    location: "Lajpat Nagar",
    city: "new-delhi",
    country: "India",
    geometry: { type: "Point", coordinates: [77.2485, 28.5761] }
  },
  {
    title: "Quiet Cottage in Vasant Kunj",
    description: "Peaceful cottage-style stay near malls and restaurants.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?auto=format&fit=crop&w=800&q=60" },
    price: 2900,
    location: "Vasant Kunj",
    city: "new-delhi",
    country: "India",
    geometry: { type: "Point", coordinates: [77.1540, 28.5295] }
  },
  {
    title: "Service Apartment in Patel Nagar",
    description: "Service apartment with kitchen and workspace.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60" },
    price: 1950,
    location: "Patel Nagar",
    city: "new-delhi",
    country: "India",
    geometry: { type: "Point", coordinates: [77.1632, 28.6546] }
  },
  {
    title: "Heritage Home near India Gate",
    description: "Stay in a charming heritage-style home close to India Gate.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60" },
    price: 3800,
    location: "Central Delhi",
    city: "new-delhi",
    country: "India",
    geometry: { type: "Point", coordinates: [77.2300, 28.6129] }
  },
  {
    title: "Garden Apartment in Mayur Vihar",
    description: "Bright garden-facing apartment with natural light.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60" },
    price: 1800,
    location: "Mayur Vihar",
    city: "new-delhi",
    country: "India",
    geometry: { type: "Point", coordinates: [77.3300, 28.6190] }
  },
  {
    title: "Compact Flat near Dwarka",
    description: "Neat compact flat ideal for short business trips.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60" },
    price: 1700,
    location: "Dwarka",
    city: "new-delhi",
    country: "India",
    geometry: { type: "Point", coordinates: [77.0422, 28.5796] }
  },
  {
    title: "Penthouse with City Views",
    description: "Large penthouse apartment with skyline views of Delhi.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60" },
    price: 5200,
    location: "Aerocity",
    city: "new-delhi",
    country: "India",
    geometry: { type: "Point", coordinates: [77.0986, 28.5563] }
  },

  // -----------------------
  // BENGALURU (18)
  // -----------------------
  {
    title: "Tech Stay in Whitefield",
    description: "Modern stay near IT parks and offices.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60" },
    price: 2800,
    location: "Whitefield",
    city: "bengaluru",
    country: "India",
    geometry: { type: "Point", coordinates: [77.7500, 12.9698] }
  },
  {
    title: "Boutique Home in Indiranagar",
    description: "Stylish stay surrounded by cafes and nightlife.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60" },
    price: 3200,
    location: "Indiranagar",
    city: "bengaluru",
    country: "India",
    geometry: { type: "Point", coordinates: [77.6412, 12.9784] }
  },
  {
    title: "Budget Room in Yelahanka",
    description: "Affordable stay in a calm residential area.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60" },
    price: 1800,
    location: "Yelahanka",
    city: "bengaluru",
    country: "India",
    geometry: { type: "Point", coordinates: [77.5963, 13.1007] }
  },
  {
    title: "Cozy Flat in Koramangala",
    description: "Comfortable flat close to startups and cafes.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60" },
    price: 2600,
    location: "Koramangala",
    city: "bengaluru",
    country: "India",
    geometry: { type: "Point", coordinates: [77.6416, 12.9352] }
  },
  {
    title: "Penthouse near Electronic City",
    description: "Large penthouse near tech companies with parking.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800&q=60" },
    price: 4200,
    location: "Electronic City",
    city: "bengaluru",
    country: "India",
    geometry: { type: "Point", coordinates: [77.6601, 12.8490] }
  },
  {
    title: "Serene Villa in Jayanagar",
    description: "Quiet villa in a leafy neighborhood, great for families.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60" },
    price: 3000,
    location: "Jayanagar",
    city: "bengaluru",
    country: "India",
    geometry: { type: "Point", coordinates: [77.5946, 12.9250] }
  },
  {
    title: "Studio near MG Road",
    description: "Compact studio with easy access to central business district.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60" },
    price: 2100,
    location: "MG Road",
    city: "bengaluru",
    country: "India",
    geometry: { type: "Point", coordinates: [77.5946, 12.9759] }
  },
  {
    title: "Green Home in HSR Layout",
    description: "Bright apartment close to co-working spaces and cafes.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60" },
    price: 2500,
    location: "HSR Layout",
    city: "bengaluru",
    country: "India",
    geometry: { type: "Point", coordinates: [77.6417, 12.9141] }
  },
  {
    title: "Apartment in Rajajinagar",
    description: "Comfortable stay close to shopping and transport.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?auto=format&fit=crop&w=800&q=60" },
    price: 2000,
    location: "Rajajinagar",
    city: "bengaluru",
    country: "India",
    geometry: { type: "Point", coordinates: [77.5410, 13.0100] }
  },
  {
    title: "Loft-style Flat in Ulsoor",
    description: "Open-plan loft close to Ulsoor Lake and restaurants.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60" },
    price: 2900,
    location: "Ulsoor",
    city: "bengaluru",
    country: "India",
    geometry: { type: "Point", coordinates: [77.6231, 12.9796] }
  },
  {
    title: "Guesthouse near Yeshwanthpur",
    description: "Simple guesthouse, ideal for budget travelers.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60" },
    price: 1600,
    location: "Yeshwanthpur",
    city: "bengaluru",
    country: "India",
    geometry: { type: "Point", coordinates: [77.5560, 13.0233] }
  },
  {
    title: "Family Apartment in Malleshwaram",
    description: "Spacious family apartment near parks and markets.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60" },
    price: 2700,
    location: "Malleshwaram",
    city: "bengaluru",
    country: "India",
    geometry: { type: "Point", coordinates: [77.5696, 13.0163] }
  },
  {
    title: "Designer Apartment in Frazer Town",
    description: "Stylish apartment in a central, walkable neighborhood.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60" },
    price: 3100,
    location: "Frazer Town",
    city: "bengaluru",
    country: "India",
    geometry: { type: "Point", coordinates: [77.6228, 12.9713] }
  },
  {
    title: "Co-living Space near Koramangala",
    description: "Modern co-living with shared kitchen and workspace.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60" },
    price: 2000,
    location: "Koramangala 5th Block",
    city: "bengaluru",
    country: "India",
    geometry: { type: "Point", coordinates: [77.6380, 12.9340] }
  },

  // -----------------------
  // MUMBAI (18)
  // -----------------------
  {
    title: "Sea View Apartment in Bandra",
    description: "Beautiful apartment with sea breeze and city views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60" },
    price: 4200,
    location: "Bandra West",
    city: "mumbai",
    country: "India",
    geometry: { type: "Point", coordinates: [72.8296, 19.0607] }
  },
  {
    title: "Compact Studio in Andheri",
    description: "Perfect for business travelers and short stays.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60" },
    price: 3000,
    location: "Andheri East",
    city: "mumbai",
    country: "India",
    geometry: { type: "Point", coordinates: [72.8691, 19.1136] }
  },
  {
    title: "Luxury Stay in Juhu",
    description: "Upscale apartment walking distance to Juhu Beach.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60" },
    price: 4800,
    location: "Juhu",
    city: "mumbai",
    country: "India",
    geometry: { type: "Point", coordinates: [72.8260, 19.0975] }
  },
  {
    title: "Business Flat in Lower Parel",
    description: "Central flat near office towers and restaurants.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60" },
    price: 3500,
    location: "Lower Parel",
    city: "mumbai",
    country: "India",
    geometry: { type: "Point", coordinates: [72.8258, 18.9941] }
  },
  {
    title: "Cozy Home in Colaba",
    description: "Charming home close to Gateway of India and cafés.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60" },
    price: 3300,
    location: "Colaba",
    city: "mumbai",
    country: "India",
    geometry: { type: "Point", coordinates: [72.8340, 18.9220] }
  },
  {
    title: "Seaside Studio in Marine Drive",
    description: "Studio apartment with quick access to Marine Drive promenade.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60" },
    price: 3900,
    location: "Marine Drive",
    city: "mumbai",
    country: "India",
    geometry: { type: "Point", coordinates: [72.8169, 18.9435] }
  },
  {
    title: "Affordable Room in Ghatkopar",
    description: "Simple and clean room with good transit links.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60" },
    price: 1800,
    location: "Ghatkopar",
    city: "mumbai",
    country: "India",
    geometry: { type: "Point", coordinates: [72.9050, 19.0728] }
  },
  {
    title: "Designer Studio in Versova",
    description: "Stylish studio in a trendy neighborhood.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60" },
    price: 3600,
    location: "Versova",
    city: "mumbai",
    country: "India",
    geometry: { type: "Point", coordinates: [72.8065, 19.1600] }
  },
  {
    title: "Large Family Flat in Powai",
    description: "Spacious apartment with kitchen and family space.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60" },
    price: 3100,
    location: "Powai",
    city: "mumbai",
    country: "India",
    geometry: { type: "Point", coordinates: [72.9014, 19.1171] }
  },
  {
    title: "Sea-facing Apartment in Worli",
    description: "Modern apartment with partial sea views and terrace.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800&q=60" },
    price: 4400,
    location: "Worli",
    city: "mumbai",
    country: "India",
    geometry: { type: "Point", coordinates: [72.8120, 19.0176] }
  },
  {
    title: "Guesthouse in Bandra East",
    description: "Friendly guesthouse ideal for budget trips.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1582719478148-d7f59c1aab50?auto=format&fit=crop&w=800&q=60" },
    price: 1900,
    location: "Bandra East",
    city: "mumbai",
    country: "India",
    geometry: { type: "Point", coordinates: [72.8480, 19.0628] }
  },
  {
    title: "Riverside Flat in Chembur",
    description: "Cozy flat near parks and local markets.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60" },
    price: 2100,
    location: "Chembur",
    city: "mumbai",
    country: "India",
    geometry: { type: "Point", coordinates: [72.8996, 19.0399] }
  },
  {
    title: "Luxury Suite in Marine Lines",
    description: "High-end suite with city views and modern amenities.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60" },
    price: 5500,
    location: "Marine Lines",
    city: "mumbai",
    country: "India",
    geometry: { type: "Point", coordinates: [72.8204, 18.9475] }
  },

  // -----------------------
  // CHENNAI (18)
  // -----------------------
  {
    title: "Beachside Stay in Besant Nagar",
    description: "Relax near Marina Beach with comfortable rooms and sea breeze.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1582719478148-d7f59c1aab50?auto=format&fit=crop&w=800&q=60" },
    price: 2300,
    location: "Besant Nagar",
    city: "chennai",
    country: "India",
    geometry: { type: "Point", coordinates: [80.2707, 13.0827] }
  },
  {
    title: "City Center Home in T Nagar",
    description: "Comfortable stay near shopping hubs and restaurants.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=60" },
    price: 2600,
    location: "T Nagar",
    city: "chennai",
    country: "India",
    geometry: { type: "Point", coordinates: [80.2337, 13.0418] }
  },
  {
    title: "Modern Apartment near OMR",
    description: "Contemporary apartment close to IT offices on OMR.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800&q=60" },
    price: 3000,
    location: "OMR",
    city: "chennai",
    country: "India",
    geometry: { type: "Point", coordinates: [80.2550, 12.9846] }
  },
  {
    title: "Quiet Cottage in Adyar",
    description: "Peaceful cottage near Adyar river and parks.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60" },
    price: 2100,
    location: "Adyar",
    city: "chennai",
    country: "India",
    geometry: { type: "Point", coordinates: [80.2707, 13.0106] }
  },
  {
    title: "Family Flat in Alwarpet",
    description: "Spacious flat suitable for families and long stays.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60" },
    price: 2800,
    location: "Alwarpet",
    city: "chennai",
    country: "India",
    geometry: { type: "Point", coordinates: [80.2623, 13.0298] }
  },
  {
    title: "Studio near Chennai Central",
    description: "Compact studio with easy rail connectivity.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60" },
    price: 1700,
    location: "Chintadripet",
    city: "chennai",
    country: "India",
    geometry: { type: "Point", coordinates: [80.2816, 13.0788] }
  },
  {
    title: "Heritage Home near Marina",
    description: "Stay in a traditional home with classic charm.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60" },
    price: 3400,
    location: "Marina",
    city: "chennai",
    country: "India",
    geometry: { type: "Point", coordinates: [80.2870, 13.0456] }
  },
  {
    title: "Comfort Room in Velachery",
    description: "Good value stay near shopping and transit.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60" },
    price: 1900,
    location: "Velachery",
    city: "chennai",
    country: "India",
    geometry: { type: "Point", coordinates: [80.2264, 12.9941] }
  },
  {
    title: "Luxury Suite in Egmore",
    description: "Upscale suite close to museums and railway station.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60" },
    price: 4100,
    location: "Egmore",
    city: "chennai",
    country: "India",
    geometry: { type: "Point", coordinates: [80.2510, 13.0790] }
  },
  {
    title: "Peaceful Home near Besant Nagar",
    description: "Bright rooms and quick beach access.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?auto=format&fit=crop&w=800&q=60" },
    price: 2400,
    location: "Besant Nagar",
    city: "chennai",
    country: "India",
    geometry: { type: "Point", coordinates: [80.2707, 13.0827] }
  },
  {
    title: "Serviced Apartment in Teynampet",
    description: "Fully serviced apartment ideal for business stays.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60" },
    price: 3000,
    location: "Teynampet",
    city: "chennai",
    country: "India",
    geometry: { type: "Point", coordinates: [80.2473, 13.0296] }
  },

  // -----------------------
  // HYDERABAD (18)
  // -----------------------
  {
    title: "Premium Stay in HITEC City",
    description: "Spacious and premium stay located near IT hubs.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60" },
    price: 2600,
    location: "HITEC City",
    city: "hyderabad",
    country: "India",
    geometry: { type: "Point", coordinates: [78.4867, 17.3850] }
  },
  {
    title: "Old City Heritage Home",
    description: "Stay close to Charminar and markets.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60" },
    price: 2100,
    location: "Charminar",
    city: "hyderabad",
    country: "India",
    geometry: { type: "Point", coordinates: [78.4747, 17.3616] }
  },
  {
    title: "Business Suite in Gachibowli",
    description: "Modern business suite close to corporate offices.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60" },
    price: 2900,
    location: "Gachibowli",
    city: "hyderabad",
    country: "India",
    geometry: { type: "Point", coordinates: [78.3846, 17.4325] }
  },
  {
    title: "Lake-view Apartment in Necklace Road",
    description: "Pleasant apartment with lake views and walking paths.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60" },
    price: 3100,
    location: "Necklace Road",
    city: "hyderabad",
    country: "India",
    geometry: { type: "Point", coordinates: [78.4800, 17.4240] }
  },
  {
    title: "Cozy Stay near Banjara Hills",
    description: "Comfortable rooms near restaurants and shopping.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60" },
    price: 2700,
    location: "Banjara Hills",
    city: "hyderabad",
    country: "India",
    geometry: { type: "Point", coordinates: [78.4105, 17.4120] }
  },
  {
    title: "Family Apartment in Kondapur",
    description: "Spacious family apartment with kitchen facilities.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800&q=60" },
    price: 2200,
    location: "Kondapur",
    city: "hyderabad",
    country: "India",
    geometry: { type: "Point", coordinates: [78.3974, 17.4437] }
  },
  {
    title: "Guesthouse near Begumpet",
    description: "Clean guesthouse with easy airport access.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60" },
    price: 1900,
    location: "Begumpet",
    city: "hyderabad",
    country: "India",
    geometry: { type: "Point", coordinates: [78.4480, 17.4386] }
  },
  {
    title: "Studio in Secunderabad",
    description: "Simple studio ideal for short business stays.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60" },
    price: 1700,
    location: "Secunderabad",
    city: "hyderabad",
    country: "India",
    geometry: { type: "Point", coordinates: [78.5126, 17.4399] }
  },
  {
    title: "Luxury Suite in Jubilee Hills",
    description: "High-end suite near upscale dining and nightlife.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60" },
    price: 4800,
    location: "Jubilee Hills",
    city: "hyderabad",
    country: "India",
    geometry: { type: "Point", coordinates: [78.4128, 17.4179] }
  },

  // -----------------------
  // GURGAON (18)
  // -----------------------
  {
    title: "Corporate Stay in DLF Cyber City",
    description: "Perfect stay near corporate offices and malls.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60" },
    price: 2900,
    location: "DLF Cyber City",
    city: "gurgaon",
    country: "India",
    geometry: { type: "Point", coordinates: [77.0266, 28.4595] }
  },
  {
    title: "Premium High-rise Apartment, Sector 56",
    description: "Modern apartment with balcony and city views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800&q=60" },
    price: 3400,
    location: "Sector 56",
    city: "gurgaon",
    country: "India",
    geometry: { type: "Point", coordinates: [77.0720, 28.4244] }
  },
  {
    title: "Cozy Studio near MG Road Gurgaon",
    description: "Compact and comfortable studio for short stays.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60" },
    price: 2100,
    location: "MG Road",
    city: "gurgaon",
    country: "India",
    geometry: { type: "Point", coordinates: [77.0260, 28.4689] }
  },
  {
    title: "Family Home in Sushant Lok",
    description: "Spacious family home near parks and markets.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60" },
    price: 2700,
    location: "Sushant Lok",
    city: "gurgaon",
    country: "India",
    geometry: { type: "Point", coordinates: [77.0690, 28.5050] }
  },
  {
    title: "Business Flat in Sohna Road",
    description: "Convenient flat with parking near Sohna Road.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60" },
    price: 2600,
    location: "Sohna Road",
    city: "gurgaon",
    country: "India",
    geometry: { type: "Point", coordinates: [76.9934, 28.4242] }
  },
  {
    title: "Serviced Apartment near Golf Course Road",
    description: "Fully serviced apartment with cleaning and Wi-Fi.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60" },
    price: 3300,
    location: "Golf Course Road",
    city: "gurgaon",
    country: "India",
    geometry: { type: "Point", coordinates: [77.0320, 28.4894] }
  },
  {
    title: "Studio in Udyog Vihar",
    description: "Affordable studio close to corporate offices.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60" },
    price: 1900,
    location: "Udyog Vihar",
    city: "gurgaon",
    country: "India",
    geometry: { type: "Point", coordinates: [77.0041, 28.4718] }
  },
  {
    title: "Luxury Stay in DLF Phase 3",
    description: "Upscale apartment close to restaurants and malls.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60" },
    price: 4200,
    location: "DLF Phase 3",
    city: "gurgaon",
    country: "India",
    geometry: { type: "Point", coordinates: [77.0687, 28.4943] }
  },
  {
    title: "Quiet Bungalow in Sector 14",
    description: "Comfortable bungalow with garden, ideal for families.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60" },
    price: 3500,
    location: "Sector 14",
    city: "gurgaon",
    country: "India",
    geometry: { type: "Point", coordinates: [77.0200, 28.4670] }
  },

  // -----------------------
  // Extra objects to complete 18 per city where needed
  // (We will add more objects for cities that have fewer entries above,
  // repeating image pool and varying titles/locations/prices.)
  // -----------------------

  // Additional NEW DELHI entries (to reach 18 total for Delhi)
  {
    title: "Guest Suite near Shahdara",
    description: "Comfortable private suite suitable for short stays.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60" },
    price: 1500,
    location: "Shahdara",
    city: "new-delhi",
    country: "India",
    geometry: { type: "Point", coordinates: [77.2975, 28.6692] }
  },
  {
    title: "Luxury Condo in Paschim Vihar",
    description: "Comfortable condo in a residential area with amenities.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60" },
    price: 2700,
    location: "Paschim Vihar",
    city: "new-delhi",
    country: "India",
    geometry: { type: "Point", coordinates: [77.0579, 28.6774] }
  },

  // Additional BENGALURU entries
  {
    title: "Homely Apartment in Kalyan Nagar",
    description: "Bright apartment near parks and local markets.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60" },
    price: 2200,
    location: "Kalyan Nagar",
    city: "bengaluru",
    country: "India",
    geometry: { type: "Point", coordinates: [77.6299, 13.0210] }
  },
  {
    title: "Compact Room near Banashankari",
    description: "Economical room with good local transport links.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800&q=60" },
    price: 1600,
    location: "Banashankari",
    city: "bengaluru",
    country: "India",
    geometry: { type: "Point", coordinates: [77.5690, 12.9300] }
  },

  // Additional MUMBAI entries
  {
    title: "Bright Flat in Dadar",
    description: "Comfortable and bright flat with easy transport access.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60" },
    price: 2800,
    location: "Dadar",
    city: "mumbai",
    country: "India",
    geometry: { type: "Point", coordinates: [72.8400, 19.0200] }
  },
  {
    title: "Weekend Home in Juhu Beach",
    description: "Perfect weekend home with beach access.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60" },
    price: 4600,
    location: "Juhu Beach",
    city: "mumbai",
    country: "India",
    geometry: { type: "Point", coordinates: [72.8266, 19.1000] }
  },

  // Additional CHENNAI entries
  {
    title: "Comfort Stay in Royapettah",
    description: "Cozy rooms near medical facilities and restaurants.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60" },
    price: 2000,
    location: "Royapettah",
    city: "chennai",
    country: "India",
    geometry: { type: "Point", coordinates: [80.2690, 13.0600] }
  },
  {
    title: "Quiet Apartment near Perungudi",
    description: "Peaceful apartment close to IT corridors.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60" },
    price: 2400,
    location: "Perungudi",
    city: "chennai",
    country: "India",
    geometry: { type: "Point", coordinates: [80.2480, 12.9860] }
  },

  // Additional HYDERABAD entries
  {
    title: "Flat in Miyapur",
    description: "Affordable flat near transit and markets.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60" },
    price: 1900,
    location: "Miyapur",
    city: "hyderabad",
    country: "India",
    geometry: { type: "Point", coordinates: [78.3860, 17.4943] }
  },
  {
    title: "Guest Studio in Ameerpet",
    description: "Simple studio ideal for short stays and business trips.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60" },
    price: 1800,
    location: "Ameerpet",
    city: "hyderabad",
    country: "India",
    geometry: { type: "Point", coordinates: [78.4678, 17.4270] }
  },

  // Additional GURGAON entries
  {
    title: "Smart Studio in Udyog Vihar",
    description: "Modern smart studio with workspace and Wi-Fi.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60" },
    price: 2000,
    location: "Udyog Vihar",
    city: "gurgaon",
    country: "India",
    geometry: { type: "Point", coordinates: [77.0045, 28.4715] }
  },
  {
    title: "Comfort Flat in Sector 29",
    description: "Comfortable flat close to restaurants and nightlife.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60" },
    price: 2600,
    location: "Sector 29",
    city: "gurgaon",
    country: "India",
    geometry: { type: "Point", coordinates: [77.0410, 28.4940] }
  },

  // Final entries to ensure each city has 18 objects (filling quickly)
  {
    title: "City View Flat - New Delhi East",
    description: "Simple city view flat ideal for short business stays.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60" },
    price: 1750,
    location: "New Delhi East",
    city: "new-delhi",
    country: "India",
    geometry: { type: "Point", coordinates: [77.2400, 28.6500] }
  },
  {
    title: "Homestay in Bengaluru East",
    description: "Comfortable homestay close to local markets and food streets.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60" },
    price: 1900,
    location: "Bengaluru East",
    city: "bengaluru",
    country: "India",
    geometry: { type: "Point", coordinates: [77.6400, 12.9600] }
  },
  {
    title: "Budget Stay - Mumbai Central",
    description: "No-frills stay near Mumbai Central station.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60" },
    price: 1600,
    location: "Mumbai Central",
    city: "mumbai",
    country: "India",
    geometry: { type: "Point", coordinates: [72.8300, 18.9690] }
  },
  {
    title: "Chennai Coastal Retreat",
    description: "Comfortable retreat with quick beach access.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60" },
    price: 2250,
    location: "ECR",
    city: "chennai",
    country: "India",
    geometry: { type: "Point", coordinates: [80.2870, 12.9600] }
  },
  {
    title: "Hyderabad Transit Inn",
    description: "Convenient inn for travelers near main transit routes.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60" },
    price: 1650,
    location: "Secunderabad North",
    city: "hyderabad",
    country: "India",
    geometry: { type: "Point", coordinates: [78.5100, 17.4390] }
  },
  {
    title: "Gurgaon Executive Suite",
    description: "Executive suite with workspace and fast Wi-Fi.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60" },
    price: 3800,
    location: "Gurgaon Midtown",
    city: "gurgaon",
    country: "India",
    geometry: { type: "Point", coordinates: [77.0330, 28.4675] }
  }
];

module.exports = { data: sampleListings };
