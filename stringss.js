const name="pranav lahitkar";
const repoCount=12;
console.log(name+" "+repoCount+"abcd");

//one way to concatinate
//other way is using back tick i.e string interpolation
//using `` this and ${} for variable interaction

//ex
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//one more way to declare string is using new keyword

const game=new String('pranav')//it becomes object it has other properties to use and methods
//these methods we can use with object string not normal
//string's every character is stored with index and value pair i.e key =index 

//to use methods we use '.' operator and behind bar sit uses __proto__


//chatAt(index) finds character at position
//indexOf('char') finds index of char

//in slice we can give -ve orders to like last 3 chras -ve to +ve ex.slice(-8,4)
//trim removes the whitespace also has trimStart() and trimEnd() works on white spaces and line terminators like \n
//replace ex. ulr.replace('%20','-');
//includes checks the string is available or not in specific string url.includes(string to be searched ')

//converting string to array
//.split(' seperator ')
console.log(name.split(' '));