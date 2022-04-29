import  express,{Application} from "express";
import morgan from "morgan";
import router from "./routes/indexroutes";
import cors from "cors";
export class App{
    app:Application;
    constructor(){
        this.app = express();
        this.settings();
        this.router();
    }
    settings(){
        this.app.use(morgan("dev"));
        this.app.use(express.json());
        this.app.use(
            express.urlencoded({
                extended:true,
            })
        )
        this.app.use(cors())

    }
    router(){
        this.app.use(router);
    }
    async listen(){
        await this.app.listen(5000);
        console.log('server on port 5000');
    }
}
