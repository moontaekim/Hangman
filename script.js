const marvelHerosArray = ["ANTMAN", "IRONMAN", "HULK", "BLACKWIDOW", "SPIDERMAN", "GROOT", "STARLORD", "BLACKPANTHER", "VISION", "THOR", "CAPTAINAMERICA"]

const createRandomHero = () => {

    const randomHerolNumber = Math.floor(Math.random() * marvelHerosArray.length)
    const randomHero = marvelHerosArray[randomHerolNumber]
    return randomHero


}   



var word = createRandomHero()
console.log(word)

$(() => {

    
//take wordArr and insert divs = to length of wordArr
    for(let i = 0; i < word.length; i++){
        $newDiv = $('<div></div>', {'class': word[i], text:'_' } )
        $('.userLetters').append($newDiv)
    }  

 //letters selected//
    $('.letterList').on('click', ($letterSelected) => {
        var letterSelected = $letterSelected.target.innerHTML

        if(word.includes(letterSelected) === true){
            $(`.${letterSelected}`).replaceWith(`<div>${letterSelected}</div>`) 

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


    })












