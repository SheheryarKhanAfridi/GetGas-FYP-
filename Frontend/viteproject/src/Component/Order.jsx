import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Order.css";

export default function Order() {
  const [warning, setwarning] = useState(true);
  const [Shopdata, setShopdata] = useState([]);
  const navigate = useNavigate();
  const warningoff = () => {
    setwarning(false);
  };
  const userChecking = async () => {
    const res = await fetch("http://localhost:3001/ChekingFromShopPage", {
      method: "POST",
      credentials: "include",
    });
    if (res.status === 400) {
      console.log("400");
      navigate("/Login");
    } else if (res.status === 200) {
      console.log("User is login");
    }
  };

  const allShop = async () => {
    const res = await fetch("http://localhost:3001/AllShops", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (res.status === 400) {
      console.log("Database Error");
    } else {
      const data = await res.json();
      setShopdata(data);
      console.log(Shopdata);
    }
  };

  useEffect(() => {
    userChecking();
    allShop();
  }, []);

  return (
    <div>
      {warning ? (
        <div className="warning">
          <div class="alert alert-success" role="alert">
            When placing an order, please ensure that the vendor is located near
            your home, and enter the details accurately. This will help the
            vendor deliver to your home easily
          </div>
          <button className="back-btn-warning" onClick={warningoff}>
            Back
          </button>
        </div>
      ) : (
        ""
      )}

      {/* --------x----------x-------------- */}
      {/* <div className="container">
        <div>
          <div className="card text-center mt-3">
            <div className="card-header">Price</div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Place Order
              </a>
            </div>
            <div className="card-footer text-muted">
              Service Provided by GESTGAS
            </div>
          </div>
        </div>
      </div> */}
      {Shopdata.map((shop, index) => (
        <div className="container">
          <div key={index} className="card text-center mt-3">
            <div className="card-header">Price: {shop.CurrentPrice}</div>
            <div className="card-body">
              <h5 className="card-title">{shop.ShopName}</h5>
              <p className="card-text">
                <b> Address:</b> {shop.VendorAddress}
              </p>
              <a href="#" className="btn btn-primary">
                Place Order
              </a>
            </div>
            <div className="card-footer text-muted">
              Service Provided by <b>GETGAS</b>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
