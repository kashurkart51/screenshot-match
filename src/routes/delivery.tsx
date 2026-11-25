import {createFileRoute} from '@tanstack/react-router';
import {DeliveryPage} from '@/components/shop/admin';
import {shopHead} from '@/lib/shop/head';
import {catalogOptions} from '@/lib/shop/catalog.functions';
export const Route=createFileRoute('/delivery')({
 loader: ({context})=>context.queryClient.ensureQueryData(catalogOptions),
 head:()=>shopHead('Delivery partners','Authorized KASHUR KART partners manage their assigned deliveries.'),
 component: DeliveryPage,
});
