import { useState } from "react"

const Input = ({setProfile,header,InlineVar,InlineVar2}) => {
    // Changing display of select element

    // setProfile(e.target.value)
    let userName

    function getUserValue(input){//<< getting users input
        console.log(input)
        if(header === "What's your name?"){
            userName=input
        }
        if(header === "Will you be growing indoors or outdoors?"){
            console.log("1 , 2 , 3") 
        }
        if(header === "Describe your current situation"){

        }
    }
    
    console.log(header)
    return ( 
        <div className="QInputBoxsContainer">

            <h4>{header}</h4>
            
            <input style={{display:InlineVar2}} className="QInputBoxsContainer-InputBoxs" type={"text"} onChange={(e)=>{getUserValue(e.target.value)}}>
            </input>

            <select style={{display:InlineVar}} name="" id="">
                <option value="">hi</option>
            </select>

        </div>
     );
}
 
export default Input;