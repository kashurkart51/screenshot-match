import { createServerFn } from '@tanstack/react-start';
import { createClient } from '@supabase/supabase-js';
import { queryOptions } from '@tanstack/react-query';
import type { Database } from '@/integrations/supabase/types';
export type Product = Database['public']['Tables']['products']['Row'];
export type Category = Database['public']['Tables']['categories']['Row'];
export type Address = Database['public']['Tables']['addresses']['Row'];
export type Order = Database['public']['Tables']['orders']['Row'];
export const getCatalog = createServerFn({method:'GET'}).handler(async () => {
 const url = process.env['SUPABASE_URL']; const key = process.env['SUPABASE_PUBLISHABLE_KEY'];
 if (!url || !key) throw new Error('Shop connection is not available');
 const db=createClient<Database>(url,key,{auth:{persistSession:false,autoRefreshToken:false},global:{fetch:(input,init)=>{const h=new Headers(init?.headers);if(key.startsWith('sb_')&&h.get('Authorization')===`Bearer ${key}`)h.delete('Authorization');h.set('apikey',key);return fetch(input,{...init,headers:h});}}});
 const [products,categories,areas,coupons,slots]=await Promise.all([db.from('products').select('*').order('created_at'),db.from('categories').select('*').order('sort_order'),db.from('delivery_areas').select('*').order('name'),db.from('coupons').select('*'),db.from('delivery_slots').select('*').order('id')]);
 for(const r of [products,categories,areas,coupons,slots]) if(r.error)throw new Error(r.error.message);
 return {products:products.data??[],categories:categories.data??[],areas:areas.data??[],coupons:coupons.data??[],slots:slots.data??[]};
});
export const catalogOptions = queryOptions({queryKey:['catalog'],queryFn:()=>getCatalog(),staleTime:60_000});
