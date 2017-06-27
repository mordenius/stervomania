import React, { Component, createElement } from "react";
import { Router, Route } from "react-router";
import Swipeable from 'react-swipeable';


import Main from "./components/main.js";
import PageOne from "./components/pages/pageOne";
import PageTwo from "./components/pages/pageTwo";
import PageThree from "./components/pages/pageThree";
import PageFour from "./components/pages/pageFour";
import PageFive from "./components/pages/pageFive";
import PageSix from "./components/pages/pageSix";


class IndexComposition extends Component {
  constructor(){
    super()

  }


  render() {
    return (
      <Router history={this.props.history}>
        <div className="wrapper">
          <Main {...this.props} />
            {console.log(this.props)}
          <Route path="/One" render={props => <PageOne {...props} />} />
          <Route path="/Two" render={props => <PageTwo {...props} />} />
          <Route path="/Three" render={props => <PageThree {...props} />} />
          <Route path="/Four" render={props => <PageFour {...props} />} />
          <Route path="/Five" render={props => <PageFive {...props} />} />
          <Route path="/Six" render={props => <PageSix {...props} />} />

        </div>
      </Router>
    );
  }
}

export default IndexComposition;
