export interface IRouterController {
    get(id:number): any;
    getAll(req: Request, res: Response, next: any): any;
    post(id: number): void;
    put(id: number, payload: any): void;
}