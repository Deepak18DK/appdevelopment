import React from 'react'
import Topbar from '../components/Topbar'
import Footer from '../components/Footer'
import '../Assets/css/Home.css'
import img from '../Assets/images/arrow.gif'
import video from '../Assets/images/video1.mp4'
import img1 from '../Assets/images/vector.png';
const Home = () => {
  return (
    <div>
        <Topbar/>
        <video autoPlay muted loop id='aboutme'>
      <source src={video} type='video/mp4' />
      </video>
      
      <div className='about-content' id='aboutme'>
      <h1>Take Control of Your Expenses</h1>
      <p>Effortlessly Manage, Track, and Optimize Your Finances with Our Powerful Expense Tracker. Start Saving and Achieving Your Financial Goals Today!</p>
      <h2>Get Started Here!</h2>
      <img src={img} style={{width:"7%",marginRight:"10%"}}/>
      <br/>
      <div className='buttons'>
        <button className='btn1'>SIGN UP</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button className='btn1'>LOG IN</button>
      </div>
      <div className='vector'>
      <img src={img1} />
      </div>
      </div>
      
      <div className='features'>
        <h1>FEATURES</h1><br/>

      </div>

    <Footer/>
    </div>
  )
}

export default Home