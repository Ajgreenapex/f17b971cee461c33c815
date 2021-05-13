import "./App.css";
// component
import Home from "./components/Home";
import Raw_json_data from "./components/Raw_json_data";
//react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/rawjsondata" component={Raw_json_data}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
