export type ProductBadge = 'BESTSELLER' | 'NEW' | 'POPULAR' | 'TRADITIONAL FAVOURITE' | 'FEATURED';

export interface Product {
  id: string;
  name: string;
  teluguName?: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  price: number;
  mrp?: number;
  weight: string;
  image: string;
  secondaryImages?: string[];
  ingredients: string[];
  preparation: string;
  storage: string;
  netQuantity: string;
  allergenInfo: string;
  shippingInfo: string;
  stock: number;
  isVerifiedListing: boolean; // Marked true for online-verified Herbal Millet Drink ₹210
  featured: boolean;
  badge?: ProductBadge;
  ratingPlaceholder: {
    rating: number;
    count: number;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface MilletGrain {
  id: string;
  name: string;
  teluguName: string;
  botanicalName?: string;
  tagline: string;
  description: string;
  traditionalUse: string;
  colorTone: string;
  image: string;
}

export interface Recipe {
  id: string;
  title: string;
  subtitle: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  grain: string;
  ingredients: string[];
  instructions: string[];
  traditionalNotes: string;
  image: string;
}

export interface JourneyMilestone {
  phase: string;
  title: string;
  tagline: string;
  narrative: string;
  location: string;
  status: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  traditionalAspect: string;
  image: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  productName: string;
  rating: number;
  review: string;
  isPlaceholder: boolean;
}

export interface CheckoutForm {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  notes: string;
}
