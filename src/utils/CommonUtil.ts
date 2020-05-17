export class CommonUtil{
   static getApiId(id:String){
        return `${process.env.APP_NAME}.api.${id}`;
    }
}