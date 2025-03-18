const {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}= require('./app.js')
test('adds 14+9 to equal 23',()=>{
    let total = sum (14,9)
    expect(total).toBe(23);
});


test('2 euros be equal to 2.14 dollars',()=>{
    let exchange = fromEuroToDollar(2)
    expect(exchange).toBe(2.14);
});

test('2 euros be equal to 313 yen',()=>{
    let exchange = fromDollarToYen(2)
    expect(exchange).toBe(313);
});

test('2 euros be equal to 1.74 gbp',()=>{
    let exchange = fromYenToPound(2)
    expect(exchange).toBe(1.74);
});





