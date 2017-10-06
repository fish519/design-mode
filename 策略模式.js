/**
 * 策略模式
 *
 * 定义一系列算法，把他们封装起来，并且使他们可以相互转换
 *
 * 示例表单验证
 */
var validataList = {
    notNull : function (value) {
        return value !== '';
    },
    maxLength: function (value,length) {
        return value.length() >= length
    }
}

