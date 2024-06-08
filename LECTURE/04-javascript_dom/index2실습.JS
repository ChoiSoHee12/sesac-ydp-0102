let now = new Date().getDay();
console.log(now);

if(now === 0 || now === 6) {
    console.log('weekend');
} else(console.log('weekday'));
