// zad1 
/*let vegetables = ["carrot", "tomato", "pepper", "onion"];
function mixVegetables(vegetablesArg) {
  for (i = 0; i < vegetablesArg.length; i++) { console.log("zmiksowane" + " " + vegetables[i]) }
}

mixVegetables(vegetables);*/
//mivVegetables(vegetables) => mixVegetables(vegetablesArg = vegetables)
//mivVegetables(vegetables) => mixVegetables(vegetables = vegetables)


function mixVegetables(vegetables) {
  for (i = 0; i < vegetables.length; i++) {
      vegetables[i] = 'zmiksowane ' + vegetables[i];
  }
  return vegetables;
}
var vegetables = ["carrot", "tomato", "pepper", "onion"];
console.log(vegetables);
mixVegetables(vegetables);
console.log(vegetables);