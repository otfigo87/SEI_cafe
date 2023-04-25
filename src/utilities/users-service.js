//////////// !SIGN-UP LOGIC///////////
//*functions used to sign-up, log-in, log-out ...
//*SignUpForm.jsx <--> users-service.js <--> users-api.js <-Internet-> server.js (Express)
//*handleSubmit ==> [signUp]users-service ==> users-api ==> server Express

import * as usersApi from './users-api';

//! Get Token
const getToken = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;
  //obtain the payload of the token
  const payload = JSON.parse(atob(token.split('.')[1]))
   //check if token is expired
   //JWT exp is in milliseconds
   if(payload.exp < Date.now() / 1000){
     localStorage.removeItem('token');
     return null
   } 
   //token is valid
   return token
}
export function getUser(){
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
  //if there is a token return the user in that token, otherwise return null
}

//! SignUp ===========================================
export const signUp = async (userData) => {
  //use the signUp users-api
  //Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
  // console.log("[From SignUp function]", userData)
  const token = await usersApi.signUp(userData);
  localStorage.setItem('token', token)//save token to localStorage
  return getUser();//returning whatever is sent back by the server
}

//! LogOut ============================================
export const logOut = () => {
  localStorage.removeItem('token')
}

//! Login =============================================
export const login = async (credentials) => {
  const token = await usersApi.login(credentials);
  localStorage.setItem("token", token);
  return getUser();
};