import {describe,it,expect} from 'vitest';
import {cartTotals,couponDiscount,orderStatuses} from '@/lib/shop/rules';
describe('Grocery rules',()=>{
 it('charges Amul milk at ₹68 with ₹70 MRP',()=>{expect(cartTotals([{price:68,mrp:70,quantity:1}])).toMatchObject({subtotal:68,savings:2,total:98});});
 it('makes delivery free from ₹499',()=>{expect(cartTotals([{price:499,mrp:499,quantity:1}]).delivery).toBe(0);expect(cartTotals([{price:498,mrp:498,quantity:1}]).delivery).toBe(30);});
 it('applies a ₹100 coupon only when its minimum is met',()=>{const c={kind:'fixed',value:100,min_order:499,max_discount:100,active:true,expires_at:'2027-12-31',used:0,usage_limit:100};expect(couponDiscount(c,499,0)).toBe(100);expect(couponDiscount(c,498,0)).toBe(0);});
 it('honours percentage discount maximum',()=>{expect(couponDiscount({kind:'percent',value:20,min_order:0,max_discount:100,active:true,expires_at:'2027-12-31',used:0,usage_limit:100},1000,0)).toBe(100);});
 it('rejects expired or exhausted coupons',()=>{const c={kind:'fixed',value:100,min_order:0,max_discount:100,active:true,expires_at:'2020-01-01',used:0,usage_limit:1};expect(couponDiscount(c,100,Date.parse('2026-11-25'))).toBe(0);expect(couponDiscount({...c,expires_at:'2027-01-01',used:1},100,0)).toBe(0);});
 it('uses the requested six delivery stages',()=>{expect([...orderStatuses]).toEqual(['Order Placed','Confirmed','Preparing','Picked Up','Out for Delivery','Delivered']);});
});
