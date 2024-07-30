// let x = window.prompt(); 

// alert(0.025 * x + " Pound");

// console.log( typeof NaN);


let btn = document.getElementById("z");
let sum = document.getElementById("sum");
let cal = document.querySelectorAll(".cal");
let total = 0;







cal.forEach(function (item) {
    item.onclick = function () {
        document.getElementById("calc").value = item.getAttribute("data-cal")
    }
})




btn.onclick = function () {
    let x = parseFloat(document.getElementById("x").value);
    let y = parseFloat(document.getElementById("y").value);
    let calc = document.getElementById("calc").value;



    if (calc == "*") {
        let result = x * y;
        sum.innerHTML = result;
    }
    else if (calc == "+") {
        let result = x + y;
        sum.innerHTML = result;
    }
    else if (calc == "-") {
        let result = x - y;
        sum.innerHTML = result;
    }
    else if (calc == "/") {
        let result = x / y;
        sum.innerHTML = result;
    }
    else if (calc == "%") {
        let result = x % y;
        sum.innerHTML = result;
    }
    else {
        sum.innerHTML = "Please Choes The Calculation";
    }

}
