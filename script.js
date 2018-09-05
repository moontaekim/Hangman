// const capitolArray = ["ATLANTA", "CHICAGO", "PHEONIX", "JACKSON", "TRENTON"]

// const createRandomCapitol = () => {

//     const randomCapitolNumber = Math.floor(Math.random() * capitolArray.length)
//     const randomCapitol = capitolArray[randomCapitolNumber]
//     return randomCapitol.split('')

//     //$(`<div>${randomCapitol}</div>`).appendTo('.userLetters')
//     //now add this capitolDiv to the HTML
// }   

// //createRandomCapitol()
// console.log(createRandomCapitol())

// //var letterSelect = console.log(document.querySelector('.letterList').innerText.split(''))
// var letterSelect = console.log($('.letterList').text().split(''))










var word = "WORLD"
var wordArr = word.split('')

$(() => {

    
    //take wordArr and insert divs = to length of wordArr
    for(let i = 0; i < wordArr.length; i++){
        $newDiv = $('<div ></div>', {'class': wordArr[i], text: '_' } )
       // $newDiv = $('<div ></div>', {'class': wordArr[i], text: wordArr.indexOf(wordArr[i]) } )
        $('.userLetters').append($newDiv)

    }  

    //losing function//
    $('.letterList').on('click', ($event) => {
        var letterSelect = $event.target.innerHTML
        if(word.indexOf(letterSelect.toLowerCase()) === -1){
            var life = $('.life').text()
            $('.life').html(`${life -= 1}`)
        
        if (life === 0) {
            alert('get out my face loser')

        }}
    })

 //winning funciton//
    $('.letterList').on('click', () => {
        var letters = $('.userLetters').children().text()
        var finishMessage = $('.finishMessage').text()
        if (letters === word) {
            $('.finishMessage').html("YOU WIN YOU BIG LOSER")
            alert("you win")
        }
    })
})

    //letters selected//
    // $('.letterList').on('click', ($letterSelected) => {
    //     var letterSelected = $letterSelected.target.innerHTML
    //     if(letterSelected = valueofclass...)
    //     $('.letterList')

    // })

// $('.A').on('click', ()=>{
//         //console.log('user selected A')
//     $('.firstLetter, .fourthLetter, .seventhLetter').replaceWith($('.A'));
//     win()
//     lose()
//     //the win and loss function should be called in each of these

// })

// $('.T').on('click', ()=>{
//        // console.log('user selected T')
//     $('.secondLetter, .sixthLetter').replaceWith($('.T'));
//    win()
//    lose()
// })

// $('.L').on('click', ()=>{
//         //console.log('user selected L')
//     $('.thirdLetter').replaceWith($('.L'));
//    win()
//    lose()
// })

// $('.N').on('click', ()=>{
//        // console.log('user selected N')
//      $('.fifthLetter').replaceWith($('.N'));
//     win()
//     lose()
// })