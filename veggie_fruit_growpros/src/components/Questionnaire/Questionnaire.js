import "./questionnaire.css";
import Input from "./Input/Input.js";
import QImage from "../images/strawberries.jpg";
import { useState } from "react";

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
                questionOne: "What's your level of experience?",
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
    const [Profile,setProfile] = useState({
        name : "",
        indoors: false,
        space: 0,
        experience: 0,
        time: 0
    })

    let [InlineVar,setInlineVar] = useState("none");

    let [i, setI] = useState(0);
    function changePageQ(plusOrMinus){

        if(plusOrMinus){
            setI(i = i + 1);
            if(i === 3){setChangePage("browsepage")}
            if(i === 3){setI(0);}
        }else{
            setI(i= i - 1)
        }

        
        if(i === 0){setInlineVar("none");
        }else{
            setInlineVar("inline-block");
        }
        console.log(i)

    }

    return changePage === "questionnaire" ? ( 
    <div className="QPage">
        <main className="QMain">
            <header className="QHeader">
                <h2>{QNumber[i].header}</h2>
            </header>
            <section className="QBody">

                <section className="QInputContainer">

                    <Input header={QNumber[i].header} />

                    <section className="QButtonContainer">

                        <button onClick={(e) => {changePageQ(false)}} style={{display:InlineVar}}>{QNumber[i].buttonOne}</button>

                        <button onClick={(e) => {changePageQ(true)}}>{QNumber[i].buttonTwo}</button>
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