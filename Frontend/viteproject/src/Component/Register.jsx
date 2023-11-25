import React, { useState } from 'react';
// import '../App.css';
// import '../login.css'
import '../registeration.css'
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    cpassword: '',
  });

  const navigate = useNavigate();

  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const sendData = async () => {
    const { name, email, phone, address, password, cpassword } = user;

    const res = await fetch('http://localhost:3001/register', { 
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
      body: JSON.stringify({
        name,
        email,
        phone,
        address,
        password,
        cpassword,
      }),
    });

    try {
      const text = await res.text();
     
       if (!text) {
        window.alert('An error occurred during registration: Empty response');
        console.error('An error occurred during registration: Empty response');
        return;
      }
      

      const data = JSON.parse(text);

      if (data.error === 'Please fill all the fields') {
        window.alert('Please fill in all fields');
        console.error('Registration failed: Please fill all the fields');
      } else if (data.error === 'Sorry, Email or Phone Number already exists. Try with another Email or Phone') {
        window.alert(data.error);
        console.error('Registration failed: Email or Phone already exists');
      } 
      else if(password !== cpassword){
        alert('Password is not matched ')

      }
      else if (data.error === 'User Registered') {
        window.alert('Registration Successful');
        console.log('Registration Successful');
        setUser({
          name: '',
          email: '',
          phone: '',
          address: '',
          password: '',
          cpassword: '',
        });
        navigate('/Login');
      }
      else if(res.status===400){
        alert('email or phone number already exist')
        window.location.reload();
      }
      else {
        window.alert('An error occurred during registration.');
        console.error('An error occurred during registration:', data.error);
      }
    } catch (error) {
      // Handle other possible errors
      window.alert('An error occurred during registration.');
      console.error('An error occurred during registration:', error);
    }
  };

  return (
    <div className='register-body'>
  
 <section >
    <div className="">
      <div className="register-box">
        <form className="registerform" id="registerform" method="POST">
          <h2 className="form-title">Registration</h2>
          <div className="form-group">
            <label htmlFor="name">
              <i className="fa-regular fa-user"></i>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your Name"
              autoComplete="off"
              value={user.name}
              onChange={handleInputs}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              <i className="fa-solid fa-envelope"></i>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              value={user.email}
              onChange={handleInputs}
              required
            />
            
          </div>
          <div className="form-group">
            <label htmlFor="phone">
              <i className="fa-solid fa-phone"></i>
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="Enter your Phone number"
              autoComplete="off"
              value={user.phone}
              onChange={handleInputs}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">
              <i className="fa-solid fa-house"></i>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter your Address"
              autoComplete="off"
              value={user.address}
              onChange={handleInputs}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <i className="fa-solid fa-lock"></i>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              autoComplete="off"
              value={user.password}
              onChange={handleInputs}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cpassword">
              <i className="fa-solid fa-lock"></i>
            </label>
            <input
              type="password"
              id="cpassword"
              name="cpassword"
              placeholder="Confirm your Password"
              autoComplete="off"
              value={user.cpassword}
              onChange={handleInputs}
            />
          </div>
          <div>
          <div className="register-pic-navlink">
         
         <Link to="/Login" className="doyou">
           Do you Have an Account?
         </Link>
       </div>
            <button
              type="button"
              onClick={sendData}
              name="register"
              id="register"
              className="submit"
            >
              Submit
            </button>
            
          </div>
          <Link to='/vendorlogin'>Register as Vendor</Link>
        </form>
        
      </div>
    </div>
  </section>
 


</div>

  );
}

export default Register;


