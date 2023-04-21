//make AJAX requests to the Express server
//*SignUpForm.jsx <--> users-service.js <--> users-api.js <-Internet-> server.js (Express)
//*handleSubmit ==> [signUp]users-service ==> [signUp]users-api ==> server Express
//AJAX request is being made from the browser
export async function signUp(userData) {
    const BASE_URL = 'api/users'; //base path of the express route we'll define

    const res = await fetch(BASE_URL, {//fetch use a second arg (options object) to make requests
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData),// fetch requires data payloads to be stringified
    });

    if(res.ok) { // if request was successful 
        return res.json(); //JWT Token
    } else {
        throw new Error('Invalid Sign Up!')
    }
}