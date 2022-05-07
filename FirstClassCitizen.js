// function fn(par){
//     console.log("hello");
//     return par;
// }
// let val=fn(2);
// console.log(val);

// let fnCont=function fn(){
//     console.log("Hello 1st class citizen");
// }
// fnCont();
//anonymus function
// let fnCont=function fn(){
//     console.log("Hello 1st class citizen");
// }
// fnCont();
//function can pass as parameret;
// function fn(par){
//     console.log("function can pass as parameter");
//     par();
// }
// function par()
// {
//     console.log("hello i am param fn");
// }
// fn(par);

//function can return from functions;
// function fn(par){
//     console.log("function can return from function");
//     return function par()
//     {
//         console.log("hello i am  fn , who return from function");
//     }
// }

// let rfn=fn();
// console.log(rfn);
// rfn();

// let k=fn(2);
// console.log(k);

// function fn(param){
//     let ans=param*param;
//     return ans;
//     console.log("hello");
// }
// console.log(varname);
// var varname;
// console.log(varname);
// varname="hello"
// console.log(varname);
// fn();
// function fn(){
//     console.log("hello i am called");
// }
// fn();
// fnCont();

// (function fn1(){
//     console.log("function cont");
// })();
// console.log(varname);
// let varname=10;

///console.log(fnCount);

// console.log(c);
// var c=fnCount()
// function fnCount(){
//     console.log("hello");
// }

// fnCount();

// function fn(){
//     console.log(x);
//     var x=10;
//     console.log(x);
// }
// fn();
// console.log(x);

// var x=1;
// a();
// b();
// console.log(x);

// function a(){
//     var x=10;
//     console.log(x);
// }
// function b(){
//     var x=100;
//     console.log(x);
// }

// console.log(this);



// '==' tis is loose eqility and '====' strict equality in ths case check type of both side
// var num=10;
// var obj='10';
// console.log(num===obj);-> false
//console.log(num==obj);->true;
// console.log(a);
// var a=10;


// console.log(x);

// var Frodo = new Hobbit();
// Frodo.height = 100;
// Frodo.weight = 300;
// Output: ReferenceError: Hobbit is not defined

// class Hobbit {
//   constructor(height, weight) {
//     this.height = height;
//     this.weight = weight;
//   }
// }
// console.log(new Hobbit); 
// console.log(a);

// let a;
// function a(){
//     console.log(b);
   
// }
// var b=10;
// a();
// var a=10;
// var a=100;

// let a=10;
// let a=100;

// var b=100;
// let a;
// a=10;
// console.log(global.b);


// var a=100;
// {
//     var a=10;
// }

// console.log(a);  
// var b=100;// global scope
// const c = 120; //separate memory (script)
// {var a = 10;
// let b =20; //block scope
// const c = 30;
// console.log(b);
// console.log(c);
// }
// console.log(b);
// console.log(c);

// const a=10;
// {
//     const a=100;
//     console.log(a);
// }
// console.log(a);
// let a=10;
// function x(){
//     var a=100;
// }

// function x(){
//     var a=10;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// console.log(ret);
// var ret=x();
// console.log(ret);
// ret();


// function x(){
//     let a=7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var ret=x();
// ret();
// function x(){

//     function secure()
//     {
//         let key='u8v8Whyk108e';
//         return key;

//     }
//     return secure;
// }
// console.log(key);
// var private=x();
// var key=private();
// console.log(key);

// function fn(){
//     for(var i=0;i<5;i++)
//     {
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
       

//     }
//     console.log("hello");

// }
// fn();
// function fn(){
//     for(let i=0;i<5;i++)
//     {
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
       

//     }
//     console.log("hello");

// }
// fn();
// function fn(){
//     for(var i=0;i<5;i++)
//     {
//         function closure(i){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
//     closure(i);

//     }
//     console.log("hello");

// }
// fn();

// function x(){
//     var a=10;
// }
// console.log(a);

// what is callback functions

