import React from 'react'
import joinPic from "../static/hands-on-table-min.jpg"
import findPic from "../static/child-draw-colorful-min.jpg"
import createPic from "../static/pencils-min.jpg"
import { BiUser } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'

function Landing() {
  return (
    <>
    <div>
      <h3>How M-A-M works? </h3>
      </div>
    <p>Meet new people who share your interests through online and in-person events. It’s free to create an account.</p>
    <div className='pic-container d-flex flex-row '>
      <div className='pic m-3'>
      <img className="pic-landing-page" src={joinPic} alt="join to m-a-m hands"/>
        <h3>JOIN a group</h3>
        <p>Meet others with same interests, find friends</p>
      </div>
      <div className='pic m-3'>
      <img className="pic-landing-page" src={createPic} alt="join to m-a-m hands"/>
        <h3>CREATE an event</h3>
        <p>Start a group, make friends with publish and host an event</p>
      </div>
      <div className='pic m-3'>
      <img className="pic-landing-page" src={findPic} alt="join to m-a-m hands"/>
        <h3>FIND an event</h3>
        <p>Find an event about any topic, online or in-person</p>
      </div>
 
    </div >
          <Link to='/register' className='login-btn btn-me mt-5'>
                <BiUser /> Create an account
          </Link>
    </>
  )
}

export default Landing