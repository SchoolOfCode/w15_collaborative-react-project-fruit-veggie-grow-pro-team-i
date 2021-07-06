import { useState } from "react"
import TileCards from "./TileCards"
import PopUp from "./popup/PopUp"
import Hero from "../Hero"
import LandingInfoBlock  from "./LandingInfoBlock/LandingInfoBlock"
import SortButtons from "./SortButtons";
import Footer from "../Footer";
import Spacer from "../Spacer/Spacer"


const BrowsePage = ({changePage}) => {

  let [sortCardState,setSortCardState] = useState("default")
  let [popUpID,setpopUpID] = useState("dontShowPopUpMenu")

  // THIS IS WHERE WE WILL BE WORKING for BrowsePage
  function popUpMenu(img,title,difficulty,space,time){
    setpopUpID(["display",img,title,difficulty,space,time])
  }


  
  
  return changePage === "browsepage" ? ( 

    <>
    <div className="BrowsePage">
    <Hero/>

    <Spacer background={"white"}/>

    <LandingInfoBlock/>

    <Spacer background={"linear-gradient(180deg, #ffffff 0%, #E8E8E8 100%)"}/>
    
    <Spacer background={"white"}/>

    <PopUp popUpID={popUpID} setpopUpID={setpopUpID} />
      
      <div className="CardContainer">
        <section className="Cardbox__centreScreen">
          <TileCards popUpMenu={popUpMenu} sortCardState={sortCardState}/>
        </section>
        <SortButtons setSortCardState={setSortCardState}/>
      
      </div>
      <Spacer background={"linear-gradient(180deg, #ffffff 0%, #E8E8E8 100%)"}/>
      <Footer/>

    </div>
    </>
   ) :  <></>;
}
 
export default BrowsePage;