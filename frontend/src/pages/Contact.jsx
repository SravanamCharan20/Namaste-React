import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact page</h1>
      <label>Username : </label>
      <input className="border m-2 p-1" type="text" placeholder="name" />
      <label>Email : </label>
      <input className="border m-2 p-1" type="text" placeholder="email" />
      <button
        type="submit"
        className="bg-black text-white rounded-lg p-2 m-2 cursor-pointer"
      >
        Submit
      </button>
    </div>
  );
};

export default Contact;
