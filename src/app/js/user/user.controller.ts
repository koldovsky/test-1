import {app} from '../app';

class User {
    public name: string;
    public id: number;

    constructor(id:number, name: string){
        this.id = id;
        this.name = name;
    }
}

export default class UserController {

    private _name: string;
    private _users: User[];

    constructor(name: string) {
        this._name = 'my name';
        const users: User[] = [new User(1, 'q'), new User(2, 'qq')]; 
    }

    save(): void {
        //toDo
    }

}

app.controller('UserController', UserController);