const obj1 = {
    aaa: 10,
    func1() {
        this.aaa++;
        console.log('func1 : '+this.aaa);
    }
}

const obj2 = {
    aaa: 10,
    func2 : obj1.func1
}

obj1.func1();

obj2.func2();
