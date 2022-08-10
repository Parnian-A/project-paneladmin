import request from "tools/request";
 

 export function setPersons (payload){
    return {
        type :'PERSONS' ,
         payload 
        }
 }

 export function setPerson (payload){
    return {
        type :'PERSON' ,
         payload 
        }
 }


 export function getPerson (id){
    return function(dispatch){
        request(`/users/${id}`) .then(response =>dispatch(setPerson( response.data)))
    }
 }