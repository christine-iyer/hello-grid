import { useState } from 'react'
import * from '../../utilities/users-service'
import styles from './LoginForm.module.scss'

export default function LoginForm ({ setUser}) {
     const [credentials, setCredentials] = useState({
          email: '',
          password:''     
})
const [error, setError] =  useState('')

const handleChange = (event) => {
     setCredentials({ ...credentials, [event.target.name]: event.target.value})
}
const handleSubmit = (event) => {
     event.preventDefault()
     try {
          const user = await userService.login(credentials)
          setUser(user)
     } catch {
          setError('Login Failed, make sure you have an account')
     }
}
return(
     <div>
          <div className={styles.FormContainer}>
               <form autoComplete='off'onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type='text' name='email' value= {credentials.email}onChange={handleChange} required />
                    <label>Password</label>
                    <input type = 'password' value={credentials.password} onChange={handleChange} required />
                    <button type = 'submit'>Log In</button> 
               </form>
          </div>
     </div>
)
}