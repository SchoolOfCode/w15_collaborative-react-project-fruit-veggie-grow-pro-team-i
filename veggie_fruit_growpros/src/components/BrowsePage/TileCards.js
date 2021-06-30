import randomfruit from "../images/randomfruit.png";
import leaf from "../images/leaf.png"
import leaf2 from "../images/leaf2.png"
import leaf3 from "../images/leaf3.png"
import potato from "../images/potato.png"

const TileCards = ({sortCardState}) => {

  class Vegetables{
    constructor(id,title,difficulty,space,indoors,time,img){
      this.title = title;
      this.difficulty = difficulty;
      this.space = space;
      this.indoors = indoors;
      this.time = time;
      this.id = id;
      this.img = img;

      this.leaf=leaf;
    }

    makeCard(){
      let DifficultyLeafImage;
      let TimeLeafImage;
      let SpaceLeafImage;
      
      
      if(this.difficulty===1){DifficultyLeafImage=leaf}
      if(this.difficulty===2){DifficultyLeafImage=leaf2}
      if(this.difficulty===3){DifficultyLeafImage=leaf3}

      if(this.time==="1hours"){TimeLeafImage=leaf}
      if(this.time==="2hours"){TimeLeafImage=leaf2}
      if(this.time==="3hours"){TimeLeafImage=leaf3}

      if(this.space===1){SpaceLeafImage=leaf}
      if(this.space===2){SpaceLeafImage=leaf2}
      if(this.space===3){SpaceLeafImage=leaf3}
      
      return(
      <div className="Cardbox__centreScreen--allCards" key={this.id}>
        <img src={this.img} alt="fruit/veg" className="mainImage"/>
        <h1>{this.title}</h1>
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



  // veg //============= ====difficulty,space,indoors, time, main Image
let Potato=new Vegetables("id0","Potato",3,2,true,"3hours",potato)
let Tomato=new Vegetables("id1","Tomato",1,2,true,"3hours",randomfruit)
let Carrot=new Vegetables("id2","Carrot",1,2,true,"3hours",randomfruit)
let Onion =new Vegetables("id3","Onion",1,2,true,"3hours",randomfruit)
// Fruits
let Strawberry=new Vegetables("id4","Strawberry",1,2,true,"3hours",randomfruit)
let Blueberry=new Vegetables("id5","Blueberry",2,2,true,"3hours",randomfruit)
let Raspberry=new Vegetables("id6","Raspberry",3,2,true,"3hours",randomfruit)
let Lime=new Vegetables("id7","Lime",2,2,true,"3hours",randomfruit)
// Herbs
let Basil=new Vegetables("id8","Basil",2,2,false,"3hours",randomfruit)
let Mint=new Vegetables("id9","Mint",3,2,false,"3hours",randomfruit)
let Parsley=new Vegetables("id10","Parsley",1,2,false,"3hours",randomfruit)
let Dill=new Vegetables("id11","Dill",1,2,false,"3hours",randomfruit)
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
  
  ArrayOfFruitAndVeg.forEach((item)=>{

    if(countUntillYouPlaceTheFoodTitle===0){
      SortedArray.push(<h1 className="Cardbox__centreScreen--Title">Vegetables</h1>)//<<<<<title here
    }
    if(countUntillYouPlaceTheFoodTitle===4){
      SortedArray.push(<h1 className="Cardbox__centreScreen--Title">Fruit</h1>)//<<<<<title here
    }
    if(countUntillYouPlaceTheFoodTitle===8){
      SortedArray.push(<h1 className="Cardbox__centreScreen--Title">Herbs</h1>)//<<<<<title here
    }
    SortedArray.push(item.makeCard())
    countUntillYouPlaceTheFoodTitle++
  })

}
// ====================================== default Cards=======

// ----------------------------------------------------------

// ====================================== Indoors============


if(sortCardState === "indoors"){
  SortedArray.push(<h1 className="Cardbox__centreScreen--Title">Indoors</h1>)
   ArrayOfFruitAndVeg.filter((item)=>{
    return item.indoors === true?SortedArray.push(item.makeCard()):<></>
  })
}
if(sortCardState === "indoors"){
  SortedArray.push(<h1 className="Cardbox__centreScreen--Title">Outdoors</h1>)
   ArrayOfFruitAndVeg.filter((item)=>{
    return item.indoors !== true?SortedArray.push(item.makeCard()):<></>
  })
}

// sort through indoors
// ====================================== Indoors============

// ----------------------------------------------------------

// ====================================== Difficulty============


if(sortCardState === "difficulty"){
  SortedArray.push(<h1 className="Cardbox__centreScreen--Title">Difficulty</h1>)
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


  return ( 
    <section className="Cardbox__centreScreen">
      {SortedArray}

    </section>
   );
}
 
export default TileCards