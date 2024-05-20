import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const Mecical = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggetions] = useState([]);
  const [expandedItems, setExpandedItems] = useState({});
  const [selectedForm, setSelectedForm] = useState('Tablet');
  // const [selectedStrengths, setSelectedStrengths] = useState(item.salt_forms_json['Tablet']);

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

  const toggleExpanded = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };



  const handleFormChange = (form) => {
    setSelectedForm(form);
    console.log(selectedForm);
  }
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

        <div className="grid grid-cols-1 gap-4">
          {suggestions ? (
            suggestions.map((item) => (
              <div key={item.id}>
                <div>
                  {" "}
                  <strong>Salt: </strong> {item.salt}
                </div>
                <div>
                  {/* {expandedItems[item.id]
                    ? item.available_forms.join(",")
                    : item.available_forms.slice(0, 3).join(", ") +
                      (item.available_forms.length > 3 ? "..." : "")} */}

                  {expandedItems[item.id] ? (
                    <div>
                      <strong>Form:</strong>
                      {item.available_forms.map((form, index) => (
                        <>
                          {" "}
                          <Button
                            title={form}
                            key={index}
                            // className={form === selectedForm ? 'selected' : ''}
                            style={{ backgroundColor: form === selectedForm ? 'red ' : 'green' }}

                            onClick={() => handleFormChange(form)
                            
                            }
                          />
                        </>
                      ))}
                      {item.available_forms.length > 3 && (
                        <Button
                          onClick={() => toggleExpanded(item.id)}
                          title={
                            expandedItems[item.id] ? "View Less" : "View More"
                          }
                        />
                      )}
                    </div>
                  ) : (
                    <div>
                      {" "}
                      <strong>Form:</strong>
                      {item.available_forms.slice(0, 3).map((form, index) => (
                        <>
                          {" "}
                          <Button
                            title={form}
                            key={index}
                            style={{ backgroundColor: form === selectedForm ? 'red' : 'green' }}
                            // className={form === selectedForm ? 'bg-gray-400' : ''}
                            onClick={() => handleFormChange(form)}
                          />
                        </>
                      ))}
                      {item.available_forms.length > 3 && (
                        <Button
                          onClick={() => toggleExpanded(item.id)}
                          title={
                            expandedItems[item.id] ? "View Less" : "View More"
                          }
                        />
                      )}
                 {expandedItems[item.id] && (
                  <div>
                    {Object.entries(item.salt_forms_json).map(([form,strenghts]) => (
                      <div>
                        {Object.entries(strenghts).map(([strength,details]) => (
                          <div>
                           
                            {Object.entries(details).map(([detailkey,detailValue])=>(
                             <div>
                              {detailkey} : {JSON.stringify(detailValue)}
                             </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                 )}
                    </div>
                  )}
                </div>

                <div></div>
              </div>
            ))
          ) : (
            <div>There are no results</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Mecical;
