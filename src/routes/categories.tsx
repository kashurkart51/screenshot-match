import {createFileRoute} from '@tanstack/react-router';
import {CategoriesPage} from '@/components/shop/storefront';
import {catalogOptions} from '@/lib/shop/catalog.functions';
import {shopHead} from '@/lib/shop/head';
export const Route=createFileRoute('/categories')({
 validateSearch:(s:Record<string,unknown>):{q?:string;category?:string}=>({q:typeof s['q']==='string'?s['q']:'',category:typeof s['category']==='string'?s['category']:''}),
 loader:({context})=>context.queryClient.ensureQueryData(catalogOptions),
 head:()=>shopHead('Shop fresh essentials','Browse grocery categories and search fresh products for local delivery across Kashmir.'),
 component:Page,
});
function Page(){const s=Route.useSearch();return <CategoriesPage q={s.q??''} category={s.category??''}/>;}
