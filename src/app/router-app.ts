import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

//import {AdminCmp} from './admin/admin-cmp';
//import {StoreCmp} from './store/store-cmp';

@Component({
  selector: 'router-app',
  providers: [],
  templateUrl: 'app/router-app.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  {path: 'admin/...', loader: makeLoader('app/admin/admin-cmp.js'), name: 'Admin'},
  {path: 'store/...', loader: makeLoader('app/store/store-cmp.js'), useAsDefault: true, name: 'Store'}
])
export class RouterApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}


function makeLoader(path: string) {
  return () => window['System'].import(path).then((mod) => mod.default);
}
