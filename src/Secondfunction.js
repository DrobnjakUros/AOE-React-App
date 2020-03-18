import React, { Component } from "react";
import './index.css';

class Secondfunction extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="civ">
        <div>
          <h1>{this.props.civilization.name}</h1>
          <div>
            <p>{this.props.civilization.expansion}</p>
            <p>{this.props.civilization.army_type}</p>
            <p>{this.props.civilization.unique_unit}</p>
            <p>{this.props.civilization.unique_tech}</p>
            <p>{this.props.civilization.team_bonus}</p>
            <p>{this.props.civilization.civilization_bonus}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Secondfunction;
