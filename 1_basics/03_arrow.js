
    // what's is arrow function now 
    // making function using an arrow 

    const user = {

        username: "khushi",
        age:10,

            }

    const addTwo =(num1,num2) => {
        return num1+num2
    }  
    const addThree=(num1,num2,num3) => (num1+num2+num3)
    // if we don't use curly parenthiis, we don't have to use return

    console.log(addTwo(3,4))
    console.log(addThree(34,3,3))