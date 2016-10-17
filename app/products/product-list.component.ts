import {Component, OnInit} from 'angular2/core';
import {IProduct} from './product';
import {ProductFilterPipe} from './product-filter.pipe';
import {StarComponent} from '../shared/star.component';
import { ProductService } from './product.service';

@Component({
    selector:'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    pipes : [ProductFilterPipe],
    directives:[StarComponent]
})
export class ProductListComponent implements OnInit{
    title: string = 'Product List';
    imageWidth : number=50;
    imageVisible:boolean = false;
    filter: string = '';
    errorMessage : any;
    products : IProduct[];

    constructor(private _productService : ProductService){
    }


    toggleImage():void{
        this.imageVisible=!this.imageVisible;
    }
    onRatingClicked(message: string):void{
        this.title = `Product List : ${message}`;
    }
    ngOnInit(): void{
        this._productService.getProducts()
            .subscribe(
                products=> this.products = products,
                error => this.errorMessage = <any>error);

    }
}

