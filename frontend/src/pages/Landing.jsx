import React from 'react'
import joinPic from "../static/hands-on-table-min.jpg"
import findPic from "../static/child-draw-colorful-min.jpg"
import createPic from "../static/pencils-min.jpg"
import accountPic from "../static/create-account.jpg"
import { BiUser } from 'react-icons/bi'
import { Link} from 'react-router-dom'


function Landing() {
  return (
    <div className='container-landing'>
    <div className='paragraph-landing'>
      <h3>How M-A-M works? </h3>
       <p className='h5 m-5'>Meet new people, share your interests through online and in-person events. <br />People who joined to M-A-M have fostered community, learned new skills, started businesses, and made life-long friends. <br/> Learn how. It’s free to create an account.</p>
    </div>
    <div className=' d-flex flex-row landing-pics-container'>
      <div className='landing-pics-first-two landing-pics-container'>
         <div className='pic m-3'>
            <img className="pic-landing-page" src={accountPic} alt="create to m-a-m hands"/>
            <h3>CREATE an account</h3>
            <p>It's easy, quick and free</p>
         </div>
         <div className='pic m-3'>
            <img className="pic-landing-page" src={joinPic} alt="join to m-a-m hands"/>
            <h3>MAKE friends</h3>
            <p>Meet others with same interests, find friends</p>
        </div>
      </div>
      <div className='landing-pics-sec-two landing-pics-container'>
        <div className='pic m-3'>
          <img className="pic-landing-page" src={createPic} alt="join to m-a-m hands"/>
          <h3>CREATE an event</h3>
         <p>Start a group, make friends with publish and host an event</p>
         </div>
       <div className='pic m-3'>
          <img className="pic-landing-page" src={findPic} alt="join to m-a-m hands"/>
           <h3>JOIN an event</h3>
           <p>Find an event about any topic, online or in-person</p>
        </div>
        </div>
 
    </div >
          <Link to='/register' className='login-btn btn-me mt-5'>
                <BiUser /> Create an account
          </Link>
    </div>
  )
  
}

export default Landing