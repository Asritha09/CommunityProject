import React from 'react'
import Header from './Header'
import '../Styles/Feedback.css'

export default function Feedback() {
  return (
    <div>
      <Header />
      <div className='Form'>
        <label className='Label'>Name</label>
        <input type='text' className='Input'></input>
        <label className='Label'>Feedback</label>

        <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start"}}>
          <div style={{ display: 'flex' }}>
            <input type='radio' className='RadioInput' name='radio' value="Satisfactory"></input>
            <span className='RadioOption'> Satisfactory</span>
          </div>
          <div style={{ display: 'flex' }}>
            <input type='radio' className='RadioInput' name='radio' value="Good"></input>
            <span className='RadioOption'> Good</span>
          </div>
        </div>

        <label className='Label'>Description</label>
        <textarea className='Input'></textarea>

        <p className='GetInvolved'>Submit</p>
      </div>
    </div>
  )
}
