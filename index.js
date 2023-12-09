const initArr=[1,34,5,6,2,56,6,7,2]

function myFunc(str){
    console.log(str)
}
initArr.forEach(myFunc)

// map
// filter
// find
// sort









class Animal{
    constructor(name){
        this.name=name
        Animal.a=23
    }
    static method1(){
        Animal.a=45
    }
    speak(){
        console.log(`${this.name} makes the noise`)
        console.log(" the value of a is : "+ Animal.a)
    }
}

let cat=new Animal("bagadBilli")
cat.speak()
Animal.method1()
cat.speak()



const currentDate=new Date()
console.log(currentDate)




const user1 = {
    name :"harendar",
    rollNo:23,
    age:54,
    company:"microsoft"
}

const user2 = `{
    "name" :"harendar",
    "rollNo":23,
    "age":54,
    "company":"microsoft"
}`


console.log(JSON.stringify(user1))
let  user3=JSON.parse(user2)
console.log(user3.name)












let a=0
while(a<=10000000000000000000000000000000){
    console.log(a)
    a++
    a=a+1+a
}