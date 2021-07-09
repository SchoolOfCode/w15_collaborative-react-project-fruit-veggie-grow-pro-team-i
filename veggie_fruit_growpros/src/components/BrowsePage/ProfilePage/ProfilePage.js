import "./profile.css"
import Circle from "./circle/Circle"
import { useEffect, useState } from "react"

import potato from "../../images/potato.png"
import lime from "../../images/lime.png"
import mint from "../../images/mint.png"
import carrot from "../../images/carrot.png"
import Basil from "../../images/basil.png"
import onion from "../../images/onion.png"
import parsley from "../../images/parsley.png"
import Strawberry from "../../images/strawberry.png"
import Blueberries from "../../images/blueberry.png"

const ProfilePage = ({changePage,setChangePage}) => {


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
  name1=localStorage.getItem("name")[0].toUpperCase()
}else{
  name1 = "D"
}
let [profile,setProfile] = useState("NotProfile")

useEffect(()=>{
  changePage !== "popup"?setProfile("NotProfile"):setProfile("ProfilePage")
},[changePage])

  return ( 
    <div className={profile+" mainProfileDiv"}>
      <button className={profile+" Exitbutton"} onClick={()=>{setChangePage("browsepage")}}></button>
      <main className={profile+" profileCenter"}>
        <section className={profile+" profile__topSection"}>
          <Circle title={localStorage.getItem("name")} name1={name1}/>
        </section>
        <section className={profile+" profile__midSection"}>
          <Circle title={"Difficulty"} name1={localStorage.getItem("diffic")+"/3"} style={{fontSize:"1rem"}}/>
          <Circle title={"space"} name1={LocSpace+"/3"}/>
          <Circle title={"time"} name1={localStorage.getItem("time")+"/3"} />
        </section>
        <section className={profile+" profile__BottomSection"} >
          <h4 className="profile__Bottom--title">Card recommended</h4>
          <h1 className="profile__Bottom--title">{VegTitle}</h1>
          <h1 className={"cardImg"} style={{backgroundImage: `url(${choseImg})`}}>.</h1>
        </section>
      </main>
    </div>
   )
}
 
export default ProfilePage;

// // <header className="ProfilePage__header">
// <div className="ProfilePage__header__imgCont">
// <h1 className="ProfilePage__header__imgCont__border">{name1}</h1>
// </div>
// <section className="ProfilePage__header__InfoContainer">
// <h1>{localStorage.getItem("name")}</h1>{/* NAME GOES HERE */}

// <h3>You Chose to grow Indoors: {localStorage.getItem("Indoors")}</h3>{/* you will be growing indoors/outdoors */}
// <h3>You have this much space: {LocSpace}</h3>{/* you have this much space */}
// <h3>your fingers are:{localStorage.getItem("diffic")}</h3>{/* your are this experienced */}
// <h3>Your Avaiabilty is:{localStorage.getItem("time")}</h3>{/* your have this much time */}
// </section>
// </header>
// <article className="ProfilePage__main">
// <h2>Based of your Profile we recommened:</h2>
// <h1>{VegTitle}</h1>
// <img src={choseImg} alt="" />
// </article>