import React from "react";
import { GlobalState } from "./global/GlobalState";
import Router from "./routes/Router";
import Header from "./components/Header/Header";

function App() {
  return (
    <GlobalState>
      <Header/>
      <Router />
    </GlobalState>
  );
};

export default App;
