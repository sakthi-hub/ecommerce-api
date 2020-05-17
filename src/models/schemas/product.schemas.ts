import * as mongoose from 'mongoose';
import {IProduct} from '../interfaces/product';

const productSchema = new mongoose.Schema({
   name: {
        type: String,
      },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
},

{timestamps: true});
 
const productModel = mongoose.model<IProduct & mongoose.Document>('Product', productSchema);
 
export default productModel;