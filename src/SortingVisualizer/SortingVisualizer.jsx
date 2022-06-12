import React, { Component } from "react";
import "./SortingVisualizer.css";
import "../sortingAlgorithms/SortingAlgorithms"

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 284;//Screen.width/4-100;

// This is the main color of the array bars.
const PRIMARY_COLOR =  'turquoise';//'rgba(3, 29, 52, 0.954)';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromIntervals(5, 700));
    }
    this.setState({ array });
  }

  render() {
    const { array } = this.state;
    return (
        <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
                backgroundColor : PRIMARY_COLOR,
              height: `${value}px`,
            }}></div>

        ))}
        <button id="generateArrayButton" onClick={()=>{this.resetArray()}}>Generate New Array</button>
      </div>
    );
  }
}

function randomIntFromIntervals(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


