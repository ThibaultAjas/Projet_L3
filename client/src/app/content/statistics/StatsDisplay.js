import React from "react";
import {Bar} from "react-chartjs-2";
import {getStats} from "../util/dataConverter";
import { getUser } from "../util/app_cookies";



export default class StatsDisplay extends React.Component{
    tmp = {}
    state =  {data:{}, stats:{}}



    componentDidMount() {
        console.log("pd");
        getStats().then((data)=> {
            this.tmp=data;
            this.setState({data : this.tmp});
            console.log("merzrze",this.state);

            let listeName=[];
            let listeLike=[];
            console.log(this.state.data.usersByNumberOfLikes);
            this.state.data.usersByNumberOfLikes.map((tmp) => {
                listeLike.push(tmp.nbLikes);
                listeName.push(tmp.name);
            });

            this.setState({stats: {name:listeName,like: listeLike}});

            this.forceUpdate();
        })



    }


    render() {

        if (! getUser().isAdmin) window.location.href = '/';

        let eventByCities =  {
            labels:this.state.data.eventCities,
            datasets : [
                {
                    label:'Action(s)',
                    backgroundColor: 'rgba(75, 192, 192, 1)',
                    borderColor:'rgba(0,0,0,1)',
                    borderWidth:2,
                    data:this.state.data.numberOfEventsByCity
                }
            ]
        };

        let eventByCountry =  {
            labels:this.state.data.eventCountries,
            datasets : [
                {
                    label:'Action(s)',
                    backgroundColor: 'rgba(75, 192, 192, 1)',
                    borderColor:'rgba(0,0,0,1)',
                    borderWidth:2,
                    data:this.state.data.numberOfEventsByCountry
                }
            ]
        };

        let userByCountries = {
            labels:this.state.data.userCountries,
            datasets : [
                {
                    label:'Utilisateur(s)',
                    backgroundColor: 'rgba(75, 192, 192, 1)',
                    borderColor:'rgba(0,0,0,1)',
                    borderWidth:2,
                    data:this.state.data.numberOfUsersByCountry
                }
            ]
        };

        let userByCities = {
            labels:this.state.data.userCities,
            datasets : [
                {
                    label:'Utilisateur(s)',
                    backgroundColor: 'rgba(75, 192, 192, 1)',
                    borderColor:'rgba(0,0,0,1)',
                    borderWidth:2,
                    data:this.state.data.numberOfUsersByCity
                }
            ]
        };


        let userByLikes =  {
            labels:this.state.stats.name,
            datasets : [
                {
                    label:'Ville(s)',
                    backgroundColor: 'rgba(75, 192, 192, 1)',
                    borderColor:'rgba(0,0,0,1)',
                    borderWidth:2,
                    data:this.state.stats.like
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
                                text:"Nombre d'actions par ville",
                                fontSize:20,
                                fontColor:"black"
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
                                text:"Nombre d'actions par pays",
                                fontSize:20,
                                fontColor:"black"
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
                        data={userByCountries}
                        options={{
                            title:{
                                display : true,
                                text:"Nombre d'utilisateur par pays",
                                fontSize:20,
                                fontColor:"black"
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
                        data={userByCities}
                        options={{
                            title:{
                                display : true,
                                text:"Nombre d'utilisateurs par ville",
                                fontSize:20,
                                fontColor:"black"
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
                        data={userByLikes}
                        options={{
                            title:{
                                display : true,
                                text:'Utilisateurs triés par nombre de likes',
                                fontSize:20,
                                fontColor:"black"
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
            </>
        );
    }
}