// a javascript having first class functions ans due to that we can pass functions to functions that is called callback fuction
// here we take simple exmle of setTimOut which provide by browser API , so 

// setTimeout(function(){
//     console.log("Asyc is called");
// },5000);

// function x(y){
//     console.log("Hello x called");
//     y();
// }
// x(function y(){
//     console.log("Hello y called");

// });
// output: Hello x called
// Hello y called
// Asyc is called
//so here we expect that firstly print "async called" beacause javascript is synchronus single threded language 
//but here we introduce callback functions so using callback function we use async programming.
//here that call back is called after 5 sec .
// //In event Listener also happed same document.getElementById("clicked").addEventListerner("click",function(){console.log("hello");})
// let r=[1,2,3,4];
// let a=r.filter((ob)=>{
  
//   return ob%2==0;
// })
// console.log(a);

// Array.prototype.forEACH=function (r){
//     for(let i=0;i<this.length;i++){
//         return this[i];
//     }
// }

// let a=r.forEACH()
// let a=6
// console.log(a.toString(2));

// a='2';
// console.log(parseInt(a)+2)
// a=2;
// console.log(typeof(a+""));

// var a=10;
// console.log(this.a);
// function b(){
//     console.log(a);
//     console.log(this.a);
// }
// b();

//now we write both use of reduceand functional programming advantage.

//let arr=[5,5,5,5,5];

// let fn=(element)=>{
//     return Math.sqrt(element)%1===0;
// }

// let ans=arr.filter(fn)

// console.log(ans);

// let ans=arr.reduce((acc,curr,index,arr)=>{
    
//         acc+=curr;
//     if(index==arr.length-1)
//     {
//         return acc/arr.length;
//     }
    
       
    
// })

// console.log(ans);
// let a=[1, 2, 3].reduce((total, number, index, array) => { 
//     total += number // add current number to total
//     index++;
//     if (index === array.length - 1) { 
//         // if we're at the last iter. return total/array.length // return the average } 
//         return total }})
//         console.log(a);

// let user=[
//     {firstname:"akshay",lastname:"saini",age:26},
//     {firstname:"Rushi",lastname:"pawar",age:25},
//     {firstname:"shubzz",lastname:"dock",age:24},
//     {firstname:"momle",lastname:"milk",age:25}
// ]

// let ans=user.map((obj)=>{
//     return obj.firstname+" "+obj.lastname;
// })
//console.log(ans);

// let ans1=user.reduce((acc,curr)=>{
//     if(acc[curr.age])
//     {
//         acc[curr.age] = ++acc[curr.age]
//     }
//     else{
//         acc[curr.age]=1;
//     }
//     return acc;
// },{})
// console.log(ans1);

// let ans2=user.filter((obj)=>{
//     if(obj.age==25)
//     {
//         return obj;
//     }
// }).map((obj)=>{
//     return obj.firstname;
// })

// console.log(ans2);

// l

// let ans=[1,2,3]+[3,4,5,6];

// console.log(typeof(ans));

// setTimeout(()=>
// {
// console.log(2)
// })
// console.log(3)
// let a=[1,2,]
// let b=[1,2]
// let c=a+b;
// console.log(c);

//object destructuring
// let obj={id:1,name:"rsuhi"};

// let {name,id}=obj;

//console.log(name,id);

// let {name:firstname}=obj
// console.log(firstname);

// function fn(){
//     return {
//         name:"rushi",
//         id:10
//     }
// }
// let {name}=fn();

// console.log(name);
// const user = { 
//     'name': 'Alex',
//     'address': '15th Park Avenue',
//     'age': 43
// }
// let clone={...user};
// clone.salary=10000;
// console.log(user);
// console.log(clone);

// let arr1=[{id:1,name:"rushi",percetage:"90%"},
// {id:2,name:"kaksde",percetage:"85%"}]

// let res=arr1.map((ob)=>{
//     return parseInt( ob.percetage.replace("%",""));
// }).reduce((acc,curr)=>{
//     return acc+=curr;
// },0)
// console.log(res/arr1.length);

