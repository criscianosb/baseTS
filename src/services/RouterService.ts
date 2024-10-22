import { Router, Request, Response } from "express";
import { IRouterService } from "../application/IRouterService";
import { WelcomeController } from "../controllers/WelcomeController";
import { WelcomeService } from "./WelcomeService";

export class RouterService implements IRouterService{
    constructor(){}

    execute(router: Router): void {
        
        console.log('Welcome router executed starting');
        router.get('/', (req: Request, res: Response)=> {
            const welcomeService = new WelcomeService()
            const welcomeController = new WelcomeController(welcomeService)
            try {
                res.status(200).json({
                    data: welcomeController.getAll(),
                    status: 'success'
                })
                
            } catch (error) {
                res.status(404).json({ 
                    error: error,
                    status: 'error',
                })
                
            }


        })

        router.post('/add', (req: Request, res: Response) => {
            res.json({
                data: req.body,
                status: 'success'
            })
        })
    }

}