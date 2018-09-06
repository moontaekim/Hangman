//const marvelHerosArray = ["ANTMAN", "IRONMAN", "HULK", "BLACKWIDOW", "SPIDERMAN", "GROOT", "STARLORD", "BLACKPANTHER", "VISION", "THOR", "CAPTAINAMERICA"]
const marvelHerosArray = [
    {hero: "ANTMAN", img: "https://vignette.wikia.nocookie.net/deathbattlefanon/images/c/ce/Ant-Man_Render.png/revision/latest?cb=20160514061120"},
    {hero: "IRONMAN", img:"http://static.tumblr.com/5a7f2db3663f6b7a24edf8efa35c0b0f/povhbe1/JlHmn510g/tumblr_static_ironman_3.png"},
    {hero: "HULK", img: "https://clipart.info/images/ccovers/1516942386The-Incredible-Hulk-Png-Hd-Big.png"},
    {hero:"BLACKWIDOW", img: "http://pluspng.com/img-png/black-widow-png-download-black-widow-png-images-transparent-gallery-advertisement-1473.png"},
    {hero: "SPIDERMAN", img: "https://purepng.com/public/uploads/large/purepng.com-amazing-spidermanspider-manspidermansuperherocomic-bookmarvel-comicscharacterstan-leegamesmovie-1701528655908xx8zi.png"},
    {hero: "GROOT", img: "https://vignette.wikia.nocookie.net/lapis/images/f/f4/Groot_Movie_Alt.png/revision/latest?cb=20160315105655"},
    {hero: "STARLORD", img: "https://vignette.wikia.nocookie.net/disney/images/9/95/Star-Lord_Promo_Art_Decor_III.png/revision/latest?cb=20140625043807"},
    {hero: "BLACKPANTHER", img: "http://pluspng.com/img-png/black-panther-png-image-cw-panther-kick-render-png-marvel-cinematic-universe-wiki-fandom-powered-by-wikia-1755.png"},
    {hero: "VISION", img: "https://vignette.wikia.nocookie.net/marvelmovies/images/1/18/Vision_Avengers_Age_of_Ultron_Promo.png/revision/latest?cb=20150408003114"},
    {hero: "THOR", img: "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/c/ca/Thor-AOU-Render.png/revision/20161114043212"},
    {hero: "CAPTAINAMERICA", img: "https://vignette.wikia.nocookie.net/deathbattlefanon/images/f/f4/Captain_America.png/revision/latest?cb=20140816213102"}
]

const createRandomHero = () => {

    const randomHerolNumber = Math.floor(Math.random() * marvelHerosArray.length)
    const randomHero = marvelHerosArray[randomHerolNumber]
    return randomHero

}


var word = createRandomHero()
console.log(word)

$(() => {
    //take wordArr and insert divs = to length of wordArr
    for (let i = 0; i < word.length; i++) {
        $newDiv = $('<div></div>', {
            'class': word[i],
            text: '_'
        })
        $('.userLetters').append($newDiv)
    }

    //letters selected//
    $('.letterList').on('click', ($event) => {
        var letterSelected = $event.target.innerHTML
        if (word.includes(letterSelected) === true) {
            $(`.${letterSelected}`).replaceWith(`<div>${letterSelected}</div>`)
        }
    })


    //losing function//
    $('.letterList').on('click', ($event) => {
        var letterSelect = $event.target.innerHTML
        console.log(letterSelect)
        if (word.indexOf(letterSelect) === -1) {
            var life = $('.life').text()
            $('.life').html(`${life -= 1}`)

            if (life === 0) {
                alert('get out my face loser')
            }
        }
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


    //styles

    $('heroImage').on('load', () => {

    })
})