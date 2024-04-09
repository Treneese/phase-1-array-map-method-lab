const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


//const titleCased = map(tutorials, function toUpperCase() {
  //return tutorials();
//});

//const equippedEngineers = newEngineers.map(function (eng) {
 // return Object.assign({}, eng, { equipment: "Laptop" });
//});



// const titleCased =  () => {
//   return tutorials.map((line ) =>{
//   const words = line.split(" ");
// const capitalizedWords= words.map(
//   (words) => word.charAt(0).toUpperCase() + word.slice(1)
// );
//   const response = capitalizedWords.join(" ");
//   return response;
// });
// };
const titleCased = () => {
  return tutorials.map((line) => {
    const tokens = line.split(" ");
    const capitalizedTokens = tokens.map(
      (token) => token.charAt(0).toUpperCase() + token.slice(1)
    );
    const response = capitalizedTokens.join(" ");
    return response;
  });
};

// const titleCased = tutorials.map (function () => {
//   return tutorials.toUpperCase();
// });
console.log(titleCased())