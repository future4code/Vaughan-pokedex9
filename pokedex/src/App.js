import React from "react";
import { GlobalState } from "./global/GlobalState";
import Router from "./routes/Router";

function App() {
  return (
    <GlobalState>
      {/* <Header> ? */}
      <Router />
    </GlobalState>
  );
};

export default App;
