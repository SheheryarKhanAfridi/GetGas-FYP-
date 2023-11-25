import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import VendorNav from './VendorNav';

export default function NAV() {
  const [thisnavbar, setThisNavbar] = useState(false);

  useEffect(() => {
    const handleVendorUser = async () => {
      try {
        const res = await fetch('http://localhost:3001/VENDORORUSER', {
          method: 'GET',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (res.status === 200) {
          setThisNavbar(true);
        } else {
          setThisNavbar(false);
        }
      } catch (error) {
        console.error('Error fetching vendor/user:', error);
      }
    };

    handleVendorUser();
  }, [NAV]); 

  return (
    <div>
      {thisnavbar ? <VendorNav /> : <Navbar />}
    </div>
  );
}
