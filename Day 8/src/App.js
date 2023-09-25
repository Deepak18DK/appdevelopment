import { BrowserRouter,Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms ";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Feedback from "./pages/Feedback";
import Budget from "./pages/budget";
import Expense from "./pages/Transaction";
import Record from "./pages/record"



function App() {
  return (
    <>
     <BrowserRouter>
       <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/privacypolicy' element={<Privacy/>}/>
          <Route path='/terms' element={<Terms/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/FAQ' element={<FAQ/>}/>
          <Route path='/Feedback' element={<Feedback/>}/>
          <Route path='/budget' element={<Budget/>}/>
          <Route path='/add' element={<Expense/>}/>
          <Route path='/records' element={<Record/>}/>
          
          
       </Routes>     
     </BrowserRouter>
    </>
  );
}

export default App;