const person = {
  name: "bob",
  address: {
    country: "USA",
    city: "New York",
  },
};
// const updated = Object.assign({}, person, { page: "instagram", age: 20 });

//spread operator syntax for object spread(does the same as the expression above that uses object.assign)

// const updated = { ...person, page: "instagram", age: 30 };

// doing a deep copy instead of a shallow copy(always do a deep copy when working with nested objects)

const updated = {
  ...person,
  address: {
    ...person.address,
    city: "Los Angeles",
  },
  name: "joe",
};

updated.address.city = "Los Angeles";

console.log(updated);
