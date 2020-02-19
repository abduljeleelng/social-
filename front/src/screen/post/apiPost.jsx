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
        Authorization:`Bearer ${token}`
    },
    body:post
})
.then(response=>{
    return response.json();
})
.catch(error=>console.log(error))
}

export const photoAPI = "http://localhost:8080/api/posts/photo/";

export const singlePost = (postId)=>{
    return fetch(`${API}/post/${postId}`,{method:"GET"})
    .then(response=>{
        return response.json();
    })
    .catch(error=>{console.log(error)})
};

export const deletePost = (postId, token)=>{
    return fetch(`${API}/post/${postId}`,{
        method:"DELETE",
        headers:{
            Accept:"application/json",
            "Content-type":"application/json",
            Authorization:`Bearer ${token}`
        },
    })
    .then(response=>{
        return response.json();
    })
    .catch(error=>{console.log(error)})
};