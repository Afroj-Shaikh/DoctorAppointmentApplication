import axios from 'axios';
const BASE_URL="http://localhost:8080/doctor/";
class UserService{

    
    getDoctor(category){
        console.log("getproducts productservice")
        return axios.get(BASE_URL+category);
    }
    // addProduct(product){
    //     return axios.post(BASE_URL+"product",product);
    // }
    // deleteProduct(id){
    //     return axios.delete(BASE_URL+"products/"+id)
    // }
    // getById(id){
    //     return axios.get(BASE_URL+"products/"+id);
    // }

    // updateProduct(product){
    //     return axios.put(BASE_URL+"product",product);
    // }
}
export default new UserService();

