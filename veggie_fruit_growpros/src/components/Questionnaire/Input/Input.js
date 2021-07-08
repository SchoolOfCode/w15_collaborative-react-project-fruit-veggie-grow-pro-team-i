
const Input = ({header,header2,quest1,quest2,quest3}) => {
    // Changing display of select element


    function getUserValue(input){//<< getting users input
        let eachTag=input.dataset.set
        
        if(eachTag === "name" ){
            localStorage.setItem("name",input.value)
        }
        if(eachTag === "indoors-outdoors"){
            localStorage.setItem("Indoors",input.value)
        }
        if(eachTag === "space"){
            localStorage.setItem("space",input.value)
        }
        if(eachTag === "difficulty"){
            localStorage.setItem("diffic",input.value)
        }
        if(eachTag === "time"){ 
            localStorage.setItem("time",input.value)
        }
    }
    return ( 
        <div className="QInputBoxsContainer">

            <h4>{header}</h4>
            
            <input data-set={"name"} style={{display:quest1}} className="QInputBoxsContainer-InputBoxs" type={"text"} onChange={(e)=>{getUserValue(e.target)}}>
            </input>

            <select selected="selected" data-set={"indoors-outdoors"} style={{display:quest2}} onChange={(e)=>{getUserValue(e.target)}} name="" id="">
                <option value="false"></option>
                <option value="true">indoors</option>
                <option value="false">outdoors</option>
            </select>

            <select data-set={"difficulty"} onChange={(e)=>{getUserValue(e.target)}} style={{display:quest3}} name="space" id="">
                <option value="1"></option>
                <option value="1">clean hands</option>
                <option value="2">dirty hands</option>
                <option value="3">green fingers</option>
            </select>

            <h4>{header2}</h4>

            <select data-set={"space"} onChange={(e)=>{getUserValue(e.target)}} style={{display:quest2}} name="space" id="">
                <option value="1"></option>
                <option value="1">Not Alot</option>
                <option value="2">Alot</option>
                <option value="3">eliphant</option>
            </select>

            <select data-set={"time"} onChange={(e)=>{getUserValue(e.target)}} style={{display:quest3}} name="space" id="">
                <option value="3"></option>
                <option value="3">free</option>
                <option value="2">here n there</option>
                <option value="1">busy</option>
            </select>

           

        </div>
     );
}
 
export default Input;