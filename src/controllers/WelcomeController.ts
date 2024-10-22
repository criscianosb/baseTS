import { IRouterController } from "../application/IRouterController";
import { WelcomeService } from "../services/WelcomeService";

export class WelcomeController implements IRouterController {

    constructor(private welcomeService: WelcomeService){}

    get(props: any): any {}

    getAll(): any{
        console.log('Welcome router executed controller');  
        return this.welcomeService.getAll();
    }

    post(id: number): any{}
    put(id: number, payload: any){}

}