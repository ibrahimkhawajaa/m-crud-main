import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function User() {
  const [users, setUsers] = useState([]);
// getting person from backend
  useEffect(() => {
    axios
      .get("http://localhost:4000")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);
  // to delete people
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:4000/deleteUser/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    
    <main>
     <Link to="/NewUser" className="btn btn-user">
                    Add user
                  </Link>
      {users.map((user) => {
        return (
          <table class="rwd-table">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Extra</th>
            </tr>
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>
                {" "}
                <div className="btn-main">
                  <Link to={`/Update/${user._id}`} className="btn">
                    edit
                  </Link>
                  <button
                    className="btn"
                    onClick={(e) => handleDelete(user._id)}
                  >
                    delete
                  </button>
                  <Link to="/NewUser" className="btn">
                    Add user
                  </Link>
                </div>
              </td>
            </tr>
          </table>
        );
      })}
    </main>
  );
}

