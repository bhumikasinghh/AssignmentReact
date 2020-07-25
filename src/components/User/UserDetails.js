 import React from "react";
import data from '../Data/data.json';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Component} from 'react';

export  class UserDetails extends Component {
    state =  {
        users: [],
        show: false,
        activity_periods: [],
      };
    
    // renderUser=()=>{
    //     const newdata1 = data.members;
    //     {newdata1.map((userDetail,index)=>{
    //     for (let i = 0; i < newdata1.length; i++) 
    //     {
    //         user.push({
    //            id: userDetail.id,
    //            name:userDetail.real_name,
    //            timezome:userDetail.tz
    //         })
    //     }
    //     })
    // }

  render()
  {
     const user=[];
    const newdata = data.members;
   
    for(let i=1;i<newdata.length;i++)
    { 
        {newdata.map((userDetail,index)=>{
        
       user.push({  
        id:userDetail.id,
        name: userDetail.real_name,
         timezone:userDetail.tz})
                                       }
                    ) 
     }
  }
    return (
      <div>
        <h1>User Details</h1>
        {/* {newdata.map((userDetail,index)=> */}
                      <div className="container" style={{ marginTop: 50 }}>
                         <BootstrapTable data={ user }  hover={ true } condensed={ true }>
                            <TableHeaderColumn dataField='id' dataAlign='center' isKey>User ID </TableHeaderColumn>
                            <TableHeaderColumn dataField='name' dataAlign='center'>User Name</TableHeaderColumn>
                            <TableHeaderColumn dataField='timezone' dataAlign='center'>Timezone</TableHeaderColumn>
                            
                        </BootstrapTable>
                        </div>
                   
       
        </div>   
        )}
        }


