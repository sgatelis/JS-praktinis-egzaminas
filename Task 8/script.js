/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(a, b) {    
   
        this.sum = function(){
            return a + b;
        }

        this.subtraction = function(){
            return a - b;
        }

        this.multiplication = function(){
            return a * b;
        }

        this.division = function(){
            return a / b;
        }
}

var skaiciavimas = new Calculator(5, 15) ;
alert(`Suma: ${skaiciavimas.sum()}`)
alert(`Skirtumas: ${skaiciavimas.subtraction()}`)
alert(`Sandauga: ${skaiciavimas.multiplication()}`) 
alert(`Dalyba: ${skaiciavimas.division()}`) 
console.log(`Suma: ${skaiciavimas.sum()}`)
console.log(`Skirtumas: ${skaiciavimas.subtraction()}`)
console.log(`Sandauga: ${skaiciavimas.multiplication()}`)
console.log(`Dalyba: ${skaiciavimas.division()}`)



