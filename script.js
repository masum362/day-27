// const firstNumber = '10.50'
// console.log(parseInt(firstNumber))


// 2ta songkha jug kora lagbe
// function add(firstNumber,secondNumber){ // function definition
//     return firstNumber + secondNumber
// }

// // add(10,20)
// const result = add(50,60)
// console.log(result)

// kunu bekti akta dukane 1000> 100taka discount dibo. normally 10tk


// function getDiscountedAmount(origianlAmount,disocuntAmount=10){
//     return origianlAmount - disocuntAmount
// }

// const discountedAmount = getDiscountedAmount(5000,1000)
// console.log(discountedAmount)

const myArr = [1,2,3,4,5,6,7,8,9,10]

// console.log(arr[4])

function sumOfArray(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum
}

const result = sumOfArray(myArr)
console.log(result)





