import { produce } from "immer";

// plain javascript without map
// let book = { title: "Harry Porter" };

// function publish(book) {
//   book.isPublished = true;
// }

// publish(book);
// console.log(book);

let book = { title: "Harry Porter" };

function publish(book) {
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
}

let updated = publish(book);

console.log(book);
console.log(updated);
