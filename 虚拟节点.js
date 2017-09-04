class VNode{
    constructor(tagName, props, children){
        this.tagName = tagName
        this.props = props
        this.children = children
    }
}
const h = (...arg) => {
    return new VNode(...arg);
}

/*
* 每个代表 DOM 节点的对象有三个属性：
* tagName：代表 DOM 节点的标签名。
* props：这个 DOM 节点的属性，用一个对象表示。
* children：这个 DOM 节点的子节点，是一个数组；数组的元素可以是 字符串 或者 对象。如果是字符串就表示这个子节点是文本节点，否则就表示是另外一个 DOM 节点。
* */
