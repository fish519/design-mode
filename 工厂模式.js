/**
 * 简单的工厂模式
 * 优点：能解决多个相似的问题
 * 缺点：对象的类型不知道
 */

function CreatePerson(name, age, sex) {
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.sex = sex;
    return obj;
}
