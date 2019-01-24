// 本练习用来观察和理解各种数据类型,引用类型,值类型,类型转换坑等

// 比较两个变量是否相等时,值类型比较的是值,引用类型比较的是内存地址

// tips 类型不同才会触发转型比较

const numberFirst = 0;
const numberSecond = 0;
console.log(numberFirst === numberSecond); // true 因为数值是值类型
console.log(numberFirst == numberSecond); // ?

const stringFirst = '1';
const stringSecond = '1';
console.log(stringFirst === stringSecond); // true 因为字符串是值类型
console.log(stringFirst == stringSecond); // ?

const boolFirst = true;
const boolSecond = true;

console.log(boolFirst === boolSecond); // true 因为布尔是值类型
console.log(boolFirst == boolSecond);  // ?

const arrayFirst = [];
const arraySecond = [];
const arrayThird = arraySecond;

console.log(arrayFirst === arraySecond); // ?
console.log(arrayFirst == arraySecond); // ?
console.log(arrayThird === arraySecond); // ?
console.log(arrayThird == arraySecond); // ?

arrayFirst[0] = 1;
arraySecond[0] = 1;
console.log(arrayFirst[0] === arraySecond[0]); // ?
console.log(arrayFirst[0] == arraySecond[0]); // ?
console.log(arrayThird[0]); // ?

arrayThird[0] = 10;
console.log(arrayFirst[0] === arraySecond[0]); // ?
console.log(arrayFirst[0] == arraySecond[0]); // ?
console.log(arrayThird[0] === arraySecond[0]); // ?
console.log(arrayThird[0] == arraySecond[0]); // ?
console.log(arraySecond[0]); // ?

arrayFirst[1] = {};
arraySecond[1] = {};
console.log(arrayFirst[1] === arraySecond[1]); // ?
console.log(arrayFirst[1] == arraySecond[1]); // ?
console.log(arrayThird[1] === arraySecond[1]); // ?
console.log(arrayThird[1] == arraySecond[1]); // ?
console.log(arrayThird[1]); // ?

arrayThird[1].x = 0;
console.log(arrayFirst[1] === arraySecond[1]); // ?
console.log(arrayFirst[1] == arraySecond[1]); // ?
console.log(arrayThird[1] === arraySecond[1]); // ?
console.log(arrayThird[1] == arraySecond[1]); // ?
console.log(arraySecond[1]); // ?


const objectFirst = {};
let objectSecond = {};
const thirdObject = objectSecond;
console.log(objectFirst === objectSecond); // ?
console.log(objectFirst == objectSecond); // ?
console.log(thirdObject === objectSecond); // ?
console.log(thirdObject == objectSecond); // ?

objectFirst.a = 1;
objectSecond.a = 1;
console.log(objectFirst.a === objectSecond.a); // ?
console.log(objectFirst.a == objectSecond.a); // ?
console.log(thirdObject === objectSecond); // ?
console.log(thirdObject == objectSecond); // ?
console.log(thirdObject.a); // ?

thirdObject.a = 100;
console.log(objectFirst.a === objectSecond.a); // ?
console.log(objectFirst.a == objectSecond.a); // ?
console.log(thirdObject === objectSecond); // ?
console.log(thirdObject == objectSecond); // ?
console.log(objectSecond.a); // ?

objectFirst.b = [1, 2, 3];
objectSecond.b = [1, 2, 3];
console.log(objectFirst.b === objectSecond.b); // ?
console.log(objectFirst.b == objectSecond.b); // ?
console.log(thirdObject === objectSecond); // ?
console.log(thirdObject == objectSecond); // ?
console.log(thirdObject.b); // ?

thirdObject.b = [4, 5, 6];
console.log(objectFirst.b === objectSecond.b); // ?
console.log(objectFirst.b == objectSecond.b); // ?
console.log(thirdObject === objectSecond); // ?
console.log(thirdObject == objectSecond); // ?
console.log(objectSecond.b); // ?

objectSecond = {};
console.log(objectFirst.b === objectSecond.b); // ?
console.log(objectFirst.b == objectSecond.b); // ?
console.log(thirdObject === objectSecond); // ?
console.log(thirdObject == objectSecond); // ?
console.log(objectSecond.b, thirdObject.b); // ?



console.log(1 === 1); // ?
console.log('1' === 1); // ?
console.log('1' == 1); // ?
console.log('' === 0); // ?
console.log('' == 0); // ?
console.log('' === false); // ?
console.log('' == false); // ?
console.log('1' === true); // ?
console.log('1' == true);

console.log([] === true);
console.log([] == true);
console.log({} === true);
console.log({} == true);
console.log([] === false);
console.log([] == false);
console.log({} === false);
console.log({} == false);

console.log([] === '');
console.log([] == '');
console.log({} === '');
console.log({} == '');

console.log([1] === true);
console.log([1] == true);
console.log({a:1} === true);
console.log({a:1} == true);

console.log([0] === false);
console.log([0] == false);
console.log({b:0} === false);
console.log({b:0} == false);


console.log('' === undefined);
console.log('' == undefined);
console.log(false === undefined);
console.log(false == undefined);
console.log(0 === undefined);
console.log(0 == undefined);

console.log('' === null);
console.log('' == null);
console.log(false === null);
console.log(false == null);
console.log(0 === null);
console.log(0 == null);

console.log(null === undefined);
console.log(null == undefined);

console.log(isNaN(1));
console.log(isNaN(NaN));
console.log(isNaN('1'));
console.log(isNaN('1b'));
console.log(isNaN(true));

console.log(Number.isNaN(1));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN('1'));
console.log(Number.isNaN('1b'));
console.log(Number.isNaN(true));

console.log(Number(1));
console.log(Number('1'));
console.log(Number('1b'));
console.log(Number('b1b'));
console.log(Number('1.1'));
console.log(Number('1.1b'));
console.log(Number('1.b1'));
console.log(Number('b1.1b'));
console.log(Number(true));
console.log(Number(false));
console.log(Number([]));
console.log(Number({}));

console.log(parseFloat(1));
console.log(parseFloat('1'));
console.log(parseFloat('1b'));
console.log(parseFloat('b1b'));
console.log(parseFloat('1.1'));
console.log(parseFloat('1.1b'));
console.log(parseFloat('1.b1'));
console.log(parseFloat('b1.1b'));
console.log(parseFloat(true));
console.log(parseFloat(false));
console.log(parseFloat([]));
console.log(parseFloat({}));

console.log(parseInt(1));
console.log(parseInt('1'));
console.log(parseInt('1b'));
console.log(parseInt('b1b'));
console.log(parseInt('1.1'));
console.log(parseInt('1.1b'));
console.log(parseInt('1.b1'));
console.log(parseInt('b1.1b'));
console.log(parseInt(true));
console.log(parseInt(false));
console.log(parseInt([]));
console.log(parseInt({}));


console.log(parseInt(100));
console.log(parseInt(100, 2));
console.log(parseInt(100, 8));
console.log(parseInt(100, 16));