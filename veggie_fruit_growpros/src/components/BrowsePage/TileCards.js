
import leaf from "../images/leaf.png"
import leaf2 from "../images/leaf2.png"
import leaf3 from "../images/leaf3.png"
import potatoes from "../images/potatoes.jpg"
import tomatoimgs from "../images/tomatoimgs.jpg"
import carrots from "../images/carrots.jpg"
import onions from "../images/onions.jpg"
import strawberries from "../images/strawberries.jpg"
import blueberry from "../images/blueberry.jpg"
import raspberries from "../images/raspberries.jpg"
import lime from "../images/lime.jpg"
import basil from "../images/basil.jpg"
import mint from "../images/mint.jpg"
import parsley from "../images/parsley.jpg"
import dill from "../images/dill.jpg"

const TileCards = ({sortCardState,popUpMenu}) => {

  class Vegetables{
    constructor(id,title,difficulty,space,indoors,time,img){
      this.title = title;
      this.difficulty = difficulty;
      this.space = space;
      this.indoors = indoors;
      this.time = time;
      this.img = img;
      this.id=id
      this.leaf=leaf;
    }

    makeCard(){
      let DifficultyLeafImage;
      let TimeLeafImage;
      let SpaceLeafImage;
      
      
      if(this.difficulty===1){DifficultyLeafImage=leaf}
      if(this.difficulty===2){DifficultyLeafImage=leaf2}
      if(this.difficulty===3){DifficultyLeafImage=leaf3}

      if(this.time===1){TimeLeafImage=leaf}
      if(this.time===2){TimeLeafImage=leaf2}
      if(this.time===3){TimeLeafImage=leaf3}

      if(this.space===1){SpaceLeafImage=leaf}
      if(this.space===2){SpaceLeafImage=leaf2}
      if(this.space===3){SpaceLeafImage=leaf3}
      
      return(
      <div key={this.id} className="Cardbox__centreScreen--allCards" onClick={()=>{popUpMenu(this.img,this.title)}}>
        <img src={this.img} alt="fruit/veg" className="mainImage"/>
        <h1 className="CardTitle" >{this.title}</h1>
        <div className="Cardbox__centreScreen--allCards--leafContainer">
          <h6 className="leafBox-h6">Difficulty</h6>
          <h6 className="leafBox-h6">Space</h6>
          <h6 className="leafBox-h6">Time</h6>
          <h6 className="leafBox-h6"><img src={DifficultyLeafImage} alt="" srcSet="" className="leafimage"/></h6>
          <h6 className="leafBox-h6"><img src={SpaceLeafImage} alt="" srcSet="" className="leafimage"/></h6>
          <h6 className="leafBox-h6"><img src={TimeLeafImage} alt="" srcSet="" className="leafimage"/></h6>

          
        </div>
      </div>
      // this is where the card is made 🃏🎴
      )
    }
  }
// Above just adds each info to the card from the object below e:g
// title ="tomato" 
// deficulty = 1


  // veg //============= ====title,difficulty,space,indoors, time, main Image
let Potato=new Vegetables("id1","Potatoes",1,3,false,1,potatoes)
let Tomato=new Vegetables("id2","Tomatoes",2,3,false,3,tomatoimgs)
let Carrot=new Vegetables("id3","Carrot",2,3,false,3,carrots)
let Onion =new Vegetables("id4","Onion",2,3,false,3,onions)
// Fruits
let Strawberry=new Vegetables("id5","Strawberries",1,2,true,2,strawberries)
let Blueberry=new Vegetables("id6","Blueberries",2,2,true,2,blueberry)
let Raspberry=new Vegetables("id7","Raspberries",1,2,true,2,raspberries)
let Lime=new Vegetables("id8","Lime",1,2,true,3,lime)
// Herbs
let Basil=new Vegetables("id9","Basil",2,1,false,1,basil)
let Mint=new Vegetables("id10","Mint",1,1,false,1,mint)
let Parsley=new Vegetables("id11","Parsley",1,1,false,1,parsley)
let Dill=new Vegetables("id12","Dill",1,1,false,1,dill)
// above is the layout of cards

let ArrayOfFruitAndVeg = [
  Tomato,Potato,Carrot,Onion,Strawberry,Blueberry,Raspberry,Lime,Basil,Mint,Parsley,Dill
]
// array of all the the fruit,Veg and herbs made into a card






















// let sort = "difficulty"
// let sort = "indoors"
let SortedArray = []

// /////////////////////////////////////BELOW IS THE SORT METHODS EG:
// default, indoors , difficulty <--highest to lowest,  ,
// space & time still need to be added :) 


// ====================================== default Cards=======
if(sortCardState === "default"){
  let countUntillYouPlaceTheFoodTitle = 0 // this just tells when to put a title
  
  ArrayOfFruitAndVeg.forEach((item,index)=>{
    
    if(countUntillYouPlaceTheFoodTitle===0){
      SortedArray.push(<h1 key={index+10} className="Cardbox__centreScreen--Title">Vegetables</h1>)//<<<<<title here
    }
    if(countUntillYouPlaceTheFoodTitle===4){
      SortedArray.push(<h1 key={index+10} className="Cardbox__centreScreen--Title">Fruit</h1>)//<<<<<title here
    }
    if(countUntillYouPlaceTheFoodTitle===8){
      SortedArray.push(<h1 key={index+10} className="Cardbox__centreScreen--Title">Herbs</h1>)//<<<<<title here
    }
    SortedArray.push(item.makeCard())
    countUntillYouPlaceTheFoodTitle++
  })

}
// ====================================== default Cards=======

// ----------------------------------------------------------

// ====================================== Indoors============


if(sortCardState === "indoors"){
  SortedArray.push(<h1 key="Indoors" className="Cardbox__centreScreen--Title">Indoors</h1>)
   ArrayOfFruitAndVeg.filter((item)=>{
    return item.indoors === true?SortedArray.push(item.makeCard()):<></>
  })
}
if(sortCardState === "indoors"){
  SortedArray.push(<h1 key="outdoors"  className="Cardbox__centreScreen--Title">Outdoors</h1>)
   ArrayOfFruitAndVeg.filter((item)=>{
    return item.indoors !== true?SortedArray.push(item.makeCard()):<></>
  })
}

// sort through indoors
// ====================================== Indoors============

// ----------------------------------------------------------

// ====================================== Difficulty============


if(sortCardState === "difficulty"){
  SortedArray.push(<h1 key="Difficulty" className="Cardbox__centreScreen--Title">Difficulty</h1>)
  let NewArray = ArrayOfFruitAndVeg.sort((item,item2)=>{
    if(item.difficulty < item2.difficulty){
      return -1
    }
    else if(item.difficulty > item2.difficulty){
      return 1
    }else{
      return 0
    }
 })
 NewArray.forEach((item)=>{
   SortedArray.push(item.makeCard())
 })
 
}
// sort through difficulty lowest to highest
// ====================================== Difficulty============
if(sortCardState === "space"){
  SortedArray.push(<h1 key="space" className="Cardbox__centreScreen--Title">Space Required</h1>)
  let NewArray = ArrayOfFruitAndVeg.sort((item,item2)=>{
    if(item.space < item2.space){
      return -1
    }
    else if(item.space > item2.space){
      return 1
    }else{
      return 0
    }
 })
 NewArray.forEach((item)=>{
   SortedArray.push(item.makeCard())
 })
 
}
// sort through space lowest to highest 
// ====================================== Space ============

if(sortCardState === "time"){
  SortedArray.push(<h1 key="time" className="Cardbox__centreScreen--Title">Time Required</h1>)
  let NewArray = ArrayOfFruitAndVeg.sort((item,item2)=>{
    if(item.time < item2.time){
      return -1
    }
    else if(item.time > item2.time){
      return 1
    }else{
      return 0
    }
 })
 NewArray.forEach((item)=>{
   SortedArray.push(item.makeCard())
 })
 
}

  return ( 
    <>
      {SortedArray}
    </>
   );
}
 
export default TileCards