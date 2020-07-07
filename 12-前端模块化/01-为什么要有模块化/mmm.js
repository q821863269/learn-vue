(function() {
    // 复用aaa的flag
    if (moduleA.flag) {
        console.log('小明是天才，哈哈哈')
    }

    // 使用sum函数
    console.log(moduleA.sum(30,50));
})()