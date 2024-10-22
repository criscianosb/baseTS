import express, { Application, Router } from "express"

export class ExpressController {
    constructor(private express: any) {
        this.express = express()
        this.middleware();
    }

    private middleware(): void {
        this.express.use(express.json())
    }

    use(route: Router | any) {
        this.express.use(route)
    }

    listen(port: number) {
        this.express.listen(port, () => `Server running on port ${port}`)
    }
}