import {API} from '../../config';

export const postList = ()=>{
    return fetch(`${API}/posts`,{method:"GET"})
    .then(response=>{
        return response.json();
    })
    .catch(error=>{console.log(error)})
};
export const newPost = (userId,token,post) =>{
    return fetch(`http://localhost:8080/api/post/new/${userId}`,
    /*return fetch(`${API}/post/new/${userId}`,*/
    {method:"POST",
    headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
        Authorization:`Bearer ${token}`
    },
    body:JSON.stringify(post)
})
.then(response=>{
    return response.json();
})
.catch(error=>console.log(error))
}