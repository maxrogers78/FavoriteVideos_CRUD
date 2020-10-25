// React
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
// react-router-dom
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
// CSS
import "./index.css";
// Components
import VideoList from "./components/Videos/VideoList";
import VideoForm from "./components/Videos/VideoForm";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={VideoList} />
          <Route exact path="/new-video" component={VideoForm} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
