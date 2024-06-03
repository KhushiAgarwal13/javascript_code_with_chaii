const a=3
if(a==3)
    {
        console.log("true")
    }
else{
    console.log("false")
}

if(2=="2"){
    console.log("executed")
}

if(2==="2"){
    console.log("not-executed")
}

const key=8
switch (key) {
    case 1:
        console.log("key is 1")
        break;
    case 2:
        console.log("key is 2")
        break;
    case 3:
        console.log("key is 3")
        break;
    case 8:
        console.log("key is 8")

    default:
        break;
}
// this is the basic syntax of switch

const userEmail =[]
if(userEmail){
    console.log("Got user email")

}
else{
    console.log("Don't have user email")
}
// empty string --- false
// empty array ---true
// what is the rule for falsy and true value

// falsy values
// false, 0 , -0, BigInt, "", null , undefinend, NaN 

// truthy values
// "0", 'false'(as it's inside string), " ", [],{},function(){}
// empty array, empty object , empty function all are truthy values


// how to check empty  array
if(userEmail.length===0){
    console.log("empty array")
}

const emptyObj ={}
if(Object.keys(emptyObj).length === 0){
  console.log("Object is empty")
}
// Object.keys(emptyObj) function will return you
// an array of keys

// NULLish Coalescing Operator(??): null undefined

let val1;
// val1=5 ?? 10
// val1=null??10
// val1= undefined?? 14                              
console.log(val1)