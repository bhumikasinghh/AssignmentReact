import React from "react";
import data from '../Data/data.json';
import {Component} from 'react';
import { Modal } from "react-bootstrap";
import {Calendar }from 'react-calendar';

export  class UserDetails extends Component {
    state = {
        show: false,
        user: [],
      };
    
      showUserActivity = (a) => {
        this.setState({
          user:a.activity_periods,
          show: true,
        });
      };
    
      handleClose = () => {
        this.setState({ show: false });
      };
  render()
  {
    const newdata = data.members;   
  return (
        <div className="container" style={{ marginTop: 30 }}>
          <h1>User Details</h1>
          {newdata.map((userDetail, index) => (
            <div>
                <table className="table table-sm table-dark">   
                <tbody > 
                        <tr>
                            <td>{userDetail.id}</td>
                            <td>{userDetail.tz}</td>
                            <td onClick={() => this.showUserActivity(userDetail)} >
                                {userDetail.real_name}
                             </td>
                            
                        </tr>
                        </tbody> 
                    </table>
            </div>
          ))}
   
   
          <Modal  
          show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title >
                    User Activity Periods
                </Modal.Title>
            </Modal.Header>
             <Modal.Body>
                    {this.state.user.map((item) => (
                        <ul>
                            <li>
                                <p >{item.start_time}</p>
                                <p>{item.end_time}</p>
                            </li>
                        </ul>
                    ))}
                    <Calendar value={new Date()} />
            </Modal.Body>
        </Modal>
        </div>
      );
    }
  }