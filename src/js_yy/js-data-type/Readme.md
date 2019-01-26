# JavaScript运算符

#### 作用
    告诉程序执行特定的算术或者逻辑操作的符号，例如，告诉程序某两个数相加、相减

#### 按照功能划分
+ 算术运算符
+ 关系运算符
+ 位运算符

#### 按照操作个数划分
+ 单目运算符(只有一个操作运算符：i++、!)
+ 算目运算符( a + b、a - b)
+ 三目运算符(a > b ? 0 : 1)




## 一、算术运算符
+ 加法运算
+ 减法运算
+ 乘法运算
+ 除法运算
+ 取余运算


#### 1.1 加法运算
    格式： Number1 + Nbmber2
> 注意：
    a. 非Number 类型的值进行计算时，会将这些值转换为Number然后再运算；
    b. 任何值和NaN做运算都会得到NaN；
    c. 任何值和字符串做加法操作，都会先转为字符串，然后再和字符串做拼接。比如我们常见到的`var res = 12 + ''`,可以这样来理解：当我们给某一个变量的给定内容后加上`+ ''`，那么该变量就被会强转成字符串。

    例如：
```javascript
    // a类情况：非Number 类型的值进行计算时，会将这些值转换为Number然后再运算(字符串类型除外)
    var str11 = true + false;
    console.log(str11); // 1

    var str12 = true + 100;
    console.log(str12); // 101

    var str13 = "true" + 100;
    console.log(str13); // "ture100"


    // b类情况：任何值和NaN做运算都会得到NaN
    var str2 = 123 + NaN;
    console.log(str2); // NaN

    // c类情况：任何值和字符串做加法操作，都会先转为字符串，然后再和字符串做拼接
    var str31 = 123 + "123";
    console.log(str31); // "123123"

    // c类情况：强转字符串
    var str32 = 123 + '';
    console.log(str32); // "123"
```

#### 1.2 减法运算
    格式： Number1 - Nbmber2
> 注意：
    a. 非Number 类型的值进行计算时，会将这些值转换为Number然后再运算；
    b. 任何值和NaN做运算都会得到NaN；
    c. 字符串做减法也会转为Number，然后再相减。

    例如：

```javascript
    // a类情况：非Number 类型的值进行计算时，会将这些值转换为Number然后再运算
    var str11 = "100" - "10";
    console.log(str11); // 90

    var str12 = false - "10";
    console.log(str12); // -10

    var str13 = "false" - "10";
    console.log(str13); // NaN      原因：=> 因为字符串转数字时，如果遇到非数字的内容就会被转为NaN，从未变成了b类情况

    // b类情况：任何值和NaN做运算都会得到NaN
    var str2 = 123 - NaN;
    console.log(str2); // NaN

    // c类情况：字符串做减法也会转为Number，然后再相减；
    var str31 = 123 - "23";
    console.log(str31); // 100
    
    var str32 = 123 - '';
    console.log(str32); // 123
```

#### 1.3 乘法运算
    格式： Number1 * Nbmber2
> 注意：
    a. 非Number 类型的值进行计算时，会将这些值转换为Number然后再运算；
    b. 任何值和NaN做运算都会得到NaN；
    c. 字符串做乘法也会转为Number，然后再相乘。

    例如：

```javascript
    // a类情况：非Number 类型的值进行计算时，会将这些值转换为Number然后再运算
    var str11 = "100" * "10";
    console.log(str11); // 1000

    var str12 = false * "10";
    console.log(str12); // 0

    var str13 = "false" * "10";
    console.log(str13); // NaN

    // b类情况：任何值和NaN做运算都会得到NaN
    var str2 = 123 * NaN;
    console.log(str2); // NaN

    // c类情况：字符串做乘法也会转为Number，然后再相乘；
    var str31 = 123 * "100";
    console.log(str31); // 12300
    
    var str32 = 123 * '';
    console.log(str32); // 0
```

#### 1.4 除法运算
    格式： Number1 / Nbmber2
> 注意：
    a. 非Number 类型的值进行计算时，会将这些值转换为Number然后再运算；
    b. 任何值和NaN做运算都会得到NaN；
    c. 字符串做除法也会转为Number，然后再相除；
    d. 分母不能为0，为0则相除结果为infinity。

    例如：

