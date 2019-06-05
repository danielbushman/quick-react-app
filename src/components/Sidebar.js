import React from "react";
import { connect } from "react-redux";
import { addNodeModel } from "../redux/actions/nodeModelActions.js";

import "./Sidebar.css";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddNodeModel = () => {
    this.props.addNodeModel(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <aside>
        <input onChange={e => this.updateInput(e.target.value)} value={this.state.input} />
        <button onClick={this.handleAddNodeModel}>Add node model</button>
        {this.props.nodeModels.map(nodeModel => {
          return <div key={nodeModel.id}>{nodeModel.name}</div>;
        })}
      </aside>
    );
  }
}

export default connect(
  state => state,
  { addNodeModel }
)(Sidebar);
