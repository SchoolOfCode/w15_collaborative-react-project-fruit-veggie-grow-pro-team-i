import { useState } from "react"
import TileCards from "./TileCards"
import PopUp from "./popup/PopUp"
import Hero from "../Hero"
import LandingInfoBlock  from "../LandingInfoBlock/LandingInfoBlock"
import SortButtons from "./SortButtons";
import Footer from "../Footer";


const BrowsePage = () => {

  let [sortCardState,setSortCardState] = useState("default")
  let [popUpID,setpopUpID] = useState("dontShowPopUpMenu")

  // THIS IS WHERE WE WILL BE WORKING for BrowsePage
  function popUpMenu(img,title,difficulty,space,time){
    setpopUpID(["display",img,title,difficulty,space,time])
  }


  
  
  return ( 
    <>
    <div className="BrowsePage">
    <Hero/>
    <LandingInfoBlock/>
    <PopUp popUpID={popUpID} setpopUpID={setpopUpID} />
      
      <div className="CardContainer">
        <section className="Cardbox__centreScreen">
          <TileCards popUpMenu={popUpMenu} sortCardState={sortCardState}/>
        </section>
        <SortButtons setSortCardState={setSortCardState}/>
      
      </div>
      <Footer/>

    </div>
    </>
   );
}
 
export default BrowsePage;