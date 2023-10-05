let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen (USD){
    let Yen = (USD/oneEuroIs.USD) * oneEuroIs.JPY ;
    return Yen
}
console.log(fromDollarToYen(3.5));

function fromEuroToDollar (Euro){
    let Dollar = oneEuroIs.USD*Euro;
    return Dollar
}
console.log(fromEuroToDollar(3.5))

function fromYenToPound(Yen){
    let pound = Yen * oneEuroIs.GBP;
    return pound
}
console.log(fromYenToPound(3.5))

module.exports = {
    fromEuroToDollar,
    fromYenToPound,
    fromDollarToYen
};

// module.exports = { sum, fromEuroToDollar }
// module.exports = { sum, fromYenToPound }
// module.exports = { sum, fromDollarToYen }