```javascript
    // a类情况：非Number 类型的值进行计算时，会将这些值转换为Number然后再运算
    var str11 = "100" / "10";
    console.log(str11); // 10

    var str12 = false / "10";
    console.log(str12); // 0

    var str13 = "false" * "10";
    console.log(str13); // NaN

    // b类情况：任何值和NaN做运算都会得到NaN
    var str2 = 123 / NaN;
    console.log(str2); // NaN

    // c类情况：字符串做除法也会转为Number，然后再相除；
    var str3 = 123 / "100";
    console.log(str3); // 1.23
    
    // d类情况：分母不能为0，为0则相除结果为infinity
    var str41 = 123 / '';
    console.log(str41); // Infinity

    var str42 = 123 / 0;
    console.log(str42); // Infinity
```

#### 1.5 取余运算
    格式： Number1 % Nbmber2

    例子： m % n，相当于m/n获取余数
    规则：
            若n=0, 则返回NaN
            若m=0, 则返回0
            若m>n, 则正常取余
            若m<n, 则结果为m


> 注意：
    a. 非Number 类型的值进行计算时，会将这些值转换为Number然后再运算；
    b. 任何值和NaN做运算都会得到NaN；
    c. 字符串做取余也会转为Number，然后再取余。

    例如：

```javascript
    // 若n=0，则返回NaN
    var str1 = 123 % 0;
    console.log(str1); // NaN

    // 若m=0，则返回0
    var str2 = 0 % 123;
    console.log(str2); // 0

    // 若m>n, 则正常取余
    var str3 = 10 % 3;
    console.log(str3); // 1

    // 若m<n, 则结果为m
    var str4 = 3 % 10;
    console.log(str4); // 3
```

```javascript
    // a. 非Number 类型的值进行计算时，会将这些值转换为Number然后再运算；
    var str11 = false % "100";
    console.log(str11); // 0

    var str12 = "123" % "100";
    console.log(str12); // 23

    // b类情况：任何值和NaN做运算都会得到NaN
    var str2 = 123 % NaN;
    console.log(str2); // NaN

    // c类情况 字符串做取余也会转为Number，然后再取余；
    var str3 = 123 / "100";
    console.log(str3); // 1.23
```



## 二、正负运算符
+ 正号
    - " + "号不会对数字产生任何影响
    - 对于非Number类型的值，会先转化为Number再运算
+ 负号
    - " - "号可以对数字进行负号的取反
    - 对于非Number类型的值，会先转化为Number再运算

##### 2.1 正号运算符
``` javascript
    // " + "号不会对数字产生任何影响
    var num1 = 100;
        num1 = +num1;
    console.log(num1); // 100
    var num2 = -100;
        num2 = +num2;
    console.log(num2); // -100

    // 对于非Number类型的值，会先转化为Number再运算
    var num3 = "100";
        num3 = +num3;
    console.log(num3); // 100
    var num4 = "-100";
        num4 = +num4;
    console.log(num2); // -100

```

##### 2.2 负号运算符
``` javascript
    // " - "号可以对数字进行负号的取反
    var num1 = 100;
        num1 = -num1;
    console.log(num1); // -100
    var num2 = -100;
        num2 = -num2;
    console.log(num2); // 100

    // 对于非Number类型的值，会先转化为Number再运算
    var num3 = "100";
        num3 = -num3;
    console.log(num3); // -100
    var num4 = "-100";
        num4 = -num4;
    console.log(num2); // 100

```



## 三、赋值运算符
+ 简单赋值运算符
    + 格式
        + 变量 = 数据
    + 注意
        - 赋值运算符左边只能是变量；
        - 多个赋值运算符可以组成赋值表达式，赋值表达式具备右结合性。

+ 复合赋值运算符
    + 格式
        + 变量   符合赋值运算符   表达式
    + 类型
        - += 加后赋值
        - -= 减后赋值
        - *= 乘后赋值
        - /= 除后赋值
        - %= 取模后赋值
    + 注意
        - 由于赋值表达式是右结合性，所以会先计算等号右边的，然后再进行复合运算。


