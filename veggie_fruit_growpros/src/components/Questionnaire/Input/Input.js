
const Input = ({setProfile,header}) => {
    // Changing display of select element
    

    return ( 
        <div className="QInputBoxsContainer" style={{display: "flex"}}>
            <h4>What's your name</h4>
            <input className="QInputBoxsContainer-InputBoxs" type={"text"} onChange={(e)=>{setProfile(e.target.value)}}>
            </input>
        </div>
     );
}
 
export default Input;