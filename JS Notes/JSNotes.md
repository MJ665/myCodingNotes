# Code With Harry JS full course

## 001


```javascript
001

// single line comment 
// MULTILINE COMMENT
/*
alsukdfh
asodfi
a;dosfi
*/
```


## 002 & 003
```javascript
// // // // // // // // 002


console.log("this video contain content on ultimate java script course")

// we can declare variable by using 
// var and let 
// in onl times we used var but now days let is more used

var a=56;
// now days if we use var then it may happen that our app can get  bug 
// var was used before  ES6 means ecma script 6 now days javascript runs on ecmascript 6 

let b="a;slkfj";
let c=345.657;
const d=34;

console.log(a,b,c,d);

// java script allows to change the variable data type in run time it is dynamicly written language for eg first i will declare a =56 which is int and then i will show a="stasldfij" string
a="a;slkfj";

console.log(a);

var x=45;
// this { } is called a block in java script
 {
    x=56;
   console.log(x);
 }
   console.log(x);

// when i use var and update over write a variable it gets updated in full scope


 let y=434;
 {
  y=6734;
  console.log(y);
 }
  console.log(y);
// when i use let and update over write a variable it gets updated in defined block scope and it has original value in out of the scope
 let b=765 
// ko ham redeclare nahi kar sakte 
 b=7534
// means overwrite kar sakte hai


const d=34;
// const cannot be updated and cannot be redeclared

 // 003

// 002 and 003 notes are written above

```


## 004
```javascript
// 004


// primitive data types and objects
// Primitive data tupe are fundamental data types which are builtin data type in JS

// 7 primitive data types

// N N S S B B U

// N Null
// N Number
// S Strig
// S Symbol
// B Boolean
// B Bigint
// U Undefined


// OBJECTS are non primitive datatype which are in key value pair form




let a=456;
let b=456.434;
let c="dlfiajsdf";
let d=true;
let e=false;
let f=Symbol(234);
let g=Symbol("rgadsg");
let h=undefined;
let i=null;
let j=BigInt("223523");
let k=BigInt("2235")+BigInt("23");
let l=undefined;
let m;
console.log(a,b,c,d,e,f,g,h,i,j,k,l,m);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);
console.log(typeof h);
console.log(typeof i);
console.log(typeof j);
console.log(typeof k);
console.log(typeof l);
console.log(typeof m);


// python me jaise dictionary waise hi hamare pass java script me object hota hai

const item={
"harry":true,
"rohan":"roll no 234",
"rahul": 234,
"saurabh":undefined,
"lokesh":{
"name":"Lokesh Rathod",
"RollNumber":34,
"Branch":"AI-ML"
}
}  ;
console.log(item["harry"]);
console.log(item["rohan"]);
console.log(item["rahul"]);
console.log(item["saurabh"]);
console.log(item["lokesh"]);
```



