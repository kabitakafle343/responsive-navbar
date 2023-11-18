
import { useState } from "react"
import "./Header.css"

const Header = () => {
  const [click, setClick]=useState(false)

let btnclick=()=>{
    setClick(!click)
  }
  return (

        <div className="navbar">
      <h1>Logo</h1>
      <div className={click ? "ulonclick":"ul"}>
     
     <li>  <a href="/">Home</a></li>
      <li><a href="/about"> About</a></li>
        <li><a href="/contacts">Contact</a></li>
        <li><a href="/more">More</a></li>
  
        
      </div>
      <div onClick={btnclick} className="ico">
    {click ? <i className="fa-solid fa-xmark"></i>:<i className="fa-solid fa-bars"></i>}
    
      </div>

    </div>
 
  )
}

export default Header

