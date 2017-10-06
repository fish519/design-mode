/**
 * 门面模式
 * 提供一个高层接口，便于访问
 */
function A() {
    return 100;
}
function B() {
    return 200;
}
function getAll() {
    return A() + B();
}

console.log(getAll())


//一个更加常见的例子

var stopEvent = function( e ){   //同时阻止事件默认行为和冒泡
  e.stopPropagation();
  e.preventDefault();
}
 
