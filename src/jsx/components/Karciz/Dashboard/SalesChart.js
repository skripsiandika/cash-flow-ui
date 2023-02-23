import React, { Component } from "react";
import { Line } from "react-chartjs-2";

import { Chart, Filler } from 'chart.js';


import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

Chart.register(Filler);

class SalesChart extends Component {
	render() {
		const data = {
			labels: ["January", "February", "March", "April", "May"],
			datasets: [{
				label: "My First dataset",
				data: [0, 4, 2, 5, 6],
				backgroundColor: ['rgba(245, 114, 32, 0.1)'],
				borderColor: '#f58220',
				fill: true,
				pointBackgroundColor: '#f58220',
				pointBorderColor: '#f58220',
				borderWidth: 4,
				tension: 0.5,
				//borderRadius:10,
				pointHoverBackgroundColor: '#f58220',
				pointHoverBorderColor: '#f58220',
			}]
		};
		const options = {
			//bezierCurve: true,
			plugins: {
				legend: {
					display: false
				},
				title: {
					display: false
				},
				tooltip: {
					intersect: false,
					mode: "nearest",
					//xPadding: 10,
					//yPadding: 10,
					padding: 10,
					caretPadding: 10
				},
				responsive: !0,
				hover: {
					mode: "index"
				},
			},
			maintainAspectRatio: !1,
			/* title: {
				display: !1
			}, */
			/* tooltips: {
				intersect: !1,
				mode: "nearest",
				xPadding: 10,
				yPadding: 10,
				caretPadding: 10
			}, */
			/* legend: {
				display: false
			}, */
			//responsive: !0,
			//maintainAspectRatio: !1,
			/* hover: {
				mode: "index"
			}, */
			scales: {
				x: {
					display: !1,
					gridLines: !1,
					scaleLabel: {
						display: !0,
						labelString: "Month"
					}
				},
				y: {
					display: !1,
					gridLines: !1,
					scaleLabel: {
						display: !0,
						labelString: "Value"
					},
					ticks: {
						beginAtZero: false
					}
				}
			},
			elements: {
				point: {
					radius: 0,
					borderWidth: 0
				},
				line: {
					tension: 0
				}
			},
			layout: {
				padding: {
					left: 0,
					right: 0,
					top: 5,
					bottom: 0
				}
			}
		};

		return (
			<>
				<Line data={data} height={60} options={options} />
			</>
		);
	}
}

export default SalesChart;
