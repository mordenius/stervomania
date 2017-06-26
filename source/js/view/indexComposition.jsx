import React, { Component, createElement } from "react";
import { Router, Route } from "react-router";

import Main from "./components/main.js";
import PageTwo from "./components/pages/pageTwo";
import PageThree from "./components/pages/pageThree";
import PageOne from "./components/pages/pageOne";

// import {createElement} from 'react';
// import {render} from 'react-dom';

class IndexComposition extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <div className="wrapper">
          <Main {...this.props} />
          <Route path="/Two" render={props => <PageTwo {...props} />} />
          <Route path="/Three" render={props => <PageThree {...props} />} />
        </div>
      </Router>
    );
  }
}

export default IndexComposition;
