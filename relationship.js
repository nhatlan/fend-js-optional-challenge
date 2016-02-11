function getRelationship(x, y) {
    // Your code goes here!
    if(x<y){
        var answer = x + " is smaller than " + y; 
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