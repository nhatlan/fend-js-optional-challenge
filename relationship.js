function getRelationship(x, y) {
    // Your code goes here!
   // create function to return a boolean value of whether input is a number or not 
   function isNumber (input) {
   		return typeof input === "number" && !isNaN(input); 
   }
   // store the result of the isNumber function into variables 
   var checkX = isNumber(x); 
   var checkY = isNumber(y);
   var response; 
   // check if all are numbers 
   if (checkX && checkY){
   	// return ((x>y) ? (x + " is greater than "+ y) : (x<y) ? (y+ " is greater than "+x) : (x+" = "+y)); 
   	switch (true){
	   	case x > y: return (x + " is greater than "+ y); 
	   	case x < y: return (y+ " is greater than "+x); 
	   	case x === y: return (x+" = "+y); 
   	}
   }else{ 
   		if(!checkX && !checkY){
   			response = x + " and " + y + " are not numbers"; 
   		} else if (!checkX || !checkY){
   			response = ((!checkX) ? (x + ' is not number') : (y + ' is not number')); 
   		}
   		return ("Can't compare relationships because " + response); 
   } 
} 
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));
