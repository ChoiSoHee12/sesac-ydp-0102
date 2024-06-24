// promise 실습 1)

function pro(name) {
    return new Promise (function(resolve) {
        setTimeout(function() {
            console.log(name);
            const result = name;
            resolve(result)
        }, 1000);
    })   
}

function mise() {
    return new Promise ((resolve) => {
        setTimeout(function() {
            console.log('mise');
            resolve('mise');
        }, 1000)
    });
    
}

function hell() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('promise hell');
        }, 1000);
    });
}

// pro('kim')
//     .then((name) => {
//         console.log(name + '반가워');
//         return mise();
//     })
//     .then((txt) => {
//         console.log(txt + '을 실행했구나');
//         return hell();
//     })
//         .then((message) => {
//             console.log('여기는 ' + message);
//         });
    


// ############################################################### //

// promise 실습 2)

async function exec() {
    const name = await pro('kim');
    console.log(name + '반가워');

    const txt = await mise()
    console.log(txt + '를 실행했구나');
    const message = await hell()
    console.log('여기는 ' + message);
}

exec();


// ############################################################### //

// promise 실습 3)

