// let a = 0

// setTimeout(function () {
//     for (let a = 0; a < 11; a++) {
//         console.log(a);
//     }
// }, 1000)


// let hisoblagich = 0;

// const  intervalid = setInterval(function () {
//     hisoblagich++ 
//     console.log(`hisoblagich: ${hisoblagich}`);

// },1000)

let a = document.getElementById("hrs")
let b = document.getElementById("min")
let c = document.getElementById("sec")
setInterval(() => {
    let d = new Date();

    a.innerHTML = d.getHours();
    b.innerHTML = d.getMinutes();
    c.innerHTML = d.getSeconds();
}, 1000)