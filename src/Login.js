import React, { useState, useEffect } from 'react'; 
import './login.css'; 
 
const Login = () => { 
  const [email, setEmail] = useState(''); 
  const [firstName, setFirstName] = useState(''); 
  const [error, setError] = useState(''); 
  const [users, setUsers] = useState([]); 
 

  useEffect(() => { 
         // Fetch user data from the API 
        const fetchData = async () => { 
          try { 
              const response = await fetch('https://reqres.in/api/users?page=2'); 
              const result = await response.json(); 
              setUsers(result.data); 
          } catch (error) { 
              console.error('Error fetching data:', error); 
          } 
      }; 
 
        fetchData(); 
     }, []); 
 
    const handleLogin = (e) => { 
        e.preventDefault(); 
 
        // Check if email and first name match any user 
        const user = users.find(user => user.email === email && user.first_name === firstName); 
 
        if (user) { 
            // Redirect to movie page or handle successful login 
            window.location.href = '/movie'; 
        } else { 
            setError('Invalid email or first name'); 
        } 
    }; 
 
    return ( 
        <div className="login-container"> 
           <h2>Login</h2> 
            <form onSubmit={handleLogin}> 
                <div className="input-group"> 
                    <label htmlFor="email">Email:</label> 
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    /> 
              </div> 
              <div className="input-group"> 
                  <label htmlFor="firstName">First Name:</label> 
                  <input 
                      type="text" 
                      id="firstName" 
                      value={firstName} 
                      onChange={(e) => setFirstName(e.target.value)} 
                      required 
                  /> 
              </div> 
              {error && <p className="error-message">{error}</p>} 
              <button type="submit">Login</button> 
          </form> 
       </div> 
    ); 
}; 
 
export default Login;

