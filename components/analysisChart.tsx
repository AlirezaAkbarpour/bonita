'use client'
import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class ApexChart extends Component {
    constructor(props: any) {
      super(props);

      this.state = {
        series: [{
          name: 'normal',
          color:'#00ff00',
          type:'line',
          data: [15, 20, 17, 25]
        },{
            name: 'Your',
            type:'area',
            color:'#bbbfff',
            zIndex:'1',
            data: [20, 28, 28, 17]
          }],
        options: {
          chart: {
            height: 300,
            type: 'area',
            toolbar:{
                show:false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          yaxis:{
            show:false,
            axisBorder:{show:false}
          }
          ,
          legend:{
            show:false
          }
          ,
          xaxis: {
            type: 'category',
            axisBorder:{show:false},
            categories: ["Winter", "Spring", "Summer", "Autumn"]
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
          colors:['#2E93fA', '#66DA26',]
        },
      };
    }

    render() {
      return (
        <div className="w-full ">
          <div id="chart" className="w-full">
            <Chart options={this.state.options} series={this.state.series} type="area" height={300} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }