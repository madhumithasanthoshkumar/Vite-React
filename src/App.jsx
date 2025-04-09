import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./Home";
import './App.css'
import GridView from './GridView'
import Sample from './Sample'
import Profilecard from './Profilecard'
import Todo from './Todo'
import Navbar from './Navbar'
// import store from './store'
import storeredux from './storeredux';
import {Provider} from "react-redux";
const profileList={
  name:"Madhu",
  Department: "AIDS",
  year:2,
  mobile:9789451070,
  address:"6/146F, Mahamuthra city,pappampatti",
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Sample />} />
    {/* <Route path="/Todo" element={<Todo />} /> */}
    <Route path="/Profilecard" element={<Profilecard profile={profileList}/>} />
    <Route path="/GridView" element={<GridView />} />
    <Route path="/reduxcounter" element={
      <Provider store={storeredux}>
      <Todo/>
    </Provider>}/>
   </Routes>
    {/* <Sample/> */}
    {/* <Profilecard profile={profileList}/>
    <GridView/>
    <Todo/> */}
</BrowserRouter>
    </>
  )
}

export default App
