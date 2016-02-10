import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'products-cmp',
  providers: [],
  template: '<h3>Products</h3>',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export default class ProductsCmp {}
