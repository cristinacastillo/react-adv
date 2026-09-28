
import { JSX, lazy, LazyExoticComponent, ComponentType } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';
/*  import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages'
 */
type JSXComponent = () => JSX.Element;


interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<ComponentType<any>> | JSXComponent;
    name: string;
}


const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyPage1"*/'../01-lazyload/layout/LazyLayout'))

export const routes: Route[] = [
    {
        to: '/lazyload',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'Lazy Layout'
    },
    {
        to: '/no-lazy',
        path: 'nolazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
]