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

function fromDollarToYen (fromEuroToDollar){
    let yen = fromEuroToDollar*oneEuroIs.JPY
    return yen
}
console.log(fromDollarToYen(2))

function fromYenToPound (fromDollarToYen){
    let gbp = fromDollarToYen*oneEuroIs.GBP
    return gbp
}
console.log(fromYenToPound(2))



module.exports ={sum, fromEuroToDollar,fromDollarToYen, fromYenToPound }