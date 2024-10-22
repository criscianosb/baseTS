import { Router } from "express";

export class RouterController {
    public router: Router

    constructor(private routerService: any) {
        this.router = Router();
        this.execute()
    }

    private async execute() {
        this.routerService.execute(this.router)
    }

    getRoutes() {
        return this.router
    }
}