## 005
```javascript
     005


    //  Q1
    let a=34;
    let b=";lwfkj";
    console.log(a+b);

    //  Q2
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof (a+b));

    //  Q3
    const a1={
      name:"harry",
      section:1,
    brandh:"AIML"
    };
     a1="1asleifj";
    //  as we have declared const variable we cannot change it

    //  Q4
    // a1["friend"]="shubham";
    console.log(a1["friend"])
    //  a1 ko hamne ek baar object declare kiya tha ham uu object ko kisi bhi doosre primitive data type ya koi naya object ke taraha initialize nahi kar sakte lekin ham uus pahale se defined object me nayi key value pair add kar sakte hai

    //  Q5
    const dict={
      designation:"the act of giving something a name to show that it has a particular purpose; the act of choosing somebody to do a particular task",
      pathetic:"causing you to feel pity or sadness",
       enthusiasm :"a strong feeling of excitement or interest in something and a desire to become involved in it"
    };
    console.log(dict["designation"]);
    console.log(dict.pathetic);
    console.log(dict.enthusiasm);

```
## 006
```javascript
    //  006

    // +
    //   -
    //   *
    //   / like in C if we do int/int we get int value means 26/5 -> 5 but actually in java script we will get resultant ans 5.2
    //   % 

    //   ++ increment
    // --decrement
    // ++a
    //   a++
    //     --a
    //       a--
        
    // ** power operator
    // +=
    //         -=
    //         *=
    //       /=

    //         comparision operator
    // ==
    // <
    // >
    //   !=

    //   === ye bolta hai ki value to same hai lekin data type alag hai
    //   !==
  
    //   ? Turnary operator

    //   logical operator 

    // &&
    //   ||
    //   !

    //   bitwise operator
```
## 007
```javascript
    // 007


    alert ("Hey Welcome to our website ");
    let name=prompt("Enter your Name");
    let password=prompt("Enter your password");
    console.log(typeof a );
    console.log(typeof b );

    let rollNo=prompt("enter your roll number");
    rollNo=Number.parseInt(rollNo); //--------->this is type casting karne ke liye function

    console.log(typeof rollNo );



    // if else if else
   let a=prompt("Enter your age");
   a=Number.parseInt(a);
   if(a>=18 && a<=60){
     alert("You can drive");
   }else if(a<18){
     alert("soch bhi mat drive karne ka padhai kar jake iit me jake bata pahale");
   }else if(a>60){
     alert("iitna budha hogaya sharam nahi aarahi drive karne ki soch raha hai kitne logo ko marna chahata hai");
   }else{"error"};








//    ? turnary operator wala statement 

//    it will check weather the age is less than 18 or not

  condition ? exprIfTrue : exprIfFalse


  let a=prompt("Enter your age");
  a=Number.parseInt(a);
  console.log("you can ", (a<18 || a>60)? "not drive": "drive");




//   eg:
  const age = 26;
  const beverage = age >= 21 ? "Beer" : "Juice";
  console.log(beverage); // "Beer"

  eg:
  function getFee(isMember) {
    return (isMember ? '$2.00' : '$10.00');
  }

  console.log(getFee(true));
   Expected output: "$2.00"

  console.log(getFee(false));
   Expected output: "$10.00"

  console.log(getFee(null));
   Expected output: "$10.00"








    // switch case

   const expr = 'Papayas';
   switch (expr) {
     case 'Oranges':
       console.log('Oranges are $0.59 a pound.');
       break;
     case 'Mangoes':
     case 'Papayas':
       console.log('Mangoes and papayas are $2.79 a pound.');
        // Expected output: "Mangoes and papayas are $2.79 a pound."
       break;
     default:
       console.log(`Sorry, we are out of ${expr}.`);
   }






   const foo = 0;
   switch (foo) {
     case -1:
       console.log("negative 1");
       break;
     case 0:  // Value of foo matches this criteria; execution starts from here
       console.log(0);
    //   Forgotten break! Execution falls through
     case 1:  // no break statement in 'case 0:' so this case will run as well
       console.log(1);
       break; // Break encountered; will not continue into 'case 2:'
     case 2:
       console.log(2);
       break;
     default:
       console.log("default");
   }
    // Logs 0 and 1



```



## 008
```javascript
//    Q1

let a=prompt("enter your age");
a=Number.parseInt(a);
if(a>10 && a <20){console.log ("your age lies between 10 and 20 ");
}
else{console.log("your age is not in between 10 and 20");};


//    Q2 switch case question




//   Q3 if else weather it is divisible by 3

  let a=prompt("number");
 a=Number.parseInt(a);
 console.log ("the number is  ", (a%3 ==0)? " divisible" : "not divisible");


//   Q5 use ternary operator in you can drive question

```


## 009
```javascript


// 009


// in JS we have 
// for
// for in loop
// for of loop
// while loop 
// do while loop


// FOR

let n=BigInt(0);
for (let i=0;i<20000;i++){
  n++;
  console.log(n)
}


// FOR IN LOOP they work for objects and arrays also

let obj={
  harry:90,
  rohan:89,
rahul:56,
ritika:65,
}
for(let a in obj){
  console.log("the marks of " , a , " are ", obj[a]);
};



// OUTPUT
the marks of  harry  are  90
the marks of  rohan  are  89
the marks of  rahul  are  56
the marks of  ritika  are  65

// FOR OF LOOP they work for iterable things they dont run for object


let obj={
  harry:90,
  rohan:89,
rahul:56,
ritika:65,
}
for(let b of obj){
  console.log(b);
};


// ERROR
// TypeError: obj is not iterable


for(let b of "HARRY IS GOOD"){
  console.log(b);
};
// OUTPUT
H
A
R
R
Y
 
I
S
 
G
O
O
D





// suppose i have by mistakely used var instead of let in for loop 


for (var i=0;i<20000;i++){
  n++;
  console.log(n);
}
console . log(n);

// will here n will be defined or not 

// ANS; yes it will be defingd 

// beacouse the var is defined in global scope we can access its value in out of the loop also
// but let is always defined in local scope means we cannot access its value outside the loop


```






