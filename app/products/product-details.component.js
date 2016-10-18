System.register(['angular2/core', '../shared/star.component', './product.service', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, star_component_1, product_service_1, router_1;
    var ProductDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (star_component_1_1) {
                star_component_1 = star_component_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ProductDetailsComponent = (function () {
                function ProductDetailsComponent(productService, _router, _routeParams) {
                    this.productService = productService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.title = "Product Details";
                }
                ProductDetailsComponent.prototype.ngOnInit = function () {
                    var id = +this._routeParams.get('id');
                    this.getProduct(id);
                };
                ProductDetailsComponent.prototype.getProduct = function (id) {
                    var _this = this;
                    this.productService.getProduct(id)
                        .subscribe(function (product) { return _this.product = product; }, function (error) { return _this.errorMessage = error; });
                };
                ProductDetailsComponent.prototype.onBack = function () {
                    this._router.navigate(['Products']);
                };
                ProductDetailsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/products/product-details.component.html',
                        directives: [star_component_1.StarComponent]
                    }), 
                    __metadata('design:paramtypes', [product_service_1.ProductService, router_1.Router, router_1.RouteParams])
                ], ProductDetailsComponent);
                return ProductDetailsComponent;
            }());
            exports_1("ProductDetailsComponent", ProductDetailsComponent);
        }
    }
});
//# sourceMappingURL=product-details.component.js.map