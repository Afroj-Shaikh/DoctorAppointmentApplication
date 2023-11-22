import axios from 'axios';
const BASE_URL="http://localhost:8080/category/";

class CategoryService{
    getAllCategory(){
        return axios.get(BASE_URL);
    }

    
}
export default new CategoryService;