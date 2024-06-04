const myObject ={
    js:'javascript',
    cpp:'C++',
    rb:"ruby",
    swifty:"swift by apple"
}

// how to print key - value of object separately
// USING FOR IN LOOP
console.log(myObject)
for (const key in myObject) {
    console.log(key)   // this will print all the keys
    console.log(myObject[key])  // this will print all the values
    
}

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`); 

}
