import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


const FQA = () => {
  return (
    <div>
      <div className='questionheading'>
      <p className='questiontext' >Frequently Asked Questions</p>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
          <div className='maintoggle'>
        <button className='btntoggle' href="#demo1" data-toggle="collapse">What is web2?</button>

        <div className='texttoggle' id="demo1" class="collapse">
        <p className='loremcolor' >  Lorem ipsum dolor text....</p>
        </div>
      </div>
          </div>
          <div className='col-md-6'>
          <div className='maintoggle'>
        <button className='btntoggle' href="#demo2" data-toggle="collapse">What are non-fungible tokens?</button>

        <div className='texttoggle' id="demo2" class="collapse">
        <p className='loremcolor' >  Lorem ipsum dolor text....</p>
        </div>
      </div>
          </div>

        </div>

      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
          <div className='maintoggle'>
        <button className='btntoggle' href="#demo3" data-toggle="collapse">What is web3?</button>

        <div className='texttoggle' id="demo3" class="collapse">
        <p className='loremcolor' >  Lorem ipsum dolor text....</p>
        </div>
      </div>
          </div>
          <div className='col-md-6'>
          <div className='maintoggle'>
        <button className='btntoggle' href="#demo4" data-toggle="collapse">What are some challenges with web3?</button>

        <div className='texttoggle' id="demo4" class="collapse">
        <p className='loremcolor' >  Lorem ipsum dolor text....</p>
        </div>
      </div>
          </div>

        </div>

      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
          <div className='maintoggle'>
        <button className='btntoggle' href="#demo5" data-toggle="collapse">What is the purpose of web3?</button>

        <div className='texttoggle' id="demo5" class="collapse">
        <p className='loremcolor' >  Lorem ipsum dolor text....</p>
        </div>
      </div>
          </div>
          <div className='col-md-6'>
          <div className='maintoggle'>
        <button className='btntoggle' href="#demo6" data-toggle="collapse">Should my brand leverage web3?</button>

        <div className='texttoggle' id="demo6" class="collapse">
        <p className='loremcolor' >  Lorem ipsum dolor text....</p>
        </div>
      </div>
          </div>

        </div>

      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
          <div className='maintoggle'>
        <button className='btntoggle' href="#demo7" data-toggle="collapse">How does web3 impact the creator economy?</button>

        <div className='texttoggle' id="demo7" class="collapse">
        <p className='loremcolor' >  Lorem ipsum dolor text....</p>
        </div>
      </div>
          </div>
          <div className='col-md-6 dolor '>
          <div className='maintoggle'>
        <button className='btntoggle' href="#demo8" data-toggle="collapse">How can my brand leverage web3?</button>

        <div className='texttoggle' id="demo8" class="collapse">
          <p className='loremcolor' >  Lorem ipsum dolor text....</p>
                  </div>
      </div>
          </div>

        </div>

      </div>


    </div>
  )
}

export default FQA