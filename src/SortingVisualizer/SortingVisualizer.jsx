import React, { Component } from "react";
import "./SortingVisualizer.css";
import "../sortingAlgorithms/mergeSort";
import { getMergeSortAnimations } from "../sortingAlgorithms/mergeSort";
import { getBubbleSortAnimations } from "../sortingAlgorithms/bubbleSort";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 5;

// Change this value for the number of bars (value) in the array.
// const NUMBER_OF_ARRAY_BARS = 284; //Screen.width/4-100;

// This is the main color of the array bars after sorting.
const PRIMARY_COLOR = "turquoise"; //'rgba(3, 29, 52, 0.954)';

// This is the initial color of array bars before sorting
const INITIAL_COLOR = "rgba(3, 29, 52, 0.954)"; //"turquoise";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

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

  NUMBER_OF_ARRAY_BARS = this.props.number;
  
  resetArray() {
    const array = [];
    for (let i = 0; i < this.NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromIntervals(5, 680));
    }
    this.setState({ array });
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    // console.log("ANIMATIONS ARRAY: ",animations);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar"); // selecting array bar by class name to manipulate further
      const isColorChange = i % 3 !== 2; // gives true(0),true(1) and false(2), helps to run in order of 2:1 eg: T,T,F,T,T,F,T,..
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR; // choose onetime secondary and onetime primary i.e; change it's color to newColor and revert it back again
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS); // setting time to actual make it visible
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i]; // taking the sorted value here
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`; // Here we are setting its height to the sorted order of height
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  
  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    // console.log("ANIMATIONS ARRAY: ",animations);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar"); // selecting array bar by class name to manipulate further
      const isColorChange = i % 3 !== 2; // gives true(0),true(1) and false(2), helps to run in order of 2:1 eg: T,T,F,T,T,F,T,..
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR; // choose onetime secondary and onetime primary i.e; change it's color to newColor and revert it back again
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS); // setting time to actual make it visible
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight,barTwoIdx,newHeight2] = animations[i]; // taking the sorted value here
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.height = `${newHeight}px`; // Here we are setting its height to the sorted order of height
          barTwoStyle.height = `${newHeight2}px`; // Here we are setting its height to the sorted order of height
        }, i * ANIMATION_SPEED_MS);
      }
    }
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
              backgroundColor: INITIAL_COLOR,
              height: `${value}px`,
            }}
          ></div>
        ))}
        <button
          className="array-containerButtons"
          id="generateArrayButton"
          onClick={() => {
            this.resetArray();
          }}
        >
          Generate New Array
        </button>
        <button
          className="array-containerButtons"
          onClick={() => {
            this.mergeSort();
          }}
        >
          Visualise MergeSort
        </button>
        
        <button
          className="array-containerButtons"
          onClick={() => {
            this.bubbleSort();
          }}
        >
          Visualise BubbleSort
        </button>
      </div>
    );
  }
}
function randomIntFromIntervals(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