## 010
```javascript

// 010


// WHILE LOOP


//  WHILE LOOP

 let n=prompt ("Enter the value of n");
 n=Number.parseInt (n);
 let i=0;
 while(i<n){console.log(n) ; i++;};





//  DO WHILE LOOP it will run atleast one time

 let n=prompt ("Enter the value of n");
 n=Number.parseInt (n);
 let i=0;
 do{console.log(n) ; i++;}while(i<n);
```




## 011
```javascript





// 011



// functions

// seperation of logic 
// it is based of DRY principal dont repeat yourself



function average(x,  y){
  return (x+y)/2;
};



// aerrow fumction it is available in new java script language

const sum=(p,q)=>{return p+q};

const greet=()=>
  {
    console.log("Hello Good Morning");
  }

let a=23;
let b=45;
let c=4355;
console.log(average(a,b));
console.log(average(b,c));
console.log(sum(b,c));
console.log(sum(a,b));
console.log(greet());
console.log(greet());
console.log(greet());
greet();
greet();
greet();

// // beacouse i have not putted greet function calling inside of console.log thats why it has not printed undefined

// // OUTPUT

// 34
// 2200
// 4400
// 68
// Hello Good Morning
// undefined
// Hello Good Morning
// undefined
// Hello Good Morning
// undefined
// Hello Good Morning
// Hello Good Morning
// Hello Good Morning

```

## 012
```javascript


// // 012


// // Q1

let marks={
  harry:90,
  shubham:56,
  harish:21,
  monika:47,
  harendra:1,
};
for(let i=0;i<Object.keys(marks).length;i++){
  console.log("the marks of "+Object.keys(marks)[i]+" are ", marks[Object.keys(marks)[i]]);
}

// // // OUTPUT

// // the marks of harry are  90
// // the marks of shubham are  56
// // the marks of harish are  21
// // the marks of monika are  47
// // the marks of harendra are  1





// // Q2

for(let i in marks){
  console.log("the marks of "+i+" are ", marks[i]);
}

// // // OUTPUT

// // the marks of harry are  90
// // the marks of shubham are  56
// // the marks of harish are  21
// // the marks of monika are  47
// // the marks of harendra are  1






// Q3

let correctNum=23;
let i;
while(i!=correctNum)
  {i=Number.parseInt(prompt("enter the correct number"));
}







// Q4

const avgOf5=(a,b,c,d,e)=>{
  return (a,b,c,d,e)/5
};
let x=34,y=23,z=2354,v=23345,w=5098;
console.log(avgOf5(v,w,x,y,z))










```

## 013
```javascript

// // 013

let name="Harry";
let subhame="shubham";
let harendra="Harendra";
console.log(name);
console.log(subhame.length );
console.log(harendra.length );
console.log(harendra[0] );
console.log(harendra[1] );
console.log(harendra[2] );
console.log(harendra[3] );
console.log(harendra[4] );


// OUTPUT

// Harry
// 7
// 8
// H
// a
// r
// e
// n









// // TEMPLATE LITERALS

// we have to use back tick in our keyboard to use template literals `` 
// like we have f string in python similarly we have template literals in java script
// this is called string interpolation



  
// `string text`

// `string text line 1
//  string text line 2`

// `string text ${expression} string text`

// tagFunction`string text ${expression} string text`




// eg:

let boy1="nikhil";
let boy2="promod";
// try to write nikhil is a friend of promod

let sentance1=`boy1 is a friend of boy2`
let sentance2=`${boy1} is a friend of ${boy2}`
 console.log(sentance1);
 console.log(sentance2);


// // OUTPUT

// boy1 is a friend of boy2
// nikhil is a friend of promod




//ESCAPE SEQUENCE CHARACTER


