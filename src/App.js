import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";

function App() {
  return (
    <Router>
        <NavTabs />
        <Switch>
        <Route path="/" exact component={About} />
        <Route path="/About" exact component={About} />
        <Route path="/Portfolio" exact component ={Projects} />
        <Route path="/Contact" exact component={Contact} />
        </Switch>
        {/* <Footer /> */}
    </Router>
  );
}

export default App;
