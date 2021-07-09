import "./questionnaire.css";
import Input from "./Input/Input.js";
import QImage from "../images/strawberries.jpg";
import { useEffect, useState } from "react";

const Questionnaire = ({changePage,setChangePage}) => {
    
    const QNumber=[
            {
                id: 0,
                header: "Let's get started",
                questionOne: "What's your name?",
                questionTwo: "",
                image: "",
                buttonOne: "hideThisButton",
                buttonTwo: "Next"
            },
            {
                id: 1,
                header: "Describe your growing space",
                questionOne: "Will you be growing indoors or outdoors?",
                questionTwo: "Which best describes your space?",
                image: "",
                buttonOne: "Back",
                buttonTwo: "Next"
            },
            {
                id: 2,
                header: "Describe your current situation",
                questionOne: "level of experience with gardenning?",
                questionTwo: "How much time could you spare each week?",
                image: "",
                buttonOne: "Back",
                buttonTwo: "Submit"
            },
            {
                id: 3,
                header: "Here's what we recommend for you",
                questionOne: "",
                questionTwo: "",
                image: "",
                buttonOne: "",
                buttonTwo: ""
            }
        ]

    let [InlineVar,setInlineVar] = useState("none");
    let [question1,setQuestion1] = useState("inline-block");
    let [question2,setQuestion2] = useState("none");
    let [question3,setQuestion3] = useState("none");


    function onSubmitPopup(){

    }


    let restartQuest = changePage==="questionnaire"
    useEffect(()=>{
            setQuestion1("inline-block")
            setQuestion2("none")
            setQuestion3("none")
    },[restartQuest])



    let [i, setI] = useState(0);
    function changePageQ(plusOrMinus){
        
        if(plusOrMinus){
            setI(i = i + 1);
            if(i === 3){setChangePage("browsepage")}
            if(i === 3){setI(0);}
        }else{
            setI(i= i - 1)
        }
        console.log(i)
       
        if(i === 0){
            setInlineVar("none");

            setQuestion1("inline-block")
            setQuestion2("none")
            setQuestion3("none")
            
        }else if(i === 1){
            setInlineVar("inline-block");
            setQuestion1("none")
            setQuestion3("none")
            setQuestion2("inline-block")
        }else if(i === 2){
            setInlineVar("inline-block");
            setQuestion2("none")
            setQuestion3("inline-block");

        }else if(i === 3){
            setInlineVar("none");
            setQuestion1("none")
            setQuestion2("none");


            // here
        }
       

    }

    return changePage === "questionnaire" ? ( 
    <div className="QPage">
        <main className="QMain">
            <header className="QHeader">
                <h2>{QNumber[i].header}</h2>
            </header>
            <section className="QBody">

                <section className="QInputContainer">

                    <Input header={QNumber[i].questionOne} header2={QNumber[i].questionTwo} quest1={question1} quest2={question2} quest3={question3}/>

                    <section className="QButtonContainer">
                        <button onClick={() => {changePageQ(false)}} style={{display:InlineVar}}>{QNumber[i].buttonOne}</button>
                        <button onClick={() => {changePageQ(true)}} >{QNumber[i].buttonTwo}</button>
                    </section>
                    
                    
                </section>
                <section className="QImage">



                    <img src={QImage} alt="plant growing"></img>

                </section>
            </section>
        </main>
    </div>

     ) : <></>;
}
 
export default Questionnaire;