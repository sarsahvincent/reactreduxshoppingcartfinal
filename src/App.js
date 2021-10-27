import "./App.css";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/not-found" component={NotFound} />
          <Route exact path="/cart" component={Cart} />
          <Redirect to="/not-found" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
