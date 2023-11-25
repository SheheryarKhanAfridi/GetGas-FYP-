import React , {useState} from 'react'
import '../App.css'
import Rlogo from '../Pictures/login.jpg'
import { Link , useNavigate } from 'react-router-dom';
import '../login.css'
import NAV from './NAV';


export default function Login() {
  const navigate = useNavigate();
  const [email,setemail]= useState("") 
  const [password,setpassword]=useState("")
  // const [loggedIn, setLoggedIn] = useState("false");
  
  // const Login = async (e) => {
  //   e.preventDefault();

  //   if (!email || !password) {
  //     window.alert('Please fill in all fields');
  //     return;
  //   }
  
  //     const res = await fetch('http://localhost:3001/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       email,
  //       password,
  //     }),
  //   });
  //   const data = await res.json();
  //  if (res.status === 400 || !data) {
  //     window.alert('Invalid Email or Password');
  //   } else {
  //     window.alert('Login successful');
  //     navigate('/')
  //   }
    
    
   
  // } 
  
  const checkUserLogin = async () => {
    const res = await fetch('http://localhost:3001/Userlogin', {
      method: 'POST', 
       credentials: 'include', 
    });
  
    try {
      const data = await res.json();
  
      if (res.status === 400) {
        console.log(data.error); 
        navigate('/')

      } else {
        console.log(data.error); // User not found
      }
    } catch (error) {
      console.error('Error occurred while checking user login status:', error);
    }
  };
  
  checkUserLogin();
 
  const Login = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      window.alert('Please fill in all fields');
      return;
    }
  
    const res = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json', 
      },
      
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert('Invalid Email or Password');
    } else {
      alert('Login successful');
      navigate('/')
    }
    // window.location.reload();
  }
  

  return (
  <>
  <NAV/>
  
    <div className="loginbody">
      
      
      <div >
      <div className="box">
        <form method='POST'>
          <h2>LOGIN</h2>
          <div className="inputbox">
            <input type="text" required="required" id='email' name='email' value={email} onChange={(e)=>{setemail(e.target.value)}}   />
            <span>Email</span>
            {/* <i></i> */}
          </div>
          <div className="inputbox">
            <input type="password" required  id="password" name='password' value={password} onChange={(e)=>{setpassword(e.target.value)}} />
            <span>password</span>
            {/* <i></i> */}
          </div>
          <div className="link">
            <Link to="/register" className='doyou'>Register</Link>
            <Link to="/Contact" className='doyou'>Wanna Contact Us?</Link>
          </div>
          <input type='submit' name='register' value="Login" id='register' className='submit' onClick={Login}/>
        </form>
        
      </div>
      <Link to='/vendorloginPage'>Login as Vendor</Link>
    </div>
    </div>
    </>
  )
}
