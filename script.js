const marvelHerosArray = [{
        hero: "ANTMAN",
        img: "http://1.bp.blogspot.com/-bJSg0copQpc/VpvGvX3QTLI/AAAAAAAAA1o/DLX7V3GrIw8/s1600/Ant-Man.png"
    },
    {
        hero: "IRONMAN",
        img: "http://static.tumblr.com/5a7f2db3663f6b7a24edf8efa35c0b0f/povhbe1/JlHmn510g/tumblr_static_ironman_3.png"
    },
    {
        hero: "HULK",
        img: "https://pre00.deviantart.net/e795/th/pre/i/2016/274/7/8/hulk___transparent_by_asthonx1-dajha0a.png"
    },
    {
        hero: "BLACKWIDOW",
        img: "http://pluspng.com/img-png/black-widow-png-download-black-widow-png-images-transparent-gallery-advertisement-1473.png"
    },
    {
        hero: "SPIDERMAN",
        img: "https://purepng.com/public/uploads/large/purepng.com-amazing-spidermanspider-manspidermansuperherocomic-bookmarvel-comicscharacterstan-leegamesmovie-1701528655908xx8zi.png"
    },
    {
        hero: "GROOT",
        img: "https://pre00.deviantart.net/010b/th/pre/i/2018/026/1/0/gotg___groot__2__by_sidewinder16-dc17uti.png"
    },
    {
        hero: "STARLORD",
        img: "https://pre00.deviantart.net/1673/th/pre/i/2017/339/e/7/star_lord___infinity_war_png_by_natan_ferri-dbvtc3x.png"
    },
    {
        hero: "BLACKPANTHER",
        img: "http://pluspng.com/img-png/black-panther-png-image-cw-panther-kick-render-png-marvel-cinematic-universe-wiki-fandom-powered-by-wikia-1755.png"
    },
    {
        hero: "VISION",
        img: "https://pre00.deviantart.net/53e2/th/pre/f/2016/115/5/4/civil_war_vision___transparent_background__by_camo_flauge-da095bs.png"
    },
    {
        hero: "THOR",
        img: "http://pluspng.com/img-png/thor-hd-png-image-thor-2-avengers-fh-png-marvel-cinematic-universe-wiki-fandom-powered-by-wikia-1416.png"
    },
    {
        hero: "CAPTAINAMERICA",
        img: "http://pngimg.com/uploads/captain_america/captain_america_PNG43.png"
    }
]

const createRandomHero = () => {
    const heroImageDiv = document.createElement('img')
    const randomHerolNumber = Math.floor(Math.random() * marvelHerosArray.length)
    const randomHero = marvelHerosArray[randomHerolNumber]
    heroImageDiv.setAttribute("src", `${randomHero.img}`)
    $('.countdown').append(`<img id= "heroImage" src=${randomHero.img}>`)
    return randomHero
}

var word = createRandomHero().hero
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
        } else if (word.indexOf(letterSelected) === -1) {
            var life = $('.life').text()
            $('.life').html(`${life -= 1}`)
            if (life === 0) {
                $('.countdown').append($("<img>", {
                    id: "heroImageLose",
                    src: "https://vignette.wikia.nocookie.net/deathbattlefanon/images/0/06/Thanos.png/revision/latest/scale-to-width-down/2000?cb=20150701054527"
                }))
                $('#heroImageLose, .restart').css("display", "initial")
                $('.countdown').append("<div id='endMessage'>YOU ARE DOOMED!</div>")
                $('#endMessage').animate({
                    left: '250px',
                    height: '200px',
                    width: '150px'
                })
                $('.letterList, .userLetters, .life, .lifepic, .x').css("display", "none")
                $('.livesRemaining, .letterUsed').css("display", "none")
                $('.restart').click(function () {
                    location.reload()
                })
            }
        }
        var letters = $('.userLetters').text()
        var finishMessage = $('.finishMessage').text()
        if (letters == word) {
            $('#heroImage, .restart').css("display", "initial")
            $('.letterList, .userLetters, .life, .lifepic, .x').css("display", "none")
            $('.countdown').append("<div id='endMessage'>You Win</div>")
            $('#endMessage').animate({
                left: '250px',
                height: '200px',
                width: '150px'
            })
            $('.livesRemaining, .letterUsed').css("display", "none")
            $('.restart').click(function () {
                location.reload()
            })
        }
        $(".letterUsed").append(`<div>${letterSelected}</div>`)
    })

})