// let arr=[1,2,3,4]

// let ans=arr.find(2)
// console.log(ans);

//***************number methods **********
// let x=123.657
// console.log(typeof(x.toString()));
// console.log(typeof(x.toFixed(1)));

// console.log(parseInt("5"));

// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE);

//***********String Methods**********
//let str="rushi";
// let str1="pawar"
// str=str.trim();
// console.log(str.length);
// console.log(str.slice(-5,-1));
// console.log(str.substring(0,4));
// console.log(str.substr(0,5));
// console.log(str.charAt(2));
// console.log(str.toLocaleLowerCase());
// console.log(str.toUpperCase());
// console.log(str.concat(" ",str1," hi"));
 //console.log(str.split("r",str.length));

//************ Array Methods ***********

 //let arr=["bannna","mango","kiwi","mango","banana"];
// let arr1=[4,2,3,1];
// //arr.pop();
// //arr.push(1);
// console.log(typeof(arr.toString()));
// console.log(arr.join("-->"));
// console.log(arr.length);
// console.log(arr.concat(arr1));
// //console.log(arr1.splice(1)); this change orignal array
// console.log(arr1.slice(-4,-1));
// console.log(arr1.sort());
// console.log(arr1.reverse());
//console.log(arr.lastIndexOf("mango"));
// console.log(arr.includes("mango"));
// console.log(arr.includes(1));
// now use find() and includes
//find is return 1st value form array which satisfy condition
//we having array and we have to find next greater of given element then we find method
// let arr=[12,32,41,56,88,94,87,100,101,]
// let Next_greater_of=55;
// let ans=arr.find((el)=>{
//     return el>Next_greater_of;
// })
// console.log(ans);
//*********************************************************************** */
// let a=2
// let b='2';
// console.log(a==b);
// console.log(a===b);

// let obj={id:1,name:"ruhi"}

// console.log(obj);

// obj.salary=30000;

// console.log(obj);

// let arr=[1,2,3];

// let [a,b,c]=arr;
//console.log(a,b,c);


// let obj={id:1,name:"rushi",salary:50000,
//          state:{
//              name:"Maharashtra",
//              code:423701
//          }}

// let {id,name,salary,state:{name:n}}=obj;

// console.log(id,name,salary,n);




// var myArray = ['a', 1, 'a', 2, '1'];
// // var unique = myArray.filter((value, index, arr) => arr.indexOf(value) === index);

// myArray.filter((value, index, arr) =>console.log(arr.indexOf(value)));

