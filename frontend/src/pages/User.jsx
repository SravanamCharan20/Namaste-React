import React, { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const { name, age, sex } = props;

  return (
    <div className="m-5 border-b">
      <div>
        <h1>This is from <span className="text-red-600 text-lg">Functional</span> Based Component</h1>
      </div>
      <h1>Counter : {count}</h1>
      <h1>This is {name}</h1>
      <h1>age : {age}</h1>
      <h1>sex : {sex}</h1>
    </div>
  );
};

export default User;
