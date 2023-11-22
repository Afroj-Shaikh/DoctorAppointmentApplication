import axios from 'axios';
const BASE_URL="http://localhost:8080/user/";
class UserService{

    
     validate(u){
        console.log(u+"      in validate")
        return axios.post(BASE_URL+"getPassword", u);

     }
}

export default new UserService();