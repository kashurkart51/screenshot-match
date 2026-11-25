import {createFileRoute} from '@tanstack/react-router';
import {ProfilePage} from '@/components/shop/account';
import {shopHead} from '@/lib/shop/head';
import {catalogOptions} from '@/lib/shop/catalog.functions';
export const Route=createFileRoute('/profile')({
 loader: ({context})=>context.queryClient.ensureQueryData(catalogOptions),
 head:()=>shopHead('Your account','Manage your profile, saved addresses and favourite products.'),
 component: ProfilePage,
});
