import React, { Component } from 'react'
import SlotService from '../service/SlotService';
import LoginNavbar from './LoginNavbar';


export default class slot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doc_id: this.props.match.params.id,
            msg: '',
            slotarr: []
        }

        console.log("in Slottttttttttttttttttttttttttttttttttt")

    }

    componentDidMount() {
        console.log("Component did mount of slot DidMount");
        SlotService.unCateredSlotById(this.state.doc_id).then(
            (response) => {
                this.setState({ slotarr: response.data });
                console.log(this.state.slotarr);
            }
        )
    }

    handleBookSlot = (id, time, date) => {
        const patient_id = window.sessionStorage.getItem("patID");

        SlotService.bookSlot(id, patient_id).then(
            (response) => {
                if (response.data === "Updated") {
                    alert("Slot is booked" + "\nSlot Details:\nTime: " + time + "\nDate: " + date)
                    SlotService.unCateredSlotById(this.state.doc_id).then(
                        (response) => {
                            this.setState({ slotarr: response.data });
                            console.log(this.state.slotarr);
                        }
                    )
                }
                else {
                    this.setState({ msg: "Sorry ! Your Slot is not Booked ! Try again." })
                }
            }
        )

    }

    render() {
        return (
            <>
             <LoginNavbar/>
            <div>
               
                <div>
                    <center><h2 className="text-center">Slot List</h2></center>
                    <br />
                    <h3>{this.state.msg}</h3>
                    <center>
                    <div className="Row">
                        <table class="table" >
                            <thead class="thead-dark">
                                <tr>
                                    <th>Slot Date</th>
                                    <th>Slot Start Time</th>
                                    <th>Slot End Time</th>
                                    <th>Book</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.slotarr.map(slot =>
                                        <tr>
                                            <td key={slot.slot_id}>{slot.slot_date}</td>
                                            <td>{slot.slot_start_time}</td>
                                            <td>{slot.slot_end_time}</td>
                                            
                                            <td>
                                                <button className="btn btn-info" onClick={() => this.handleBookSlot(slot.slot_id, slot.slot_start_time, slot.slot_date)}>Book</button>
                                            </td>
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







