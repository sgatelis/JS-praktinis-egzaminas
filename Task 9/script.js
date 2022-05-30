/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu. Tuomet, atspausdinkite du filmus,
kurių vienas duotų false, kitas true ir atspausdintų atitinkamus variantus. Pvz., 
"Avengers: Endgame" biudžetas viršyjo 100 mln. USD
"Mr. Nobody" biudžetas neviršyjo 100 mln. USD

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */
class Movie {
     constructor(title, direktor, budget) {
         this.title = title;
         this.direktor = direktor;
         this.budget = budget;
         this.wasExpensive = function() {
         if(this.budget > 100000000){
             console.log("Avengers: Endgame biudžetas viršijo 100 mln. USD")
              
         }
         
         else {
             console.log("Nobody biudžetas neviršijo 100 mln. USD")
             }
          
            }
     }     
     
}
    var movie1 = new Movie("Endgame", "Deividas", 120000000);
    movie1.wasExpensive()
    
    var movie2 = new Movie("Nobody", "Saulius", 50000000)
    movie2.wasExpensive()
    
// class Movie {
//     constructor(title, direktor, budget) {
//         this.title = title;
//         this.direktor = direktor;
//         this.budget = budget;
//         this.wasExpensive = function (){
//         this.budget > 100000000 ? true : false
//         }
//     }
// }
// var movie1 = new Movie("Endgame", "Deividas", 120000000);
// movie1.wasExpensive()

// var movie2 = new Movie("Nobody", "Saulius", 50000000)
// movie2.wasExpensive()
