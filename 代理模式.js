/**
 * 代理模式
 * 就是我们平常经常用的封装的模式
 */

const Ajax = {
    xhr:null,
    callBack: null,
    get: function (url) {
        this.xhr = new XMLHttpRequest();
        this.xhr.open('GET',url,false);
        return this;
    },
    send: function () {
        this.xhr.send();
        this.xhr.onreadystatechange = function () {
            if(this.xhr.readyState === 4 && this.xhr.status === 200 && this.callBack){
                this.callBack.apply(this,xhr.responseText);
            }
        }
    },
    done: function (fn) {
        this.callBack = null;
    }
}

var request = Ajax.get( 'https://www.baidu.com' );

request.send();

request.done(function(data){
    console.log(data)
});
