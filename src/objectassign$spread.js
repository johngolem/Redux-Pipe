const person = { name: "bob" };
// const updated = Object.assign({}, person, { page: "instagram", age: 20 });

//spread operator syntax for object spread(does the same as the expression above that uses object.assign)

const updated = { ...person, page: "instagram", age: 30 };

console.log(updated);
