import { useEffect, useState } from "react"
import "./weather.css"
const Weather = () => {
  
  let [Located,setLocated] = useState("")
  let [icon,setIcon] = useState("")
  let [temp,setTemp] = useState("")
  let [feelslike,setFeelslike] = useState("")
  let [WeatherDescrip,setWeatherDescrip] = useState("")
  let [WeatherDescripText,setWeatherDescripText]= useState("")
  let [userInput,setUserInput]=useState("")
  let [city,setCity]=useState("wolverhampton")

useEffect(()=>{


  async function getWeatherApi(){
    try{

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_veggie_fruit_growprosAPI_KEY}&units=metric`)

    let data = await response.json()
    setIcon(data.weather[0].icon)
    setTemp(data.main.temp)
    setFeelslike(data.main.feels_like)
    setLocated(data.name)
    setWeatherDescrip(data.weather[0].main)
    setWeatherDescripText(data.weather[0].description)
    console.log(data)

  } catch(error){
    console.log("error",error)
  }


    
  }
  getWeatherApi()

},[city])

function handleInputChange(enter){
  if(enter === "Enter"){
    setCity(userInput)
  }
  
}
function getUserInput(input){
  setUserInput(input)
  if(input === "enter"){
    console.log("yes")
  }
  console.log(userInput)
}

  return ( 
    <section className="WeatherContainer">
      <div className="WeatherContainer-left">
        <h2 className="WeatherContainer-locate">{Located}</h2>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      </div>
      <div className="WeatherContainer-middle">
        <h2>Todays Temperature</h2>
        <h3>{temp}°</h3>
        <h4> But feels like</h4>
        <h3>{feelslike}°</h3>
      </div>
      <div className="WeatherContainer-right">
        <h2>{WeatherDescrip}</h2>
        <h4>desciption</h4>
        <h3>'{WeatherDescripText}'</h3>
      </div>
      <div className="WeatherContainer-inputcontainer">
        <input type="text" className="WeatherContainer-Input" placeholder="Type a city" onChange={(e)=>{getUserInput(e.target.value)}} onKeyDown={(e)=>{handleInputChange(e.key)}}/>
        <button className="WeatherContainer-button" onClick={()=>{handleInputChange("Enter")}} >Search</button>
      </div>
      
    </section>
    
   );
}
 
export default Weather;