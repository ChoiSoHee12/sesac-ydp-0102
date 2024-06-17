function call(name) {
    return new Promise (function(resolve) {
        setTimeout(function() {
            console.log(name);
            const result = name;
            resolve(result)
        }, 1000);
    })   
}

function back(cb) {
    setTimeout(function() {
        console.log('back');
        cb('back');
    }, 1000)
}

function hell(cb) {
    setTimeout(function() {
        cb('callback hell');
    }, 1000);
}

call('kim', function (name) {
    console.log(name + '반가워');
    back(function (txt) {
        console.log(txt + '을 실행했구나');
        hell(function (message) {
            console.log('여기는' + message);
        });
    });
});

// ############################################################### //

let product, price;

function goMart() {
  console.log(`마트에 가서 어떤 음료를 살지 고민한다..`);
}

function pickDrink() {
  setTimeout(function () {
    console.log(`고민 끝`);
    product = `제로콜라`;
    price = `3000원`;
  }, 3000);
}

function pay(product, price) {
  setTimeout(function () {
    console.log(`상품명: ${product} // 가격: ${price}`);
  }, 5000);
}

goMart();
pickDrink();
pay(product, price);


/*
마트에 가서 어떤 음료를 살지 고민한다..
고민 끝
상품명: undefined // 가격: undefined
*/