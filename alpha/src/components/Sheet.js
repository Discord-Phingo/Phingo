import React, { Component } from 'react';
import { render } from 'react-dom';

const DIMENSION = 4;
class Sheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pick: new Array(DIMENSION*DIMENSION).fill(0),
            picked: [],
            result: [],
            nxtNum: 1,
            hits: null,
            hit_pool: this.generateNums(dimension * dimension),
            hit_step: 0,
            dimension: dimension
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }
}

export default Sheet;