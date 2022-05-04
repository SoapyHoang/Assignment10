//STEP 1
function letters(str) {
    return str.split('').sort().join('')
}
console.log(letters('webmaster'))

//STEP 2
// function upperCase(str) {
//     let firstArray = str.split(' ')
//     let newArray = []

//     for(let x = 0; x < firstArray.length; x++) {
//         newArray.push(firstArray[x].charAt(0).toUpperCase()+firstArray[x].slice(1))
//     }
//     return newArray.join(' ')
// }
// console.log(upperCase('the quick brown fox'))

//STEP 3
// function vowels(str) {
//     let vowelList = 'aeiouAEIOU'
//     let vowelCount = 0

//     for(let x=0; x < str.length; x++) {
//         if (vowelList.indexOf(str[x]) !== -1) {
//             vowelCount +=1
//         }
//     }
//     return vowelCount
// }
// console.log(vowels('The quick brown fox'))

//STEP 4
// function createID(length) {
//     let text = ""
//     let abc_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

//     for(let i=0; i < length; i++) {
//         text += abc_list.charAt(Math.floor(Math.random() * abc_list.length))
//     }
//     return text
// }
// console.log(createID(8))

//STEP 5
// function Longest_Country_Name(countryName) {
//   return countryName.reduce(function(lengthName, country) {
//     return lengthName.length > country.length ? lengthName : country
//   }, "");
// }
// console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]))