let dialog ='harish said to harry harish that i am a  good boy\'s  and you are not good boy\'s i\' thinks than you \' should\'s go out';

console.log(dialog);

// // OUTPUT

// harish said to harry harish that i am a  good boy's  and you are not good boy's i' thinks than you ' should's go out

// \n for new line
// \t for tab
// \r for carriag return














```
## 014
```javascript

// 014

let name="Harry";
let name1="Harry\'asdf\'adsf\tasdf\nasdf";
console.log(name)
console.log(name.length)
console.log(name1.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2,4))
console.log(name.slice(1,3))
console.log(name1.slice(1,6))
console.log(name1.slice(1,8))
console.log(name.slice(2))
console.log(name.slice(3))
console.log(name1.slice(1))
console.log(name1.slice(5))

// // OUTPUT

// Harry
// 5
// 25
// HARRY
// harry
// rr
// ar
// arry'
// arry'as
// rry
// ry
// arry'asdf'adsf  asdf
// asdf
// 'asdf'adsf  asdf
// asdf






let name="Harry bhai";
let name1="Harry\'asdf\'adsf\tasdf\nasdf";
console.log(name.replace("bhai","bhau"))
console.log(name.replace("harry","harish"))
console.log(name1.replace("adsf\t","HELLO"))


// // // OUTPUT


// Harry bhau
// Harry bhai
// Harry'asdf'HELLOasdf
// asdf




let name="Harry";
let friend="Naman";
let friend1="       MEENA          ";
let friend2="       N    aman      MEENA      A R SHAHA GNA     asdlfk        H A R I O M          ";

console.log(name.concat(" is a friend of ",friend , " and ", friend, " is also friend of ", name))
console.log(friend1.trim());
console.log(friend2.trim());



// NOTE : TRIM function se sirf start character ke pahale ki space erase hoti hai aur sirf end character ke baad ki space erase hoti hai




// // // // OUTPUT

// Harry is a friend of Naman and Naman is also friend of Harry
// MEENA
// N    aman      MEENA      A R SHAHA GNA     asdlfk        H A R I O M



let name="harry";
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);

// // // // OUTPUT

// h
// a
// r
// r
// y





// NOTE:
// STRINGS ARE IMMUTABLE 
// means jabhibhi mai koi bhi operation karta hoo string ke upper tab memory me nayi string banti hai 
// agar hamne ek string defined kari hai pahale se to ham uusko over write ya update nahi kar sakte 

// concat 
// trim
// scile
// toUppercase
// to Lower case
// replace

// ye jitne bhi operations kar rahe hai ham iinke wajhase original string me koi change nahi aaraha wo nayi string form ho rahi hai memory me aur phir display ho rahi hai




```


## 015
```javascript


//015


// Q1
// what will be the length of 
let str="harry\n";
console.log(str.length);

// ans = 6


// Q2



// .includes function of string


// The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.


  
// eg:

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

output: The word "fox" is in the sentence







// .startswith


// The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.

// // eg:


  const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// Expected output: true

console.log(str1.startsWith('Sat', 3));
// Expected output: false



// .endswith

// The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.

  

// // eg:


  const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));
// Expected output: true

console.log(str1.endsWith('best', 17));
// Expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));
// Expected output: false






// Q3
// convert given string into lower case







// Q4

let str="please give me Rs 1000"
let amount=Number.parseInt(str.slice("please give me Rs ".length));
console.log(amount)




//Q5
// change some characters of given string

let str="harish";
str[4]="r";
str[5]="y";
str[6]="";
str[7]="";
console.log(str)//------------>this has not changed beacouse string is immutable we cannot update or over write a character of a string



// OUTPUT

// harish


// console.log(str.replace("rish","rry"));

// OUTPUT
// harry




```
## 016
```javascript

// 016



// ARRAYS
// NOTE: ARRAY IN JS IS DIFFERENT FORM ARRAY IN C LANG
// NOTE: ARRAY IN JAVA SCRIPT ARRAY CAN CONTAIN DIFFERENT DATA TYPE ELMENTS IT CAN CONTAIN INTEGER DECIMAL CHARACTER BOOLEAN STRING ETC
// NOTE: IF A ELEMENT IS NOT PRESENT IT DOES NOT GIVE ERROR IT SIMPLY SAYS THAT undefined





