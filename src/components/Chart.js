import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

 
   
 

class Chart extends Component{

    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: [" "],
                
                datasets:[{label:"MONTH OVERVIEW",data:[100,1500],
                            backgroundColor:['rgb(59,211,159)']
                }]
             }
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: false,
        legendPosition:'right'
      }


 


    render(){
        return(
 // use chartFix in css to resize or edit layout
        <div className="chartFix">  
        <div className="chart">

        <Line
        data={this.state.chartData}
        width={700}
        height={600}
        options={{
            maintainAspectRatio: false ,
            title:{
                display:this.props.displayTitle,
                text:'MONTH OVERVIEW',
                fontSize:20
            },
            legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
            }
            }}
        />

        
            </div>
           </div>
        )
    }


}


export default Chart;
