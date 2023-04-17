import React from "react";
import "./App.css";
import { useAuth } from "context/auth-context";
import { AutheticatedApp } from "authenticated-app";
import { UnauthenticatedApp } from "unauthenticated-app";


function App() {
  const {user} = useAuth()

  return (
    <div className="App">
      {user ? <AutheticatedApp/> : <UnauthenticatedApp/>}
    </div>


  );
}

export default App;