let arr=[1,23,3,'A',false,true,"this is a string"];
console.log(arr);

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// OUTPUT:
// [ 1, 23, 3, 'A', false, true, 'this is a string' ]
// 1
// 23
// 3
// A
// false
// true
// this is a string
// undefined
// undefined
// undefined




let arr=[1,23,3,'A',false,true,"this is a string"];

console.log("the length of array is : "+arr.length);

arr[0]=false;
arr[1]=52;//-------updating an array
arr[10]="this is index 10";//-------->adding a new value to an array
console.log(arr);
// console.log(arr[1]);

// // OUTPUT
// [false, 52,
  // 3, 'A', false, true, 'this is a string', <3 empty items>, 'this is index 10']


```


## 017

```javascript

// 017



let num=[1,434,456,12,45,32];

let b=num.toString()// ---->creating a new string in memory with variable with using array num
console.log(b)
console.log(typeof b)

let c=num.join('-')// ---->creating a new string in memory with variable with using array num which will be seperated with - hiphen
console.log(c)
console.log(typeof c)

num.pop()//------>this will pop out the last element 
console.log(num)

// // OUTPUT

// 1,434,456,12,45,32
// string
// 1-434-456-12-45-32
// string
// [ 1, 434, 456, 12, 45 ]








let num=[1,434,456,12,45,32];
let d=num.pop()//------>this will pop out the last element and after poping out this willl store the poped element  in d
console.log(d)

// // OUTPUT

// 32






let num=[1,434,456,12,45,32];

num.push(56)//------>this will return the new array length
console.log(num)

let d=num.push()//------>this will return the new array length
console.log(d)

// // OUTPUT
// [1, 434, 456, 12, 45,  32,  56 ]
// 7





let num=[1,434,456,12,45,32];

num.shift()//------>this will pop out the 0th index term
console.log(num)

// // OUTPUT
// [ 434, 456, 12, 45, 32 ]



  





let num=[1,434,456,12,45,32];

let d=num.shift()//------>this will return the poped out 0th index term
console.log(d)

// // OUTPUT
// 1


```

## 018

```javascript
// 018



 let num=[1,434,456,12,45,32];
console.log(num);

// delete operator se array ki length affect nahi hoti

delete num[0];
delete num[3];
delete num[5];
console.log(num);
console.log(num.length);

// // OUTPUT
// [ 1, 434, 456, 12, 45, 32 ]
// [ <1 empty item>, 434, 456, <1 empty item>, 45, <1 empty item> ]
// 6







let num1=[1,2,3,4,5];
let num2=[6,7,8,9,10];
console.log(num1.concat(num2));
console.log(num1.concat([11,12,13,14,15]));

// // OUTPUT

// [
//   1, 2, 3, 4,  5,
//   6, 7, 8, 9, 10
// ]
// [
//    1,  2,  3,  4,  5,
//   11, 12, 13, 14, 15
// ]













//NOTE: sort function first convert all element in string and then do sorting according to ascii value

// NOTE: sort method makes sorting according to the alplabetical order





let num=[true,false,1,434,456,12,45,32,3523,434,78,65656,8776,90,"HeLLO WORLD","A ", "z", "GO TO HOME", "go to hme","Iamgoinghome","IAMGOINGHOME","02323sdfadfa","02323SDFADFA",'5622asdf','654as',23531,16735];

num.sort();//------>this will make changes in array
 console.log(num);
// // // OUTPUT

// [
//   '02323SDFADFA', '02323sdfadfa', 1,
//   12,             16735,          23531,
//   32,             3523,           434,
//   434,            45,             456,
//   '5622asdf',     '654as',        65656,
//   78,             8776,           90,
//   'A ',           'GO TO HOME',   'HeLLO WORLD',
//   'IAMGOINGHOME', 'Iamgoinghome', false,
//   'go to hme',    true,           'z'
// ]














// assending order sort






let num=[1,434,456,12,45,32,3523,434,78,65656,8776,90,23531,16735];


let compare=(a,b)=>{
return a-b;
}
num.sort(compare);
 console.log(num);
// // // OUTPUT

