import {Component, OnInit} from 'angular2/core';
import {StarComponent} from '../shared/star.component';
import {IProduct} from './product';
import {ProductService} from './product.service';
import {Router, RouteParams} from 'angular2/router';

@Component({
      templateUrl:'app/products/product-details.component.html',
      directives :[StarComponent]
})
export class ProductDetailsComponent implements OnInit{
      product : IProduct;
      errorMessage: any;
      title : string = "Product Details";

      constructor(private productService : ProductService,
                        private _router: Router, 
                        private _routeParams : RouteParams) {
      }

      ngOnInit():void{
            let id = +this._routeParams.get('id');
            this.getProduct(id);
      }
      private  getProduct(id: number) : void {
            this.productService.getProduct(id)
                  .subscribe(
                        product => this.product = product,
                        error => this.errorMessage = <any>error);
      }
      onBack():void{
            this._router.navigate(['Products']);
      }
}