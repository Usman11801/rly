import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
    const carddata=[
        {
            number:1,
            title:"Smart Contracts",
            Description:"Direct access to business partner and 0xPioneers' CEO Brian Ludlam, who engineers, develops, deploys, and interfaces innovative smart contracts for any web3 use case."
        },
        {
            number:2,
            title:"Web Development",
            Description:"Network of talented web developers who build unique UI & UX interfaces using JavaScript, HTML, CSS, React (JS framework), TypeScript, and cross-browser compatibility for seamless web3 integration & NFT minting functionality."
        },
        {
            number:3,
            title:"Artwork & Metadata",
            Description:"Expertise in organizing NFT artwork layers, arranging traits & attributes, designing unique & robust metadata, hosting data to IPFS, and engineering final NFT builds."
        },
        {
            number:4,
            title:"Consulting & Advisory",
            Description:"Expertise in the XYZs of web3 consulting & advisory focusing on brand building, community growth & management, Discord strategy, marketing strategy, NFT pre & post-launch strategy, scenarios to avoid, and overall go-to-market strategy for web3 brands."
        },
        {
            number:5,
            title:"NFT Storytelling",
            Description:"Lorem ipsum dolor sit amet consectetur. Lacinia diam diam interdum gravida non aliquam. Amet auctor parturient nulla malesuada consectetur hac sagittis amet. Nisl quis faucibus ut sodales ante. Facilisis pellentesque convallis elementum tristique enim eget gravida."
        },
        {
            number:6,
            title:"Discord Server Setup",
            Description:"Lorem ipsum dolor sit amet consectetur. Sit sed nisl augue tincidunt bibendum vel. Vivamus feugiat felis lacus urna faucibus. Nascetur imperdiet donec non suspendisse morbi ut habitant. Aliquet nunc faucibus sagittis platea velit odio congue."
        }
    ]
    return (
   <div className='pcdiv'>
   <p className='paraservices' >Servises</p>
    <div className='container'>
        <div className='row xzz'>
        {
            carddata.map((val,index)=>{
                return(
                    <>
                    <ServiceCard number={val.number} title={val.title} Description={val.Description} />
                    </>
                )
            })
        }

        </div>
        
    </div>
    <div className='inquirybtndiv'>
        <button className='inquiry'>Submit Inquiry </button>
    </div>
   </div>
  )
}

export default Services