// ███╗░░██╗██╗████████╗██████╗░░█████╗░    ░██████╗░███████╗███╗░░██╗
// ████╗░██║██║╚══██╔══╝██╔══██╗██╔══██╗    ██╔════╝░██╔════╝████╗░██║
// ██╔██╗██║██║░░░██║░░░██████╔╝██║░░██║    ██║░░██╗░█████╗░░██╔██╗██║
// ██║╚████║██║░░░██║░░░██╔══██╗██║░░██║    ██║░░╚██╗██╔══╝░░██║╚████║
// ██║░╚███║██║░░░██║░░░██║░░██║╚█████╔╝    ╚██████╔╝███████╗██║░╚███║
// ╚═╝░░╚══╝╚═╝░░░╚═╝░░░╚═╝░░╚═╝░╚════╝░    ░╚═════╝░╚══════╝╚═╝░░╚══╝

// ▒█▀▀█ ▒█░░▒█ 　 ▒█▀▀▄ ░█▀▀█ ▒█▄░▒█ ▒█░▄▀ 
// ▒█▀▀▄ ▒█▄▄▄█ 　 ▒█░▒█ ▒█▄▄█ ▒█▒█▒█ ▒█▀▄░ 
// ▒█▄▄█ ░░▒█░░ 　 ▒█▄▄▀ ▒█░▒█ ▒█░░▀█ ▒█░▒█


let link = "https://discord.gift/"
let ramdon12 = 0;
let linkCode = link
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
let number = ""
let lettersN = ""

//        Change the number 10000 for the number of times a link is generated/  10000 = 10000 links discord nitro
//                           \/
for (let index = 0; index < 10000; index++) {

    linkCode = "https://discord.gift/"

    for (let loop = 0; loop < 19; loop++) {

        random12 = 0;
        random12 = Math.floor(Math.random() * 2 + 1);

        if (random12 === 1) {
            lettersN = Math.floor(Math.random() * letters.length)
            linkCode += letters[lettersN] 

        }else {
            number = Math.floor(Math.random() * 10)
            linkCode += number 
        }
    }

    console.log(linkCode)

}

console.log (" \n ---------------------END-LINKS--------------------------")