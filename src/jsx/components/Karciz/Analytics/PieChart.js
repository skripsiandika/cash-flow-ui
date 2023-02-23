import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

class PieChart extends Component {
	render() {
		const data = {
			defaultFontFamily: 'Poppins',
			labels: ["one", "two", "three", "four"],
			datasets: [
				{
					data: [45, 25, 20, 10],
					borderWidth: 0,
					backgroundColor: [
						"rgba(245, 114, 32, .9)",
						"rgba(245, 114, 32, .7)",
						"rgba(245, 114, 32, .5)",
						"rgba(0,0,0,0.07)"
					],
					hoverBackgroundColor: [
						"rgba(245, 114, 32, .9)",
						"rgba(245, 114, 32, .7)",
						"rgba(245, 114, 32, .5)",
						"rgba(0,0,0,0.07)"
					]
				}
			]
		};
		const options = {
			plugins: {
				responsive: true,
				legend: false,
				maintainAspectRatio: false
			}
		};

		return (
			<>
				<Pie data={data} height={100} options={options} />
			</>
		);
	}
}

export default PieChart;
