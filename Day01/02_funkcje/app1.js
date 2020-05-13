// zad1 
/*let vegetables = ["carrot", "tomato", "pepper", "onion"];
function mixVegetables(vegetablesArg) {
  for (i = 0; i < vegetablesArg.length; i++) { console.log("zmiksowane" + " " + vegetables[i]) }
}

mixVegetables(vegetables);*/
//mivVegetables(vegetables) => mixVegetables(vegetablesArg = vegetables)
//mivVegetables(vegetables) => mixVegetables(vegetables = vegetables)

// sposób 1 


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
/*

// sposób 2

  /*function mixVegetables(vegetables) {
    var vegetablesCopy = [];
      for (i = 0; i < vegetables.length; i++) {
        vegetablesCopy.push('zmiksowane ' + vegetables[i]);
      }
    return vegetablesCopy;
  }

  var vegetables = ["carrot", "tomato", "pepper", "onion"];
  var copyOfVegetables = mixVegetables(vegetables);
  console.log(vegetables);
  console.log(copyOfVegetables);*/