//************************** This keyword */
// var firstName="oh ya";
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     printName: function() {
//       console.log(this.firstName + ' ' + this.lastName);
//     }
//   };


// let printFullName = person.printName;
// printFullName();

// let ar=[1,2,3]
// let ar1=[3,5,6]
// let ar2=[...ar,...ar1]
// console.log(ar2);
// function func1(){
 

//   setTimeout(()=>{

//     console.log(x);

//     console.log(y);

//   },3000);

 

//   var x = 2;

//   let y = 12;

// }

 
// func1();

// const b = {

//   name:"Aditya",

//   f: function(){

//     var self = this;

//     console.log(this.name);

//     (function(){

//       console.log(this.name);

//       console.log(self.name);

//     })();

//   }

// }
// b.f();


//In js array and functions are treated as objects.

// let arr=[1,2,3];
// arr.myname=21;
// arr.fn=function(){
//     console.log("Hello i am inside array ");
// }
// console.log(arr);
// console.log(arr.length);

// arr[30]=22;
// console.log(arr);
// console.log(arr.length);


// function fn(){
//     console.log("i am function");
// }
// fn.property='Hello i am property';

// fn.fn1=function(){
//     console.log("i am function 2nd");
// }
// fn();
// fn.fn1();
// console.log(fn.property);

//this is custome fn not having prototype;
//  let arr=[1,2,3,4,5,6]
//  let mp=arr.map((x)=>{
//      return x*x;
//  })
//  //console.log(mp);
// function pollyfillMap(arr,cb){

//     mpArr=[];
//     for(let i=0;i<arr.length;i++)
//     {
//         mpArr.push(cb(arr[i]));
//     }
// }
// function cb(x)
// {
//     return x*x;
// }
// pollyfillMap(arr,cb);
// console.log(mpArr);


// prototype and polyfill of (map,filter, reduce)
// let arr=[1,2,3,4,5,6]

// Array.prototype.myarry=function(){
//     console.log(this);
// }
// arr.myarry();
//op=> [ 1, 2, 3, 4, 5, 6 ]
// Array.prototype.mymap=function(cb){

//     let neArr=[];
//     for(let i=0;i<this.length;i++ )
//     {
//         neArr.push(cb(this[i]));
//     }

//     return neArr;
// }

// let ans=arr.mymap((x)=>{
//     return x*x;
// })
// console.log(ans);

// let arr=[1,2,3];

// Array.prototype.myFilter=function(cb){

//     let newAr=[];
//     console.log(this);// this will give arry on which we apply our function (myFilter)
//     for(let i=0;i<this.length;i++)
//     {
//         if(cb(this[i]))
//         {
//             newAr.push(this[i])
//         }
//     }
//     return newAr;
// }

// let ans=arr.myFilter((x)=>{
//     return x%2==0;
// },)
// console.log(ans);


// let ans1=arr.reduce((acc,curr)=>{
//     return acc+curr;
// },0)
// console.log(ans1);

// Array.prototype.myReduce=function(cb,initial){

    
// for(let i=0;i<this.length;i++){
// initial=initial+this[i];
    
// }
// return initial
// }

// let ans=arr.myReduce((acc,curr)=>{
//     return acc+curr;
// },0)

// console.log(ans);

// function fn(){
//     console.log(this.name+" "+this.surname);
// }

// obj1={
//     name:"rushi",
//     surname:"Pawar"
// }

// obj2={
//     name:"Shubham",
//     surname:"Dhokchaule"
// }
// let newfn=fn.bind(obj2);


// newfn();

// // function curring with bind and closure

// function add(a,b){
//     console.log(a+b);
// }
// let addWith2=add.bind(this,2)
// addWith2(6)


//curring with closure

// function add(x){
//     return function(y){
//         console.log(x+y);
//     }
// }

// let addWith2= add(2);

// addWith2(5);


///spread operator, rest operator and destructing

// let obj={id:1,name:"rushi",city:"pune", pincode:423701}
// //obj destructuring
// const {name,id}=obj;
// console.log(name,id);
// //array destucturing
// let arr=[1,2,3]
// let [a,b,c,d]=arr;
// console.log(a,b,c,d);
// //rest operator

// let ob1={id:2,name:"ram",...obj}
// console.log(ob1);
// //rest parameter
// function fn(a,...rest)
// {
//     console.log(...rest)
//     //console.log(a,b,c)
// }

//  fn(1,2,3)
// //spread operator
// let arr1=[...arr];
// console.log(arr1);

//polyfill of  bind using function prototype

// let obj={
//     id:1,
//     name:"rushi"
// }
// function show(city,car){
//     console.log(this.id+" "+this.name+" "+city+" "+car);
// }

// // let bindfn=show.bind(obj,"mumbai","bmw");
// // bindfn();

// Function.prototype.mybind=function(...args){
//     //console.log(this);
//     let fn=this;
//     let param=args.slice(1);
//     return function(...param1){
//         fn.apply(args[0],[...param,...param1])
//     }
// }
// let mybindfn=show.mybind(obj,"mumbai");
// mybindfn("BMW");


//constructor function

// function car(car,city,age)
// {
// this.Car=car,
// this.City=city
// this.Age=age

// this.fn=function(){
//     console.log(this.Car+" im driving")
// }
// }

// let car1=new car("bmw","dehli",25);
// console.log(car1);
// let car2=new car("mercdeeg","dehli",21);
// console.log(car2);

// car1.fn();

//this is prototypal inheritance

// let person={
//     id:1,
//     name:"rushi",
//     age:25,
//     fn:function(){
//         console.log(this.name+" "+this.age);
//     }
// }
// let p2={
//     name:"sanket"
// }

// p2.__proto__=person;

// p2.fn();
///
///create object using class also learn about inheritance.*******************************************

// class car{
//     constructor(name,color)
//     {
//         this.Name=name,
//         this.Color=color
//     }
// }
// class carcall extends car{
//     constructor(){
//         super('hello i am extended class',"ohhh")
//     }
// }

// let carInstance=new carcall()

// console.log(carInstance);

//difference between foreach and map************************************************

// let arr=[1,2,3,4]

// let maparr=arr.map((x)=>{
//     return x*x;
// })
// console.log(maparr);
// console.log(arr);
// let dummyarr=[]
// let forarr=arr.forEach((x)=>{
//     dummyarr.push(x*x);
// })
// console.log(forarr);
// console.log(dummyarr);

//promise create and use .then and .catch********************************************************
// const weather = true
// const date    = new Promise(function(resolve, reject) {
//   if (weather) {
//     resolve( "resolved")
//   } else {
//     reject( 'Bad weather, so no Date')
//   }
// });

// date.then((data)=>{
//     console.log(data);
// }).catch((err)=>{

// console.log(err);
// })
////////logical questions solving*******************************************************************

// let st='2.5'
// console.log(parseFloat(st));

// var string='priya riya supriya'
// let arr=[1,2,3,4]
// //console.log(string.split(''));

// let str1= string.split('').filter((item,index,arr)=>{
//   return arr.indexOf(item)==index;
// }).join('');

// console.log(str1);

///or using set object
//  let arr=string.split('')

//  let arr2=[...new Set(arr)];
// console.log( arr2.join(''))

//roate array by k

// let k=2;

// for(let i=0;i<k;i++)
// {
//  let add= arr.shift();
//   arr.push(add);
// }

// console.log(arr);

// Code 4:String reverse without reversing of individual words (Array of elements can be reverse with reverse() method but for string it is won't possible so required to split 
// and then join().

//    var string ="India is my country"

//    let ans= string.split('').reverse().join('').split(' ').reverse().join(' ')

//    console.log(ans);

// Code 5:String reverse with reversing of individual words

// var string ="India is my country"

// let ans= string.split('').reverse().join('')

// console.log(ans);
/////***************Anagram */
// let str='mary'
// let str1='army'

// let ans=str.toLowerCase().split('').sort().join('');
// let ans2=str.toLowerCase().split('').sort().join('');
// console.log(ans==ans2)

//swap without third variable
// let a=10;
// let b=20;

// a=a+b;
// b=a-b;
// a=a-b;

// console.log(a,b)
////palindrom

// function checkPalindrome(){
//     const string = "nitin"
//     let len = string.length;
//     let pali=true;
//     for (i=0; i<len/2;i++){
//       if (string[i]!=string[len-1-i]){
//           pali=false
//       }
     
//     }
//     if(pali)
//     {
//         console.log("palindrome")
//     }
//     else{
//         console.log("Not Palindrome")
//     }
    
//  }
//  checkPalindrome()
// let str="google"
// console.log(str.substring(0,2));

// //Code 16: To find longest common string from array of strings
// function longestCommonString(){
//   array=["go","google","gosh"]
//   var arr = array.sort()
//   console.log(arr)
//   var i=0;
//   while(arr[0].length>0 && arr[0].charAt(i)===arr[arr.length-1].charAt(i)){
//     i++;
//   }
//   console.log(arr[0].substring(0,i)) // "go"
//   return arr[0].substring(0,i)
// }
// longestCommonString() 



//Code 19: To find a first pair whose sum is zero
// function getSumPairZero(array)
// {
//   for(let number of array)
//   {
//      for(let i=1; i<array.length; i++)
//      {
//          if(number+array[i]===0)
//          {
//             return [number, array[i]]
//          }
//      }
//   }
// }
// const result = getSumPairZero([-5,-4,-3,-2,-1,0,1,2,3,4,5])
// console.log(result)


//Code 21: To find the largest pair of the 2 elements using indexing with unsorted elements
// function largestPairSumofTwo(numbers){
//     const num = numbers.sort((a, b) => b - a);
//     console.log(num)
//     return num[0] + num[1];
// }
// const result = largestPairSumofTwo([9,7,8,4,5,6,1,2,3])
// console.log(result)

// // sorting of string
// let str='zxdea';
// let arr=str.split('');
// // arr.sort();
// // console.log( arr.join(''))
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<arr.length;j++)
//     {
//        if(arr[i]<arr[j])
//        { let temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp
//     }
//     }
// }
// console.log(arr.join(''));


