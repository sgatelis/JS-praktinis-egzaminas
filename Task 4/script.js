/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const output = document.getElementById("output")
const btn = document.getElementById("btn")
const result = document.querySelector(".result")

btn.addEventListener("click", function(e){
    e.preventDefault()
    fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => data.map(x => {

    // for(var x of data){
    // console.log(x.brand, x.models)} 

    const result = document.createElement("p")
    result.classList.add("result")
    result.innerHTML = 
    `
    <p class="result">${x.brand}:  Models:   ${x.models} </p>
    `
    output.append(result)
    console.log(data)    
    
}))
})

