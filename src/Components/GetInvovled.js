import React from 'react'
import '../Styles/GetInvolved.css'
import Header from './Header'

export default function GetInvovled() {
  return (
    <div>
        <Header/>
        <div className='Form'>
            <label className='Label'>Name</label>
            <input type='text' className='Input'></input>
            <label className='Label'>Phone Number</label>
            <input type='number' className='Input'></input>
            <label className='Label'>Address</label>
            <input type='textarea' className='Input'></input>
            <label className='Label'>Email</label>
            <input type='email' className='Input'></input>

            <p className='GetInvolved'>Get Involved</p>
        </div>
    </div>
  )
}
