(function() {
    // 获取DOM节点
    const btn = document.querySelector('.box');

    // 触发点击事件
    btn.onclick = function() {
        alert('点击了我！！！！')
    }

    // 1.定义三个变量，接收用户输入的值
    var num1, num2, num3, max;

    // 2.利用prompt()接收用户输入的值
    // num1 = Number(prompt("请输入第一个数"：));
    // num2 = Number(prompt("请输入第二个数"：));
    // num3 = Number(prompt("请输入第三个数"：));
    num1 = +(prompt("请输入第一个数:"));
    num2 = +(prompt("请输入第二个数:"));
    num3 = +(prompt("请输入第三个数:"));  // ?
                                         // 此处+() 就相当于 Number()
                                         // 正号变正数，负号变负数，这只是根据常理定的游戏规则


    // 3.定义变量，接收最大的值
    // var max;

    // 4.利用三目运算符，两两比较，找出最大的值
    // max = num1 > num2 ? num1 : num2;
    // max = max > num3 ? max : num3;
    max = (num1 > num2 ? num1 : num2) > num3 ? (num1 > num2 ? num1 : num2) : num3;

    // 5.输出结果
    console.log(max);
})();