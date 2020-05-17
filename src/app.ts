import * as bodyParser from 'body-parser';
import express from 'express';
import path from "path";
import mongoose = require('mongoose');
import Controller from './interfaces/controller.interface';
import { Routes } from "./routes/routes";
import cors from "cors";



 
class App {
  public app: express.Application;
 
  constructor(controllers: Controller[]) {
    
    
    this.app = express();
    this.connectToTheDatabase();
    this.initializeMiddlewares();

  }
 
  public listen() {

  
    this.app.listen(process.env.PORT, () => {
      console.log(`App listening on the port ${process.env.PORT}`);
    });
  }
 
  private initializeMiddlewares() {

    
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true })); 
    this.app.use(cors());
    let routePrv: Routes = new Routes();
    routePrv.routes(this.app);
  }
  private connectToTheDatabase() {
   
    const {
      MONGO_PATH,
    } = process.env;
    mongoose.connect(`${MONGO_PATH}`,{ useNewUrlParser: true ,useUnifiedTopology: true, useFindAndModify: false}).then(
        () => {console.log('Database is connected') },
        err => { console.log('Can not connect to the database'+ err)}
      );
  }
  

  
}
 
export default App;



