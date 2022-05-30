/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const btnShowUsers = document.querySelector("#btn")


btnShowUsers.addEventListener("click", function(e){
e.preventDefault()
fetch (ENDPOINT)
.then(response => response.json())
.then(data => data.map(x => {
        let createLogin = document.createElement("div")
        createLogin.classList.add("login")
        createLogin.innerHTML =
        `
        <h3>login: ${x.login},   avatar_url: ${x.avatar_url} <br><br></h3>
        `
        output.prepend(createLogin)
        
        const del = document.querySelector("#message")
        
        del.innerHTML = ""
    }))
    .catch(error => console.log(error))
})



