import React, { useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";

function Counter() {
  const [name, setName] = useState("");
  const [sname, setSname] = useState("");

  const items = [
    { id: 1, title: "Rohit", description: "Description of Item 1" },
    { id: 2, title: "Item 2", description: "Description of Item 2" },
    { id: 3, title: "Item 3", description: "Description of Item 3" },
    { id: 4, title: "Item 4", description: "Description of Item 4" },
    { id: 5, title: "Somnath", description: "Description of Item 5" },
  ];
  const handleChange = (event) => {
    // Update the name state with the value entered in the input field
    // if (event.target.name == "name") {
    //   setName(event.target.value);
    // } else if (event.target.name == "sname") {
    //   setSname(event.target.value);
    // }
  };

  const handleSubmit = () => {
    alert(`Name: ${name}   Description: ${sname}`)
  };

  return (
    <>
      <div className="grid  grid-cols-2 gap-4 p-4">
        <div>
          <label>Enter Name: </label>
          <Input type="text" name="name" value='' onChange={(e) => setName(e.target.value)} />
        </div>

        <div>
          <label>Enter Description: </label>
          <Input type="text" name="sname" value={sname} onChange={(e) => setSname(e.target.value)} />
        </div>
        
        <div>
        <Button title="Log it" onClick={handleSubmit} />
        </div>
      </div>





      {/* <div>
        <h1 className="font-bold underline">{name}</h1>
        <div className="grid grid-cols-4 gap-4 p-4">
          {items.map((item) => (
            <>
              <div>
                <Card title={item.title} descr={item.description} />
              </div>
            </>
          ))}
        </div>
      </div> */}
    </>
  );
}

export default Counter;
