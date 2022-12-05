import React from 'react'
import logoSection from "../Assets/logoSection.png"
const Consulting = () => {
  return (
    <div className='Consulting'>
      <div className='imagediv z'>
        <img className='logosection' src={logoSection}></img>
      </div>
      <div className='imagediv zz'>
        <p className='webconsulting'>
          Web3 Consulting & Advisory
        </p>

      </div>
      <div className='imagediv zzz '>
        <button className='servicebtn' >Services</button>
      </div>
      {/* <p class="marquee">
  <span>This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text -&nbsp;</span>
</p> */}
      <p class="marquee marquee2">
        <span>
          <div className='flex zzzz'>
            <p className='dev' >Artwork & Metadata</p>
            <p className='dev' >WebDeveloper</p>
            <p className='dev' >Consulting & Advisory</p>
            <p className='dev' >Smart Contracts</p>

          </div>
        </span>
      </p>
    </div>
  )
}

export default Consulting