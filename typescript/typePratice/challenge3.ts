
declare function head<T>(array:Array<T>):T;
declare function hasIn<T>(object:Object, key:T):boolean;
declare function isBoolean<T>(value:T):boolean;
declare function toString<T>(value:T):string;
declare function split(string:string, seperate:RegExp|string, limit:number):[];
declare function hasPath<T>(object:Object, path:Array<T>|string):boolean;
declare function filter<T>(array:Array<T>, predicate:Function):Array<T>;
declare function every<T>(array:Array<T>, predicate:Function):boolean;
declare function map<T>(array:Array<T>, iteratee:Function):Array<T>;
