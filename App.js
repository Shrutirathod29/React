const heading = React.createElement("h1", {id:"title"},"Heading 1 ");
    
const heading2 = React.createElement("h2", {id:"title"},"Heading 2");

    const container= React.createElement(
        "div",    //tagname
         {
            id:"container"   //attribute
        }
        ,[heading ,heading2]);   //children

    console.log(heading);

    const root = ReactDOM.createRoot(document.getElementById("root"));  // it will take the root mentioned in the html div above.

    root.render(container);  // passing a react element inside root.