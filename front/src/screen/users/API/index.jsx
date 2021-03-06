import {API} from '../../../config';
export const userList = ()=>{
    return fetch(`${API}/alluser`,{method:"GET"})
    .then(response=>{
        return response.json();
    })
    .catch(error=>{console.log(error)})
};

export const user = (userId)=>{
    return fetch(`${API}/user/${userId}`,
    {method:"GET"
})
    .then(response=>{
        return response.json();
    })
    .catch(error=>{console.log(error)})
};

export const updateAbout = (userId,token,aboutme) =>{
    return fetch(`${API}/user/about/${userId}`,
    {method:"PUT",
    headers:{
        Accept:"application/json",
        "Content-Type": "application/json",
        Authorization:`Bearer ${token}`
    },
    body: JSON.stringify(aboutme)
})
.then(response=>{return response.json();})
.catch(error=>console.log(error))
};

export const updateStatus = (userId,token,aboutme) =>{
    return fetch(`${API}/user/about/${userId}`,
    {method:"PUT",
    headers:{
        Accept:"application/json",
        "Content-Type": "application/json",
        Authorization:`Bearer ${token}`
    },
    body: JSON.stringify(aboutme)
})
.then(response=>{return response.json();})
.catch(error=>console.log(error))
};

//export const photoAPI =(userId)=> `${API}/user/photo/${userId}`;
export const photoAPI = `${API}/user/photo/`;