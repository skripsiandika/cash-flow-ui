import React, {Component} from "react";
import {Bar} from "react-chartjs-2";

import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

class IncreaseChart extends Component {
	render() {
		const data = {
			defaultFontFamily: "Poppins",
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
			datasets: [{
				label: "My First dataset",
				data: [15, 40, 55, 40, 25, 35, 40, 50, 85, 95, 54, 35, 15, 40, 55, 40, 25, 35, 40, 50],
				borderColor: '#f58220',
				borderWidth: "0",
				backgroundColor: ['#f58220', '#036C59', '#f58220', '#036C59', '#f58220', '#036C59', '#f58220', '#036C59', '#f58220', '#036C59', '#f58220', '#036C59', '#f58220', '#036C59', '#f58220', '#036C59', '#f58220', '#036C59', '#f58220', '#036C59',],
				hoverBackgroundColor: '#f58220',
				//barThickness: 5
			}]
		};
		const options = {
			plugins: {
				legend: false,
				responsive: true,
			},
			maintainAspectRatio: false,
			scales: {
				y: {
					display: false,
					min: 0,
					max: 100,
					beginAtZero: true,

					ticks: {
						display: false,
					},
					gridLines: {
						display: false,
						drawBorder: false
					}
				},
				x: {
					display: false,
					barPercentage: 0.1,
					gridLines: {
						display: false,
						drawBorder: false
					},
					ticks: {
						display: false
					}
				}
			}
		};

		return (
			<>
				<Bar data={data} height={40} options={options} />
			</>
		);
	}
}

export default IncreaseChart;
