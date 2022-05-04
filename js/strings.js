//STEP 1
// let personName = prompt("Please enter your name");

// if (personName != null) {
//     alert(personName.length)
// }

//STEP 2
// let personName = prompt("Please enter your name");
// let personNum

// if (personName != null) {
//      personNum = prompt("Enter a number")
//     alert(personName.charAt(personNum))
// }

//STEP 3
// let firstName = prompt("Please enter your first name");
// let lastName = prompt("Please enter your last name");

// if (firstName != null && lastName != null)  {
//     alert("Your name is: " + firstName.concat(" ", lastName))
// }

//STEP 4
// let text = "The quick brown fox jumps over the lazy dog"

// if (text != null)  {
//     alert(text.indexOf('fox'))
// }

//STEP 5
// let text = "The quick brown fox jumps over the lazy dog"

// if (text != null)  {
//     alert(text.lastIndexOf('fox'))
// }

//STEP 6
// let text = "The quick brown fox jumps over the lazy dog"
// let fullName = prompt("Please enter your full name");

// if (text != null && fullName != null)  {
//     alert(text.replace("the lazy dog", fullName))
// }

//STEP 7
// let text = "The quick brown fox jumps over the lazy dog"
// let word = prompt("Please enter a word");

// if (text != null && word != null)  {
//     alert(text.search(word))
// }

//STEP 8
// let old_string = "The quick brown fox jumps over the lazy dog"

// let new_string = old_string.slice(31, 43)

// alert(new_string.toUpperCase())

//STEP 9
// let text = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          "
// alert(text.trim().toLowerCase())

//STEP 10
let text = "the quick brown fox jumps over the lazy dog"
let newText = text.charAt(0).toUpperCase()
alert(newText.concat(text.slice(1)))

