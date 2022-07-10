type Player = {
    name: string,
    age?: number
}

const playerA:Player = {
    name: 'AAA'
}
const playerB:Player = {
    name: 'BBB',
    age: 10
}

type Name = string;
type Age = number;
type PPlayer = {
    readonly name: Name,
    age?: Age
}

const playerMaker = (name:string): PPlayer => ({name});
const playerC = playerMaker('CCC');
playerC.age = 20;

const numberA: readonly number[] = [1,2,3,4,5];

// Tuple
const playerD: [string, number, boolean] = ['greatfe', 13, false];


let aaa:unknown;
if(typeof aaa === 'number') {
    let b = aaa + 1;
}

function hello(): void {
    console.log('hello');
}

function hello2(): never {
    console.log('hello2');
    throw new Error('err');
}

function hello3(name: number | string) {
    if(typeof name == 'number') {
        
    }
    else if(typeof name == 'string') {
        
    }
    else {
        name // name: never
    }
}

type Add = (a:number, b:number) => number;
const add: Add = function (a, b) {
    return a+b;
}

type Functype = {
    (a:string, b:number) : number
}

// Overloding
type Config = {
    path: string,
    state: object
}

type Push = {
    (path:string): void,
    (config: Config): void,
}

const push:Push = (config) => {
    if(typeof config === 'string') console.log(config);
    else {
        console.log(config.path);
    }
}

type Add2 = {
    (a:number, b:number): number,
    (a:number, b:number, c:number): number,
}

const add3:Add2 = (a,b,c?:number) => {
    if(c)
        return a + b + c;
    else
        return a+b;
}

//polymorphism
type SuperPrint<T> = {
    (arr: T[]): void,
}

const superPrint: SuperPrint = (arr) => {
    arr.forEach(i=>console.log(i));
}

function SuperPringFunc<T>(arr:T[]) {
    arr.forEach(i=>console.log(i));
}

SuperPringFunc([1,2,3,4,5]);
SuperPringFunc<number>([1,2,3,4,5]);

type Player2<E> = {
    name: string,
    extraInfo: E,
}
type NickPlayer = Player2<{favFood:string}>

const player2:NickPlayer = {
    name: 'kwon',
    extraInfo: {favFood:'kimch'},
};
const player3:Player2<null> = {
    name: 'greatfe',
    extraInfo: null
}

abstract class User {
    constructor(
        private firstName:string,
        private lastName:string,
        protected nickName:string
    ) {}
    abstract getNickName():string;
    getFullName() {
        return `${this.lastName} ${this.firstName}`;
    }
}

class PlayerF extends User{
    getNickName(): string {
        return this.nickName;
    }

}

const player4 = new PlayerF('a','b','c');
player4.getFullName();






















