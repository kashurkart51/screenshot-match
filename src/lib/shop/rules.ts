export const orderStatuses = ['Order Placed', 'Confirmed', 'Preparing', 'Picked Up', 'Out for Delivery', 'Delivered'] as const;
export const money = (n: number) => `₹${n.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
export function cartTotals(lines: { price: number; mrp: number; quantity: number }[], fee = 30, freeAbove = 499, discount = 0) {
 const subtotal = lines.reduce((n, p) => n + p.price * p.quantity, 0);
 const savings = lines.reduce((n, p) => n + (p.mrp - p.price) * p.quantity, 0);
 const delivery = subtotal === 0 || subtotal >= freeAbove ? 0 : fee;
 return { subtotal, savings, delivery, discount, total: Math.max(0, subtotal + delivery - discount) };
}
export function couponDiscount(c: { kind: string; value: number; min_order: number; max_discount: number; active: boolean; expires_at: string; used: number; usage_limit: number }, subtotal: number, now = Date.now()) {
 if (!c.active || Date.parse(c.expires_at) < now || c.used >= c.usage_limit || subtotal < c.min_order) return 0;
 return Math.min(subtotal, c.max_discount, c.kind === 'percent' ? subtotal * c.value / 100 : c.value);
}
