import axios from 'axios';
const BASE_URL="http://localhost:8080/patient/";
class PatientService{


    addPatient(patient){
        return axios.post(BASE_URL+"add",patient);
    }
    
    getPatientById(id){

        return axios.get(BASE_URL+id);
    }
}
export default new PatientService();