import { ProductController } from '../controllers/ProductController';
import { ProductRequestMiddleware } from '../middlewares/ProductRequestMiddleware';




export class Routes {
    private productController = new ProductController()

    constructor() {
      
    }



  public routes(app: any): void {
        
  

       app.post('/api/addProduct',this.productController.addProduct)
       app.get('/api/productList',this.productController.productList)
       app.post('/api/viewProduct',this.productController.viewProduct)
       app.post('/api/updateProduct',this.productController.updateProduct)
       app.post('/api/deleteProduct',this.productController.deleteProduct)



  
  }

}
