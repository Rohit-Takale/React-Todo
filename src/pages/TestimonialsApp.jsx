import React, { useEffect, useState } from "react";
import BadgeButton from "../components/BadgeButton";

const TestimonialsApp = () => {
  const [testimonials, setTestimonials] = useState("");
  const [items, setItems] = useState([]);
  const handleClick = (e) => {
    const btn_type = e.target.getAttribute("name");
    setTestimonials(btn_type);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [testimonials]);

  return (
    <>
      <div className="grid grid-cols-3 gap-2 m-5">
        <div>
          <BadgeButton text={"Posts"} name="posts" onClick={handleClick} />
        </div>
        <div>
          <BadgeButton text={"Users"} name="Users" onClick={handleClick} />
        </div>
        <div>
          <BadgeButton
            text={"Comments"}
            name="Comments"
            onClick={handleClick}
          />
        </div>
      </div>
      <div className="m-5">
        {!testimonials ? "Please Select" : testimonials}
      </div>
      <div className="grid grid-cols-3 gap-5 m-5">
        {items.map((item) => (
         <>
          <div  key={item.id}> {item.name && <div>{item.name}</div>}</div>
          <div>
            {item.title && <div>{item.title}</div>}
          </div>
          </>
        ))}
      </div>
    </>
  );
};

export default TestimonialsApp;
