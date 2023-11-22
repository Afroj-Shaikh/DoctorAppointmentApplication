import axios from 'axios';
const BASE_URL="http://localhost:8080/slot/";
class SlotService{

    
     bookSlot( slot_id,patient_id){
        
        return axios.put(BASE_URL+"book/"+slot_id+"/"+patient_id);
    }

    addSlot(slot){
        
        return axios.post(BASE_URL+"add/", slot);
    }

    deleteSlotById( slot_id){
        
        return axios.delete(BASE_URL+"delete/"+slot_id);
    }

    unCateredSlotById( doctor_id){
        
        return axios.get(BASE_URL+"uncatered/"+doctor_id);
    }

    cateredSlotByDate( doctor_id,date){
        
        return axios.get(BASE_URL+"catered/"+doctor_id+"/"+date);
    }

    getBookedSlot( doctor_id){
        
        return axios.get(BASE_URL+"incomp/"+doctor_id);
    }

}
export default new SlotService();

