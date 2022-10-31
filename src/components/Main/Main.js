import React, { useState } from "react";
import "./Main.css";
import Data from "../Data/Data";

function Main({ setLoggedIn, username }) {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const convert = () => {
    setInput2((input1 * 100).toString());
    fetch("https://measurement-46729-default-rtdb.firebaseio.com/data.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ m: input1, cm: (input1 * 100).toString() }),
    });
  };

  const logout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="container">
      <h2 style={{ color: "white", marginBottom: "30px" }}>
        Hey, {username ? username[0].toUpperCase() + username.slice(1) : ""}
        Start Converting Now!
      </h2>
      <div className="content" style={{ marginBottom: "50px", flex: "0.1" }}>
        <input
          type="text"
          placeholder="In meters"
          value={input1}
          onInput={(e) => setInput1(e.target.value)}
        />
        <button onClick={convert}>CONVERT</button>
        <input
          type="text"
          placeholder="In centimeters"
          value={input2}
          onInput={(e) => setInput2(e.target.value)}
          disabled
        />
      </div>
      <div className="content">
        <Data input={input2} />
      </div>
      <div style={{ marginTop: "50px", flex: "0.1" }}>
        <button onClick={logout}>LOGOUT</button>
      </div>
    </div>
  );
}

export default Main;
