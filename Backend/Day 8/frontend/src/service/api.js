import axios from "axios";

let jwtToken = localStorage.getItem('Token')
const authheader = `Bearer ${jwtToken}`;
console.log(jwtToken)
const headers = {
  'Authorization': authheader,
  'Content-Type': 'application/json',
};

const URL = 'http://localhost:7777'

const getAllUser = () => axios.get(`${URL}/api/v1/user/getAllUsers`, { headers })
const getUserbyId = (id) => axios.get(`${URL}/api/v1/user/getUserById/${id}`, { headers })
const editUser = (id, user) => axios.put(`${URL}/api/v1/user/update/${id}`, user, { headers })
const deleteUser = (id) => axios.delete(`${URL}/api/v1/user/deleteUser/${id}`, { headers })

const userLogin = (login) => axios.post(`${URL}/api/v1/auth/login`, login)
const userRegister = (register) => axios.post(`${URL}/api/v1/auth/register`, register)
//const adminLogin = (login) => axios.post(`${URL}api/admin/login`, login, { headers })

const getAllExpense = () => axios.get(`${URL}/api/v1/expense/getAll`, { headers })
const getExpensebyId = (id) => axios.get(`${URL}/api/v1/expense/getById/${id}`, { headers })
const addExpense = (expense,id) => axios.post(`${URL}/api/v1/expense/save/${id}`, expense, { headers })
const editExpense = (id, expense) => axios.put(`${URL}/api/v1/expense/update/${id}`, expense, { headers })
const deleteExpense = (id) => axios.delete(`${URL}/api/v1/expense/delete/${id}`, { headers })


const getAllIncome = () => axios.get(`${URL}/api/v1/income/getAll`, { headers })
const getIncomebyId = (id) => axios.get(`${URL}/api/v1/income/getById/${id}`, { headers })
const addIncome = (Income,id) => axios.post(`${URL}/api/v1/income/save/${id}`, Income, { headers })
const editIncome = (id, Income) => axios.put(`${URL}/api/v1/income/update/${id}`, Income, { headers })
const deleteIncome = (id) => axios.delete(`${URL}/api/v1/income/delete/${id}`, { headers })

const getExpensebyUid = (id) => axios.get(`${URL}/api/v1/expense/getExpenseByUid/${id}`, { headers })
const getExpenseSum = (id) => axios.get(`${URL}/api/v1/expense/getSum/${id}`, { headers })
const getIncomeSum = (id) => axios.get(`${URL}/api/v1/income/getSum/${id}`, { headers })
const getIncomebyUid = (id) => axios.get(`${URL}/api/v1/income/getIncomeByUid/${id}`, { headers })

export { getAllExpense,getIncomeSum,getExpenseSum,getIncomebyUid,getExpensebyUid ,getExpensebyId, addExpense, editExpense, deleteExpense ,getAllUser, getUserbyId, editUser, deleteUser,userLogin,userRegister,getAllIncome, getIncomebyId, addIncome, editIncome, deleteIncome }