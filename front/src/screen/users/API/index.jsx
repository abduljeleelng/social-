import {API} from '../../../config';
export const userList = ()=>{
    return fetch(`${API}/alluser`,{method:"GET"})
    .then(response=>{
        return response.json();
    })
    .catch(error=>{console.log(error)})
};