import {createFileRoute} from '@tanstack/react-router';
import {SubscriptionsPage} from '@/components/shop/account';
import {shopHead} from '@/lib/shop/head';
import {catalogOptions} from '@/lib/shop/catalog.functions';
export const Route=createFileRoute('/subscriptions')({
 loader: ({context})=>context.queryClient.ensureQueryData(catalogOptions),
 head:()=>shopHead('Daily milk','Save your milk delivery preferences for upcoming daily subscriptions.'),
 component: SubscriptionsPage,
});
