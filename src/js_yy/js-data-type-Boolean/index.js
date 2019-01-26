// 本练习主要考察   各类型数据   转换为   Boolean类型   的几种情况


// 1.null、undefined、NaN、Number类型转换为Boolean类型
// 2.Boolean类型转化为Boolean类型
// 3.String类型转换为Boolean类型


// tips:    特殊情况   =>   数字0转布尔(false)  or   全是空格的字符串转布尔(true)


// null、undefined、NaN、Number类型转换为Boolean类型
const a = null;
const b = undefined;
const c = NaN;
const d1 = 0;
const d2 = 000;
const d3 = 10;
console.log(Boolean(a));   // false
console.log(Boolean(b));   // false
console.log(Boolean(c));   // false
console.log(Boolean(d1));  // false
console.log(Boolean(d2));  // false
console.log(Boolean(d3));  // ture
console.log(Boolean(d1));  // Number类型转化为Boolean类型，0是最特殊的
console.log(Boolean(d2));  // 只有全部是0的会转化为false
console.log(Boolean(d3));  // 除此之外，都会转化为true


// Boolean类型转化为Boolean类型
const e = true;
const f = false;
console.log(Boolean(e));  // true
console.log(Boolean(f));  // false


// String类型转换为Boolean类型
const g = "";
const h = "       ";
const i = "false";
const j = "NaN";
console.log(Boolean(g));  // flase
console.log(Boolean(h));  // true
console.log(Boolean(i));  // true
console.log(Boolean(j));  // true
console.log(Boolean(g));  // 空字符串转Boolean会变为false
console.log(Boolean(h));  // 只要不是空串都会被转为true
console.log(Boolean(i));  // 不是空串：全是空格的情况；
console.log(Boolean(j));  //          任意字符的情况。
