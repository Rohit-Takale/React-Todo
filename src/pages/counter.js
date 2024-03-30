import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(20);
  const [name, setName] = useState("");
  const [sname, setSname] = useState("");

  const handleChange = (event) => {
    // Update the name state with the value entered in the input field
    if (event.target.name == "name") {
      setName(event.target.value);
    } else if (event.target.name == "sname") {
      setSname(event.target.value);
    }
  };

  const handleSubmit = () => {
    // Log the name state to the console

    console.log(name, sname);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold underline">Hello world!</h1>
      {/* Render the input field and button */}
      <div>
        <label>Enter Name: </label>
        {/* Bind the value of the input field to the name state */}
        <input type="text" name="name" onChange={handleChange}></input>
        {/* Call handleSubmit function when button is clicked */}
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <div>
        <label>Enter Second Name: </label>
        {/* Bind the value of the input field to the name state */}
        <input type="text" name="sname" onChange={handleChange}></input>
        {/* Call handleSubmit function when button is clicked */}
        <p>first name:{name}</p>
        <p>Sir Name:{sname}</p>
      </div>

      {/* Display the name state value */}
      {/* <div>
                Name: {name}
            </div> */}
    </div>
  );
}

export default Counter;
