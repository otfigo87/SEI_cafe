//*functions used to sign-up, log-in, log-out ...
//!SignUpForm.jsx <--> users-service.js <--> users-api.js <-Internet-> server.js (Express)
//*handleSubmit ==> [signUp]users-service ==> users-api ==> server Express

import * as usersApi from './users-api';

export async function signUp(userData) {
  //use the signUp users-api
  //Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
  // console.log("[From SignUp function]", userData)
  const token = await usersApi.signUp(userData);
  localStorage.setItem('token', token)//save token to localStorage
  return token;//returning whatever is sent back by the server
}