import React,{ Component } from 'react'
import SlotService from '../../service/SlotService'
  
class Form extends Component{
  constructor(props){
    super(props)
    this.state = { slot_id:2 , date:'',time:'', patient_id:'user_103'}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  // Form submitting logic, prevent default page refresh 
  handleSubmit(event){
    const { slot_id, time, patient_id} = this.state
    event.preventDefault()
    SlotService.bookSlot(slot_id, patient_id).then(
      (response)=>{(console.log(response.data))}
  );
    
    // SlotService.addSlot(date, time, patient_id)
    // alert(`
    //   ____Your Details____\n
    //   date : ${date}
    //   time : ${time}
     
    //  o}
    // `)
  }
  
  // Method causes to store all the values of the 
  // input field in react state single method handle 
  // input changes of all the input field using ES6 
  // javascript feature computed property names
  handleChange(event){
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name] : event.target.value
    })
  }
  
  // Return a controlled form i.e. values of the 
  // input field not stored in DOM values are exist 
  // in react component itself as state
  render(){
    return(
      
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='date'>Date</label>
          <input 
            name='date'
            placeholder='Date' 
            value = {this.state.slot_date}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='time'>Time</label>
          <input
            name='time' 
            placeholder='Time'
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
     
  
        <div>
          <button>BookSlot</button>
        </div>
      </form>
      
    )
  }
}
  
export default Form