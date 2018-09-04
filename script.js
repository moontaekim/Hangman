$(() => {
    var word = "ATLANTA"
    var wordArray = []
    var matchWordArray = word.split('')
    //var allLettersArray = [$(".A", ".B", ".C", ".D", ".E", ".F", ".G", ".H", ".I", ".J", ".K", ".L", ".M", ".N", ".O", ".P", ".Q", ".R", ".S", ".T", ".U", ".V", ".W", ".X", ".Y", ".Z").text()]
   
//correct letters replacing userLetters
    $('.A').on('click', ()=>{
        //console.log('user selected A')
        $('.firstLetter, .fourthLetter, .seventhLetter').replaceWith($('.A'));
        
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
    $('.B, .C, .D, .E, .F, .G, .H, .I, .J, .K, .M, .O, .P, .Q, .R, .S, .U, .V, .W, .X, .Y, .Z').on('click', ()=>{
    var life = $('.life').text()
   var lose = $('.life').html(`${life -= 1}`)
   if(life === 0){
       alert('get out my face loser')
   }
    
})

    $('.userLetters').html()


});

//word should be in an array


