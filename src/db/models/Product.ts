import  mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  code: {
	type: String,
	required: true
  },
  brand: {
    type: String,
    required: true
  },
  price: {
    type:  Number,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  productBullets: {
    type: [String],
    required: true
  },
  productDescription: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  metaKeywords: {
    type:  [String],
    required: true
  },
  colors: {
    type:  [String],
    required: true
  },
  sizes: {
    type:  [String],
    required: true
  },
  weightUnit: {
    type:  String,
    required: true
  },
  productWeight: {
    type:  [Number],
    required: true
  }, 
  productLength: {
    type:  [Number],
    required: true
  },
  lengthUnit: {
    type:  String,
    required: true
  },
  ProductWidth: {
    type:  [Number],
    required: true
  },
  ProductHeight: {
    type:  [Number],
    required: true
  },
  PackageWeight: {
    type:  [Number],
    required: true
  },
  PackageLength: {
    type:  [Number],
    required: true
  },
  PackageWidth: {
    type:  [Number],
    required: true
  },
  PackageHeight: {
    type:  [Number],
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

export default Product;

