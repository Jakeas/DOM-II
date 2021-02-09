// Your code goes here
const body = document.querySelector('body')
const headingLogo = document.querySelector('h1')
const subtitles = document.querySelectorAll('h2')
const para = document.querySelectorAll('p')
const images = document.querySelectorAll('img')
const buttons = document.querySelectorAll('.btn')
const header = document.querySelectorAll('header')
const navBar = document.querySelectorAll('nav a')


//WORKS - resize
    window.addEventListener('resize', function (event) {
    body.style.background = 'gray'
    body.style.color= 'white'
    headingLogo.style.color = 'gray'
})

//WORKS - keydown
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape"){
     body.style.background = 'black'
     body.style.color = "white"   
    }
})

//WORKS - keyup
document.addEventListener('keyup', function (event) {
    if (event.key === "Escape"){
        body.style.color = "gray"
    }
})

//WORKS - dblclick
document.addEventListener('dblclick', function (event) {
    body.style.background = 'seagreen'
})

//WORKS - click and stop prop
headingLogo.addEventListener('click', function (event) {
    event.target.style.fontSize = '6rem'
    event.stopPropagation()
})

//WORKS - wheel
document.addEventListener('wheel', function (event) {
    body.style.fontFamily = 'Times New Roman'
})

//WORKS - mouseenter
subtitles.forEach(item => {
    item.addEventListener('mouseenter', function (event) {
        event.target.style.fontFamily = "Arial"
        event.target.style.color = 'blue'
    })
})

//WORKS - mouseleave
para.forEach(item => {
    item.addEventListener('mouseleave', function (event) {
        event.target.style.color = 'pink'
        event.target.style.transform = 'rotate(180deg)'
    })
})

//WORKS - mouseup
images.forEach(item => {
    item.addEventListener('mouseup', function (event) {
        event.target.style.transform = 'scale(1.25)'
    })
})

//WORKS - mouseover
buttons.forEach(item => {
    item.addEventListener('mouseover', function (event) {
        event.target.style.transform = 'scale(.75)'
        event.target.style.color = 'black'
        event.target.style.textTransform = 'uppercase'
    })
})

//WORKS - extra
header.forEach(item => {
    item.addEventListener('click', function (event) {
       event.target.style.background = "red"
    })
})
//WORKS - prevent default
navBar.forEach(item => {
    item.addEventListener('click', function (event) {
       event.target.style.color = "purple"
    })
})

