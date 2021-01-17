import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import FirstPage from "./FirstPage.js";
import Second_page from "./Second_page.js";
class App extends React.Component {
  render() {
    
    return (
      <>
        <Router>
        <Switch>
          <Route exact path="/" component={FirstPage} />
          <Route exact path="/Second_page" component={Second_page} />
        </Switch>
        </Router>
      </>
    );
  }
}
export default App;