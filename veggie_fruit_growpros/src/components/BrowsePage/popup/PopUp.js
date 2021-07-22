import "./PopUp.css";

import { Info } from "./popUpInfo";

import sowingImg from "../../images/sow_popup.png";
import growingImg from "../../images/grow_popup.png";
import harvestingImg from "../../images/harvest_popup.png";

function PopUp({ popUpID, setpopUpID }) {
  let paragraph;
  let link;
  let sowImage;
  let sowDescription;
  let growTitle;
  let growImage;
  let growDescription;
  let harvestTitle;
  let harvestImage;
  let harvestDescription;

  switch (popUpID[2]) {
    case "Tomatoes":
      paragraph = Info.tomato.paragraph;

      link = "https://www.rhs.org.uk/advice/grow-your-own/vegetables/tomatoes";
      sowImage = sowingImg;
      sowDescription = Info.tomato.sowDescription;
      growImage = growingImg;
      growDescription = Info.tomato.growDescription;
      harvestTitle = "Harvesting";
      harvestImage = harvestingImg;
      harvestDescription = Info.tomato.harvestDescription;

      break;
    case "Potatoes":
      paragraph = Info.Potatoes.paragraph;
      link = "https://www.rhs.org.uk/advice/grow-your-own/vegetables/potatoes";
      sowImage = sowingImg;
      sowDescription = Info.Potatoes.sowDescription;
      growImage = growingImg;
      growDescription = Info.Potatoes.growDescription;
      harvestTitle = "Harvesting";
      harvestImage = harvestingImg;
      harvestDescription = Info.Potatoes.harvestDescription;
      break;
    case "Carrot":
      paragraph = Info.Carrot.paragraph;
      link = "https://www.rhs.org.uk/advice/grow-your-own/vegetables/carrots";
      sowImage = sowingImg;
      sowDescription = Info.Carrot.sowDescription;
      growImage = growingImg;
      growDescription = Info.Carrot.growDescription;
      harvestTitle = "Harvesting";
      harvestImage = harvestingImg;
      harvestDescription = Info.Carrot.harvestDescription;
      break;
    case "Onion":
      paragraph = Info.Onion.paragraph;
      link = "https://www.rhs.org.uk/advice/grow-your-own/vegetables/onions";
      sowImage = sowingImg;
      sowDescription = Info.Onion.sowDescription;
      growImage = growingImg;
      growDescription = Info.Onion.growDescription;
      harvestTitle = "Harvesting";
      harvestImage = harvestingImg;
      harvestDescription = Info.Onion.harvestDescription;
      break;
    case "Strawberries":
      paragraph = Info.Strawberries.paragraph;
      link = "https://www.rhs.org.uk/advice/grow-your-own/fruit/strawberries";
      sowImage = sowingImg;
      sowDescription = Info.Strawberries.sowDescription;
      growImage = growingImg;
      growDescription = Info.Strawberries.growDescription;
      harvestTitle = "Harvesting";
      harvestImage = harvestingImg;
      harvestDescription = Info.Strawberries.harvestDescription;
      break;
    case "Blueberries":
      paragraph = Info.Blueberries.paragraph;
      link = "https://www.rhs.org.uk/advice/grow-your-own/fruit/blueberries";
      sowImage = sowingImg;
      sowDescription = Info.Blueberries.sowDescription;
      growImage = growingImg;
      growDescription = Info.Blueberries.growDescription;
      harvestTitle = "Harvesting";
      harvestImage = harvestingImg;
      harvestDescription = Info.Blueberries.harvestDescription;
      break;
    case "Raspberries":
      paragraph = Info.Raspberries.paragraph;
      link = "https://www.rhs.org.uk/advice/grow-your-own/fruit/raspberries";
      sowImage = sowingImg;
      sowDescription = Info.Raspberries.sowDescription;
      growImage = growingImg;
      growDescription = Info.Raspberries.growDescription;
      harvestTitle = "Harvesting";
      harvestImage = harvestingImg;
      harvestDescription = Info.Raspberries.harvestDescription;
      break;
    case "Lime":
      paragraph = Info.Lime.paragraph;
      link = "https://www.rhs.org.uk/advice/grow-your-own/fruit/citrus";
      sowImage = sowingImg;
      sowDescription = Info.Lime.sowDescription;
      growImage = growingImg;
      growDescription = Info.Lime.growDescription;
      harvestTitle = "Harvesting";
      harvestImage = harvestingImg;
      harvestDescription = Info.Lime.harvestDescription;
      break;
    case "Basil":
      paragraph = Info.Basil.paragraph;
      link = "https://www.rhs.org.uk/advice/grow-your-own/herbs/basil";
      sowImage = sowingImg;
      sowDescription = Info.Basil.sowDescription;
      growImage = growingImg;
      growDescription = Info.Basil.growDescription;
      harvestTitle = "Harvesting";
      harvestImage = harvestingImg;
      harvestDescription = Info.Basil.harvestDescription;
      break;
    case "Mint":
      paragraph = Info.Mint.paragraph;
      link = "https://www.rhs.org.uk/advice/grow-your-own/herbs/mint";
      sowImage = sowingImg;
      sowDescription = Info.Mint.sowDescription;
      growImage = growingImg;
      growDescription = Info.Mint.growDescription;
      harvestTitle = "Harvesting";
      harvestImage = harvestingImg;
      harvestDescription = Info.Mint.harvestDescription;
      break;
    case "Parsley":
      paragraph = Info.Parsley.paragraph;
      link = "https://www.rhs.org.uk/advice/grow-your-own/herbs/parsley";
      sowImage = sowingImg;
      sowDescription = Info.Parsley.sowDescription;
      growImage = growingImg;
      growDescription = Info.Parsley.growDescription;
      harvestTitle = "Harvesting";
      harvestImage = harvestingImg;
      harvestDescription = Info.Parsley.harvestDescription;
      break;
    case "Dill":
      paragraph = Info.Dill.paragraph;
      link = "https://www.rhs.org.uk/advice/grow-your-own/herbs/dill";
      sowImage = sowingImg;
      sowDescription = Info.Dill.sowDescription;
      growImage = growingImg;
      growDescription = [
        "Do not allow soil or compost to dry out. Water plants regularly, especially during hot, dry summers, but do not over water. ",
        <br />,
        <br />,
        "Support plants with garden canes or twiggy sticks to prevent them toppling over in a gust of wind.",
        <br />,
        <br />,
        "Avoid growing dill near fennel, as the two can cross breed resulting in undesirable seedlings with poor flavour.",
        <br />,
        <br />,
        "Hoe around plants to prevent weeds from competing or smothering the growth of dill. ",
      ];
      harvestTitle = "Harvesting";
      harvestImage = harvestingImg;
      harvestDescription = Info.Dill.harvestDescription;

      break;

    default:
      break;
  }

  return popUpID[0] === "display" ? (
    <div style={{ display: "flex", transition: "2s" }} className="PopUpShell">
      <div className="ClosePopUp">
        <button
          onClick={() => setpopUpID("dontShowPopUpMenu")}
          className="ClosePopUp--button"
        >
          x
        </button>
      </div>

      <main className="PopUpBox">
        <img className="PopUpHeaderImg" src={popUpID[1]} alt="popUpItem" />
        <h1 className="PopUpTitle">{popUpID[2]}</h1>
        <p className="popUpDescription">{paragraph}</p>
        <div className="spacer-bottom-gradient"></div>
        <section className="PopUP-Ratings">
          <ul>
            <li>
              <h3 className="PopUpH3">Difficulty:</h3>
              <img src={popUpID[3]} alt="" />
            </li>
            <li>
              <h3 className="PopUpH3">Space:</h3>
              <img src={popUpID[4]} alt="" />
            </li>
            <li>
              <h3 className="PopUpH3">Time:</h3>
              <img src={popUpID[5]} alt="" />
            </li>
          </ul>
        </section>

        <section className="InstructionsSection lightGreen-bg">
          <section className="InstructionsText">
            <h2 className="PopUpH2">"Sowing"</h2>
            <p>{sowDescription}</p>
          </section>
          <section className="InstructionsImage">
            <img src={sowImage} alt="Seeds being sown into small pots."></img>
          </section>
        </section>

        <section className="InstructionsSection">
          <section className="InstructionsImage">
            <img src={growImage} alt="A young plant that is growing."></img>
          </section>
          <section className="InstructionsText-RightColumn">
            <h2 className="PopUpH2">"Growing"</h2>
            <p>{growDescription}</p>
          </section>
        </section>

        <section className="InstructionsSection lightGreen-bg">
          <section className="InstructionsText">
            <h2 className="PopUpH2">{harvestTitle}</h2>
            <p>{harvestDescription}</p>
          </section>
          <section className="InstructionsImage">
            <img src={harvestImage} alt="Crops being harvested."></img>
          </section>
        </section>

        <section className="PopUp-Ref">
          <h2 className="PopUpH2">References</h2>
          <p>
            <a href={link}>{link}</a>
          </p>
        </section>
      </main>
    </div>
  ) : (
    <div className="NOTHING"></div>
  );
}

export default PopUp;
