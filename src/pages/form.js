import React, { useEffect, useRef, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

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

  const handleSubmit = (e) => {
    console.log(formData);
    setFormdata({ name: '', sname: '' });
    formRef.current.reset();
  };

  const countRef = useRef(0);

  const hanldeIncrement = () => {
    countRef.current++;
    alert(countRef.current)
  }

  const hanldeReset = () => {
    countRef.current = 0;
    alert(countRef.current);
  }


  return (
    <> 
    <form ref={formRef}>
    <div className="grid grid-cols-2 gap-4 p-10">
        <div>
          <label>Name</label>
          <Input id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>

        <div>
          <label>Second name</label>
          <Input name="sname" value={formData.sname} onChange={handleChange} />
        </div>
        {formData.name}
        <div>
          <Button title="Log it" onClick={handleSubmit} />
        </div>
        <div>
            <Button title="Increment" onClick={hanldeIncrement} />
            <Button title="reset" onClick={hanldeReset} />
        </div>
      </div>
    </form>

    </>
  );
}

export default Form;
