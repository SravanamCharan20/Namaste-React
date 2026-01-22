// const header = document.createElement("h1");
// header.innerHTML = "Hello from JS";
// console.log(header);
// const root = document.getElementById("root");
// root.appendChild(header);

const header = React.createElement(
  "h1",
  { id: "header", charan: "Meghana" },
  "this is from H1 tag from React"
);
console.log(header); // return object contains this 👇
// {
// props:
//     charan: "Meghana"
//     children: "this is from H1 tag from React"
//     id: "header"
// type: "h1"
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);
// render takes that object and creates the tag ans inject the children info into the tag.
