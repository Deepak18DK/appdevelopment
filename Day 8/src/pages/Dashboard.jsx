import React from 'react'
import '../Assets/css/Appp.css'
import Layout from '../components/Layout'
import img1 from '../Assets/images/img2.jpeg'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import Topbar from '../components/Topbar'

const Home = (isSidebarOpen) => {
  const user=useSelector(selectUser)
  const recordsClass = `records ${isSidebarOpen ? 'sidebar-open' : 'sidebar'}`;
  return (
    <div>
      <Topbar/>
      <Layout/>
      <div className="content">
          <div className={recordsClass}>
          <h4 style={{textAlign:'center'}}>Welcome {user?user.email:"Guest"}!</h4>
          <br/>
            <div class="container">

              <div class="row align-self-center">

                <div class="col">
                  <div class="card c" >
                    <img src={img1} class="card-img-top" alt="TAJ MAHAL"/>
                    <div class="card-body" style={{textAlign:'center'}}>
                    <h5 class="card-title" style={{letterSpacing:" 1.2px",textShadow: "2px 1px 2px #aaa"}}>INCOME</h5>
                    <p class="card-text" style={{fontSize:'35px',color:'blue'}}>$50,000</p>
                    </div>
                  </div>
                  <br/>
                </div>

                <div class="col">
                  <div class="card c" >
                    <img src="https://blog.darwinbox.com/hubfs/HOW%20Does%20travel%20and%20expense%20management%20improve%20employee%20experience%202.jpg" class="card-img-top" alt="TAJ MAHAL"/>
                    <div class="card-body" style={{textAlign:'center'}}>
                    <h5 class="card-title" style={{letterSpacing:" 1.2px",textShadow: "2px 1px 2px #aaa",textAlign:"center"}}>EXPENSE</h5>
                    <p class="card-text"style={{fontSize:'35px',color:'red'}}>$27,500</p>
                    </div>
                  </div>
                  <br/>
                </div>

                <div class="col">
                  <div class="card c" >
                    <img src="https://www.cflowapps.com/wp-content/uploads/2021/03/expense-management-process-flow.png" class="card-img-top" alt="TAJ MAHAL"/>
                    <div class="card-body" style={{textAlign:'center'}}>
                    <h5 class="card-title" style={{letterSpacing:" 1.2px",textShadow: "2px 1px 2px #aaa",textAlign:"center"}}>BALANCE</h5>
                    <p class="card-text" style={{fontSize:'35px',color:'green'}}>$22,500</p>
                    </div>
                  </div>
                  <br/>
                </div>

              </div>
              
            </div>
        </div>
        </div>
      </div>
    
  )
}

export default Home