// const abc=[1,2,3]
// console.log(typeof(abc));
// console.log(Array.isArray(abc));

// let n=Array.from(abc);
// console.log(n);

// let n=10
// let count=0;
// for(let i=2;i*i<n;i++)
// {
//     if(n%i==0)
//     {
//         count++;
//     }
// }
// if(count==0)
// {
//     console.log("prime")
// }
// else{
//     console.log("Not Prime")
// }
//Code 32: To find unique values from 2 arrays and keep into one array.

// let arr=[1,2,3,4,4]
// let arr1=[2,3,4,5,6]
// let ans=[...arr,...arr1]
//  ans=[...new Set(ans)]
//  console.log(ans);


// code : find common or repreated element

// let arr=[1,2,3,4,4]
// let arr1=[2,3,4,5,6]
// let str='bbdadbc'
// let arr=str.split('');
// let ans=[]
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=i+1;j<arr.length;j++)
//     {
//         if(arr[i]==arr[j])
//         {
//             ans.push(arr[i]);
//         }
//     }
// }
// console.log(ans.join(''));

//Code 33: Find first duplicate element from an array
// let arr = [1,2,,5,5];

// function firstDuplicateElement(arr){
//     for(let i=0;i<arr.length-1;i++)
//         {
//             if(arr[i]==arr[i+1])
//             {
//                 return arr[i]
//             }
//         }
// }
// let ans=firstDuplicateElement(arr);
// console.log(ans);

