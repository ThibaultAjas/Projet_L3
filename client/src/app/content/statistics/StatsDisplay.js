import React from "react";
import {Bar} from "react-chartjs-2";
import axios from "axios";
import {getStats} from "../util/dataConverter";




const state = {
  labels:[ 'janvier','fevrier','mars','avril','mais'],
  datasets : [
      {
          label:'Rainfall',
          backgroundColor: 'rgba(75, 192, 192, 1)',
          borderColor:'rgba(0,0,0,1)',
          borderWidth:2,
          data:[65,59,80,81,56]
      }
  ]

};



export default class StatsDisplay extends React.Component{

    state =  {
        numberOfUsers : 0,
        countries : [],
        cities : [],
        numberOfEventsByCountry : [],
        numberOfEventsByCity : []
    }

    componentDidMount() {

        getStats().then((data)=> {
            this.state=data.data;
            console.log("pendant",this.state);
        })
        console.log("après",this.state);

    }


    render() {





        return(
          <div className="w-75 mx-auto">
              <Bar
                  data={state}
                  options={{
                      title:{
                          display : true,
                          text:'average rainfall per month',
                          fontSize:20
                      },
                      legend:{
                          display:true,
                          position:'right'
                      }
                  }}
              />
          </div>
        );
    }
}