import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("div", { id: "head" }, [
//   React.createElement("h1", {}, "h1 tag!!"),
//   React.createElement("h2", {}, "h2 tag!!"),
// ]);

//using JSX React Element
const jsxHeading = <h1 className="Heqad">Namaste React Element!! {100 + 100}</h1>

// converting react element to react cmp
const JsxHeadin =() => <h1 className="Heaid">Namasti!!</h1>

//React Component
//using return
const Comp = () => {
    return <h1>Hello!!</h1>;
};
const calc = 1000;
// return by declared variable
const Comp1 = () => {
    const heading = <h1 className="Head">NamaFGste!! {calc}</h1>
    return heading
};
// without return
const Comp2 = () => (
    <h1 className="Heffad">NamaFGreturste!! {100/2}</h1>
);
// component compostiton
const Comp3 = () => (
    <div id="container">
        <JsxHeadin/>
        <h1>Ist line</h1>
        <Comp1></Comp1>
        {Comp2()}
        {JsxHeadin()}
        {<h1 className="Heffioad">NamaFGreturste!! {100/2}</h1>}
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Comp3/>);
console.log(<Comp3/>);
