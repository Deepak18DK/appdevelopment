import React, { useState, useEffect } from 'react'
import Topbar from '../../components/Topbar'
import { deleteUser, getAllUser } from '../../service/api';
import { Link } from 'react-router-dom';

const AdminHome = () => {

    const [users,setUsers]=useState([]);
    const fetchUsers = async () => {
      try {
        const response=await getAllUser();
        setUsers(response.data)
          
      } catch (error) {
          console.error("Error fetching user users:", error);
      }
  }
  const deleteU=(uid)=>{
    deleteUser(uid)
    window.location.reload(true);
  }
  console.log(users)
  useEffect(() => {
      fetchUsers();
  }, []);


  return (
    <div>
      <Topbar/>

      <br /><br /><br/>
      &nbsp;
      <Link to='/'><button type="button" class="btn btn-outline-info" >Logout</button></Link>
      <h2 style={{ textAlign: "center" }}> USERS</h2>
          <br />
          <table className="table table-striped" >
                    <thead>
                        <tr class='text-center table-info'>
                            <th>USER ID</th>
                            <th>USERNAME</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                            <th>STATUS</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(users) && users.length > 0 ? (
                              users.map((user) => (
                                  <tr key={user.uid}>
                                      <td className="text-center">{user.uid}</td>
                                      <td className="text-center">{user.name}</td>
                                      <td className="text-center">{user.email}</td>
                                      <td className='text-center'>{user.role}</td>
                                      <td className="text-center">{user.isEnabled?"Active":"Inactive"}</td>
                                      <td className="text-center"> 
                                      <Link  to={`/update/${user.uid}`}><button className='btn btn-info'>UPDATE</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      <button className='btn btn-danger' onClick={()=>deleteU(user.uid)}>DELETE</button>
                                      </td>
                                  </tr>
                              ))
                          ) : (
                              <tr>
                                  <td colSpan="4">No users found.</td>
                              </tr>
                          )
                        }
                    </tbody>
                </table>
  

    </div>
  )
}

export default AdminHome