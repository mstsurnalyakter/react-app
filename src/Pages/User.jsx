import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const User = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = e =>{
    e.preventDefault();
    setSearchParams({name:name, userName:userName, age:age, email:email, password:password});
    setName("");
    setUserName("");
    setAge("");
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <h1>User</h1>

      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            placeholder="Enter Your name"
            onChange={(e) => setName(e.target.value)}
          />
        </section>
        <br />
        <section>
          <label htmlFor="userName">userName</label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={userName}
            placeholder="Enter Your userName"
            onChange={(e) => setUserName(e.target.value)}
          />
        </section>
        <br />
        <section>
          <label htmlFor="age">age</label>
          <input
            type="text"
            name="age"
            id="age"
            value={age}
            placeholder="Enter Your age"
            onChange={(e) => setAge(e.target.value)}
          />
        </section>
        <br />
        <section>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="Enter Your email "
            onChange={(e) => setEmail(e.target.value)}
          />
        </section>
        <br />
        <section>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="Enter Your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default User;
