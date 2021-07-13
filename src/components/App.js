import React from 'react';
import { Route, Switch } from "react-router-dom";
import AnimationTestPage from "./views/AnimationTestPage/AnimationTestPage.js";

function App() {
  return (
    <div style={{ paddingTop: '1%'}}>

          <Route exact path="/" component={AnimationTestPage} />

    </div>
  );
}

export default App;
