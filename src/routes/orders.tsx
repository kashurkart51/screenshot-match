import {createFileRoute} from '@tanstack/react-router';
import {OrdersPage} from '@/components/shop/orders';
import {shopHead} from '@/lib/shop/head';
import {catalogOptions} from '@/lib/shop/catalog.functions';
export const Route=createFileRoute('/orders')({
  validateSearch: (search: Record<string, unknown>)=>({track:typeof search['track']==='string'?search['track']:''}),
 loader: ({context})=>context.queryClient.ensureQueryData(catalogOptions),
 head:()=>shopHead('Your orders','Track your KASHUR KART grocery deliveries and browse previous orders.'),
 component: OrdersRoute,
});
function OrdersRoute(){const {track}=Route.useSearch();return <OrdersPage track={track}/>;}
