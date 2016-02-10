import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

//import {CartCmp} from './cart/cart-cmp';
//import {ProductsCmp} from './products/products-cmp';

@Component({
  selector: 'store-cmp',
  providers: [],
  templateUrl: 'app/store/store-cmp.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  {path: '/cart', loader: makeLoader('app/store/cart/cart-cmp.js'), name: 'Cart', useAsDefault: true},
  {path: '/products', loader: makeLoader('app/store/products/products-cmp.js'), name: 'Products'}
])
export default class StoreCmp {}


function makeLoader(path: string) {
  return () => window['System'].import(path).then((mod) => mod.default);
}
