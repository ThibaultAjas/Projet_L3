import React from "react";
import {Bar} from "react-chartjs-2";
import {getStats} from "../util/dataConverter";



export default class StatsDisplay extends React.Component{
    tmp = {}
    state =  {data:{}}

    componentDidMount() {

        getStats().then((data)=> {
            this.tmp=data;
            this.setState({data : this.tmp});
            console.log("merzrze",this.state);
            this.forceUpdate();
        })
    }


    render() {
        let eventByCities =  {
            labels:this.state.data.cities,
            datasets : [
                {
                    label:'cities',
                    backgroundColor: 'rgba(75, 192, 192, 1)',
                    borderColor:'rgba(0,0,0,1)',
                    borderWidth:2,
                    data:this.state.data.numberOfEventsByCity
                }
            ]
        };

        let eventByCountry =  {
            labels:this.state.data.countries,
            datasets : [
                {
                    label:'country',
                    backgroundColor: 'rgba(75, 192, 192, 1)',
                    borderColor:'rgba(0,0,0,1)',
                    borderWidth:2,
                    data:this.state.data.numberOfEventsByCountry
                }
            ]
        };

        return(
            <>
                <div className="w-75 mx-auto">
                    <Bar
                        data={eventByCities}
                        options={{
                            title:{
                                display : true,
                                text:'event by cities',
                                fontSize:20
                            },
                            legend:{
                                display:true,
                                position:'right'
                            },
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            min: 0
                                        }
                                    }
                                ]
                            }
                        }}
                    />
                </div>

                <div className="w-75 mx-auto">
                    <Bar
                        data={eventByCountry}
                        options={{
                            title:{
                                display : true,
                                text:'event by country',
                                fontSize:20
                            },
                            legend:{
                                display:true,
                                position:'right'
                            },
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            min: 0
                                        }
                                    }
                                ]
                            }
                        }}
                    />
                </div>

                {/*<div className="w-75 mx-auto">*/}
                {/*    <Bar*/}
                {/*        data={eventByCities}*/}
                {/*        options={{*/}
                {/*            title:{*/}
                {/*                display : true,*/}
                {/*                text:'average rainfall per month',*/}
                {/*                fontSize:20*/}
                {/*            },*/}
                {/*            legend:{*/}
                {/*                display:true,*/}
                {/*                position:'right'*/}
                {/*            }*/}
                {/*        }}*/}
                {/*    />*/}
                {/*</div>*/}
            </>
        );
    }
}