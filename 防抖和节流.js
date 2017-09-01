/**
 * 函数防抖
 * 调用一个函数频次太高,多个调用合在一起
 *
 * 节流
 * 规定函数只能在规定时间内执行一次
 */

const debounce = (fn, duration) => {
    let timer;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(fn, duration);
    }
}

const throttle = (fn, duration, atLeastTime) => {
    let timer;
    let startTime = new Date();
    return () => {
        clearTimeout(timer);
        if(new Date() - startTime >= atLeastTime){
            fn();
            startTime = new Date();
        }else{
            timer = setTimeout(fn, duration);
        }
    }
}

