import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

// import {UsersCmp} from './users/users-cmp';
// import {ProductsCmp} from './products/products-cmp';

@Component({
  selector: 'admin-cmp',
  providers: [],
  templateUrl: 'app/admin/admin-cmp.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  {path: '/users', loader: makeLoader('app/admin/users/users-cmp.js'), name: 'Users', useAsDefault: true},
  {path: '/products', loader: makeLoader('app/admin/products/products-cmp.js'), name: 'Products'}
])
export default class AdminCmp {}


function makeLoader(path: string) {
  return () => window['System'].import(path).then((mod) => mod.default);
}
