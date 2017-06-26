import React, { Component } from "react";
import { Link } from "react-router";

class Main extends Component {
  render() {
    return (
      <div className="container">
        <h1>App</h1>
        <ul>
          <li onClick={()=>this.goLink("/Two")}>Two</li>
          <li onClick={()=>this.goLink("/Three")}>Three</li>
        </ul>
        {/* добавили вывод потомков */}
        {/*{this.props.children}*/}
      </div>
    );
  }

  goLink(path){
      this.props.history.push(path);
  }
}

export default Main;
