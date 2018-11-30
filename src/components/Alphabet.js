import React, { Component } from "react";
import * as d3 from "d3";
import { TransitionGroup } from "react-transition-group";

import Letter from "./Letter";

class Alphabet extends Component {
  static letters = "abcdefghijklmnopqrstuvwxyz".split("");
  state = {
    alphabet: []
  };

  componentDidMount() {
    d3.interval(this.shuffleAlphabet, 1500);
  }

  shuffleAlphabet = () => {
    const alphabet = d3
      .shuffle(Alphabet.letters)
      .slice(0, Math.floor(Math.random() * Alphabet.letters.length))
      .sort();

    this.setState({
      alphabet
    });
  };

  render() {
    let transform = `translate(${this.props.x}, ${this.props.y})`;
    const { alphabet } = this.state;
    return (
      <g transform={transform}>
        <TransitionGroup enter={true} exit={true} component="g">
          {alphabet.map((d, i) => {
            return <Letter letter={d} index={i} key={d} />;
          })}
        </TransitionGroup>
      </g>
    );
  }
}

Alphabet.defaultProps = {
  x: 20,
  y: 300
};

export default Alphabet;
