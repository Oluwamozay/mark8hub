export interface User {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  phone?: string;
  role: 'buyer' | 'seller' | 'both' | 'admin';
  is_verified: boolean;
  created_at: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  compare_price?: number;
  images: string[];
  category_id: string;
  category_name?: string;
  seller_id: string;
  seller_name?: string;
  stock: number;
  rating: number;
  condition?: string;
  is_used?: boolean;
  tags: string[];
  featured: boolean;
  is_active: boolean;
  created_at: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  count?: number;
}

export interface Order {
  id: string;
  user_id: string;
  buyer_id?: string;
  seller_id?: string;
  items: OrderItem[];
  total: number;
  subtotal: number;
  shipping_fee: number;
  tax: number;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shipping_address: ShippingAddress;
  payment_ref: string;
  payment_status: 'pending' | 'paid' | 'failed' | 'refunded';
  payment_method?: string;
  tracking_number?: string;
  created_at: string;
}

export interface OrderItem {
  product_id: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

export interface ShippingAddress {
  full_name: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  country: string;
}

export interface CartItem {
  product_id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  seller_id: string;
}

export type Condition = 'like_new' | 'good' | 'fair' | 'poor';

export interface UsedItem {
  id: string;
  name: string;
  description: string;
  condition: Condition;
  original_price: number;
  price: number;
  images: string[];
  category: string;
  seller_id: string;
  seller_name: string;
  seller_location: string;
  status: 'available' | 'sold' | 'reserved';
  created_at: string;
}

export interface Conversation {
  id: string;
  participant_id: string;
  participant_name: string;
  participant_avatar?: string;
  last_message: string;
  last_message_time: string;
  unread: number;
  online: boolean;
  product_id?: string;
  product_name?: string;
  product_image?: string;
}

export interface Message {
  id: string;
  conversation_id: string;
  sender_id: string;
  sender_name: string;
  text: string;
  created_at: string;
  read: boolean;
}

export interface AdCampaign {
  id: string;
  seller_id: string;
  product_id: string;
  product_name: string;
  plan: 'basic' | 'standard' | 'premium';
  billing_period: 'weekly' | 'monthly' | 'yearly';
  periods_count: number;
  price_per_period: number;
  total_budget: number;
  start_date: string;
  end_date: string;
  status: 'active' | 'paused' | 'completed' | 'cancelled';
  impressions: number;
  clicks: number;
  spend: number;
  created_at: string;
}

export interface CryptoPayment {
  id: string;
  order_id: string;
  coin: string;
  amount: number;
  amount_in_coin: number;
  wallet_address: string;
  network: string;
  memo?: string;
  tx_hash?: string;
  status: 'pending' | 'confirmed' | 'failed' | 'expired';
  rate_used: number;
  expires_at: string;
  created_at: string;
}

export interface NigerianPaymentMethod {
  id: string;
  type: 'card' | 'bank_transfer' | 'ussd' | 'mobile_money' | 'cash_on_delivery' | 'crypto';
  label: string;
  description: string;
  icon: string;
}

export interface WalletBalance {
  balance: number;
  ledger_balance: number;
  pending_balance: number;
  currency: string;
}

export interface WalletTransaction {
  id: string;
  type: 'deposit' | 'withdrawal' | 'payment' | 'refund';
  amount: number;
  fee: number;
  net_amount: number;
  status: 'pending' | 'completed' | 'failed';
  reference: string;
  description: string;
  created_at: string;
}

export interface AdPlan {
  id: string;
  name: string;
  description: string;
  weekly_price: number;
  monthly_price: number;
  yearly_price: number;
  features: string[];
  impressions_estimate: string;
  clicks_estimate: string;
  badge?: string;
}
