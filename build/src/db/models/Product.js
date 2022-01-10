"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(name, code, brand, price, currency, productBullets, productDescription, category, colors, sizes, weightUnit, productWeight, productLength, lengthUnit, ProductWidth, ProductHeight, PackageWeight, PackageLength, PackageWidth, PackageHeight) {
        this.name = name;
        this.code = code;
        this.brand = brand;
        this.price = price;
        this.currency = currency;
        this.productBullets = productBullets;
        this.productDescription = productDescription;
        this.category = category;
        this.colors = colors;
        this.sizes = sizes;
        this.weightUnit = weightUnit;
        this.productWeight = productWeight;
        this.productLength = productLength;
        this.lengthUnit = lengthUnit;
        this.ProductWidth = ProductWidth;
        this.ProductHeight = ProductHeight;
        this.PackageWeight = PackageWeight;
        this.PackageLength = PackageLength;
        this.PackageWidth = PackageWidth;
        this.PackageHeight = PackageHeight;
    }
}
exports.default = Product;
