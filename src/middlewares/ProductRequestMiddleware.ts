import { Request, Response } from 'express'
import Joi from '@hapi/joi';
import { ResponseWrapperUtil } from '../utils/ResponseWrapperUtil';
import { CommonUtil } from '../utils/CommonUtil';
import { AppConstants } from '../config/AppConstants';

export class ProductRequestMiddleware {
     
    static verifyAddProductRequest(req: Request, res: Response, next: any) {
        const schema = Joi.object().keys({
        name:   Joi.string().required(),
        description: Joi.string().required(), 
        price: Joi.string().required()
        
        })
        const data = req.body;
        schema.validate(data, (err:any, value:any) => {
            if(err){
                ResponseWrapperUtil.sendBadRequestResponse(res, {
                    apiId: CommonUtil.getApiId('add-product'),
                    responseCode: AppConstants.RESPONSE_CODES.FAIL,
                    message: err.details[0].message.toString()
                })
            }
            else {
                next()
            }
        })
    }


      static verifyUpdateProductRequest(req: Request, res: Response, next: any) {
        const schema = Joi.object().keys({
        id:   Joi.string().required(),
        name:   Joi.string().required(),
        description: Joi.string().required(), 
        price: Joi.string().required(),
        size: Joi.string().required(),
        color: Joi.string().required()
        })
        const data = req.body;
        schema.validate(data, (err:any, value:any) => {
            if(err){
                ResponseWrapperUtil.sendBadRequestResponse(res, {
                    apiId: CommonUtil.getApiId('update-product'),
                    responseCode: AppConstants.RESPONSE_CODES.FAIL,
                    message: err.details[0].message.toString()
                })
            }
            else {
                next()
            }
        })
    }




      static verifyViewProductRequest(req: Request, res: Response, next: any) {
        const schema = Joi.object().keys({
        id:   Joi.string().required()
        })
        const data = req.body;
        schema.validate(data, (err:any, value:any) => {
            if(err){
                ResponseWrapperUtil.sendBadRequestResponse(res, {
                    apiId: CommonUtil.getApiId('view-product'),
                    responseCode: AppConstants.RESPONSE_CODES.FAIL,
                    message: err.details[0].message.toString()
                })
            }
            else {
                next()
            }
        })
    }


       static verifyDeleteProductRequest(req: Request, res: Response, next: any) {
        const schema = Joi.object().keys({
        id:   Joi.string().required()
        })
        const data = req.body;
        schema.validate(data, (err:any, value:any) => {
            if(err){
                ResponseWrapperUtil.sendBadRequestResponse(res, {
                    apiId: CommonUtil.getApiId('delete-product'),
                    responseCode: AppConstants.RESPONSE_CODES.FAIL,
                    message: err.details[0].message.toString()
                })
            }
            else {
                next()
            }
        })
    }

  





    

  




   





}