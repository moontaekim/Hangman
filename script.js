const capitolArray = ["ATLANTA", "CHICAGO", "PHEONIX", "JACKSON", "TRENTON"]

const createRandomCapitol = () => {

    const randomCapitolNumber = Math.floor(Math.random() * capitolArray.length)
    const randomCapitol = capitolArray[randomCapitolNumber]
    return randomCapitol


    //$(`<div>${randomCapitol}</div>`).appendTo('.userLetters')
    //now add this capitolDiv to the HTML
}   

//createRandomCapitol()


//var letterSelect = console.log(document.querySelector('.letterList').innerText.split(''))
//var letterSelect = console.log($('.letterList').text().split(''))




var word = createRandomCapitol()
console.log(word)

$(() => {

    
//take wordArr and insert divs = to length of wordArr
    for(let i = 0; i < word.length; i++){
        $newDiv = $('<div></div>', {'class': word[i], text:'_' } )
        $('.userLetters').append($newDiv)
    }  

//losing function//
    $('.letterList').on('click', ($event) => {
        var letterSelect = $event.target.innerHTML
        if(word.indexOf(letterSelect) === -1){
            var life = $('.life').text()
            $('.life').html(`${life -= 1}`)
        
        if (life === 0) {
            alert('get out my face loser')

        }}
    })

 //winning funciton//
    $('.letterList').on('click', () => {
        var letters = $('.userLetters').text()
        var finishMessage = $('.finishMessage').text()
        if (letters == word) {
            $('.finishMessage').html("YOU WIN YOU BIG LOSER")
           // alert("you win")
        }
    })
})

//letters selected//
    $('.letterList').on('click', ($letterSelected) => {
        var letterSelected = $letterSelected.target.innerHTML

        if(word.includes(letterSelected) === true){
            $(`.${letterSelected}`).replaceWith(`${letterSelected}`) 

        }
    })












