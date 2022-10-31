import React, { useState } from "react";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="App">
      {loggedIn ? (
        <Main setLoggedIn={setLoggedIn} username={username} />
      ) : (
        <Login
          setLoggedIn={setLoggedIn}
          setUsername={setUsername}
          setPassword={setPassword}
          setEmail={setEmail}
          username={username}
          password={password}
          email={email}
        />
      )}
    </div>
  );
}

export default App;
