import { Map } from "immutable";

// plain javascript without map
// let book = { title: "Harry Porter" };

// function publish(book) {
//   book.isPublished = true;
// }

// publish(book);
// console.log(book);

let book = Map({ title: "Harry Porter" });

// console.log(book.get("title"));

function publish(book) {
  return book.set("isPublished", true);
}
book = publish(book);
console.log(book.toJS());
