import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home.js'
import TextboxPage from './pages/Textbox/TextboxPage'
import ButtonPage from './pages/Textbox/TextboxPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="./pages/Textbox/TextboxPage.js" exact><TextboxPage /></Route>
          <Route path="./pages/Button/ButtonPage.js" exact><ButtonPage /></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
