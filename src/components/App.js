import React from 'react';
import { Route, Switch } from "react-router-dom";
import PowerFlowPage from "./views/PowerFlowPage/PowerFlowPage.js";

function App() {
  return (
    <div>

      <Route exact path="/" component={PowerFlowPage} />

    </div>
  );
}

export default App;
