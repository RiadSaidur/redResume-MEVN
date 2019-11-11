/* eslint-disable no-console */
import axios from 'axios'

const baseURI = 'http://localhost:5000/resume'

export async function getResume(){
  const auth_token = localStorage.token;
  if(!auth_token) return {error: 'Access Denied'};
  const res =  await axios.get(`${baseURI}/`, {headers: { auth_token }});
  return res.data.resume;
}