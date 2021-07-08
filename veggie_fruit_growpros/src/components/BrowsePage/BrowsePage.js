import { useState } from "react"
import TileCards from "./TileCards"
import PopUp from "./popup/PopUp"
import Hero from "../Hero"
import LandingInfoBlock  from "./LandingInfoBlock/LandingInfoBlock"
import SortButtons from "./SortButtons";
import Footer from "../Footer/Footer";
import Weather from "./weatherSection/Weather"
import PopAlert from "../popAlert/PopAler"


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
    <PopAlert changePage={changePage}/>
    <LandingInfoBlock infoHead={"We are here to help!"} infoBody={true}/>
    <PopUp popUpID={popUpID} setpopUpID={setpopUpID} />
      <div className="CardContainer">
        <section className="Cardbox__centreScreen">
          <TileCards popUpMenu={popUpMenu} sortCardState={sortCardState}/>
        </section>
        <SortButtons setSortCardState={setSortCardState}/>
      </div>
      <LandingInfoBlock infoHead={"Thirsty plants?"} infoBody={false}/>
      <Weather/>
      <Footer/>
    </div>
    </>
   ) :  <></>;
}
 
export default BrowsePage;