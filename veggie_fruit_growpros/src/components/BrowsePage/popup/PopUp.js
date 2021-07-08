import sowingImg from "../../images/sow_popup.png"
import growingImg from "../../images/grow_popup.png"
import harvestingImg from "../../images/harvest_popup.png"

function PopUp({ popUpID, setpopUpID }) {
  let paragraph
  let link
  let sowTitle
  let sowImage
  let sowDescription
  let growTitle
  let growImage
  let growDescription
  let harvestTitle
  let harvestImage
  let harvestDescription

  switch (popUpID[2]) {
    case "Tomatoes":
      paragraph = "Growing your own tomatoes is simple and just a couple of plants will reward you with plenty of delicious tomatoes through the summer. Sow indoors, then plant outdoors in a sunny, sheltered spot, or in a greenhouse. There's a whole array to try, from tiny sweet cherry tomatoes to full-flavoured giant beefsteak types."
      link = "https://www.rhs.org.uk/advice/grow-your-own/vegetables/tomatoes"
      sowTitle = "Sowing"
      sowImage = sowingImg
      sowDescription = [
        "Tomatoes are easy to grow from seed sown indoors in warm conditions. Sow from late March to early April if you plan to grow the plants outdoors. If you’ll be growing your tomatoes in a greenhouse, you can start sowing earlier, from late February to mid-March.",
        <br />,
        <br />,
        "Sow in small pots filled with seed compost, then either place in a propagator or cover each pot with a clear plastic bag and place on a bright windowsill. The young seedlings need to be kept at around 18°C (64°F). Transplant into 9cm (3½in) pots when two true leaves have formed.",
        <br />,
        <br />,
        "Young plants are available from garden centres in spring if you don’t have the space or time to grow from seed. But they will still require frost-free conditions and hardening off before planting outside."
      ]
      growTitle = "Growing"
      growImage = growingImg
      growDescription = [
        "When the flowers of the first truss are beginning to open, transfer to 23cm (9in) pots or growing bags, or plant outside in a warm sunny spot, 45–60cm (18–24in) apart. Plants for growing outdoors should be acclimatised first, by hardening off, to prevent a check in growth.",
        <br />,
        <br />,
        "Cordon (or indeterminate) tomatoes – tie the main stem to a tall, sturdy bamboo cane or wind it round a well-anchored but slack vertical string (coming down from an overhead support). Regularly remove sideshoots that sprout from between a leaf and the main stem. When plants reach the top of the support or have set seven fruit trusses indoors or four trusses outdoors, remove the growing point of the main stem at two leaves above the top truss.",
        <br />,
        <br />,
        "Bush (or determinate) tomatoes – these, and trailing types for hanging baskets, don’t usually need support. You won't need to remove sideshoots.",
        <br />,
        <br />,
        "Water regularly to keep the soil/compost evenly moist. Fluctuating moisture levels can cause fruits to split. Feed every 10–14 days with a balanced liquid fertiliser, changing to a high potash feed once the first fruits start to form. Irregular watering, together with a lack of calcium in the soil, can cause a problem known as blossom end rot (see below), when the base of the fruit turns black and becomes sunken.",
        <br />,
        <br />,
        "For cordon (indeterminate) tomatoes, there is evidence that removing some leaves above the ripening truss (which allows the fruit to be warmer during the day but cooler at night) can encourage slightly earlier ripening, without negatively affecting cropping. Removing leaves below the ripening truss doesn’t improve ripening but can help to reduce the spread of diseases such as tomato leaf mould and tomato blight, where these are a problem."
      ]
      harvestTitle = "Harvesting"
      harvestImage = harvestingImg
      harvestDescription = [
        "Tomatoes start to ripen from mid-summer onwards, depending on the variety, weather conditions and fruit size. Smaller cherry tomatoes ripen more quickly than larger fruits, and greenhouse tomatoes usually start cropping earlier than those grown outdoors, and continue for longer, well into autumn.",
        <br />,
        <br />,
        "Check plants every few days and pick tomatoes individually as soon as they’re ripe and fully coloured.",
        <br />,
        <br />,
        "At the end of the growing season, lift outdoor plants with unripe fruit and either lay them on straw under cloches or pick the fruits and place somewhere warm and dark to ripen. Alternatively, put unripe tomatoes in a drawer with a banana, to aid ripening."
      ]
      break
    case "Potatoes":
      paragraph = "Potatoes are starchy root vegetables in the Solanaceae, or Nightshade, family, which also includes tomatoes, eggplants, and peppers. They originated in South America, and spread to become a worldwide staple. The leaves and fruit are usually poisonous and the stem tuber is the only edible part once it is cooked. The potato can be cooked in many ways, brewed into alcohol, and also used as the basis for creating bioplastics. More growing information is available in individual species entries."
      link = "https://en.wikipedia.org/wiki/Potato"
      sowTitle = ""
      sowDescription = ""
      growTitle = ""
      growDescription = ""
      harvestTitle = ""
      harvestDescription = ""
      break
    case "Carrot":
      paragraph = "The carrot is a root vegetable. It is usually orange in color, but some cultivars are purple, black, red, white, and yellow. The most commonly eaten part of the plant is the taproot, but the greens are sometimes eaten as well. The leaves appear first, and the taproot grows more slowly beneath the soil. Fast-growing cultivars mature within three months of sowing the seed. Slower-maturing cultivars are harvested four months after sowing."
      link = "https://en.wikipedia.org/wiki/Carrot"
      sowTitle = ""
      sowDescription = ""
      growTitle = ""
      growDescription = ""
      harvestTitle = ""
      harvestDescription = ""
      break
    case "Onion":
      paragraph = "Yellow onions have with yellow skin and white to yellow flesh. They are members of the Allium family along with garlic and leeks. They have a good balance of sweet and astringency in their flavor, and become sweeter when cooked. Spanish onions are a type of yellow onion that is slightly sweeter and more delicate in flavor. Make sure to choose a variety suited to your day length."
      link = "https://en.wikipedia.org/wiki/Onion"
      sowTitle = ""
      sowDescription = ""
      growTitle = ""
      growDescription = ""
      harvestTitle = ""
      harvestDescription = ""
      break
    case "Strawberries":
      paragraph = "Strawberries are a hybrid species of the genus Fragaria that produce sweet, bright red fruits. There are three main types of strawberries: 1) summer-fruiting: produce a single, large crop of fruit the year after planting. To grow, transplant plugs or crowns in early spring in rows spaced at least 120cm apart. Pinch off all flowers the first season and train the plant's runners, pressing them into the soil 15-22cm apart from the mother plant. Mulch with straw or pine needles in the fall when the plants have died back. When the plants start to grow back in the spring, move the mulch aside. After harvest the second season, set a lawnmower to about 10cm high and mow, being sure not to damage crowns."
      link = "https://en.wikipedia.org/wiki/Strawberry"
      sowTitle = ""
      sowDescription = ""
      growTitle = ""
      growDescription = ""
      harvestTitle = ""
      harvestDescription = ""
      break
    case "Blueberries":
      paragraph = "Perennial flowering plants with sweet, indigo-colored berries. Blueberry plants are usually erect, prostrate shrubs that range in height from 10cm to 4m high, depending on the cultivar."
      link = "https://en.wikipedia.org/wiki/Blueberry"
      sowTitle = ""
      sowDescription = ""
      growTitle = ""
      growDescription = ""
      harvestTitle = ""
      harvestDescription = ""
      break
    case "Raspberries":
      paragraph = "Raspberries are a perennial plant with erect to trailing canes that often have spines or thorns. The plants produce fruit in their second year of growth, but some 'primocane' varieties exist that flower and fruit their first year. Canes are light green to blue in hue with alternate, compound leaves. Fruits are sweet, many-seeded, and hollow."
      link = "https://en.wikipedia.org/wiki/Raspberry"
      sowTitle = ""
      sowDescription = ""
      growTitle = ""
      growDescription = ""
      harvestTitle = ""
      harvestDescription = ""
      break
    case "Lime":
      paragraph = "	Limes are the fruit of a variety of hybrid citrus trees. There are many species of limes and they do not share a common parent because the Citrus genus hybridizes so easily. Species include Key Lime (Citrus aurantifolia), Australian Desert Lime (Citrus glauca), Persian Lime (Citrus × latifolia) and Kaffir Lime (Citrus hystrix). Limes are generally ellipsoid, lime green, 3-6cm in diameter, and have acidic, tangy, sour juices. The Persian Lime is the most widely produced lime in the world. Most limes cannot tolerate temperatures below 10° C. More growing information is available in individual lime species entries."
      link = "https://en.wikipedia.org/wiki/Lime_(fruit)"
      sowTitle = ""
      sowDescription = ""
      growTitle = ""
      growDescription = ""
      harvestTitle = ""
      harvestDescription = ""
      break
    case "Basil":
      paragraph = "Fragrant and delicious herb with tender green leaves. Great in just about anything - salad, sauces, meat marinades, and even popcorn."
      link = "https://en.wikipedia.org/wiki/Basil"
      sowTitle = ""
      sowDescription = ""
      growTitle = ""
      growDescription = ""
      harvestTitle = ""
      harvestDescription = ""
      break
    case "Mint":
      paragraph = "Mint is a perennial herb with a distinctive taste. It's stems are square-shaped and it has pink, purple, or white flowers. Peppermint, ginger mint, and large apple mint are hybrids of mint. Mint is often grown in pots to prevent it from overtaking the garden with its invasive, spreading rhizome root structure. It's leaves are most aromatic before the plant flowers and can be used fresh, dried, or frozen. Mint's strongly scented leaves confuse the pests of carrots, tomatoes, alliums, and brassicas, and deter flea beetles."
      link = "https://en.wikipedia.org/wiki/Lamiaceae"
      sowTitle = ""
      sowDescription = ""
      growTitle = ""
      growDescription = ""
      harvestTitle = ""
      harvestDescription = ""
      break
    case "Parsley":
      paragraph = "	Parsley is an herb in the Apiaceae family with two main cultivars: flat leafed (or Italian) and curly. Some gardeners feel flat leaf is easier to cultivate since it is more tolerant of rain and sunshine. Curly parsley is more decorative in appearance. Both cultivars can be used fresh or dried to season food."
      link = "https://en.wikipedia.org/wiki/Parsley"
      sowTitle = ""
      sowDescription = ""
      growTitle = ""
      growDescription = ""
      harvestTitle = ""
      harvestDescription = ""
      break
    case "Dill":
      paragraph = "Dill is an herb wth slender green stems and feathery, delicate leaves. It's flowers are white to yellow. Fresh and dried dill leaves are used to season fish, borscht, and to make pickles. Dill is best when used fresh. It loses its flavor rapidly if dried. Dill seed is also used as a spice."
      link = "https://en.wikipedia.org/wiki/Dill"
      sowTitle = ""
      sowDescription = ""
      growTitle = ""
      growDescription = ""
      harvestTitle = ""
      harvestDescription = ""
      break

    default:
      break
  }



  return popUpID[0] === "display" ? (
    <div style={{ display: "flex", transition: "2s" }} className="PopUpShell">

      <div className="ClosePopUp">
        <button onClick={() => setpopUpID("dontShowPopUpMenu")} className="ClosePopUp--button">X</button>
      </div>

      <main className="PopUpBox">
        <img className="PopUpHeaderImg" src={popUpID[1]} alt="popUpItem" />
        <h1 className="PopUpTitle">{popUpID[2]}</h1>
        <p className="popUpDescription">{paragraph}</p>
        <div className="spacer-bottom-gradient"></div>
        <section className="PopUP-Ratings">
          <h2 className="PopUpH2">Rating's</h2>
          <ul>
            <li><h3 className="PopUpH3">Difficulty:</h3><img src={popUpID[3]} alt="" /></li>
            <li><h3 className="PopUpH3">Space:</h3><img src={popUpID[4]} alt="" /></li>
            <li><h3 className="PopUpH3">Time:</h3><img src={popUpID[5]} alt="" /></li>
          </ul>
        </section>

        <section className="InstructionsSection lightGreen-bg">
          <section className="InstructionsText">
            <h2 className="PopUpH2">{sowTitle}</h2>
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
            <h2 className="PopUpH2">{growTitle}</h2>
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
          <p><a href={link}>{link}</a></p>
        </section>
      </main>

    </div>
  ) : <div className="NOTHING"></div>
}
 
export default PopUp;