const SortButtons = ({setSortCardState}) => {
  return ( 

    <div className="filterDropdown">
          <button className="filterDropdown--btn">Sort </button>
          <div className="filterDropdown-content">
            <button onClick={()=>setSortCardState("default")}>default</button>
            <button onClick={()=>setSortCardState("difficulty")}>difficulty</button>
            <button onClick={()=>setSortCardState("indoors")}>indoors</button>
            <button onClick={()=>setSortCardState("space")}>Space</button>
            <button onClick={()=>setSortCardState("time")}>Time</button>
          </div>
        </div>

   );
}
 
export default SortButtons;