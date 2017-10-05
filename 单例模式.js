/**
 * 单例模式
 * 通过的单例包装器，用闭包来实现
 */

var singleton = function (fn) {
    var result;
    return function () {
        result || fn.apply(this,arguments)
    }()
}

var createMask = singleton(function () {
    var result = document.createElement('div');
   // result.setAttribute('class','mask')
    return document.body.appendChild(result);
})
