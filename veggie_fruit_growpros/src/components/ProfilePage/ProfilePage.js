import "./profile.css"

import { useEffect, useState } from "react"

import potato from "../images/potatoes.jpg"
import lime from "../images/lime.jpg"
import mint from "../images/mint.jpg"
import carrot from "../images/carrots.jpg"
import Basil from "../images/basil.jpg"
import onion from "../images/onions.jpg"
import parsley from "../images/parsley.jpg"
import Strawberry from "../images/strawberries.jpg"
import Blueberries from "../images/blueberry.jpg"






const ProfilePage = ({changePage}) => {


  let LocDiff = localStorage.getItem("diffic")
  let LocSpace = localStorage.getItem("space")
  
  let [VegTitle,setVegTitle] = useState("")
  let [choseImg,setchoseImg] = useState()
  
useEffect(()=>{




  if(LocDiff==1 && LocSpace==1){
    setVegTitle("Potatoes")
    setchoseImg(potato)
  }
  if(LocDiff==1 && LocSpace==2){
    setVegTitle("Lime")
    setchoseImg(lime)

  }
  if(LocDiff==1 && LocSpace==3){
    setVegTitle("Mint")
    setchoseImg(mint)
  }
  if(LocDiff==2 && LocSpace==1){
    setVegTitle("Carrot")
    setchoseImg(carrot)
  }
  if(LocDiff==2 && LocSpace==2){
    setVegTitle("Basil")
    setchoseImg(Basil)
  }
  if(LocDiff==2 && LocSpace==3){
    setVegTitle("Onion")
    setchoseImg(onion)
  }
  if(LocDiff==3 && LocSpace==1){
    setVegTitle("Parsley")
    setchoseImg(parsley)
  }
  if(LocDiff==3 && LocSpace==2){
    setVegTitle("Blueberries")
    setchoseImg(Blueberries)
  }
  if(LocDiff==3 && LocSpace==3){
    setVegTitle("Strawberry")
    setchoseImg(Strawberry)
  }

},[changePage])


let name1=""

if(localStorage.getItem("name")){

  console.log(localStorage.getItem("name"))
  name1=localStorage.getItem("name")[0].toUpperCase()
}else{
  name1 = "D"
}

  
  return changePage === "Profile"?( 
    <div className="ProfilePage">
      <header className="ProfilePage__header">
        <div className="ProfilePage__header__imgCont">
          <h1 className="ProfilePage__header__imgCont__border">{name1}</h1>
        </div>
        <section className="ProfilePage__header__InfoContainer">
          <h1>{localStorage.getItem("name")}</h1>{/* NAME GOES HERE */}

          <h3>You Chose to grow Indoors: {localStorage.getItem("Indoors")}</h3>{/* you will be growing indoors/outdoors */}
          <h3>You have this much space: {LocSpace}</h3>{/* you have this much space */}
          <h3>your fingers are:{localStorage.getItem("diffic")}</h3>{/* your are this experienced */}
          <h3>Your Avaiabilty is:{localStorage.getItem("time")}</h3>{/* your have this much time */}
        </section>
      </header>
      <article className="ProfilePage__main">
        <h2>Based of your Profile we recommened:</h2>
        <h1>{VegTitle}</h1>
        <img src={choseImg} alt="" />
      </article>
    </div>
   ):<></>
}
 
export default ProfilePage;