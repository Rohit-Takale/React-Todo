import React, { useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";

function Counter() {
  const [count, setCount] = useState(20);
  const [name, setName] = useState("");
  const [sname, setSname] = useState("");

  const items = [
    { id: 1, title: "Item 1", description: "Description of Item 1" },
    { id: 2, title: "Item 2", description: "Description of Item 2" },
    { id: 3, title: "Item 3", description: "Description of Item 3" },
    { id: 4, title: "Item 4", description: "Description of Item 4" },
    { id: 5, title: "Item 5", description: "Description of Item 5" },
  ];

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
    <>
      <div className="grid grid-cols-2 gap-4 p-4">
        <div>
          <label>Enter Name: </label>
          <input
            type="text"
            name="name"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={handleChange}
          ></input>

          {/* <Input name={name} onChange={handleChange} /> */}
        </div>

        <div>
          <label>Enter Description: </label>
          <input
            type="text"
            name="sname"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={handleChange}
          ></input>
        </div>
      </div>

      <div className=" ">
        <h1 className=" font-bold underline">{name}</h1>

        <div className="grid grid-cols-4 gap-4 p-4">
          {items.map((item) => (
            <>
              <div>
                <Card title={name} descr={sname} />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Counter;
