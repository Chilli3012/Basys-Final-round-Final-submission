import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import Header from './Components';
import EMR1 from './Components/EMR/EMR1';
import { useState } from 'react';
import Head from './Components/EMR/Head'

function App() {
  const drugSample = {
    quantity: 30,
    day:"16-04-2023",
    name:"DOLO"
}

const [value,setValue] = useState(drugSample)
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<><Head/></>}>
          <Route path='/emr1' element={<EMR1 value={value}/>}/>
        </Route>
      {/* </Route> */}
    </Routes>
    </BrowserRouter>
    // {/* <Requests /> */}
  );
}

export default App;