#### 3.1 简单赋值运算符
``` javascript
    // 从右至左计算
    // 先将10赋给变量d,然后将变量d中储存的值赋值给变量c，依次再传递给a，最后a,b,c,d的值都是0
    var a = b = c = d = 10;
    console.log(a); // 10
    console.log(b); // 10
    console.log(c); // 10
    console.log(d); // 10
```

#### 3.2 复合赋值运算符
``` javascript
    // a += 3  =>  a = a + 3
    var a = 3;
        a += 3;
    console.log(a); // 6

    // b -= 3  =>  b = b - 3
    var b = 3;
        b -= 3;
    console.log(b); // 0

    // c *= 3  =>  c = c * 3
    var c = 3;
        c *= 3;
    console.log(c); // 9

    // d /= 3  =>  d = d / 3
    var d = 3;
        d /= 3;
    console.log(d); // 1

    // e %= 3  =>  e = e % 3
    var e = 3;
        e %= 3;
    console.log(e); // 0
```



## 四、自增自减运算符    
+ 无论运算符号在前还是在后，变量在自身基础上都会改变
+ 后缀表达式
    - 格式
        - x++、x--
    - 运算执行原理
        - 先用x的当前值作为表达式的值
        - 再进行自增自减1运算
    - 口诀
        - “先用后变”
        - 解释
            - 也就是先用变量的值参与运算
            - 变量的值再进行自增自减的变化
    
+ 前缀表达式
    - 格式
        - ++x、--x
    - 运算执行原理
        - 先完成变量x的自增自减1运算
        - 再用x的值作为表达式的值
    - 口诀
        - “先变后用”
        - 解释
            - 也就是变量的值先进行自增自减的变化
            - 再用变量的值参与运算



## 五、关系运算符
+ 类型
    - ">"     大于
    - "<"     小于
    - ">="    大于等于
    - "<="    小于等于
    - "=="    判断值是否相等
    - "!="    判断值是否不相等
    - "==="   判断值和类型是否相等
    - "!=="   判断值和类型是否不等

> 注意：
    a. 对于非数值进行比较时，都会将其转为数字然后再比较；
    b. 如果符号两侧都是字符串时，不会将其转换为数字进行比较，而是会分别比较字符串中字符的Unicode编码；
    c. null、undefined、NaN比较。

``` javascript
    // a. 对于非数值进行比较时，都会将其转为数字然后再比较；
    console.log( 1 > false); // true
    console.log(1 > true);   // false

    // b. 如果符号两侧都是字符串时，不会将其转换为数字进行比较，而是会分别比较字符串中字符的Unicode编码
    console.log("123" == "123");     // true
    console.log("123" == "12false"); // false

    // c.null
    console.log(null == 0);     // false
    console.log(null == null);  // true

    // c.undefined
    console.log(undefined == 0);         // false
    console.log(undefined == undefined); // true 

    // c.null 和 undefined
    console.log(null == undefined);  // true
    console.log(null === undefined); // flase

    // c.NaN
    console.log(NaN == 0);   // false
    console.log(NaN == NaN); // ?   
                             // false 很特殊
                             
    var a = 100;
    console.log(isNaN(a)); // false

    var b = "100a";
    console.log(isNaN(a)); // true
```


## 六、逻辑运算符
+ 开发应用场景
    有时，我们需要多个条件同时成立才可以执行某段代码。比如，登陆某一账号，必须要求账号和密码都一直才能成功登陆。
+ 分类
    - &&（与运算）
        - 格式
            条件A && 条件B
        - 运行结果
            只有当条件A和条件B都成立时，结果才为true。其余情况都为false
        - 口诀
            一假全假
    - ||（或运算）
        - 格式
            条件A || 条件B
        - 运行结果
            只要条件A和条件B中有一个成立时，结果才为true。其余情况都为false
        - 口诀
            一真为真
    - ! （非运算）
        - 格式
            !条件A
        - 运行结果
            对条件A取反
        - 口诀
            真为假，假为真

#### 6.1 逻辑与（&&）运算过程详解
+ 步骤：
    + 总是先判断条件A是否成立
    + 如果条件A成立，则接着判断条件B是否成立，若B成立，则结果为true；若条件B不成立，则结果为false
