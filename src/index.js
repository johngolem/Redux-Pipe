import { compose, pipe } from "lodash/fp";

let input = " Javascript Is A Programming Language  ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
// const wrapInDiv = (str) => `<div>${str}</div>`;

// using curry to pass in the function as an argument
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;

const toLowerCase = (str) => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap("div"));

transform(input);

// const result = wrapInDiv(toLowerCase(trim(input)));
console.log(transform(input));
