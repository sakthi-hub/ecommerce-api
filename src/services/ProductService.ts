import productModel from './../models/schemas/product.schemas';
import varientModel from './../models/schemas/varient.schemas';
import _ from "lodash";



export class ProductService {



    constructor() { }

            async addProduct(_userData: any) {

              
            const name = _userData.name;
            const description = _userData.description;
            const price = _userData.price;
            const size = _userData.size;
            const color = _userData.color;

            var myString1:string="";

            for(var i=0;i<size.length;i++){

              var myString2:string="";
            
            for(var j=0; j<color.length;j++){

              myString2 +=  size[i].itemName + ' - ' + color[j].itemName + ',';

            }
           
            myString1 +=  myString2;

            
            }

            
            const varObject:any ={
                    
              varient : myString1.substring(0, myString1.length - 1)

              }

           

            const product = new productModel({name: name,description: description,price: price});
            await product.save();
             

            const productId=product._id


            const varient = new varientModel({productId: productId,size:size,color:color,varient:varObject});
            await varient.save();

            return true;

           }


          async updateProduct(_userData: any) {

            const id =_userData.id;
            const name = _userData.name;
            const description = _userData.description;
            const price = _userData.price;
            const color = _userData.color;
            const size = _userData.size;

            var myString1:string="";

            for(var i=0;i<size.length;i++){

              var myString2:string="";
            
            for(var j=0; j<color.length;j++){

              myString2 +=  size[i].itemName + ' - ' + color[j].itemName + ',';

            }
           
            myString1 +=  myString2;

            
            }

            
            const varObject:any ={
                    
              varient : myString1.substring(0, myString1.length - 1)

              }
  
            await productModel.updateOne({"_id": id}, {"$set": {"name": name,"description": description,"price": price}}, {upsert: true});
           
            await varientModel.updateOne({"productId": id}, {"$set": {"color": color,"size": size,"varient": varObject}}, {upsert: true});
             

            return true;
        
          }


          async productList() {

            const productList= await varientModel.find().populate('productId'); 
            return productList;
          
          }


          async viewProduct(_userData: any) {

            const productId =_userData.id;

            const viewProduct:any = varientModel.find({productId:productId}).populate('productId');

            return viewProduct;
  
          }



          async deleteProduct(_userData: any) {

            const productId =_userData.id;

            const deleteProduct:any = varientModel.deleteOne({productId:productId}).populate('productId');

            return deleteProduct;
  
          } 

    
  

}
