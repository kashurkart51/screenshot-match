import {createContext,useContext,useState,useEffect,type ReactNode} from 'react';
import {useQuery,useQueryClient} from '@tanstack/react-query';
import {supabase} from '@/integrations/supabase/client';
import type {User} from '@supabase/supabase-js';
import {catalogOptions,type Product} from '@/lib/shop/catalog.functions';
import {toast} from 'sonner';
type Cart=Record<string,number>;
type ShopContext={user:User|null;authReady:boolean;roles:string[];cart:Cart;city:string;setCity:(city:string)=>void;add:(p:Product,delta?:number)=>void;remove:(id:string)=>void;clear:()=>void;authOpen:boolean;setAuthOpen:(open:boolean)=>void;wishlist:string[];toggleWish:(id:string)=>Promise<void>;product:Product|null;setProduct:(p:Product|null)=>void;search:string;setSearch:(s:string)=>void};
const Context=createContext<ShopContext|null>(null);
export function ShopProvider({children}:{children:ReactNode}) {
 const [user,setUser]=useState<User|null>(null);const [authReady,setAuthReady]=useState(false);const [roles,setRoles]=useState<string[]>([]);const [cart,setCart]=useState<Cart>({});const [city,setCity]=useState('Srinagar');const [authOpen,setAuthOpen]=useState(false);const [product,setProduct]=useState<Product|null>(null);const [search,setSearch]=useState('');
 const qc=useQueryClient();
 useEffect(()=>{supabase.auth.getUser().then(({data})=>{setUser(data.user);setAuthReady(true);});const {data}=supabase.auth.onAuthStateChange((event,session)=>{if(event==='SIGNED_IN'||event==='SIGNED_OUT'||event==='USER_UPDATED'){setUser(session?.user??null);if(event==='SIGNED_OUT'){setRoles([]);qc.removeQueries({queryKey:['private']});}else qc.invalidateQueries({queryKey:['private']});}});return()=>data.subscription.unsubscribe();},[qc]);
 useEffect(()=>{if(!user){setRoles([]);return;}supabase.from('user_roles').select('role').eq('user_id',user.id).then(({data})=>setRoles((data??[]).map(r=>r.role)));},[user]);
 const {data:wishes}=useQuery({queryKey:['private','wishlist',user?.id],enabled:!!user,queryFn:async()=>{const {data,error}=await supabase.from('wishlist').select('product_id');if(error)throw error;return data??[];}});
 const wishlist=(wishes??[]).map(w=>w.product_id);
 const add=(p:Product,delta=1)=>setCart(old=>{const q=Math.min(p.stock,Math.max(0,(old[p.id]??0)+delta));if(q===0){const next={...old};delete next[p.id];return next;}return {...old,[p.id]:q};});
 const toggleWish=async(id:string)=>{if(!user){setAuthOpen(true);return;}const r=wishlist.includes(id)?await supabase.from('wishlist').delete().eq('user_id',user.id).eq('product_id',id):await supabase.from('wishlist').insert({user_id:user.id,product_id:id});if(r.error)toast.error(r.error.message);else qc.invalidateQueries({queryKey:['private','wishlist']});};
 return <Context.Provider value={{user,authReady,roles,cart,city,setCity,add,remove:id=>setCart(old=>{const next={...old};delete next[id];return next;}),clear:()=>setCart({}),authOpen,setAuthOpen,wishlist,toggleWish,product,setProduct,search,setSearch}}>{children}</Context.Provider>;
}
export function useShop(){const context=useContext(Context);if(!context)throw new Error('Shop provider missing');return context;}
export function useCatalog(){return useQuery(catalogOptions);}
