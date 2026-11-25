import {createFileRoute,Link} from '@tanstack/react-router';
import {shopHead} from '@/lib/shop/head';
import {Button} from '@/components/ui/button';
export const Route=createFileRoute('/terms')({head:()=>shopHead('Terms & conditions','Terms & conditions KASHUR KART grocery delivery.'),component:Page});
function Page(){return <main className="shop-container page-space"><h1 className="page-title">Terms & conditions</h1><p className="my-7 max-w-2xl text-sm leading-7 text-muted-foreground">Orders are subject to product availability and delivery coverage. Final prices and delivery charges are shown at checkout. Cash-on-delivery orders are paid when received. Delivery estimates are approximate. This store is in setup; detailed cancellation and refund terms will be finalized before launch.</p><Button asChild variant="outline"><Link to="/">Back to your neighbourhood store</Link></Button></main>;}
