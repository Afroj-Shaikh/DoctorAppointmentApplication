import React, { Component } from 'react';
import SlotService from '../service/SlotService';
import LoginNavbar from './LoginNavbar';



class AddSlot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slot_patient_id: null,
            slot_doctor_id: window.sessionStorage.getItem("docID"),
            slot_date: '',
            slot_start_time: '',
            slot_end_time: '',
            slot_status: false,
            msg: '',
            slotarr: []

        }
        //this.getTitle=this.getTitle.bind(this);
    }


    componentDidMount() {
        SlotService.unCateredSlotById(this.state.slot_doctor_id).then(
            (response) => {
                this.setState({ slotarr: response.data });
                console.log(this.state.slotarr);
            })
    }


    cancel() {
        this.props.history.push('/addSlot')
    }


    change_slot_date_handler = (event) => {
        console.log("in slot_date handler")
        this.setState({ slot_date: event.target.value })
    }
    change_slot_start_time_handler = (event) => {
        console.log("in slot_start_time handler")
        this.setState({ slot_start_time: event.target.value })
    }

    change_slot_end_time_handler = (event) => {
        console.log("in slot_end_time handler")
        this.setState({ slot_end_time: event.target.value })
    }

    viewProfile = (event) => {
        this.props.history.push("/doc")
    }


    AddNewSlot = (e) => {
        e.preventDefault();
        console.log("in slottttttttttt    " + this.state.slot_start_time + "  Date" + this.state.slot_date)
        let slot = {
            slot_patient_id: this.state.slot_patient_id, slot_doctor_id: this.state.slot_doctor_id, slot_date: this.state.slot_date,
            slot_start_time: this.state.slot_start_time + ":00", slot_end_time: this.state.slot_end_time + ":00", slot_status: this.state.slot_status
        };
        SlotService.addSlot(slot).then(
            (response) => {
                this.props.history.push("/addSlot");
                this.setState({ msg: "Slot Added" });
                SlotService.unCateredSlotById(this.state.slot_doctor_id).then(
                    (response) => {
                        this.setState({ slotarr: response.data });
                        console.log(this.state.slotarr);
                    })

            }
        );

    }

    deleteSlot = (id) => {
        SlotService.deleteSlotById(id)
        SlotService.unCateredSlotById(this.state.slot_doctor_id).then(
            (response) => {
                this.setState({ slotarr: response.data });
                console.log(this.state.slotarr);
                this.setState({ slotarr: response.data 
            })
        })
        
        
    }

    render() {
        return (
            <>
                <LoginNavbar />

                <div>
                    <div className="container">
                        <div className="row">
                            <div className="card col-md-6 offset-md-3 offset-md-3">
                            </div>
                            {/* <center><h2>{this.state.msg}</h2> </center> */}
                            <center>
                                <div className="card-body">

                                    <form>
                                        <table >
                                            <center>
                                                <div className="form-group">
                                                    <br />

                                                    <label> &nbsp; &nbsp; Date : </label>
                                                    <input type="date" name="slot_date" id="slot_date" className="form-control" value={this.state.slot_date}
                                                        onChange={this.change_slot_date_handler} />
                                                </div>
                                                <div className="form-group">
                                                    <label>Start Time: </label>
                                                    <input type="time" name="slot_start_time" id="slot_start_time" className="form-control" value={this.state.slot_start_time}
                                                        onChange={this.change_slot_start_time_handler} />
                                                </div>
                                                <div className="form-group">
                                                    <label>End Time : </label>
                                                    <input type="time" name="slot_end_time" id="slot_end_time" className="form-control" value={this.state.slot_end_time}
                                                        onChange={this.change_slot_end_time_handler} />
                                                </div>
                                                <button className="btn btn-success" onClick={this.AddNewSlot}>Save</button>
                                                <button className="btn btn-danger" onClick={this.viewProfile} style={{ marginLeft: "10px" }}>Go to profile</button>
                                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>


                                            </center>
                                        </table>
                                    </form>


                                </div>
                            </center>
                        </div>
                        <div>
                            <center><h2 className="text-center">Slot List</h2></center>
                            <br />
                            <center><h2>{this.state.msg}</h2> </center>
                            <center>
                                <div className="Row">
                                    <table class="table" >
                                        <thead class="thead-dark">
                                            <tr>
                                                <th>Slot Date</th>
                                                <th>Slot Start Time</th>
                                                <th>Slot End Time</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.slotarr.map(slot =>
                                                    <tr>
                                                        <td key={slot.slot_id}>{slot.slot_date}</td>
                                                        <td>{slot.slot_start_time}</td>
                                                        <td>{slot.slot_end_time}</td>
                                                        <td><button onClick={() => this.deleteSlot(slot.slot_id)}>Delete</button></td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </>

        )


    }

}
export default AddSlot

