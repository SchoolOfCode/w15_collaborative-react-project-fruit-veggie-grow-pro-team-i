import { useState } from "react"
import TileCards from "./TileCards"

const BrowsePage = () => {
  // THIS IS WHERE WE WILL BE WORKING
  let [sortCardState,setSortCardState] = useState("default")
  

  return ( 
    <>
    <div className="BrowsePage">
        <button onClick={()=>setSortCardState("default")}>default</button>
        <button onClick={()=>setSortCardState("difficulty")}>difficulty</button>
        <button onClick={()=>setSortCardState("indoors")}>indoors</button>
        
      <div className="CardContainer">
        <TileCards sortCardState={sortCardState}/>
      </div>
    
    
    </div>
    </>
   );
}
 
export default BrowsePage;