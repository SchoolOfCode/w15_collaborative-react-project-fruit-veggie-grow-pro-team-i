import { useState } from "react"
import TileCards from "./TileCards"
import NavBar from "../NavBar"
import Hero from "../Hero"

const BrowsePage = () => {


  // THIS IS WHERE WE WILL BE WORKING for BrowsePage


  let [sortCardState,setSortCardState] = useState("default")
  
  return ( 
    <>
    <div className="BrowsePage">{/*<<thats the whole browse Page  */}

    <Hero/>
      {/* add a header here */}


      {/* add a video background and hero section here */}



  
      <div className="CardContainer">{/*<<thats the cardContainer  */}

      <section className="Cardbox__centreScreen">
        <TileCards sortCardState={sortCardState}/> {/*<<thats all the cards  */}
      </section>

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

      

      </div>
    
    </div>
    </>
   );
}
 
export default BrowsePage;