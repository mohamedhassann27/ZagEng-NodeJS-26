// --------Problem 1----------
// let arr=["ahmed", "sara"]
// function reverseToUpper(arr){
//     return arr.map((item)=>item.toUpperCase())
// }
// console.log(reverseToUpper(arr));


// --------Problem 2----------
// const students=[
//     { name: "Ahmed", score: 80 },
//     { name: "Sara", score: 40 }
// ]
// function isPassed(arr){
//     arr.map((obj)=>{
//         return obj.score>50?obj.passed=true: obj.passed=false;
//     })
// }
// isPassed(students)
// console.log(students);



// --------Problem 3----------
// let arr= ["hi", "hello", "welcome"]
// function filteration(arr){
//     return arr.filter((item)=> item.length>4? true: false)
// }
// console.log(filteration(arr))


// --------Problem 4----------
// let arr=[10,20,30]
// function reducing(arr){
//     return arr.reduce((cur,next)=>cur+next)/2
// }
// console.log(reducing(arr));


// --------Problem 5----------
// const arr=[
//     { name: "Ahmed", age: 23 },
//     { name: "Sara", age: 16 },
//     { name: "Mona", age: 19}
// ]
// function filteration(arr){
//     return arr.filter((arr)=> arr.age>=18? true: false)
// }
// console.log(filteration(arr));


// --------Problem 6----------
// let num= Number(prompt("type a valid number"))
// function factorial(num){
//     let fact=1;
//     for(let i=2; i<=num; i++){
//         fact*=i
//     }
//     return fact
// }
// console.log(factorial(num));


// --------Problem 7----------
// let arr=[1,1,2,,1]
// function unique(arr){
//     return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num));
// }
// console.log(unique(arr));


// --------Problem 8----------
const word1= "Hi How are you!"
const word2= "Are-u_coming?"
function deleteSpecialChar(word){
    const specialChar= ['$','!','@','.','?']
    return word.split('').filter(char=>!specialChar.includes(char)).join('')
}
console.log(deleteSpecialChar(word1));
console.log(deleteSpecialChar(word2));

