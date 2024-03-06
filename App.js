
// <div id="parent">
//     <div id="child">
//         <h1>i am subham</h1>
//     </div>
// </div>

const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "i am subham"), React.createElement("h2", {}, "i am subham")]
    ), React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "i am subham"), React.createElement("h2", {}, "i am subham")]
    )]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);


//Theory

// 1.what is Emmet ?
// Emmet is a web development toolkit which helps to provide streamline process for html and css like you can write ul > li * 3 instead of writing everything.

// 2.Difference between library and framework?
// Library is a set of pre written code that we can use inside our program to perform an specific task whereas framework comes with a lot of things and developer build their code within the framework.Difference

// 3.what is CDN;
// CDN is content delivery network which is basically servers distributed among the developer to upload something and we can use this content for our development.CDN

// 4.what is difference between react and reactDOM?
// React is the library for building UI in efficient manner.It is used for defining component,managing their state,and rendering UI ElementInternals
// React DOM is a package specifically designed for interacting with the dom.It provides the necessary methods for rendering React components to the actual DOM and updating them when the state changes.

// 5.what is async and defer?
// async and defer are attributes used with the <script> tag in HTML to control the loading and execution of external JavaScript files.
// async:When you use the async attribute, the browser will download the script file asynchronously while continuing to parse the HTML document. Once the script is downloaded, it will be executed without waiting for the HTML parsing to complete. This means that the script execution may happen out of order concerning the HTML parsing.
// defer:When you use the defer attribute, the browser will download the script file asynchronously, but it will defer the execution until the HTML parsing is complete. The scripts will be executed in the order they appear in the document.