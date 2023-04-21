import {useState} from 'react';
import { signUp } from '../utilities/users-service';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    })
    const disable = formData.password !== formData.confirm //true or false

    const handleSubmit = async (e) => {
        e.preventDefault();   
        try {
          console.log(formData)   
          //we don't want to send error and confirm properties
          //so we are making new object from the state (data to send to the server)
          const userData = { 
            name: formData.name,
            email: formData.email,
            password: formData.password
          }  
          // returns a token with user info (all the work done inside the users-service.js file inside utilities)
          const user = await signUp(userData) // user service 
          console.log(user);
        } catch (error) {
          setFormData({...formData, error:"Sign Up Failed - Try Again"})
        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value, error: ''})
    }
  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label htmlFor="">Confirm</label>
          <input
            type="password"
            name="confirm"
            value={formData.confirm}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>
      <p className="error.message">{formData.error}</p>
    </div>
  );
}

export default SignUpForm