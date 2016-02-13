var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
    // Your code goes here!
    var newArray = []; 
    for (i=0; i < names.length; i++){
      var splitor = names[i].split(" ");
      var newName = (splitor[splitor.length-1] + ", " + splitor[0] + " "); 
      newArray.push(newName);
    }
    
    return newArray.sort(); 
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));