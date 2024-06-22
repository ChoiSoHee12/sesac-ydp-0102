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

