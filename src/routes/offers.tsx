import {createFileRoute} from '@tanstack/react-router';
import {OffersPage} from '@/components/shop/account';
import {shopHead} from '@/lib/shop/head';
import {catalogOptions} from '@/lib/shop/catalog.functions';
export const Route=createFileRoute('/offers')({
 loader: ({context})=>context.queryClient.ensureQueryData(catalogOptions),
 head:()=>shopHead('Offers and coupons','Save on fresh groceries and everyday essentials with KASHUR KART offers.'),
 component: OffersPage,
});
