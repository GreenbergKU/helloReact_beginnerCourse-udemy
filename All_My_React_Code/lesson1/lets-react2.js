// RENDER REACT TO THE DOM - WILL ACCEPT TWO ARGUMENTS (REACT WHAT, REACT WHERE)

  // ASSIGNMENT - CHALLENGE
    // RENDER A PARAGRAPH TAG WITH THE CONTENT "I AM A PARAGRAPH!"
    // RENDER AN ANCHOR TAG THAT LINKS TO GOOGLE WITH THE CONTENT "VISIT GOOGLE"
    // RENDER AN UNORDERED LIST WITH THREE LIST ITEMS YOU NEED TO DO TODAY
   
  //CREATE VARIABLES FOR JSX AND FOR LOCATION

    //VARIABLE FOR JSX
    let hello = <h1>Hello World!</h1>;
    //VARIABLE FOR LOCATION
    let app = document.getElementById("app");
    
    ReactDOM.render(
      // REACT WHAT - JSX
      hello,
      // REACT WHERE - DIV WITH ID of "app"
      app
    );
    
    let element = function(id) {
      return document.getElementById(id);
    } 
    //let element = document.getElementById("p");
    let p = <p>I am a Paragraph!</p>;

    ReactDOM.render(
      p,
      element("p")
    );
    
    let google = <a href="https://google.com">VISIT GOOGLE</a>;
    
    ReactDOM.render(
      google,
      element("google-link")
    );
    
    let toDo = 
      <ul>TO DO:
        <li>Clean Floor</li>
        <li>Grochery Store</li>
        <li>Do Homework</li>
      </ul>;
    
    ReactDOM.render(
      toDo,
      element("ul-toDo")
    );