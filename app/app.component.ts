import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';
import {ProductListComponent} from './products/product-list.component'; 
import {ProductService} from './products/product.service';

@Component({
    selector: 'pm-app',
    template: `<div>
    <nav class='navbar navbar-default'>
        <div class='container-fluid'>
            <a class='navbar-brand'>{{pageTitle}}</a>
            <ul class='nav navbar-nav'>
                <li><a>Home</a></li>
                <li><a>Products</a></li>
            </ul>
        </div>
    </nav>
    <div class='container'>
            <pm-products></pm-products>
        </div>
    </div>`,
    directives: [ProductListComponent],
    providers: [ProductService, HTTP_PROVIDERS]
})
export class AppComponent{
    pageTitle : string = 'ACME Product Management';
}