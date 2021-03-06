/* eslint-disable no-console */
import axios from 'axios'

const baseURI = 'http://localhost:5000/user'

export async function regUser(user){
  try {
    const res = await axios.post(`${baseURI}/register`, user);
    return {_id: res.data._id};
  } catch (error) {
    return {error: 'Email already exists'};
  }
}

export async function signUser(user){
  try {
    const res = await axios.post(`${baseURI}/login`, user);
    localStorage.setItem('token', res.data.token);
    // localStorage.token = res.data.token;
    return { token: res.data.token };
  } catch (error) {
    console.log(error);
  }
}