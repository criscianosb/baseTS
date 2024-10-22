export class WelcomeService {
    constructor(){}

    get(id: number): any {}

    getAll(): string {        
        console.log('Welcome router executed service getall');  
        try {
           return 'welcome ts';
        } catch (error: any) {
            return error.message;  
        }
    }
    post(id: number): any{}
    put(id: number, payload: any){}
}