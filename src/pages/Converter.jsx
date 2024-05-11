import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { currencies } from "../resources/currenylist";
const Converter = () => {
  const [currency, setCurrency] = useState("");
  const [convertcountry, setConvertCountry] = useState("");
  const [country, setCountry] = useState("");
  const [value, setValue] = useState("");

  const onCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const selectCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const countryChange = (e) => {
    setConvertCountry(e.target.value);
  };

  const getList = async () => {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/9838bc1e653d00170cd27d3e/latest/${convertcountry}`
    );
    if (response.ok) {
      const result = await response.json();
      const converted = result.conversion_rates[`${country}`];
      setValue(currency / converted);
    }
  };
  return (
    <div className=" w-6/12 py-10 px-20" >
      <div className="grid grid-cols-2 gap-2 ">
        <div>
          <label
            for="countries"
            class="block mb-2  text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an option
          </label>
          <select
            id="countries"
            onChange={selectCountryChange}
            class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a country</option>
            {currencies.map((item) => (
              <>
                <option value={item}>{item}</option>
              </>
            ))}
          </select>
        </div>
        <div className="">
          <label
            htmlFor="From"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Value
          </label>
          <Input
            type={"text"}
            name={currency}
            value={currency}
            onChange={onCurrencyChange}
          />
        </div>
        
      

        <div>

        </div>
        
      </div>
      <div>
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
          Convertion Country
          </label>
          <select
            id="countries"
            onChange={countryChange}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a country</option>
            {currencies.map((item) => (
              <>
                <option value={item}>{item}</option>
              </>
            ))}
          </select>
        </div>
        <div className="my-5">
          <Button title={"Convert"} onClick={getList} />
        </div>
      Converted Value: <strong>{value}</strong>
    </div>
  );
};

export default Converter;
