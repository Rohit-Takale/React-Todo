import React, { useEffect, useState } from "react";
import Input from "../components/Input";

const Mecical = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggetions] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://backend.cappsule.co.in/api/v1/new_search?q=${searchTerm}&pharmacyIds=1,2,3`
      );
      if (response.ok) {
        const result = await response.json();
        setSuggetions(result.data.saltSuggestions);
      } else {
        setSuggetions(null);
      }
    } catch (error) {
      console.error("Error in fetching the data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  useEffect(() => {
    if (suggestions) {
      console.log(suggestions);
    }
  }, [suggestions]);

  return (
    <>
      <div className="p-5">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <Input
              type={"text"}
              onChange={(e) => setSearchTerm(e.target.value)}
              value={"value"}
              placeholder={"Search the Term"}
            />
        
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {suggestions ? (
            suggestions.map((item) => <div key={item.id}>
                <div>{item.salt}
                </div></div>)
          ) : (
            <div>There are no results</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Mecical;
