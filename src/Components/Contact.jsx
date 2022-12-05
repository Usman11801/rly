import React from 'react'
// import logoSection from "../Assets/logoSection.png"
import FooterLogo from "../Assets/FooterLogo.png"
const Contact = () => {
  return (
   <>
    <div className='contact'>
        <p className='contactus'>Contact us</p>
        <div className='flex xflex'>
  <p className='deve' >Artwork & Metadata</p>
  <p className='deve' >WebDeveloper</p>
  <p className='deve' >Consulting & Advisory</p>
  <p className='deve' >Smart Contracts</p>

    </div>
    <div className='inquirybtndiv'>
        <button className='inquiry'>Submit Inquiry </button>
    </div>
    </div>
    <div className='footerfull'>
      <img src={FooterLogo}/>
      <div className='footertext'>
        <p className='footeroption'>About</p>
        <p className='footeroption' >Services</p>
        <p className='footeroption' >Network</p>
        <p className='footeroption' >Founder</p>
        <p className='footeroption' >F.A.Q.</p>
      </div>
      <div className='divfooter'>
        <p className='footercopy' >Copyright © 2022 | All rights reserved.</p>
      </div>

    </div>
   </>
  )
}

export default Contact