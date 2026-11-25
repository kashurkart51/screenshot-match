import {createFileRoute} from '@tanstack/react-router';
import {CartPage} from '@/components/shop/checkout';
import {shopHead} from '@/lib/shop/head';
import {catalogOptions} from '@/lib/shop/catalog.functions';
export const Route=createFileRoute('/checkout')({
 loader: ({context})=>context.queryClient.ensureQueryData(catalogOptions),
 head:()=>shopHead('Checkout','Choose your delivery address and time, then place your grocery order.'),
 component: ()=> <CartPage checkout />,
});