//Code 35: Uppercase of each first letter of a words 

// let str="india Is mY county"

// let arr=str.split(' ');
// console.log(arr);
// let ans1=[]
// for(let i=0;i<arr.length;i++)
// {
//     let ans=arr[i].charAt(0).toUpperCase()
   
//     for(let j=1;j<arr[i].length;j++)
//     {
//         ans=ans+arr[i].charAt(j).toLocaleLowerCase();
//     }
    
//     ans1.push(ans);
// }
// console.log(ans1.join(' '));

//using map also it is posible

// let str="india Is mY county"

// let arr=str.split(' ');

// let ans=arr.map((item)=>{
//     return item.charAt(0).toUpperCase()+item.slice(1);
// })
// console.log(ans.join(' '));


// function fn(){
//     var b=10
  
// }
// console.log(b);
// fn()



// class employee{
  
//     constructor(empId)
//     {
//       this.empId=empId;
//     }
    
//     get(){
//       console.log(this.empId)
//     }
//   }
  
//   class rushikesh extends employee{
   
//     constructor(id,job){
//       super(id);
     
//       this.job=job
//     }
    
//     getjob(){
//       return this.get()+" "+this.job;
//     }
// }
//     let rus1=new rushikesh(202333,"SDE");
//    let str= rus1.getjob();
//    console.log(str)

// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     present() {
//       console.log( 'I have a ' + this.carname)
//     }
//   }
  
//   class Model extends Car {
//     constructor(brand, mod) {
//       super(brand);
//       this.model = mod;
//     }
//     show() {
//       return this.present() + ', it is a ' + this.model;
//     }
//   }
//   let myCar = new Model("Ford", "Mustang");
//   myCar.show();

