/**
 * 观察者模式
 * 简介：一对多依赖，一个发生改变其他都要改变，定义两种对象（目标1，观察者多）
 * 实现：定义一个对象（目标）
 *      []：观察者列表
 *      方法：添加观察者on、取消观察者off、触发观察者更新emit
 */

class EventEmitter{
    constructor(){
        this.observers = [];
    }
    on(eventName, func){
        if(!this.observers[eventName]){
            this.observers[eventName] = [];
            this.observers[eventName].push(func);
        }else{
            this.observers[eventName].push(func);
        }
    }
    off(eventName, func){
        if(this.observers[eventName]){
            let funcId = 0;
            this.observers[eventName].forEach((item, index) => {
                if(item === func) {
                    funcId = index;
                    return;
                }
            })
            this.observers[eventName].splice(funcId, 1);
            return true;
        }
        return false;
    }
    emit(eventName, ...args) {
        if(!this.observers[eventName]) return false;
        this.observers[eventName].forEach((item, index) => {
                item.call(this, ...args);
        })
        return true;
    }
}

const emitter = new EventEmitter()
const sayHi = (name) => console.log(`Hello ${name}`)
const sayHi2 = (name) => console.log(`Good night, ${name}`)

emitter.on('hi', sayHi)
emitter.on('hi', sayHi2)
emitter.emit('hi', 'ScriptOJ')

emitter.off('hi', sayHi)
emitter.emit('hi', 'ScriptOJ')

const emitter2 = new EventEmitter()
emitter2.on('hi', (name, age) => {
    console.log(`I am ${name}, and I am ${age} years old`)
})
emitter2.emit('hi', 'Jerry', 12)
