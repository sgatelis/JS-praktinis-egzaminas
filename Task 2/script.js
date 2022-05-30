/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

var btnClick = document.getElementById("btn__element")
var btnState = document.getElementById("btn__state")
var calculator = 0
btnClick.addEventListener("click", function(e){
e.preventDefault()

++ calculator 
console.log(calculator)
btnState.innerHTML = calculator
})

// var hits = 0;
// var hitElement = document.querySelector('.hits');
// document.body.onkeyup = function (e) {
//     if (e.keyCode == 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80) {
//         addHit();
//     }
// }

// var addHit = function () {
//     hits++;
//     renderHits();
// }

// var renderHits = function () {
//     hitElement.innerHTML = hits;
// }

// var resetHits = function () {
//     hits = 0;
//     renderHits();
// }
