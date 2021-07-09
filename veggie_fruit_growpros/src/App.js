import BrowsePage from './components/BrowsePage/BrowsePage';
import "./components/BrowsePage/BrowsePage.css";
import './App.css';
import Navbar from "./components/NavigationBar/Navbar";
import Questionnaire from  "./components/Questionnaire/Questionnaire";
import {useState} from "react"


function App() {

  const [changePage, setChangePage] = useState("questionnaire");
  
function changePageFunction(pagestring) {
  setChangePage(pagestring)  
}

  return (
    <div className="App">
      <Navbar changePageFunction={changePageFunction}/>
      <BrowsePage changePage={changePage} setChangePage={setChangePage}/>
      <Questionnaire changePage={changePage} setChangePage={setChangePage}/>
      
      {/* add a LandingPage here*/}
    </div>
  );
}

export default App;