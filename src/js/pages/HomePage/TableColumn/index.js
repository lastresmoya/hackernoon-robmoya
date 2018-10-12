import React, { Component } from "react";

class TableColumn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDisplay: "sum",
      value1: 0,
      value2: 0,
      value3: 0,
      value4: 0,
      value5: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.renderSum = this.renderSum.bind(this);
    this.toggleResult = this.toggleResult.bind(this);
  }
  toggleResult(){
    function toggleNext(current) {
      switch(current){
        case "sum":
          return "avg";
        case "avg":
          return "max";
        case "max":
          return "min";
        case "min":
          return "sum";
        default: 
          return "sum";
      }
    }
    // console.log(this.state.currentDisplay);
    // console.log(toggleNext(this.state.currentDisplay));
    this.setState({currentDisplay: toggleNext(this.state.currentDisplay)})
  }
  handleChange (e) {
    this.setState({ 
      [e.target.name]: parseInt(e.target.value) ,
    })
  }
  renderSum(){
    const { value1, value2, value3, value4, value5 } = this.state;
    return value1+value2+value3+value4+value5;
  }
  render() {
    console.log(this.state);
    const {currentDisplay, sumValue, avgValue, minValue, maxValue } = this.state;
    return (
      <div className="d-flex flex-column mx-1">
        <input
          type="number" pattern="[0-9]*"
          name="value1"
          onChange={e => this.handleChange(e)}
        />
        <input
          type="number" pattern="[0-9]*"
          name="value2"
          onChange={e => this.handleChange(e)}
        />
        <input
          type="number" pattern="[0-9]*"
          name="value3"
          onChange={e => this.handleChange(e)}
        />
        <input
          type="number" pattern="[0-9]*"
          name="value4"
          onChange={e => this.handleChange(e)}
        />
        <input
          type="number" pattern="[0-9]*"
          name="value5"
          onChange={e => this.handleChange(e)}
        />
        <div className="bg-dark py-2" onClick={() => this.toggleResult()}>
          <small>
            <span className="font-weight-bold text-muted mr-2">
              {currentDisplay}
            </span>
            <span className="text-white">
              {currentDisplay === "sum" && <span>{this.renderSum()}</span>}
            </span>
          </small>
        </div>
      </div>
    );
  }
}

export default TableColumn;
