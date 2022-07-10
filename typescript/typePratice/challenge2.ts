interface SStorage<T> {
    [key:string]: T
}

class LocalStorage<T> {
    private storage: SStorage<T> = {};
    setItem(key:string, value:T) {
        this.storage[key] = value;
    }
    getItem(key:string): T {
        return this.storage[key];
    }
    clearItem(key:string) {
        delete this.storage[key];
    }
    clear() {
        this.storage = {};
    }
}

const stringStorage = new LocalStorage<string>();
stringStorage.setItem('1', 'aaaaaaa');
stringStorage.setItem('2', 'bbbbbbb');

const booleanStorage = new LocalStorage<boolean>();
booleanStorage.setItem('t', true);
console.log(booleanStorage.getItem('t'));

interface Position {

}
interface LocationFuncType{
    (succ:Function) : void;
    (succ:Function, err:Function) : void;
    (succ:Function, err:Function, option:boolean) : void;
}

class GGeolocation {

    private TF:boolean = true;
    getCurrentPosition:LocationFuncType = (succ:Function, err?:Function, option?:boolean) => {
        if(this.TF){
            succ();
        }
        else if(err)
        {
            err();
        }
    }
    watchPosition:LocationFuncType = (succ:Function, err?:Function, option?:boolean) => {
        if(this.TF){
            succ();
        }
        else if(err)
        {
            err();
        }
    }
    clearWatchid(id:number) {

    }
}
const successFn:Function = () => {};
const errorFn:Function = () => {};
const options:boolean = true;

const geolocation = new GGeolocation();
geolocation.getCurrentPosition(successFn);
geolocation.getCurrentPosition(successFn, errorFn);
geolocation.getCurrentPosition(successFn, errorFn, options);
geolocation.watchPosition(successFn);
geolocation.watchPosition(successFn, errorFn);
geolocation.watchPosition(successFn, errorFn, options);
