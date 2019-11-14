/* eslint-disable no-console */
import axios from 'axios'

const baseURI = 'http://localhost:5000/resume'

const auth_token = localStorage.token;

export async function loadResume(){
  if(!auth_token) return {error: 'Access Denied'};
  const res =  await axios.get(`${baseURI}/`, {headers: { auth_token }});
  return res.data.resume;
}

export async function updateResume( resume ){
  if(!auth_token) return {error: 'Access Denied'};
  try {
    const res =  await axios.patch(`${baseURI}/update`, resume ,  {headers: { auth_token }});
    console.log(`ops`);
    return res.data.resume;
  } catch (error) {
    console.log(error);
  }
}