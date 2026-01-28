import React from "react";
import User from "./User";
import ClassUser from "./ClassUser";

const About = () => {
  return (
    <div>
      <User name = {"charan"} age = {22} sex = {"Male"} />
      <ClassUser name = {"Meghana"} age = {22} sex = {"Female"}/>
    </div>
  );
};

export default About;
