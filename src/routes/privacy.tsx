import {createFileRoute,Link} from '@tanstack/react-router';
import {shopHead} from '@/lib/shop/head';
import {Button} from '@/components/ui/button';
export const Route=createFileRoute('/privacy')({head:()=>shopHead('Your privacy matters','Your privacy matters KASHUR KART grocery delivery.'),component:Page});
function Page(){return <main className="shop-container page-space"><h1 className="page-title">Your privacy matters</h1><p className="my-7 max-w-2xl text-sm leading-7 text-muted-foreground">Your account information, delivery addresses and order details are used to fulfil your shopping requests. Your private records are restricted to your account and authorized shop staff. Payment card details are not collected by this application. The complete privacy policy will be finalized before launch.</p><Button asChild variant="outline"><Link to="/">Back to your neighbourhood store</Link></Button></main>;}
