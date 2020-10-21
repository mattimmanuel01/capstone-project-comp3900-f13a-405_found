import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Signup from "./components/authentication/Signup";
import LoginComp from "./components/landing/Landing";
import Alert from "./components/alert/Alert";
import Container from "react-bootstrap/Container";
import Dashboard from "./components/dashboard/Dashboard";
import UserPage from "./components/user/UserPage";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import store from "./store";
import { checkUserStillVerified } from "./actions/authentication";
import notfoundmeme from "./404.png";

const NotFound = () => (
  <img style={{ width: "100%" }} src={notfoundmeme} alt='notFound' />
);

const App = () => {
  useEffect(() => {
    store.dispatch(checkUserStillVerified());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <>
          <Container>
            <Alert />
            <Switch>
              <Route exact path='/' component={LoginComp} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/userpage' component={UserPage} />
              <PrivateRoute path='/dashboard' component={Dashboard} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </>
      </Router>
    </Provider>
  );
};

export default App;
