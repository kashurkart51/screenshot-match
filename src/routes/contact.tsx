import {createFileRoute,Link} from '@tanstack/react-router';
import {shopHead} from '@/lib/shop/head';
import {Button} from '@/components/ui/button';
export const Route=createFileRoute('/contact')({head:()=>shopHead('Here for you, every step of the way.','Here for you, every step of the way. KASHUR KART grocery delivery.'),component:Page});
function Page(){return <main className="shop-container page-space"><h1 className="page-title">Here for you, every step of the way.</h1><p className="my-7 max-w-2xl text-sm leading-7 text-muted-foreground">For help with an order, include your order number when contacting the shop. Our customer support contact details will be available before deliveries launch.</p><Button asChild variant="outline"><Link to="/">Back to your neighbourhood store</Link></Button></main>;}
