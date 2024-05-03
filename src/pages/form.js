import React, { useEffect, useRef, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";

function Form() {
  const fields = { name: "", sname: "" };
  const formRef = useRef(null);
  const [formData, setFormdata] = useState(fields);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post(`http://localhost/api/test.php`)
      .then((response) => {
        console.log("Data: ", response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.error(
            "Server responded with error status:",
            error.response.status
          );
          console.error("Error data:", error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received:", error.request);
        } else {
          // Something else happened while setting up the request
          console.error("Error:", error.message);
        }
      });
  };

  return (
    <>
      <form ref={formRef}>
        <div className="grid grid-cols-2 gap-4 p-10">
          <div>
            <label>Name</label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Second name</label>
            <Input
              name="sname"
              value={formData.sname}
              onChange={handleChange}
            />
          </div>

          <div>
            <Button title="Log it" onClick={handleSubmit} />
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
