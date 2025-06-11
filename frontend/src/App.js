
import React, { useState } from "react";
import SignIn from "./SignIn";
import TransformerForm from "./TransformerForm";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {!user ? (
        <SignIn onSignIn={setUser} />
      ) : (
        <TransformerForm user={user} />
      )}
    </div>
  );
}

export default App;