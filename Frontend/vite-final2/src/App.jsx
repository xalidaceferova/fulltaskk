import { Route, Routes } from "react-router-dom"
import Home from "./Companents/Home/Home"
import Header from "./Companents/Header/Header"
import Detail from "./Companents/Detail/Detail"
import Add from "./Companents/Add/Add"
import Footer from "./Companents/Footer/Footer"
function App() {

  return (
    <>
    <Header />
     <Routes>
       <Route path="/" element={<Home />}/>
      <Route path="/:id" element={<Detail />}/>
      <Route path="/add" element={<Add />}/>
     </Routes>
     <Footer />
    </>
  )
}

export default App
