import axios from 'axios';
const BASE_URL="http://localhost:8080/doctor/";
class DoctorService{

    
    getDoctor(category){
        console.log("")
        return axios.get(BASE_URL+"cat/"+category);
    }
    
    getDoctorById(id){

        return axios.get(BASE_URL+id);
    }

    addDoctor(doctor){
        return axios.post(BASE_URL+"add",doctor);
    }
    
}
export default new DoctorService();

