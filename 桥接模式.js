function myForEach(arr,fn) {
    for(var i = 0; i < arr.length; i++){
        fn.call(this,arr[i],i)
    }
}
myForEach([1,2,3], function (item, index) {
    console.log(++item)
})
