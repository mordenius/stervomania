import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <div className="container">
        <h1>MAIN</h1>
        <ul>
          <li onClick={()=>this.goLink("/One")}>One</li>
          <li onClick={()=>this.goLink("/Two")}>Two</li>
          <li onClick={()=>this.goLink("/Three")}>Three</li>
          <li onClick={()=>this.goLink("/Four")}>Four</li>
          <li onClick={()=>this.goLink("/Five")}>Five</li>
          <li onClick={()=>this.goLink("/Six")}>Six</li>
        </ul>
      </div>
    );
  }

  goLink(path){
      this.props.history.push(path);
  }
}

export default Main;
