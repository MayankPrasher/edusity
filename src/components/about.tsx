import React from 'react'
import './about.css'
import grad1 from '../../public/grad.jpg'

const about = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={grad1} alt="" className='about-img'/>
            <i className='fa fa-play-circle play-icon'onClick={()=>{
              setPlayState(true)
            }}></i>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tommorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, ipsam. Nesciunt sit veritatis amet minima eos ducimus porro quo aliquam perspiciatis fugiat quisquam similique, placeat provident cum modi laboriosam aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam alias amet possimus veniam consequuntur, delectus nemo illum, qui fugiat tempora voluptatibus quibusdam ullam accusantium porro aut doloremque in quia quisquam!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consequuntur modi, obcaecati alias soluta ipsam quibusdam eveniet accusamus ratione! Tenetur consequuntur et qui hic vitae ducimus, dignissimos officiis itaque voluptas!</p>
        </div>
    </div>
  )
}

export default about