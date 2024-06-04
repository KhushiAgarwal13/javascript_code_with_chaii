const arr = [1,2,3,4,5]

for(const num of arr){
    console.log(num)
}
const greetings = "hellow world"
for(const a of greetings){
    console.log(`each char is ${a}`)
}

// Maps is used to store key value pair
const map=new Map()
map.set('IN','India')
map.set('USA', "United States of America")
map.set('Fr',"France")
console.log(map)

// now how to print key , value separately                        
// for (const key of map) {
//     console.log(key)
// }
// this method will print complete map together

// there's a shortcut for printing a key and value separately
for(const [key,value] of map){
    console.log(key,':-',value)
} 

// now can we also print key value of object with this method
// noo
// object is not iterable this way
// there's some different way of doing it
