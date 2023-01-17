// var num = 5

// function sayMe() {
//     console.log('sayMe')
// }


// sayMe()

tipper("65")

function tipper(a) {
    const bill = parseInt(a)
    console.log(bill + 7);
}

function bigTipper(a) {
    const bill = parseInt(a)
    console.log(bill + 27);
}

bigTipper(150)