import React from 'react';
import * as d3 from 'd3';

const maderoData = {
  totalDeDependentes: 297,
  usuariosPorFaixa:[
    { idade: "abaixo_de_15", numero: 153 },
    { idade: "de_15_a_25", numero: 1016 },
    { idade: "de_25_a_35", numero: 874 },
    { idade: "de_35_a_60", numero: 382 },
    { idade: "acima_de_60", numero: 6 }
  ],
  porOperadora:[
    { nome:'intermedica', numero: 978 },
    { nome:'sulamerica', numero: 89 },
    { nome:'unimed', numero: 1364 },
    { nome:'total', numero: 2431 }
  ]
};

class HorizontalChart{

  constructor(element) {

    const HEIGHT = 300;

    const WIDTH = 300;

    const margin = {
      top: 10,
      bottom: 10,
      left: 100,
      right:100
    };

    const svg = d3.select(element).append('svg')
        .attr('width', WIDTH + margin.left + margin.right)
        .attr('height', HEIGHT + margin.top + margin.bottom);

    const groupData = svg.append('g')
        .attr('transform',`translate(${margin.left},${margin.top})`);

    const xGroup = groupData.append('g');

    const yGroup = groupData.append('g');

    const x = d3.scaleBand()
        .range([0,WIDTH])
        .domain(maderoData.usuariosPorFaixa.map( i => i.idade ))
        .padding(0.1)

    const y = d3.scaleLinear()
        .range([HEIGHT,0])
        .domain([0,d3.max(maderoData.usuariosPorFaixa, d => d.numero)])

    const xAxis = d3.axisBottom(x);

    const yAxis = d3.axisLeft(y);

    const rect = groupData.selectAll('rect').data(maderoData.usuariosPorFaixa)

    rect.attr('width',x.bandwidth())
        .attr('height', d => HEIGHT - y(d.numero))
        .attr('x', d => x(d.idade))
        .attr('y', d => y(d.numero))
        .attr('fill', 'blue')

    rect.exit().remove()

    rect.enter()
        .append('rect')
        .attr('width',x.bandwidth())
        .attr('height', d => HEIGHT - y(d.numero))
        .attr('x', d => x(d.idade))
        .attr('y', d => y(d.numero))
        .attr('fill', 'blue')

    xGroup.attr('transform',`translate(0,${HEIGHT})`)

    xGroup.call(xAxis);

    xGroup.selectAll('text')
        .attr('fill','grey');

    yGroup.call(yAxis);
  }
};

export default HorizontalChart;
