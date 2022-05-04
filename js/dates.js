//STEP 1
// let getDaysInMonth = function(month, year) {
//     return new Date(year, month, 0).getDate()
// }
// console.log(getDaysInMonth(5, 2022))

//STEP 2
// let getMonth = function(date) {
//     monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
//     return monthNames[new Date(date).getMonth()]
// }
// console.log(getMonth("12/11/2010"))
// console.log(getMonth("5/23/2018"))

//STEP 3
// let weekend = function(giveDate) {
//     let date = new Date(giveDate);
//     if(date.getDay() == 6 || date.getDay() == 0)
//        {
//         return "weekend"
//         } 
//     else {
//         return "weekday"
//     }
// }
// console.log(weekend("May 11, 2022"))
// console.log(weekend("May 21, 2022"))

//STEP 4
// let yesterday = function(giveDate) {
//     let date = new Date(giveDate)
//   return new Date((date.setDate(date.getDate()-1))).toString()
// }

// console.log(yesterday("May 14, 2022"))
// console.log(yesterday('April 23, 2014'))

//STEP 5
let today = function(giveDate) {
    let date = new Date(giveDate)
    return date.toLocaleDateString('en-US', {
        weekday: 'narrow',
    })
}

console.log(today("May 14, 2022"))
console.log(today('April 23, 2014'))