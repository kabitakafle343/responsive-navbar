
import { Route,Routes } from "react-router-dom"
import Home from "./Routes/Home.tsx"
import About from "./Routes/About.tsx"
import More from "./Routes/More.tsx"
import Contacts from "./Routes/Contacts.tsx"
function App() {


  return (
    <>
  <Routes>
    <Route  path="/" element={<Home/>}/>
    <Route  path="/about" element={<About/>}/>
    <Route  path="/contacts" element={<Contacts/>}/>
    <Route  path="/more" element={<More/>}/>
   </Routes> 

    </>
  )
}

export default App
