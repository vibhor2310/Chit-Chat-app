import "./App.css";
import React from "react";
import Homepage from "./Pages/HomePage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/ChatPage";

function App() {
   useEffect(() => {
    fetch("https://chit-chat-app-vh41.onrender.com")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  },[]);
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;
