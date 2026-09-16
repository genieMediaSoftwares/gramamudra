import { CartItem, CheckoutForm, Product } from '../types';
import { BRAND_CONFIG } from '../data/brandConfig';

/**
 * WhatsApp Ordering & Inquiry Utilities
 * Generates pre-filled, cleanly formatted WhatsApp messages for instant commerce.
 */

export function generateWhatsAppOrderUrl(
  items: CartItem[],
  customer?: Partial<CheckoutForm>,
  customNotes?: string
): string {
  const number = BRAND_CONFIG.contact.whatsappNumber;
  
  const lines: string[] = [];
  lines.push(`Namaste Grama Mudra,`);
  lines.push(``);
  lines.push(`I would like to place an order for the following traditional items:`);
  lines.push(``);

  let subtotal = 0;
  items.forEach((item, index) => {
    const itemTotal = item.product.price * item.quantity;
    subtotal += itemTotal;
    lines.push(`${index + 1}. ${item.quantity} × ${item.product.name} (${item.product.weight}) – ₹${itemTotal}`);
  });

  lines.push(``);
  lines.push(`*Estimated Total:* ₹${subtotal}`);
  lines.push(``);

  if (customer && customer.fullName) {
    lines.push(`*Delivery Details:*`);
    lines.push(`• Name: ${customer.fullName}`);
    if (customer.phone) lines.push(`• Contact: ${customer.phone}`);
    if (customer.address) lines.push(`• Address: ${customer.address}`);
    if (customer.city || customer.pincode) {
      lines.push(`• City/PIN: ${customer.city || ''} - ${customer.pincode || ''}`);
    }
    if (customer.state) lines.push(`• State: ${customer.state}`);
  }

  const finalNotes = customNotes || (customer && customer.notes);
  if (finalNotes) {
    lines.push(``);
    lines.push(`*Order Notes:* ${finalNotes}`);
  }

  lines.push(``);
  lines.push(`Please confirm item availability, shipping charges, and delivery schedule. Thank you!`);

  const message = lines.join('\n');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function generateSingleProductWhatsAppUrl(product: Product, quantity = 1): string {
  const number = BRAND_CONFIG.contact.whatsappNumber;
  const total = product.price * quantity;

  const lines = [
    `Namaste Grama Mudra,`,
    ``,
    `I am interested in ordering:`,
    `• ${quantity} × ${product.name} (${product.weight}) – ₹${total}`,
    ``,
    `Could you please share availability and delivery options to my location?`,
    `Thank you!`
  ];

  return `https://wa.me/${number}?text=${encodeURIComponent(lines.join('\n'))}`;
}

export function generateGeneralInquiryWhatsAppUrl(topic = "Traditional Millet Products"): string {
  const number = BRAND_CONFIG.contact.whatsappNumber;
  const message = `Namaste Grama Mudra, I visited your website and would like to know more about your ${topic} from Srikakulam. Could you please assist me?`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
