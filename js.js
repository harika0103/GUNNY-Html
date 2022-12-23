
let a=4;
const b=3;
/*++a;
a+=3;*/

let c=5;
let d=6;{
console.log(c<d);
console.log(c>d);
console.log(c+d);
console.log(c-d);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a==b);
console.log(a===b);
};
   

//objects


function sum(a,b){
    let c=a+b;
    console.log(c);
}
sum(2,6);

function sum(a,b){
    let z=a+b;
    console.log(z);
}
sum(5 , 10);


//this
function sum(a,b){  
    this.x=a;
    this.y=b;
    this.getsum =function(){
        console.log("sum of a+b=",this.x+this.y);
    };
}
let someObj1=new sum(10,20);
let someObj2=new sum(10,30);
let someObj3=new sum(1,20);

someObj1.getsum()
someObj2.getsum()
someObj3.getsum()







