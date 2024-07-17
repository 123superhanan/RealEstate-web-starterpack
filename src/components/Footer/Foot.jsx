import React from 'react'
import "./Foot.css"
import { FaRegCopyright } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
const Foot = () => {
  return (
    <>
        <div className="f-warpper">
            <div className=" f-container">
              <div className="paddings innerWidth  f-contant">
    <div className="flexColStart  f-left">
        <img src="./logo2.png" alt="logo2" />
        <span className='secondaryText'>Our vision is to make all people
            <br></br>
            the best place to live for them.</span>
    </div>
<div className="flexColStart f-right">
<span className='primaryText'>Information</span>
<span className='secondaryText'>145 New York, FL 5467, USA</span>
<div className="flexCenter f-menu">
<a href="">Property</a>
<a href="">Services</a>
<a href="">Product</a>
<a href="">About Us</a>
</div>


</div>

            </div>
            <div className="trade">
          <p><FaRegCopyright id="icc" size={16} color={"#fff"}/> made by <CiHeart  id="iee"size={16} color={"#fff"} fontWeight={600} /> Abdul Hanan abbasi</p>
        </div>
            </div>
            
            </div>
           
        
    </>
  )
}

export default Foot
