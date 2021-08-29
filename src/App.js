import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Signup from "./Components/SignUp/Signup";

function App() {
  return (
    <>
      <Router>
        
        <Switch>
          <Route path="/sign-up" component={Signup}/>
          <Route path="/" >
            <Link to='/sign-up'>SignUp</Link>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
