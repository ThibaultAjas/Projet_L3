import * as React from "react";
import {Chart} from "chart.js";

class BarChart extends React.Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidMount() {
        this.myChart = new Chart(this.canvasRef.current, {
            type: 'bar',
            data: {
                labels: this.props.data.map(d => d.label),
                datasets: [{
                    label: this.props.title,
                    data: this.props.data.map(d => d.value),
                    backgroundColor: this.props.color
                }]
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                min:0
                            }
                        }
                    ]
                }
            }
        });
    }

    render() {
        return(
            <canvas ref={this.this.chartRef}/>
        );
    }
}

export default BarChart;