// const [x,y,,z]=[1,2,3,4]
// console.log(z);

// let a={a:1}
// let b={a:1}
// console.log(a==b)
// console.log(a===b)
// a==c
// console.log(a==b)
// console.log(a===b)
// let a=10
// let b="10"
// console.log(a+b); //output=>1010

// let a=10;
// let b=6
// let c=100
// console.log(a&&b&&c)


// let a=10
// function fn(){
//     console.log(a); 
// }

// fn()


// {
//     let a=10
// }
// console.log(a);











// let a=10;
// let b=20;

// // a=a+b
// // b=a-b
// // a=a-b

// console.log(a)
// console.log(b)

// let m=123

// let a=10
// let b=5

// if(b=='5')
// {
//     let a=20
//     console.log(a)
// }

// console.log(a)
// let obj={
//     "currentUser": {
//       "image": { 
//         "png": "./images/avatars/image-juliusomo.png",
//         "webp": "./images/avatars/image-juliusomo.webp"
//       },
//       "username": "juliusomo"
//     },
//     "comments": [
//       {
//         "id": 1,
//         "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
//         "createdAt": "1 month ago",
//         "score": 12,
//         "user": {
//           "image": { 
//             "png": "./images/avatars/image-amyrobson.png",
//             "webp": "./images/avatars/image-amyrobson.webp"
//           },
//           "username": "amyrobson"
//         },
//         "replies": [
//             {
//             "id": 2.5,
//             "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
//             "createdAt": "2 weeks ago",
//             "score": 5,
//             "user": {
//               "image": { 
//                 "png": "./images/avatars/image-maxblagun.png",
//                 "webp": "./images/avatars/image-maxblagun.webp"
//               },
//               "username": "maxblagun"
//             }
//         }
//         ]
//       },
//       {
//         "id": 2,
//         "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
//         "createdAt": "2 weeks ago",
//         "score": 5,
//         "user": {
//           "image": { 
//             "png": "./images/avatars/image-maxblagun.png",
//             "webp": "./images/avatars/image-maxblagun.webp"
//           },
//           "username": "maxblagun"
//         },
//         "replies": [
//           {
//             "id": 3,
//             "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
//             "createdAt": "1 week ago",
//             "score": 4,
//             "replyingTo": "maxblagun",
//             "user": {
//               "image": { 
//                 "png": "./images/avatars/image-ramsesmiron.png",
//                 "webp": "./images/avatars/image-ramsesmiron.webp"
//               },
//               "username": "ramsesmiron"
//             }
//           },
//           {
//             "id": 4,
//             "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
//             "createdAt": "2 days ago",
//             "score": 2,
//             "replyingTo": "ramsesmiron",
//             "user": {
//               "image": { 
//                 "png": "./images/avatars/image-juliusomo.png",
//                 "webp": "./images/avatars/image-juliusomo.webp"
//               },
//               "username": "juliusomo"
//             }
//           }
//         ]
//       }
//     ]
//   }

// obj.comments.forEach((comments)=>{
//     console.log(comments.id)
//     if(comments.replies.length!=0)
//     {
//       comments.replies.map((c)=>{
//             console.log(c.id)
//         })
//     }
// })

// var d = new Date();
// var time = d.getHours();
// console.log(d)
// if (time < 12) {
//  console.log("Good morning!");
// }
// if (time > 12) {
//     console.log("Good afternoon!");
// }
// if (time == 12) {
//     console.log("Go eat lunch!");
// }

// for(var i of [1,2,3,4])
// {
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }

// const a=10

// function x()
// {
//    const a=20
//     console.log(a)
// }

// x()
// console.log(a)

// function person(name){

//     this.name=name;
//     this.getName=()=>{
//         console.log(this.name)
//     }
 
// }

// const p=new person("Ram")
// let k=p.getName;
// k()

// var name="say";
// let obj={
//     name:"Rushi",
//     getName:function(){
//         console.log(this.name)
//     }

// }

