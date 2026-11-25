import {createFileRoute} from '@tanstack/react-router';
import {AdminPage} from '@/components/shop/admin';
import {shopHead} from '@/lib/shop/head';
import {catalogOptions} from '@/lib/shop/catalog.functions';
export const Route=createFileRoute('/admin')({
 loader: ({context})=>context.queryClient.ensureQueryData(catalogOptions),
 head:()=>shopHead('Owner dashboard','Authorized KASHUR KART owners manage products, stock and orders.'),
 component: AdminPage,
});
