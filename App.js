

// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React");
// // {} we can put n no of attribute inside this brasis, here id is attribute here
// // console.log(heading) // this will output the heading value i.e. react element and react element at the end is just a JS object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);// this render method is responsible to convert the  object into h1 tag and render to the DOM.


// create nested structure in react
/**
* This code will display in source in browzer
*<div id="parent">
*    <div id="child">
*        <h1>I am 1st h1 tag</h1>
*        <h1>I am 2nd h1 tag</h1>
*   </div>
*    <div id="child1">
*        <h1>I am 1st h1 tag</h1>
*        <h1>I am 2nd h1 tag</h1>
*    </div>
*</div>
*/

const parent = React.createElement('div', { id: "parent" }, [
    React.createElement('div', { id: "child" }, [
        React.createElement("h1", {}, "I am 1st h1 tag"), React.createElement("h2", {}, "I am 1st h1 tag")
    ]), React.createElement('div', { id: "child1" }, [
        React.createElement("h1", {}, "I am 1st h1 tag"), React.createElement("h2", {}, "I am 1st h1 tag")
    ])]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);// this render method is responsible to convert the  object into h1 tag and render to the DOM.