> 注意：
    a. 对于非Boolean类型的数值，逻辑与会自动将其转化为Boolean类型来判断；
    b. 如果条件A不成立，则返回条件A的数值本身；
    c. 如果条件A成立，不管条件B成立不成立，都会返回体条件B数值本身。

``` javascript
    // a. 对于非Boolean类型的数值，逻辑与会自动将其转化为Boolean类型来判断；

        // 条件A不满足，条件B满足
        var res11 = 1 > 2 && 10 > 9;
        console.log(res11);  // false

        // 条件A满足，条件B满足
        var res12 = 1 < 2 && 10 > 9;
        console.log(res12);  // true

        // 条件A不满足，条件B不满足
        var res13 = 1 > 2 && 10 < 9;
        console.log(res13);  // false

    // b. 如果条件A不成立，则返回条件A的数值本身；
        // 理解：因为“逻辑与”遵循“一假全假”的准则。所以当条件A为假时，不管条件B的结果如何，语句永远不会执行到条件B，因此，就会返回条件A。
        var res21 = 0 && "abc";
        console.log(res21); // 0

        var res22 = null && "abc";
        console.log(res22); //null

        var res23 = "" && "abc";
        console.log(res23); //""

        var res24 = undefined && "abc";
        console.log(res24); // undefined

    // c. 如果条件A成立，不管条件B成立不成立，都会返回体条件B数值本身。
        // 理解：因为“逻辑与”遵循“一假全假”的准则。所以当条件A为真时，语句一定会执行到条件B，因此，就会返回语句最后一次执行的结果，即条件B。
        var res31 = 123 && "abc";
        console.log(res31); // "abc"

        var res22 = "     " && "abc";
        console.log(res22); //"abc"
```

#### 6.2 逻辑或（||）运算过程详解
+ 步骤
    + 总是先判断条件A是否成立
    + 如果条件A`成立`，就不会再去判断条件B是否成立：此时不管条件B的结果如何，结果都为true
    + 如果条件A`不成立`，接着会去判断条件B是否成立：如果条件B成立，此时“条件A || 条件B”的结果就是true，如果条件B不成立，结果就为false
> 注意：
    a. 对于非Boolean类型的数值，逻辑或自动会将其转为Boolean类型来判断；
    b. 如果条件A不成立，则不管B成不成立都会返回条件B数值本身；
    <!-- 理解：关于b -->
        <!-- "条件A || 条件B"遵循"一真为真"原则，所以当条件A不成立时，不管B成不成立，语句都会执行到条件B，因此返回条件B; -->
    c. 如果条件A成立，则返回条件A的数值本身。
    <!-- 理解：关于c -->
        <!-- "条件A || 条件B"遵循"一真为真"原则，所以当条件A成立时，语句都会终止执行，因此永远不会执行条件B，所以返回条件A; -->
``` javascript
    // a. 对于非Boolean类型的数值，逻辑或自动会将其转为Boolean类型来判断；
    var res11 = (1 < 9) || (2 > 3);
    console.log(res11); // true

    var res12 = (1 > 9) || (2 > 3);
    console.log(res12); // false

    var res13 = false || false;
    console.log(res13); // false

    // b. 如果条件A不成立，则不管B成不成立都会返回条件B数值本身；
    var res21 = null || 0;
    console.log(res21); // 0

    var res22 = undefined || "123";
    console.log(res22); // "123"

    var res22 = NaN || "123";
    console.log(res22); // NaN

    var res23 = 0 || "123";
    console.log(res23); // "123"

    // c. 如果条件A成立，则返回条件A的数值本身。
    var res31 = "123" || "abc";
    console.log(res31); // "123"

    var res32 = "0" || "123";
    console.log(res32); // "0"
```

#### 6.3 逻辑非（!）运算过程详解
+ 步骤
    + 若条件A成立，结果就为false
    + 若条件A不成立，结果就为true
> 注意：
    a. 对一个值进行两次取反，它不会发生变化；
    b. 对非布尔值进行取反，则会将其转为布尔值，然后再取反。

> 综上:
    要想将`其他类型`转换为`Boolean类型`，除了Boolean()函数之外，还可以使用 `!!`数值，`!!`数值的实现原理和Boolean()函数一样
