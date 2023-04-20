import {useState} from 'react'

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    })
    const disable = formData.password !== formData.confirm //true or false

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
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