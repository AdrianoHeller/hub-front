import React,{ useState,useEffect } from 'react'
import * as d3 from 'd3';
import axios from 'axios';

const hmsUrl = 'https://sistemas-via-saude.uc.r.appspot.com/indicadores/';

class HorizontalChart{
  constructor(element) {
    const svg = d3.select(element)
        .append('svg')
        .attr('width', 120)
        .attr('height',120)
        .append('g');
    console.log(svg);

    axios.get(hmsUrl)
        .then(res => {
            let mData = "";
            let oData = "";
            oData = res.data[0];
            mData = res.data[1];
            return {
                mData,
                oData
            };
        })
        .then( data => {
            const parsedUrl = `${hmsUrl}/${data['mData']}`
            axios.get(parsedUrl)
                .then( res => console.log(res.data));
        })
        .catch(err => console.error(err));

  }
};

export default HorizontalChart;