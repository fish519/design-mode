function A( name ){
    this.name = name;
}
A.prototype.B = function () {
    this.name = this.name + '装饰后';
}
function ObjectFactory(){
    // 其实 new就是对象的复制和仿写的过程
    var mObj = {};
    var construtor = arguments[0];
    mObj.__proto__ = construtor.prototype;
    Array.prototype.shift.call(arguments);
    construtor.apply(mObj,arguments)
    console.log(mObj)

    return mObj;
}

var a = ObjectFactory( A, 'svenzeng' );

a.B();
console.log( a.name );  //svenzeng
