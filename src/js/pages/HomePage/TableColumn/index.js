import React, { Component } from "react";

class TableColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDisplay: "sum",
      value1: 0,
      value2: null,
      value3: null,
      value4: null,
      value5: null
    };
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
  renderAvg(valArray) {
    const arrAvg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
    return arrAvg(valArray);
  }
  renderMin(valArray) {
    var minValue = Math.min.apply(null, valArray.filter(Boolean));
    return minValue;
  }
  renderMax(valArray) {
    var maxValue = Math.max.apply(null, valArray.filter(Boolean));
    return maxValue;
  }
  render() {
    console.log(this.state);
    const {currentDisplay, value1,value2,value3,value4,value5 } = this.state;
    const valArray = [value1,value2,value3,value4,value5];
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
        <button className="btn-dark py-2 clickable" onClick={() => this.toggleResult()}>
          <small>
            <span className="font-weight-bold text-muted mr-2">
              {currentDisplay}
            </span>
            <span className="text-white">
              {currentDisplay === "sum" && <span>{this.renderSum()}</span>}
              {currentDisplay === "avg" && <span>{this.renderAvg(valArray)}</span>}
              {currentDisplay === "max" && <span>{this.renderMax(valArray)}</span>}
              {currentDisplay === "min" && <span>{this.renderMin(valArray)}</span>}
            </span>
          </small>
        </button>
      </div>
    );
  }
}

export default TableColumn;
