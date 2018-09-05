const capitolArray = ["ATLANTA", "CHICAGO", "PHEONIX", "SACRAMENTO", "DENVER"]

const createRandomCapitol = () => {

    const randomCapitolNumber = Math.floor(Math.random() * capitolArray.length)
    const randomCapitol = capitolArray[randomCapitolNumber]
    console.log(randomCapitol)
    //$(`<div>${randomCapitol}</div>`).appendTo('.userLetters')
    //now add this capitolDiv to the HTML
}   

createRandomCapitol()