import { Router } from "express";

export interface IRouterService {
    execute(router: Router): void
}