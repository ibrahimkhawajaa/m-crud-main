import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function NewUser() {
  // var FormNewUser = document.getElementById("#FormNew");
  // FormNewUser.addEventListener("submit", function (e) {
  //   e.preventDefault();
  //   let FormData = new FormData(e.target);
  //   let FormObj = Object.fromEntries(FormData);
  //   console.log(FormObj);
  // });

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const Navigator = useNavigate();
  const Submit = (e) => {
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
      <form className="form" onSubmit={Submit}>
        <h1>Add user</h1>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          name="text"
          placeholder="age"
          id="tentacles"
          onChange={(e) => setAge(e.target.value)}
          min="10"
          max="100"
        />

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}
