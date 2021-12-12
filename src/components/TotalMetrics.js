import React,{useEffect,useState,map} from 'react';
import config from '../config'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);



const TotalMetrics=()=>{
   
     
    const [value, setValue] = React.useState('');
    

    function fetchAreaData(){
        fetch(`${config.url}/api/v1/metrics/getAllWasteDetails`).then(
            (response) => {
    
              var data1 = response.json();
              var p = Promise.resolve(data1);
              p.then(function(values) {
                 setValue(values);
              });
              
             
    
    
         });

    
    }
    


   
   



    
    useEffect(()=>{
        fetchAreaData();
        
        },[])  

    


     

    const data={
        labels:['wet waste(kgs)','Dry waste(kgs)'],
        datasets:[
            {
                label:'Total Waste',
                data:[value.wetwaste,value.dryWaste],
                backgroundColor: [
                    // 'rgba(255, 99, 132, 0.2)',
                     'rgba(54, 162, 235, 0.2)',
                     'rgba(255, 206, 86, 0.2)',
                     'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                  ],
                  borderColor: [
                    // 'rgba(255, 99, 132, 1)',
                     'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                     'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                  ],
                  borderWidth: 1,
                height:300,
                width:300,
            }
           
        ]
    }

    const data1={
        labels:['Landfill (sq.ft)','Biogas(kgs)'],
        datasets:[
            {
                label:'Recycling Details',
                data:[value.landfill,value.biogas],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)',
                    
                  ],
                  borderWidth: 1,
                height:300,
                width:300,
            }
           
        ]
    }
  
    return (
        <div>
           
              
            
       
   
     <h2>Total Waste</h2>  
    <Pie data={data}/>
    <h2>Recycling Details</h2>
    <Pie data={data1}/>
        </div>
        
    )
}


export default TotalMetrics;