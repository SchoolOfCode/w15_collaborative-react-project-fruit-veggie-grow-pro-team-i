const PopUp = ({popUpID,setpopUpID}) => {

  let layers = "hello"
  switch (popUpID[2]) {
    case "Tomatoes":
      layers="Tomatoes are great"
      break;
    case "Potatoes":
      layers="Potatoes areeef great"
      break;
    case "Carrot":
      layers="Carrot arefeefe great"
      break;
    case "Onion":
      layers="Cgrrgot arefeefe great"
      break;
    case "Strawberries":
      layers="Cagot arefeefe great"
      break;
    case "Blueberries":
      layers="Cadeet arefeefe great"
    break;
    case "Raspberries":
      layers="earefeefe great"
    break;
    case "Lime":
      layers="edt arefeefe great"
    break;
    case "Basil":
      layers="Carrot arefeefe great"
    break;
    case "Mint":
      layers="Carrot arefeefe great"
    break;
    case "Parseley":
      layers="Carrot arefeefe great"
    break;
    case "Dill":
      layers="Carrot arefeefe great"
    break;
  
    default:
      break;
  }



  return popUpID[0]==="display"?( 
    <div style={{display:"flex"}} className="PopUpShell">

      <div className="ClosePopUp">
        <button onClick={()=>setpopUpID("dontShowPopUpMenu")} className="ClosePopUp--button">X</button>
      </div>
      





      <main className="PopUpBox">
        <img src={popUpID[1]} alt="popUpItem"  />
        {layers}
      </main>
      











    </div>
   ):<></>
}
 
export default PopUp;