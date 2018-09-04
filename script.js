$(() => {
    var word = "ATLANTA"
    var wordArray = word.split('')
    // const correctLetters = () => {

    //     //console.log(wordArray)
    //     for(let i = 0; i < wordArray.length; i++){
    //         //loop through letters in array
    //         if(wordArray[i] = letterclicked)
    //         //if letter clicked matches letter in loop
    //         //call function that replaces class??
    //     }
    // }
//correct letters replacing userLetters
    $('.A').on('click', ()=>{
        console.log('user selected A')
        $('.firstLetter, .fourthLetter, .seventhLetter').replaceWith($('.A'));
    })
    
    $('.T').on('click', ()=>{
        console.log('user selected T')
        $('.secondLetter, .sixthLetter').replaceWith($('.T'));
    })
    
    $('.L').on('click', ()=>{
        console.log('user selected L')
        $('.thirdLetter').replaceWith($('.L'));
    })
    
    $('.N').on('click', ()=>{
        console.log('user selected N')
        $('.fifthLetter').replaceWith($('.N'));
    })

//incorrect letters chosen
    $('.B').on('click', ()=>{
      var life = $('.life').text()
    //console.log('user selected B')
    $('.life').html(`${life -= 1}`)
})

    


});

//word should be in an array


