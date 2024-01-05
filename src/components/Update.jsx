import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function Update() {
  const { id } = useParams();
  const Navigator = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
// To display in input people u edit
  useEffect(() => {
    axios
      .get("http://localhost:4000/getUser/" + id)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
      })
      .catch((err) => console.log(err));
  }, []);
  // Updating the past Person
  const Update = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/NewUser", { name, age, email })
      .then((result) => {
        console.log(result);
        Navigator("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form action="" onSubmit={Update} className="form">
        <h1>Update User</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          max='100'
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