// setTimeout(obj.getName.bind(this),1000)


// let object=[{
//     name:"kisan",
//     a:{
//         name:"ram",
//         b:{
//             c:"hii",
//             d:{
//                 e:"baby"
//             }
//         }
//     }
// }
// ]



// // let fn=(obj)=>{

    
// //     if(typeof(obj)=="object")
// //     {
// //     console.log(obj)
// //     for(const i in obj)
// //     {
// //     fn(obj[i])
  
// //     }
// //     }
// // }

// // fn(obj)
// // function getEachItem(object) {
// // object.forEach(item => {
// //     searchItem(item)
// //   })
// //   //...
// // };

// // function searchItem(item) {
// //   Object.keys(item).forEach(key => {
// //     if (typeof item[key] === "object") {
      
// //       searchItem(item[key])
// //       console.log(item[key])
// //     }
// //     //...
// //   })
// // // }

// // // getEachItem(object)




// // function a(){
// //     console.log(b)
// // }

// // let b=10;
// // a()




// let str="i am developer now";

// let arr={};
// for(let i of str)
// {

// if(arr[i])
// {
//     arr[i]++
// }
// else{

//     arr[i]=1;

// }

// }

// console.log(arr)

// for(let i in arr)
// {
//     if(arr[i]>0)
//     {

//     }

// }

// let arr=[1,2,3]

// let a1=[4,...arr]

// let arr=[1,2,3,4,5,6,7]

// arr.slice()


// let obj={
//     a:"Rushi",
//     b:{
//         c:{
//             d:"hi",
//             e:{
//                 f:"how are you"
//             }
//         }
//     }
// }
// let str="b.c.d.e";
// let arr=str.split(".")
// //console.log(arr)
// let ans;
// ans=obj[arr[0]]
// for(let i=1;i<arr.length;i++)
// {
//     ans=ans[arr[i]]
// }
// console.log(ans)
// ///****************************************************************** */
// let obj={
//         a:"Rushi",
//         b:{
//             c:{
//                 d:"hi",
//                 e:{
//                     f:"how are you"
//                 }
//             }
//         }
//     }

// function fn (obj,str)
// {
//     let arr=str.split(".")
//     let ans;
//     ans=obj[arr[0]]
//     for(let i=1;i<arr.length;i++)
//         {
//             ans=ans[arr[i]]
//         }
//     console.log(ans)
// }

// fn(obj,"b.c.d")//hi
// fn(obj,"b.c.d.a")//undefined
// fn(obj,"a")//Rushi
// fn(obj,"a.a")//undefined

// function func1()
// {
//     setTimeout(()=>{
//       console.log(x);
//       console.log(y);
//     },3000);
//     var x = 2;
//     let y = 12;
//   }
// func1()

// (function(){

//     let x = 43;
  
//     (function random(){
  
//       x++;
//       var x = 21;
  
//       console.log(x);
  
 
//     })();
  
//   })();
  

// const b = {

//     name:"Aditya",

//     f: function(){

//       var self = this;

//       console.log(this.name);

//       (function(){

//         console.log(this.name);

//         console.log(self.name);

//       })();

//     }

//   }

 

//   b.f();


// shallow copy bot only at 1st level**********************************
// const original = {a: {b: 1}};
// const falseCopy = {...original};
// falseCopy.a.b = 2;
// console.log(falseCopy) // logs {a: {b: 2}}
// console.log(original) // also logs {a: {b: 2}} WTF!

//so we have to manually set value*******************
// const original = {a: {b: 1}};
// const falseCopy = {...original,a:{b:2}};
// console.log(falseCopy) // logs {a: {b: 2}}
// console.log(original) // also logs {a: {b: 1}}

// this is deep copy*******************************
// const original = {a: {b: 1}};
// const trueCopy=JSON.parse(JSON.stringify(original));
// trueCopy.a.b=4;
// console.log(trueCopy) // logs {a: {b: 1}}
// console.log(original) // also logs {a: {b: 2}} 



