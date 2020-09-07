import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Commercial from "./components/Commercial/Commercial";
import Residential from "./components/Residential/Residential";
import Institutional from "./components/Institutional/Institutional";
import Potential from "./components/Potential/Potential";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div
      className="app"
      style={{
        backgroundColor: "gray",
        paddingLeft: "100px",
        paddingRight: "100px",
        minHeight: '100vh',
        height: '100%',
      }}
    >
      <div>
        <Router>
          <div
            style={{
              margin: "auto",
              backgroundColor: "white",
              padding: 26,
              maxWidth: "1000px",
              minWidth: "1000px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center",  }}>
              <Header />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 30,
                
              }}
            >
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/residential" component={Residential} />
                <Route exact path="/institutional" component={Institutional} />
                <Route exact path="/potential" component={Potential} />
                <Route exact path="/commercial" component={Commercial} />
              </Switch>
            </div>

            <Footer />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
