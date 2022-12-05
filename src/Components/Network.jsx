import React from 'react'
import networkl from "../Assets/networkl.png"
import networkr from "../Assets/networkr.png"
import networkc from "../Assets/networkc.png"
import current from "../Assets/current.png"
import profileimage from "../Assets/profileimage.png"

const Network = () => {
  return (
    <>
    <div>
        <p className='networktext'>Network</p>
        <div className=' threeicons'>
                <div className='logoss'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 imgg'>
                        <img className='mmm' src={networkl} />
                        </div>
                        <div className='col-md-4 imgg'>
                 <img className='mmm' src={networkc} />
                
                        </div>
                        <div className='col-md-4 imgg'>
                <img className='mmm' src={networkr} /> 
                        </div>

                    </div>

                </div>
                </div>

        </div>
    </div>

    <div className='container cstyle'>
        <div className='row makerow'>
            <div className='col-md-6 wholediv'>
               <div className='ryanlogo'> 
                <img  src={current}></img>
                </div>
            </div>
            <div className='col-md-6  centeralign'>
               <div>
                <img src={profileimage} />
               <p className='ryan'>Ryan</p>
                <p className='founder'>Founder</p>
                <p className='description'>My goal is to assist projects/brands with launching their own products, everything from smart contracts, React dApp minting functionality, NFT/metadata generation, and overall macro advisory of how to successfully launch a brand.</p>
                <button className='addmore'>ADD More</button>
               </div>
            </div>

        </div>

    </div>
    {/* <div className='ryanbackgroundline'>

    </div> */}
    </>
  )
}

export default Network