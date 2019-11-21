/* eslint-disable no-console */
import axios from 'axios'

const baseURI = 'http://localhost:5000/resume'

export async function loadResume(){
  const auth_token = localStorage.token;
  if(!auth_token) return {error: 'Access Denied'};
  try {
    const res =  await axios.get(`${baseURI}/`, {headers: { auth_token }});
    return res.data.resume;
  } catch (error) {
    console.log(error);
  }
}

export async function updateResume( resume ){
  const auth_token = localStorage.token;
  if(!auth_token) return {error: 'Access Denied'};
  try {
    const res =  await axios.patch(`${baseURI}/update`, resume ,  {headers: { auth_token }});
    return res.data.resume;
  } catch (error) {
    console.log(error);
  }
}