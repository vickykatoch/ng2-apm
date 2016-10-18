import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';
import {ProductListComponent} from './products/product-list.component'; 
import {ProductService} from './products/product.service';
import {WelcomeComponent} from './home/welcome.component';
import {ProductDetailsComponent} from './products/product-details.component';

import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';


@Component({
    selector: 'pm-app',
    template: `<div>
    <nav class='navbar navbar-default'>
        <div class='container-fluid'>
            <a class='navbar-brand'>{{pageTitle}}</a>
            <ul class='nav navbar-nav'>
                <li><a [routerLink]="['Home']">Home</a></li>
                <li><a [routerLink]="['Products']">Products</a></li>
            </ul>
        </div>
    </nav>
    <div class='container'>
            <router-outlet></router-outlet>
        </div>
    </div>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [ProductService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@RouteConfig([
    {path: '/home', name : 'Home' , component : WelcomeComponent, useAsDefault:true},
    {path: '/products', name : 'Products' , component : ProductListComponent},
    {path: '/products/:id', name : 'ProdectDetail' , component : ProductDetailsComponent},
])
export class AppComponent{
    pageTitle : string = 'ACME Product Management';

}