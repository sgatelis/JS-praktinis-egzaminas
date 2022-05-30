/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

var input = document.querySelector("#submit-btn")
var search = document.querySelector("#search")
var div = document.getElementById("output")     
    
    function weightConverter(){
        input.addEventListener("click", function(e){
        e.preventDefault()
        if (!search.value) return 
        div.innerHTML = ""        
        var ivestis = search.value
        var lb = ivestis * 2.2046
        var g = ivestis / 0.001
        var oz = ivestis * 35.274
        var lb = lb.toFixed(2)
        var oz = oz.toFixed(2)
        console.log(lb, g, oz)

        var result = document.createElement("div")
        result.classList.add("card")
        result.innerHTML =
        `
        <p>${lb} lb</p>
        <p>${g} g</p>
        <p>${oz} oz</p>
        `
        div.append(result)
        search.value = "" 
    })        
    }
    weightConverter()
  
   



