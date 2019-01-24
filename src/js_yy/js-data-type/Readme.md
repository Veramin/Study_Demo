# JavaScript运算符

#### 作用
    告诉程序执行特定的算术或者逻辑操作的符号，例如，告诉程序某两个数相加、相减

#### 按照功能划分
+ 算术运算符
+ 关系运算符
+ 位运算符

#### 按照操作个数划分
+ 单目运算符(只有一个操作运算符：i++  !)
+ 算目运算符( a + b)
+ 三目运算符(a > b ? 0 : 1)




## 一、算术运算符
+ 加法运算
+ 减法运算
+ 乘法运算
+ 除法运算
+ 取余运算


#### 1. 加法运算
    格式： Number1 + Nbmber2
> 注意：
    a. 非Number 类型的值进行计算时，会将这些值转换为Number然后再运算；
    b. 任何值和NaN做运算都会得到NaN；
    c. 任何值和字符串做加法操作，都会先转为字符串，然后再和字符串做拼接。比如我们常见到的`var res = 12 + ''`,可以这样来理解：当我们给某一个变量的给定内容后加上`+ ''`，那么该变量就被会强转成字符串；

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

#### 2. 减法运算
    格式： Number1 - Nbmber2
> 注意：
    a. 非Number 类型的值进行计算时，会将这些值转换为Number然后再运算；
    b. 任何值和NaN做运算都会得到NaN；
    c. 字符串做减法也会转为Number，然后再相减；

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

#### 3. 乘法运算
    格式： Number1 * Nbmber2
> 注意：
    a. 非Number 类型的值进行计算时，会将这些值转换为Number然后再运算；
    b. 任何值和NaN做运算都会得到NaN；
    c. 字符串做乘法也会转为Number，然后再相乘；

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

#### 4. 除法运算
    格式： Number1 / Nbmber2
> 注意：
    a. 非Number 类型的值进行计算时，会将这些值转换为Number然后再运算；
    b. 任何值和NaN做运算都会得到NaN；
    c. 字符串做除法也会转为Number，然后再相除；
    d. 分母不能为0，为0则相除结果为infinity

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

#### 5. 取余运算
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
    c. 字符串做取余也会转为Number，然后再取余；

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

##### 1. 正号运算符
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

##### 2. 负号运算符
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
            变量 = 数据
    + 注意
        - 赋值运算符左边只能是变量
        - 多个赋值运算符可以组成赋值表达式，赋值表达式具备右结合性

+ 复合赋值运算符
    + 格式
            变量   符合赋值运算符   表达式
    + 类型
        - += 加后赋值
        - -= 减后赋值
        - *= 乘后赋值
        - /= 除后赋值
        - %= 取模后赋值
    + 注意
        - 由于赋值表达式是右结合性，所以会先计算等号右边的，然后再进行复合运算。


#### 1. 简单赋值运算符
``` javascript
    // 从右至左计算
    // 先将10赋给变量d,然后将变量d中储存的值赋值给变量c，依次再传递给a，最后a,b,c,d的值都是0
    var a = b = c = d = 10;
    console.log(a); // 10
    console.log(b); // 10
    console.log(c); // 10
    console.log(d); // 10
```

#### 2. 复合赋值运算符
``` javascript
    // a += 3  =>  a = a + 3
    var a = 3;
        a += 3;
    console.log(a); // 6

    // b -= 3  =>  a = a - 3
    var b = 3;
        b -= 3;
    console.log(b); // 0

    // c *= 3  =>  a = a * 3
    var c = 3;
        c *= 3;
    console.log(c); // 9

    // d /= 3  =>  a = a / 3
    var d = 3;
        d /= 3;
    console.log(d); // 1

    // e %= 3  =>  a = a % 3
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

> 注意
    a. 对于非数值进行比较时，都会将其转为数字然后再比较；
    b. 如果符号两侧都是字符串时，不会将其转换为数字进行比较，而是会分别比较字符串中字符的Unicode编码
    c. null、undefined、NaN比较

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
    - ! （非运算）

