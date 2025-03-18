const sum = (a,b)=> {
    return a+b
}
console.log(sum(7,3));

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromEuroToDollar (euro){
    let dollar = euro*oneEuroIs.USD
    return dollar
}

console.log(fromEuroToDollar(2))


function fromYenToEuro(yen){
    let euro = (1/156.5)*yen
    return euro
}

console.log(fromYenToEuro(1))

module.exports ={sum, fromEuroToDollar, fromYenToEuro}