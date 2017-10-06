/**
 * 装饰模式
 * 实现继承的替代方案
 */

function Macbook() {
    this.cost = function () {
        return 100;
    }
}

function M1(mackbook){
    this.cost = function () {
        return mackbook.cost() + 200;
    }
}

function M2(mackbook) {
    this.cost = function () {
        return mackbook.cost() +300;
    }
}

console.log(
    new M1(new Macbook()).cost()
)



