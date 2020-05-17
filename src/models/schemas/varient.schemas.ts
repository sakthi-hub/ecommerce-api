import * as mongoose from 'mongoose';
import {IVarient} from '../interfaces/varient';

const varientSchema = new mongoose.Schema({
  productId: {
        ref: 'Product',
        type: mongoose.Schema.Types.ObjectId,
      },
      size : [{
        itemName : String,
    }],
    color : [{
      itemName : String,
  }]
},

{timestamps: true});
 
const varientModel = mongoose.model<IVarient & mongoose.Document>('Varient', varientSchema);
 
export default varientModel;