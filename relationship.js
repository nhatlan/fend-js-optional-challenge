function getRelationship(x, y) {
    // Your code goes here!
    var answer; 
    if (isNaN(x) && isNaN(y)){
    	answer = "Can't compare relationships because " + x + " and "+ y+  " are not numbers";
    } else if (isNaN(x) || isNaN(y)){
    	if (isNaN(x)){
    		answer = "Can't compare relationships because " + x + " is not a number";
    	} else if (isNaN(y)){
    		answer = "Can't compare relationships because " + y + " is not a number";
    	}
    } else if(x<y){
    	answer =x + " is smaller than " + y;
    } else if (x>y){
    	answer =x + " is greater than " + y;
    } else if (x===y){
    	answer =x + " is equal " + y;
    }
    return answer; 
}
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));

console.log(false ? "true!" : "false.");
