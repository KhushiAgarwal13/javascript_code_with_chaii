const user ={
    username:"khushi",
    price:99,
    
    welcomeMessage:function(){
        console.log(` welcome to website , ${this.username},`);
    }
 }

user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

// const person = {
//     name: 'Alice',
//     age: 25,
//     greet: function() {
//         console.log(`Hello, my name is , ${this.name}` );
//     }
// };

// person.greet(); // Outputs: Hello, my name is Alice

// backticks allows you to do string interpolation
// string interpolation allows you to embed expression inside a string 

const person = {
    name: 'Alice',
    age: 25,
    greet: function() {
        console.log('Hello, my name is ' + person.name);
    }
};

person.name='khushi'
person.greet(); // Outputs: Hello, my name is Alice
