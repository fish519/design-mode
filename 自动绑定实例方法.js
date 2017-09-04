class Person {
    constructor (name) {
        this.name = name
    }
    sayHi () {
        console.log(`I am ${this.name}.`)
    }
}
const autoBind = (ToBindClass) => {
    return new Proxy(ToBindClass,{
        construct: (oldClass,args) => {
            let personObject = new oldClass(...args);
            console.log(oldClass);
            console.log(args);
            //return target;
            return new Proxy(personObject,{
                get: (target, prop) => {
                    if(typeof  target[prop] === 'function'){
                        return target[prop].bind(target);
                    }
                    return target[prop];
                }
            })
        }
    })
}
const BoundPerson = autoBind(Person)

const jerry = new BoundPerson('Jerry')
let sayHi = jerry.sayHi
sayHi(); // => I am Jerry


const lucy = new BoundPerson('Lucy')
sayHi = lucy.sayHi
//sayHi() // => I am Lucy.
