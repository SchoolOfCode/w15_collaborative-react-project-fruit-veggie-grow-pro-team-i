import { useState } from "react"
import TileCards from "./TileCards"
import PopUp from "./popup/PopUp"
import Hero from "../Hero"
import Navbar from '../Navbar';
import SortButtons from "./SortButtons";


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
    <Navbar/>
    <Hero/>

      {/* add a header here */}


      {/* add a video background and hero section here */}



  
      <div className="CardContainer">{/*<<thats the cardContainer  */}

      <section className="Cardbox__centreScreen">
        <TileCards callConsoleLog={callConsoleLog} sortCardState={sortCardState}/> {/*<<thats all the cards  */}
      </section>
        <a id="browse-beginning"></a>
        <div className="filterDropdown">{/*<<thats all the dropdown buttons  */}
          <button className="filterDropdown--btn">Sort </button>
          <div className="filterDropdown-content">
            <button onClick={()=>setSortCardState("default")}>default</button>
            <button onClick={()=>setSortCardState("difficulty")}>difficulty</button>
            <button onClick={()=>setSortCardState("indoors")}>indoors</button>
            <button onClick={()=>setSortCardState("space")}>Space</button>
            <button onClick={()=>setSortCardState("time")}>Time</button>
          </div>
        </div>


    <PopUp popUpID={popUpID} setpopUpID={setpopUpID} />
      
      <div className="CardContainer">
        <section className="Cardbox__centreScreen">
          <TileCards popUpMenu={popUpMenu} sortCardState={sortCardState}/>
        </section>
        <SortButtons setSortCardState={setSortCardState}/>

      
      </div>
    
    </div>
    </>
   );
}
 
export default BrowsePage;