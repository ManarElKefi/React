import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Events from "./components/Events";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavigationBar";
import EventDetails from "./components/EventDetails";
import AddEvent from "./components/AddEvent";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <NavBar/>
      <Routes >
        <Route path="/events">
        <Route index element={<Events/>} />
        <Route path="Add" element={<AddEvent/>} />
        <Route path="details/:id" element={<EventDetails/>} />
        <Route path="update/:id" element={<AddEvent/>}  />

        </Route>
       
       

        <Route path="*" element={<><p>Not found</p></>} />
      </Routes>
     
    </>
  );
}

export default App;