import React from 'react'
import './sliders2data.css'

const Slider2data = (props) => {
  return (
    <>
      <div className='slider-1-container'>
        <div className='slider1-div'>
          <div className='slider-div-data'>
            <div className='slider-quote'>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="40" width="40" xmlns="http://www.w3.org/2000/svg">
                <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
              </svg>
            </div>

            <div className='div-content'>
              <div className='para'>{props.s2.p}</div>
            </div>

            <div className='accounts'>
              <div className='account-img'>
                <img src={props.s2.img} className='img-size'/>
              </div>
              <div className='account-info'>
                <h3>{props.s2.accountinfo}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slider2data
