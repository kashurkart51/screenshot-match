import {createFileRoute,Link} from '@tanstack/react-router';
import {shopHead} from '@/lib/shop/head';
import {Button} from '@/components/ui/button';
export const Route=createFileRoute('/about')({head:()=>shopHead('A little local. A lot of fresh.','A little local. A lot of fresh. KASHUR KART grocery delivery.'),component:Page});
function Page(){return <main className="shop-container page-space"><h1 className="page-title">A little local. A lot of fresh.</h1><p className="my-7 max-w-2xl text-sm leading-7 text-muted-foreground">KASHUR KART brings groceries and daily essentials closer to your home. Built for Kashmir, our neighbourhood-first approach puts freshness, care and everyday convenience at the heart of every kart.</p><Button asChild variant="outline"><Link to="/">Back to your neighbourhood store</Link></Button></main>;}