```javascript
    // a. 对一个值进行两次取反，它不会发生变化
    var num1 = 100;
    console.log(Boolean(num1));  // true
    console.log(Boolean(!num1)); // false
    console.log(Boolean(!!num1)); // true

    // b. 对非布尔值进行取反，则会将其转为布尔值，然后再取反；
    var num2 = 100;
    var res = !num1;   // 先将100转化为true，在取反，转化为false
    console.log(res2); // false
```



## 七、逗号运算符（表达式1, 表达式2, ..., 表达式n,）
+ 含义
    在javascript中，逗号“ ， ”，也是一种运算符，称为逗号运算符。其功能是把多个表达式连接起来组成一个表达式，称为逗号表达式。
+ 格式
    + 表达式1, 表达式2, 表达式3, ... ,表达式n
+ 求值过程
    + 先计算表达式1，再计算表达式2，依次计算到表达式n
    + 整个逗号表达式的值为最后一个表达式的值
> 注意
    a. 程序中使用逗号表达式，通常是要分别求逗号表达式内各个表达式的值，并不一定要求整个逗号表达式的值；
    b. 并不是在所有出现逗号的地方都会组成逗号表达式，例如在变量中说明函数参数表中的逗号只是用作各变量之间的间隔符。
```javascript
    // 此处并非逗号表达式
        // 例1：此处sum(num1, num2)并非逗号运算符
        function sum(num1, num2) {

        };

        // 例2：此处只是一次申明（未赋值）多个变量
        var num1, num2, num3, num4;
```

```javascript
    // 练习
        // 求变量b的值
        var a, b;
        b = (a = 3, --a, a*5);

        // 计算过程：
        // 分析: 先声明变量a和变量b； =>  求变量b的值实际就是求整个逗号表达式的值，即最后一个表达式的值
        b = (a = 3, --a, a*5);
        //     |     |    |
        //     |     |    |
        //     |     |    |
        //     3     2   2*5

        console.log(b); // 10
```



## 八、三目运算符（条件运算符）
+ 格式
    + 条件表达式 ? 语句1 : 语句2
+ 求值规则
    + 如果条件表达式为true，则执行语句1；
    + 如果条件表达式为false，则执行语句2。
> 注意：
    a. 条件运算符“ ? ”和“ : ”，是一对运算符，不能分开单独使用；
    b. 如果条件的表达式的求值结果是一个非布尔值，会将其转为布尔值然后再运算。
``` javascript
    // 弹出语句1
    true ? alert("语句1") : alert("语句2");
        // 先转布尔 => 再弹出语句1

        "     " ? alert("语句1") : alert("语句2");

        "NaN" ? alert("语句1") : alert("语句2");
    

    // 弹出语句2
    false ? alert("语句1") : alert("语句2");
        // 先转布尔 => 再弹出语句2

        null ? alert("语句1") : alert("语句2");

        undefined ? alert("语句1") : alert("语句2");

        NaN ? alert("语句1") : alert("语句2");

        0 ? alert("语句1") : alert("语句2");

        "" ? alert("语句1") : alert("语句2");



    // 练习1：如果价格大于500元，就打八折；不到500，就原价出售，请用三目运算符实现。
    var price = 1000;
    price > 500 ? 0.8 * price : price;
    console.log(price); // 800


    // 练习2：用户从键盘输入三个数字，请找到最大的一个

    // 思路分析：

    // 1.定义三个变量，接收用户输入的值
    var num1, num2, num3;

    // 2.利用prompt()接收用户输入的值
    num1 = Number(prompt("请输入第一个数"：));
    num2 = Number(prompt("请输入第二个数"：));
    num3 = Number(prompt("请输入第三个数"：));

    // 3.定义变量，接收最大的值
    var max;

    // 4.利用三目运算符，两两比较，找出最大的值
    max = num1 > num2 ? num1 : num2;
    max = max > num3 ? max : num3;

    // 5.输出结果
    console.log(max);



    // 简化操作：

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
    (num1 > num2 ? num1 : num2) > num3 ? (num1 > num2 ? num1 : num2) : num3;

    // 5.输出结果
    console.log(max);
```

