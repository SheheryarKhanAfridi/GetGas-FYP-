import React ,{useEffect, useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import VLogo from "../Pictures/logofire.png";
import '../Vendornav.css'
import { Dropdown } from 'react-bootstrap';
export default function VendorNav() {
    const navigate=useNavigate();
    const [check,setCheck]=useState(false);
    const checkVendorOrUser =async () =>{
        const res= await fetch('http://localhost:3001/checkvendor',{
          method:'GET',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
          credentials:'include'
        })
        if(res.status===200){
          const Vendordata =await res.json();
           console.log('Vendor')
        }
        else if(res.status===202){
          console.log('None')
        }
        else if(res.status===400){
          console.log('Unauthorized User')
        }
        else if(res.status===401){
          console.log('Data not Found')
        }
      } 
      useEffect(() => {
        checkVendorOrUser();
      }, [])
      
const VendorLogout =async(e)=>{
    e.preventDefault();
    console.log('logout')
    navigate('/vendorLoginPAGE')
    await fetch('http://localhost:3001/VendorLogout',{
     method:'GET',
    headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
          credentials:'include'
        })
        window.location.reload();
      }
  return (
    
    <div className='VendorNavbck'>
         <div className="container">
            <div className="row vnav">
                <div className="child1 col-md-6">
                     <img src={VLogo} alt="" width={60}/>
                     <h5><b> Vendor Dashboard</b></h5>
                </div>
                <div className="col-md-6 child2">
                    <div className="buttons">
                    <Link className='VpagesLink'>Home</Link>
                    <Link className='VpagesLink'>Contact Us</Link>
                    <Dropdown>
                         <Dropdown.Toggle variant="success" className='dropbtn' id="dropdown-basic">
                             Dropdown Button
                          </Dropdown.Toggle>

                         <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1" >Action 1</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
                         </Dropdown.Menu>
                     </Dropdown>
                    <Link className='VpagesLink' onClick={VendorLogout}><b>Logout</b></Link>
                    
                    </div>
                </div>
            </div>
         </div>
         
    </div>
  )
}
