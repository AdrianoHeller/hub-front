import React from 'react'
import * as d3 from 'd3';

class HorizontalChart{
  constructor(element) {
    const svg = d3.select(element)
        .append('svg')
        .attr('width', 120)
        .attr('height',120);

  }
};

export default HorizontalChart;