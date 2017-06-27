import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <div className="container">
          <div onClick={()=>this.goLink("/One")}></div>
          <div onClick={()=>this.goLink("/Two")}></div>
          <div onClick={()=>this.goLink("/Three")}></div>
          <div onClick={()=>this.goLink("/Four")}></div>
          <div onClick={()=>this.goLink("/Five")}></div>
          <div onClick={()=>this.goLink("/Six")}></div>
      </div>
    );
  }

  goLink(path){
      this.props.history.push(path);
  }
}

export default Main;
