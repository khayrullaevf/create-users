import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoggerService{
    LogMessage(name: string, status: string){
        alert(`A new user with name ${name} with status ${status} is added to user list.`)
    }
}
