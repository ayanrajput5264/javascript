// number mathod
// let num = 5.5

// console.log(Math.floor(num))

// console.log(new Date())

// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// let today = new Date()
// let day = today.getDay()


// const months = [
//   "January", "February", "March", "April", "May", "June", 
//   "July", "August", "September", "October", "November", "December"
// ];

// let month = today.getMonth()
// document.write(months[month])
// document.write("<br />")
// document.write(days[day])
// document.write(today.getDate())
// document.write(today.getFullYear())
// document.write(today.getSeconds())

// let today = new Date()
// let curentYear = today.getFullYear()
// console.log(curentYear)

// let birth = new Date ("jan, 4, 2007" )
// let birthYear = birth.getFullYear()
// console.log(birthYear)

// let age = curentYear - birthYear
// console.log(age)

// console.log(today - birth)


// paste?


let today = new Date()
let birth = new Date("Jan, 4 ,2007")

let milliseconds = today - birth

let Second = milliseconds/1000
let minutes = Second/60
let hours = minutes/60
let days = hours/24
let month = days/30
let year = month/12

document.write(`milliseconds : ${milliseconds} <br />
    seconds : ${minutes} <br />
    hours : ${hours}<br />
    days : ${days}<br />
    month : ${month}<br />
    years :${year}`) 
