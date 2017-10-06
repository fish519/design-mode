/**
 * 适配器模式
 * 相当于一个中转的函数
 * @type {{name: string, age: string, school: string, books: *[]}}
 */
var oldData = {
    name:'fish',
    age:'22',
    school:'szu',
    books:[
        ['a','b','c'],
        ['f','h','l']
    ]
}
function changeData(data) {
    var books = data.books;
    delete data.books;

    books.forEach(function (item, index) {
        data[`books${index}`]  = item
    })
}

changeData(oldData)

console.log(oldData)
