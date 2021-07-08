import { useEffect, useState } from "react"
import "./popAlert.css"



let count = 0

const PopAlert = ({changePage}) => {


  let [showpopup,setPopup] = useState("showpopup")
  
  
  useEffect(()=>{

    setTimeout(() => {
      setPopup("dontshow")
      count++
    }, 3000);

  },[changePage])

  if(count >1){
    console.log("this 123")
  }

  return showpopup==="showpopup" && count == 0?( 
    <div className="PopAlert">
      <h1 className="PopAlert-message">View Profile</h1>
    </div>
   ):<></>
}
 
export default PopAlert;