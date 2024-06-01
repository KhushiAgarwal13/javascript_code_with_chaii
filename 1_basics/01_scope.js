// There are primarily two types of scope in JavaScript: global scope and local scope.
// Global Scope - Variable declard outside the function or block are global scope

// Local Scope - Variable declared inside the function or block have Local Scope, they can't be accessed from outside

// Block Scope - Variables declared with let and const are block scoped. They are only accessed within the block(if, else, for), they
// are declared in 

// Function Scope - Variables declared with var are function scoped. They are only accessed within the function, they are declared in]

if(true)
    {
    let a=1;
    // let is block scoped, they are not accessibe outside the block
}
// console.log(a)  --- through an error

function find(){
    var x=34
    // var is function scoped , they are not accessible outside the function 

}
// console.log(x)   ---through an error


function one(){
    const username = "khushi"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)
    // two()
}

one()
