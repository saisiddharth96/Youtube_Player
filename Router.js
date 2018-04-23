import React from "react";
import { Scene, Router, Actions, Stack } from "react-native-router-flux";

import LandingPage from "./LandingPage";
import YouTube from "./YouTube.js";

const RouterComponent = () => {
  return (
    <Router>
        <Scene key = "root" >
            <Scene key = "LandingPage"
            component = { LandingPage } 
            initial
            hideNavBar = {true}
            />
            <Scene 
                key = "YouTube"
                component = {YouTube}
                
            />
        </Scene>
    </Router>
  );
};

export default RouterComponent;
