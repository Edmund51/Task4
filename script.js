/* ------------------------------ TASK 4 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
function Movie(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  
    this.wasExpensive = function () {
      return this.budget > 100000000;
    };
  }
  
  
  const FastX = new Movie('FastX', 'John Johny', 340000000);
  const Soldger = new Movie('Soldger', 'Chris Christy',90000000);
  
  console.log(`${FastX.title} was expensive: ${FastX.wasExpensive()}`);
  console.log(`${Soldger.title} was expensive: ${Soldger.wasExpensive()}`);