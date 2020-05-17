import { Request, Response ,NextFunction } from "express";
import { AppConstants } from '../config/AppConstants';
import { ProductService } from "./../services/ProductService";
import { ResponseWrapperUtil } from "./../utils/ResponseWrapperUtil";
import { CommonUtil } from "./../utils/CommonUtil";


export class ProductController {
  productService: ProductService = new ProductService();

   
  constructor() {}

addProduct =  (req: Request, res: Response) => {

    this.productService.addProduct(req.body).then(
      result => {
        ResponseWrapperUtil.sendSuccessResponse(res, {
          apiId: CommonUtil.getApiId("add-product"),
          responseCode: AppConstants.RESPONSE_CODES.OK,
          data: {result},
          message: "Product added successfully"
        });
      },
      err => {
        ResponseWrapperUtil.sendErrorResponse(res, {
          apiId: CommonUtil.getApiId("add-product"),
          responseCode: AppConstants.RESPONSE_CODES.FAIL,
          message: err.message || "Error in add product",
          error: err.message
        });
      }
    );
      
};



updateProduct =  (req: Request, res: Response) => {

  this.productService.updateProduct(req.body).then(
    result => {
      ResponseWrapperUtil.sendSuccessResponse(res, {
        apiId: CommonUtil.getApiId("update-product"),
        responseCode: AppConstants.RESPONSE_CODES.OK,
        data: {result},
        message: "Product Updated successfully"
      });
    },
    err => {
  
      ResponseWrapperUtil.sendErrorResponse(res, {
        apiId: CommonUtil.getApiId("update-product"),
        responseCode: AppConstants.RESPONSE_CODES.FAIL,
        message: err.message || "Error in product update",
        error: err.message
      });
    }
  );

}; 

productList =  (req: Request, res: Response) => {

  this.productService.productList().then(
    result => {
  
      ResponseWrapperUtil.sendSuccessResponse(res, {
        apiId: CommonUtil.getApiId("list-product"),
        responseCode: AppConstants.RESPONSE_CODES.OK,
        data: {result},
        message: "Product list"
      });
    },
    err => {
  
      ResponseWrapperUtil.sendErrorResponse(res, {
        apiId: CommonUtil.getApiId("list-product"),
        responseCode: AppConstants.RESPONSE_CODES.FAIL,
        message: err.message || "Error in product list",
        error: err.message
      });
    }
  );

}; 


viewProduct =  (req: Request, res: Response) => {

  this.productService.viewProduct(req.body).then(
    result => {
  
      ResponseWrapperUtil.sendSuccessResponse(res, {
        apiId: CommonUtil.getApiId("view-product"),
        responseCode: AppConstants.RESPONSE_CODES.OK,
        data: {result},
        message: "View product successfully"
      });
    },
    err => {
  
      ResponseWrapperUtil.sendErrorResponse(res, {
        apiId: CommonUtil.getApiId("view-product"),
        responseCode: AppConstants.RESPONSE_CODES.FAIL,
        message: err.message || "Error in product view",
        error: err.message
      });
    }
  );

}; 

deleteProduct =  (req: Request, res: Response) => {

  this.productService.deleteProduct(req.body).then(
    result => {
  
      ResponseWrapperUtil.sendSuccessResponse(res, {
        apiId: CommonUtil.getApiId("delete-product"),
        responseCode: AppConstants.RESPONSE_CODES.OK,
        data: {result},
        message: "Product delete successfully"
      });
    },
    err => {
  
      ResponseWrapperUtil.sendErrorResponse(res, {
        apiId: CommonUtil.getApiId("delete-product"),
        responseCode: AppConstants.RESPONSE_CODES.FAIL,
        message: err.message || "Error in product delete",
        error: err.message
      });
    }
  );

}; 



  
}
