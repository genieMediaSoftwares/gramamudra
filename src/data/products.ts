import { Product } from '../types';

/**
 * CENTRALIZED PRODUCT CATALOGUE
 * Note: Grama Mudra Herbal Millet Drink (500g, ₹210) is referenced from verified online listings.
 * Additional products are structured as editable demo catalog data ready to be updated with
 * the client's official SKU list and pricing.
 */

export const PRODUCT_CATEGORIES = [
  "All",
  "Millet Drinks",
  "Millet Flours",
  "Whole Millets",
  "Traditional Blends",
  "Healthy Breakfast",
  "Traditional Foods"
] as const;

export const PRODUCTS: Product[] = [
  {
    id: "gm-01",
    name: "Grama Mudra Herbal Millet Drink",
    teluguName: "గ్రామ ముద్ర హెర్బల్ మిల్లెట్ డ్రింక్",
    slug: "gramamudra-herbal-millet-drink",
    category: "Millet Drinks",
    shortDescription: "A wholesome traditional blend of sprouted native millets, grains, nuts, and natural herbs for daily morning wellness.",
    description: "Grama Mudra Herbal Millet Drink is our signature heritage blend. Crafted using sprouted native millets combined with roasted grains, pulses, selected seeds, and traditional warming spices. Traditionally prepared to offer balanced, sustained sustenance for all ages.",
    price: 210,
    mrp: 250,
    weight: "500 g",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80"
    ],
    ingredients: [
      "Sprouted Ragi (Finger Millet)",
      "Sprouted Foxtail Millet (Korralu)",
      "Little Millet (Samalu)",
      "Pearl Millet (Bajra)",
      "Roasted Bengal Gram",
      "Almonds & Cardamom",
      "Dry Ginger (Sonth)",
      "Traditional Natural Spices"
    ],
    preparation: "Mix 2 tablespoons of Grama Mudra Herbal Millet Drink powder in 50ml normal water to form a smooth paste. Add this paste to 200ml boiling water or milk, simmer for 3-4 minutes while stirring continuously. Sweeten with jaggery or palm candy to taste.",
    storage: "Store in a cool, dry place away from direct sunlight. Once opened, transfer contents to an airtight container.",
    netQuantity: "500 grams",
    allergenInfo: "Contains tree nuts (Almonds). Processed in a facility that also handles natural seeds and grains.",
    shippingInfo: "Ships within 24-48 hours across Andhra Pradesh, Telangana, and all Indian states. Standard delivery 3-5 days.",
    stock: 45,
    isVerifiedListing: true,
    featured: true,
    badge: "BESTSELLER",
    ratingPlaceholder: {
      rating: 4.9,
      count: 128
    }
  },
  {
    id: "gm-02",
    name: "Pure Sprouted Ragi Flour",
    teluguName: "మొలకెత్తిన రాగి పిండి (చోళ్లు)",
    slug: "sprouted-ragi-flour",
    category: "Millet Flours",
    shortDescription: "Slow-milled from traditionally sprouted finger millets. Rich, earthy, and naturally versatile.",
    description: "Our Ragi (Finger Millet) is traditionally soaked, naturally sprouted to unlock natural vitality, sun-dried, and gently stone-ground. Perfect for traditional Andhra ragi sankati, dosas, porridge (ambali), and soft rotis.",
    price: 149,
    mrp: 175,
    weight: "500 g",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=900&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=80"
    ],
    ingredients: [
      "100% Whole Sprouted Finger Millet (Ragi / Chollu)"
    ],
    preparation: "Ideal for making traditional Ragi Ambali, soft rotis (add warm water for kneading), and nutrient-rich idli/dosa batters.",
    storage: "Store in an airtight container in a cool, dry, dark pantry.",
    netQuantity: "500 grams",
    allergenInfo: "Naturally gluten-free grain. Packed in a facility handling traditional pulses.",
    shippingInfo: "Dispatched direct from Srikakulam. Delivered within 3-5 working days.",
    stock: 60,
    isVerifiedListing: false, // Demo placeholder as requested
    featured: true,
    badge: "TRADITIONAL FAVOURITE",
    ratingPlaceholder: {
      rating: 4.8,
      count: 94
    }
  },
  {
    id: "gm-03",
    name: "Traditional Multi Millet Flour",
    teluguName: "మల్టీ మిల్లెట్ పిండి",
    slug: "multi-millet-flour",
    category: "Millet Flours",
    shortDescription: "Balanced blend of 5 heritage millets crafted for daily rotis, chapatis, and savory snacks.",
    description: "A thoughtful combination of Foxtail, Finger, Little, Pearl, and Sorghum millets. Finely ground using traditional slow-milling to preserve natural aromas and delicate textures. Bakes into tender, flavorful flatbreads.",
    price: 179,
    mrp: 210,
    weight: "500 g",
    image: "https://images.unsplash.com/photo-1627485937980-221c88ac04f9?auto=format&fit=crop&w=900&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80"
    ],
    ingredients: [
      "Ragi (Finger Millet)",
      "Jowar (Sorghum)",
      "Bajra (Pearl Millet)",
      "Foxtail Millet (Korralu)",
      "Little Millet (Samalu)"
    ],
    preparation: "Mix with equal parts whole wheat flour or knead independently with lukewarm water to make soft rotis, parathas, or crisp savory murukku.",
    storage: "Keep in a cool, moisture-free container. Consume within 6 months of packaging.",
    netQuantity: "500 grams",
    allergenInfo: "Contains multiple native whole millet grains.",
    shippingInfo: "Carefully packed in multi-barrier kraft packaging.",
    stock: 50,
    isVerifiedListing: false,
    featured: true,
    badge: "FEATURED",
    ratingPlaceholder: {
      rating: 4.9,
      count: 76
    }
  },
  {
    id: "gm-04",
    name: "Stone-Ground Jowar Flour",
    teluguName: "జొన్న పిండి",
    slug: "jowar-flour",
    category: "Millet Flours",
    shortDescription: "Cold-milled whole white sorghum flour. Excellent for traditional village rotis and bhakri.",
    description: "Sourced from dryland Andhra farms, our Jowar (White Sorghum) is meticulously cleaned of husk and stone-ground at low RPM to retain its sweet natural flavor and light texture.",
    price: 139,
    mrp: 160,
    weight: "500 g",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=80",
    ingredients: [
      "100% Whole White Jowar (Sorghum)"
    ],
    preparation: "Knead with hot water for 3-4 minutes to develop natural elasticity. Pat by hand or roll gently on a dusted wooden board to make traditional Jonna Rotte.",
    storage: "Store in a cool dry space away from moisture.",
    netQuantity: "500 grams",
    allergenInfo: "Naturally gluten-free grain.",
    shippingInfo: "Direct shipping with tracked courier delivery.",
    stock: 40,
    isVerifiedListing: false,
    featured: false,
    ratingPlaceholder: {
      rating: 4.7,
      count: 52
    }
  },
  {
    id: "gm-05",
    name: "Native Foxtail Millet (Korralu)",
    teluguName: "కొర్రలు (హోల్ ఫాక్స్ టైల్)",
    slug: "native-foxtail-millet",
    category: "Whole Millets",
    shortDescription: "Unpolished whole foxtail grains. The staple grain of Rayalaseema & Coastal Andhra traditions.",
    description: "Traditional unpolished golden foxtail millet grains, carefully de-husked with the nutrient-rich bran layer intact. Replaces polished white rice effortlessly in khichdi, pulao, pongal, and daily steamed meals.",
    price: 169,
    mrp: 195,
    weight: "500 g",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    ingredients: [
      "100% Unpolished Foxtail Millet (Setaria italica)"
    ],
    preparation: "Wash gently and soak in water for 45-60 minutes before cooking. Cook with 1:2.5 parts water in an open vessel or pressure cooker for 2 whistles.",
    storage: "Airtight container in dry conditions.",
    netQuantity: "500 grams",
    allergenInfo: "Single-origin whole grain.",
    shippingInfo: "Packaged fresh in food-grade sealed kraft pouches.",
    stock: 35,
    isVerifiedListing: false,
    featured: true,
    badge: "POPULAR",
    ratingPlaceholder: {
      rating: 4.8,
      count: 63
    }
  },
  {
    id: "gm-06",
    name: "Unpolished Little Millet (Samalu)",
    teluguName: "సామలు",
    slug: "unpolished-little-millet",
    category: "Whole Millets",
    shortDescription: "Delicate small grains that cook quickly with a mild, fluffy texture. Perfect for payasam and upma.",
    description: "Little millet (Panicum sumatrense) is among the hardiest native dryland grains of India. It cooks swiftly and lends itself beautifully to breakfast porridges, curd 'rice', and festive sweet dishes.",
    price: 189,
    mrp: 220,
    weight: "500 g",
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=900&q=80",
    ingredients: [
      "100% Natural Little Millet (Samalu)"
    ],
    preparation: "Soak for 30 minutes. Use 1:2 water ratio for fluffy grains or 1:3 for soft porridge consistency.",
    storage: "Dry, cool ambient storage.",
    netQuantity: "500 grams",
    allergenInfo: "Grain allergen free.",
    shippingInfo: "Reliable all-India delivery.",
    stock: 28,
    isVerifiedListing: false,
    featured: false,
    ratingPlaceholder: {
      rating: 4.7,
      count: 41
    }
  },
  {
    id: "gm-07",
    name: "Heritage Millet Breakfast Mix",
    teluguName: "మిల్లెట్ ఉప్మా & బ్రేక్‌ఫాస్ట్ మిక్స్",
    slug: "heritage-millet-breakfast-mix",
    category: "Healthy Breakfast",
    shortDescription: "Coarsely broken roasted millets with mustard seeds, curry leaves, and lentils for wholesome mornings.",
    description: "Ready-to-cook traditional morning nourishment. Prepared with roasted broken foxtail, little millet rava, roasted chana dal, mustard, and dry curry leaves. Just add boiling water and simmer for 6 minutes.",
    price: 199,
    mrp: 230,
    weight: "500 g",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
    ingredients: [
      "Roasted Foxtail Millet Rava",
      "Little Millet Rava",
      "Roasted Split Chickpeas",
      "Cold-Pressed Mustard Seeds",
      "Curry Leaves & Cumin",
      "Himalayan Pink Rock Salt"
    ],
    preparation: "Boil 2.5 cups of water. Add 1 cup of Breakfast Mix slowly while stirring. Cover and simmer on low flame for 6-8 minutes until water is absorbed. Garnish with fresh coriander.",
    storage: "Airtight jar in a cool pantry.",
    netQuantity: "500 grams",
    allergenInfo: "Contains mustard.",
    shippingInfo: "Dispatched direct from the production unit.",
    stock: 30,
    isVerifiedListing: false,
    featured: true,
    badge: "NEW",
    ratingPlaceholder: {
      rating: 4.9,
      count: 38
    }
  },
  {
    id: "gm-08",
    name: "Traditional Kodo Millet (Arikelu)",
    teluguName: "అరికెల బియ్యం (కొడో మిల్లెట్)",
    slug: "traditional-kodo-millet",
    category: "Traditional Foods",
    shortDescription: "Deeply traditional red-hued grain revered in ancient Andhra folklore and festive culinary heritage.",
    description: "Kodo millet (Paspalum scrobiculatum) is an ancient, drought-resilient grain with an earthy, deeply satisfying taste. Naturally fiber-dense and slow-digesting, ideal for nutritious lunches.",
    price: 175,
    mrp: 200,
    weight: "500 g",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    ingredients: [
      "100% Unpolished Kodo Millet (Arikelu)"
    ],
    preparation: "Soak for at least 1 hour. Cook with 1:3 ratio water for 25 minutes or prepare hearty tamarind bath (Pulihora).",
    storage: "Sealed dry storage.",
    netQuantity: "500 grams",
    allergenInfo: "Naturally gluten-free.",
    shippingInfo: "Ships countrywide from Srikakulam.",
    stock: 32,
    isVerifiedListing: false,
    featured: false,
    ratingPlaceholder: {
      rating: 4.6,
      count: 29
    }
  }
];
