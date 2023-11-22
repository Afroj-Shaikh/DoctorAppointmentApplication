import React, { Component } from 'react'
import SlotService from '../service/SlotService';
import LoginNavbar from './LoginNavbar';

export default class viewSlot extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slotarr: [],
            
            msg:''
        }

    }

    componentDidMount() {
        console.log("Component did mount of Category DidMount");
        SlotService.getBookedSlot(window.sessionStorage.getItem("docID")).then(
            (response) => {
                
                if(this.state.slotarr===null){
                    this.setState({
                        msg:"NO BOOKED SLOTS FOR DAY"
                    })
                }
                this.setState({ slotarr: response.data });
                console.log(this.state.slotarr);
                
            }
        
        )
    }

    

    render() {
        return (
            <>
            <LoginNavbar/>
            <div>
                
                <div>
                <center><h2 className="text-center">Your Slots</h2></center>
                <br />
                <h3>{this.state.msg}</h3>
                <center>
                <div className="Row">
                <table class="table">
                            <thead class="thead-dark">
                            <tr>
                                <th>Slot Date</th>
                                <th>Slot Start Time</th>
                                <th>Slot End Time</th>
                                

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.slotarr.map(slot =>
                                    <tr>
                                        <td key={slot.slot_id}>{slot.slot_date}</td>
                                        <td>{slot.slot_start_time}</td>
                                        <td>{slot.slot_end_time}</td>
                                        
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                </center>
            </div>
            </div>
            </>
        )
    }
}