// [
//       1,    12,   32,    45,
//      78,    90,  434,   434,
//     456,  3523, 8776, 16735,
//   23531, 65656
// ]












//asending order sort does not work properly with alphabet in it




let num=[true,false,1,434,456,12,45,32,3523,434,78,65656,8776,90,"HeLLO WORLD","A ", "z", "GO TO HOME", "go to hme","Iamgoinghome","IAMGOINGHOME","02323sdfadfa","02323SDFADFA",'5622asdf','654as',23531,16735];


let compare=(a,b)=>{
return a-b;
}
num.sort(compare);
 console.log(num);
// // // OUTPUT

// [
//   false,          true,           1,
//   12,             32,             45,
//   78,             90,             434,
//   434,            456,            3523,
//   8776,           16735,          65656,
//   'HeLLO WORLD',  'A ',           'z',
//   'GO TO HOME',   'go to hme',    'Iamgoinghome',
//   'IAMGOINGHOME', '02323sdfadfa', '02323SDFADFA',
//   '5622asdf',     '654as',        23531
// ]












// dssending order sort




let num=[1,434,456,12,45,32,3523,434,78,65656,8776,90,23531,16735];


let compare=(a,b)=>{
return b-a;
}
num.sort(compare);
 console.log(num);.

// // // OUTPUT
// // [
// //   65656, 23531, 16735, 8776,
// //    3523,   456,   434,  434,
// //      90,    78,    45,   32,
// //      12,     1
// // ]






//dssending order sort does not work properly with alphabet in it








let num=[true,false,1,434,456,12,45,32,3523,434,78,65656,8776,90,"HeLLO WORLD","A ", "z", "GO TO HOME", "go to hme","Iamgoinghome","IAMGOINGHOME","02323sdfadfa","02323SDFADFA",'5622asdf','654as',23531,16735];


let compare=(a,b)=>{
return b-a;
}
num.sort(compare);
 console.log(num);

// // // OUTPUT

// [
//   65656,          23531,          16735,
//   8776,           3523,           456,
//   434,            434,            90,
//   78,             45,             32,
//   12,             true,           1,
//   false,          'HeLLO WORLD',  'A ',
//   'z',            'GO TO HOME',   'go to hme',
//   'Iamgoinghome', 'IAMGOINGHOME', '02323sdfadfa',
//   '02323SDFADFA', '5622asdf',     '654as'
// ]
















let num=[true,false,1,434,456,12,45,32,3523,434,78,65656,8776,90,"HeLLO WORLD","A ", "z", "GO TO HOME", "go to hme","Iamgoinghome","IAMGOINGHOME","02323sdfadfa","02323SDFADFA",'5622asdf','654as',23531,16735];

num.reverse();//------>this will make changes in array
 console.log(num);
// // // OUTPUT

// [
//   16735,          23531,          '654as',
//   '5622asdf',     '02323SDFADFA', '02323sdfadfa',
//   'IAMGOINGHOME', 'Iamgoinghome', 'go to hme',
//   'GO TO HOME',   'z',            'A ',
//   'HeLLO WORLD',  90,             8776,
//   65656,          78,             434,
//   3523,           32,             45,
//   12,             456,            434,
//   1,              false,          true
// ]






// slice splice



 let num=[1,434,456,12,45,32,3523,434,78,65656,8776,90,23531,16735];

// num.splice( , , );
let deletedElements= num.splice(3 , 2, 2313,2358,849,68 );
console.log(deletedElements);

[ 12, 45 ]




 let num=[1,434,456,12,45,32,3523,434,78,65656,8776,90,23531,16735];

// num.slice( , , );
 num.slice(3 , 2, 2313,2358,849,68 );
console.log(num);

// [
//       1,   434,  456,  12,
//      45,    32, 3523, 434,
//      78, 65656, 8776,  90,
//   23531, 16735
// ]

```


## 019

```javascript


// 019



let num =[1,2,4,5,7,4];
for (let i=0;i<num.length;i++){
  console.log(num[i])
}

// 1
// 2
// 4
// 5
// 7
// 4



// // forEach loop in JavaScript

let num =[1,2,4,5,7,4];
num.forEach((element)=>{
  console.log(element* element)
})






// array . from is used to make a non array element object or in dom manipulation a html collection
```






