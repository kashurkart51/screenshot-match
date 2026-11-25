import {createFileRoute} from '@tanstack/react-router';
import {CartPage} from '@/components/shop/checkout';
import {shopHead} from '@/lib/shop/head';
import {catalogOptions} from '@/lib/shop/catalog.functions';
export const Route=createFileRoute('/cart')({
 loader: ({context})=>context.queryClient.ensureQueryData(catalogOptions),
 head:()=>shopHead('Your kart','Review your fresh essentials, quantities and savings.'),
 component: CartPage,
});
