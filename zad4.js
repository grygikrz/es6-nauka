let eq = 0;
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
let average = (...rest) => {if (rest[0] instanceof Array) { rest = rest[0]} rest.forEach(x => eq += x); eq = eq/rest.length; console.log(Math.floor(eq));}
average(1) // 1
average(1, 3) // 2
average(1, 3, 6, 6) // 4
average(grades) // 4
