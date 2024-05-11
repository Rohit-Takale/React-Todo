import React from "react";
function Home() {
  const list = ["Kushal", "Kumar", "Praveen"];
  const final_list = list.map((item) => <li>{item}</li>);
  return (
    <div>
      {" "}
      <ol>{final_list}</ol>{" "}
    </div>
  );
}

export default Home;
