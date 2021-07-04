const PopUp = ({popUpID,setpopUpID}) => {
  let paragraph
  let link
  console.log(popUpID[3])
  switch (popUpID[2]) {
    case "Tomatoes":
      paragraph="Cherry tomatoes range in size from a thumbtip to the size of a golf ball. Their shape ranges from spherical to slightly oblong to pointed at the bottom. They are often red, but can also be yellow, green, striped, and even black. More oblong cherry tomatoes often share characteristics with plum tomatoes, and are known as grape tomatoes. Cherry tomatoes can be quite sweet (such as the Sungold or Sunsweet yellow varieties), more traditionally acidic, or deep in flavor. They are delicious for snacking, in salads, lightly roasted or grilled, or baked. They require little to no pruning unlike larger tomato plants."
      link="https://en.wikipedia.org/wiki/Tomato"
      break;
    case "Potatoes":
      paragraph="Potatoes are starchy root vegetables in the Solanaceae, or Nightshade, family, which also includes tomatoes, eggplants, and peppers. They originated in South America, and spread to become a worldwide staple. The leaves and fruit are usually poisonous and the stem tuber is the only edible part once it is cooked. The potato can be cooked in many ways, brewed into alcohol, and also used as the basis for creating bioplastics. More growing information is available in individual species entries."
      link="https://en.wikipedia.org/wiki/Potato"
      break;
    case "Carrot":
      paragraph="The carrot is a root vegetable. It is usually orange in color, but some cultivars are purple, black, red, white, and yellow. The most commonly eaten part of the plant is the taproot, but the greens are sometimes eaten as well. The leaves appear first, and the taproot grows more slowly beneath the soil. Fast-growing cultivars mature within three months of sowing the seed. Slower-maturing cultivars are harvested four months after sowing."
      link="https://en.wikipedia.org/wiki/Carrot"
      break;
    case "Onion":
      paragraph="Yellow onions have with yellow skin and white to yellow flesh. They are members of the Allium family along with garlic and leeks. They have a good balance of sweet and astringency in their flavor, and become sweeter when cooked. Spanish onions are a type of yellow onion that is slightly sweeter and more delicate in flavor. Make sure to choose a variety suited to your day length."
      link="https://en.wikipedia.org/wiki/Onion"
      break;
    case "Strawberries":
      paragraph="Strawberries are a hybrid species of the genus Fragaria that produce sweet, bright red fruits. There are three main types of strawberries: 1) summer-fruiting: produce a single, large crop of fruit the year after planting. To grow, transplant plugs or crowns in early spring in rows spaced at least 120cm apart. Pinch off all flowers the first season and train the plant's runners, pressing them into the soil 15-22cm apart from the mother plant. Mulch with straw or pine needles in the fall when the plants have died back. When the plants start to grow back in the spring, move the mulch aside. After harvest the second season, set a lawnmower to about 10cm high and mow, being sure not to damage crowns."
      link="https://en.wikipedia.org/wiki/Strawberry"
      break;
    case "Blueberries":
      paragraph="Perennial flowering plants with sweet, indigo-colored berries. Blueberry plants are usually erect, prostrate shrubs that range in height from 10cm to 4m high, depending on the cultivar."
      link="https://en.wikipedia.org/wiki/Blueberry"
      break;
    case "Raspberries":
      paragraph="Raspberries are a perennial plant with erect to trailing canes that often have spines or thorns. The plants produce fruit in their second year of growth, but some 'primocane' varieties exist that flower and fruit their first year. Canes are light green to blue in hue with alternate, compound leaves. Fruits are sweet, many-seeded, and hollow."
      link="https://en.wikipedia.org/wiki/Raspberry"
      break;
    case "Lime":
      paragraph="	Limes are the fruit of a variety of hybrid citrus trees. There are many species of limes and they do not share a common parent because the Citrus genus hybridizes so easily. Species include Key Lime (Citrus aurantifolia), Australian Desert Lime (Citrus glauca), Persian Lime (Citrus × latifolia) and Kaffir Lime (Citrus hystrix). Limes are generally ellipsoid, lime green, 3-6cm in diameter, and have acidic, tangy, sour juices. The Persian Lime is the most widely produced lime in the world. Most limes cannot tolerate temperatures below 10° C. More growing information is available in individual lime species entries."
      link="https://en.wikipedia.org/wiki/Lime_(fruit)"
      break;
    case "Basil":
      paragraph="Fragrant and delicious herb with tender green leaves. Great in just about anything - salad, sauces, meat marinades, and even popcorn."
      link="https://en.wikipedia.org/wiki/Basil"
      break;
    case "Mint":
      paragraph="Mint is a perennial herb with a distinctive taste. It's stems are square-shaped and it has pink, purple, or white flowers. Peppermint, ginger mint, and large apple mint are hybrids of mint. Mint is often grown in pots to prevent it from overtaking the garden with its invasive, spreading rhizome root structure. It's leaves are most aromatic before the plant flowers and can be used fresh, dried, or frozen. Mint's strongly scented leaves confuse the pests of carrots, tomatoes, alliums, and brassicas, and deter flea beetles."
      link="https://en.wikipedia.org/wiki/Lamiaceae"
      break;
    case "Parsley":
      paragraph="	Parsley is an herb in the Apiaceae family with two main cultivars: flat leafed (or Italian) and curly. Some gardeners feel flat leaf is easier to cultivate since it is more tolerant of rain and sunshine. Curly parsley is more decorative in appearance. Both cultivars can be used fresh or dried to season food."
      link="https://en.wikipedia.org/wiki/Parsley"
      break;
    case "Dill":
      paragraph="Dill is an herb wth slender green stems and feathery, delicate leaves. It's flowers are white to yellow. Fresh and dried dill leaves are used to season fish, borscht, and to make pickles. Dill is best when used fresh. It loses its flavor rapidly if dried. Dill seed is also used as a spice."
      link="https://en.wikipedia.org/wiki/Dill"
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
        <h1 className="PopUpTitle">{popUpID[2]}</h1>
        <p className="popUpDescription">{paragraph}</p>
        
        <section className="PopUP-Ratings">
        <h1>Rating's</h1>
        <ul>
          <li><h3>Difficulty</h3><img src={popUpID[3]} alt="" /></li>
          <li><h3>Space</h3><img src={popUpID[4]} alt="" /></li>
          <li><h3>Time</h3><img src={popUpID[5]} alt="" /></li>
          
        </ul>

        </section>


        <h1>What you'll need</h1>
        <section className="PopUp-UL-container">
          <ul className="PopUp-UL">
            <li>"Compost"</li>
            <li>"Trowel"</li>
            <li>"Compost"</li>
          </ul>
          <ul className="PopUp-UL">
            <li>"I"</li>
            <li>"HAVE"</li>
            <li>"NO-IDEA"</li>
          </ul>
        </section>
        <h2>Refrences</h2>
        <h5><a href={link}>{link}</a></h5>

      </main>
      

    </div>
   ):<></>
}
 
export default PopUp;