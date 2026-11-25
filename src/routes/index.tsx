import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from '@/components/shop/storefront';
import { catalogOptions } from '@/lib/shop/catalog.functions';
export const Route = createFileRoute("/")({
  loader: ({context})=>context.queryClient.ensureQueryData(catalogOptions),
  head: ()=>({meta:[{title:'KASHUR KART · कशुर कार्ट | Fresh groceries in Kashmir'},{name:'description',content:'Shop fresh produce, milk, groceries and daily essentials. Local doorstep delivery across Kashmir.'},{property:'og:title',content:'KASHUR KART · Your neighbourhood grocery store'},{property:'og:description',content:'Fresh groceries and daily essentials delivered across Kashmir.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
  component: HomePage,
});
