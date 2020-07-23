import React, { Component } from "react";

class Display extends Component {
  state = {
    total: this.props.total,
    length: this.props.length,
  };
  render() {
    return (
      <div className="row d-flex justify-content-center">
        <div className="col-md-8 text-center">
          <p>You have scored</p>
          <h3>
            {this.state.total}/{this.state.length}
          </h3>
          <button className="" onClick={this.props.playagain}>
            Play again
          </button>
        </div>
      </div>
    );
  }
}

export default Display;
