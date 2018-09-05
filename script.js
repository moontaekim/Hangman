const capitolArray = ["ATLANTA", "CHICAGO", "PHEONIX", "JACKSON", "TRENTON"]

const createRandomCapitol = () => {

    const randomCapitolNumber = Math.floor(Math.random() * capitolArray.length)
    const randomCapitol = capitolArray[randomCapitolNumber]
    console.log(randomCapitol)
    //$(`<div>${randomCapitol}</div>`).appendTo('.userLetters')
    //now add this capitolDiv to the HTML
}   

const capitol = createRandomCapitol()


//var word = "ATLANTA"

$(() => {
   
//correct letters replacing userLetters
console.log('capitol')


$('.A').on('click', ()=>{
        //console.log('user selected A')
    $('.firstLetter, .fourthLetter, .seventhLetter').replaceWith($('.A'));
    //the win and loss function should be called in each of these
        
})
    
$('.T').on('click', ()=>{
       // console.log('user selected T')
    $('.secondLetter, .sixthLetter').replaceWith($('.T'));
    
})
    
$('.L').on('click', ()=>{
        //console.log('user selected L')
    $('.thirdLetter').replaceWith($('.L'));
    
})
    
$('.N').on('click', ()=>{
       // console.log('user selected N')
     $('.fifthLetter').replaceWith($('.N'));
    
})

    
   

//incorrect letters chosen
//how do i name these functions? 
//how do i call this function is every letter click above?
$('.B, .C, .D, .E, .F, .G, .H, .I, .J, .K, .M, .O, .P, .Q, .R, .S, .U, .V, .W, .X, .Y, .Z').on('click', ()=>{
    var life = $('.life').text()
    $('.life').html(`${life -= 1}`)
    if(life === 0){
       alert('get out my face loser')
   }
   


   //correct letters/win
//working alert winning message
    var letters = $('.userLetters').children().text()
    var finishMessage = $('.finishMessage').text()
    if(letters === word){
        $('.finishMessage').html("YOU WIN YOU BIG LOSER")
        alert("you win")
    }
})
});


