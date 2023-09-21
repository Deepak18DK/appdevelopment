import { BrowserRouter,Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Home";

function App() {
  return (
    <>
     <BrowserRouter>
       <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
       </Routes>     
     </BrowserRouter>
    </>
  );
}

export default App;