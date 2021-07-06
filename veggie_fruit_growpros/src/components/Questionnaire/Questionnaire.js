import "./questionnaire.css";
import Input from "./Input/Input.js";
import QImage from "../images/strawberries.jpg";
import { useState } from "react";

const Questionnaire = ({changePage}) => {

    const userProfile = {
        name : "",
        indoors: false,
        space: 0,
        experience: 0,
        time: 0
    };
    
    const [QNumber, setQNumber] = useState(
        [
            {
                id: 0,
                header: "Let's get started",
                questionOne: "What's your name?",
                questionTwo: "",
                image: "",
                buttonOne: "",
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
    );

    let [i, setI] = useState(0);

    function changePageAndObject(){
        setI(i = i + 1);
        console.log(i);
        if(i > 2){
            setI(0);
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
                    <Input />
                    <button onClick={() => {changePageAndObject()}}>Next</button>
                </section>
                <section className="QImage">
                    <img src={QImage}></img>
                </section>
            </section>
        </main>
    </div>

     ) : <></>;
}
 
export default Questionnaire;