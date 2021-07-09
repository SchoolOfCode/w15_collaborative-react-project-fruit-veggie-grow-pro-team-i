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
      paragraph = "Potatoes are hugely versatile and a staple ingredient of many meals in one form or another – boiled, mashed, chipped or baked. Potatoes are classified as being either earlies or maincrops. Early varieties are ready to harvest much sooner than maincrops and are what we call ‘new potatoes’. Maincrop varieties are in the ground a lot longer. They produce a larger harvest and bigger potatoes."
      link = "https://www.rhs.org.uk/advice/grow-your-own/vegetables/potatoes"
      sowTitle = "Sowing"
      sowImage = sowingImg
      sowDescription = [
        "Potatoes are grown from specially prepared ‘seed’ potatoes (or tubers). These are just like potatoes you buy from the supermarket, but they’re certified virus-free. You can buy seed potatoes from late winter onwards. You then start them off indoors by letting them sprout, before they are planted.",
        <br />,
        <br />,
        "It’s important with earlies, and a good idea with maincrops, to ‘chit’ the seed potatoes before planting. This means allowing them to start sprouting shoots.",
        <br />,
        <br />,
        "Stand them rose end up (the end with the most small dents, or eyes) in egg boxes or trays in a light, frost-free place. The potatoes are ready to plant when the shoots are about 3cm (1in) long. With early potatoes, rub off the weakest shoots, leaving four per tuber."
      ]
      growTitle = "Growing"
      growImage = growingImg
      growDescription = [
        "Potato plants need ‘earthing up’ as they grow, to protect early shoots from frost damage and ensure the developing potatoes aren’t exposed to light, which turns them green and poisonous.",
        <br />,
        <br />,
        "It’s a simple process – once the stems are about 23cm (9in) tall, draw soil up around them, creating a ridge about 15cm (6in) high. As the stems grow, repeat the process several times. The final height of the ridge should be 20–30cm (8in–1ft).",
        <br />, 
        <br />,
        "Keep the plants well watered in dry weather – particularly once the tubers start to form. Maincrop potatoes benefit from a nitrogen-rich fertiliser around the time of the second earthing up."
      ]
      harvestTitle = "Harvesting"
      harvestImage = harvestingImg
      harvestDescription = [
        "With earlies, wait until the flowers open or the buds drop. The tubers are ready to harvest when they’re the size of hens’ eggs.",
        <br />,
        <br />,
        "With maincrops for storage, wait until the foliage turns yellow, then cut it down and remove it. Wait for 10 days before harvesting the tubers, and leave them to dry for a few hours before storing."
      ]
      break
    case "Carrot":
      paragraph = "Delicious and packed with vitamins, carrots are a traditional grow-your-own favourite. As well as the classic long orange roots, look out for small round carrots and even red, yellow or purple varieties. Carrots are quick and easy to grow, taking up little space, and can even be grown in containers. Sow small batches regularly for cropping from early summer through to autumn."
      link = "https://www.rhs.org.uk/advice/grow-your-own/vegetables/carrots"
      sowTitle = "Sowing"
      sowImage = sowingImg
      sowDescription = [
        "Carrots need an open, sunny site and fertile, well-drained soil. If your soil is stony, shallow or heavy clay, you may end up with stunted or forked carrots, so try short-rooted types. These are also ideal for growing in containers.",
        <br />, 
        <br />,
        "Early cultivars can be sown in February or March under cloches or with similar protection. The main outdoor sowing season is from April to early July. Seed packets will state whether the cultivar is an early or maincrop type.",
        <br />, 
        <br />,
        "Sow the seeds as thinly as possible, 1cm (½in) deep, in rows 15–30cm (6–12in) apart. Thin out seedlings if necessary, aiming for plants 5–7.5cm (2–3in) apart."
      ]
      growTitle = "Growing"
      growImage = growingImg
      growDescription = [
        "Carrots are drought resistant so seldom need watering. However, in long dry spells they will benefit from a soaking.",
        <br />, 
        <br />,
        "Fast-growing weeds can crowd out carrots, so hand weed regularly between rows.",
        <br />, 
        <br />,
        "Cover crops with fleece tunnels or put up barriers around them to prevent carrot flies (see below) laying their eggs. Be careful too when weeding or thinning that you don’t crush the foliage, as the smell attracts carrot fly."
      ]
      harvestTitle = "Harvesting"
      harvestImage = harvestingImg
      harvestDescription = [
        "Carrots are ready about 12–16 weeks after sowing. So from repeated sowings you can enjoy fresh carrots from late spring to autumn.",
        <br />, 
        <br />,
        "Harvest as soon as they’re large enough to use – don’t aim for the largest roots or you’ll sacrifice flavour.",
        <br />, 
        <br />,
        "Lift the roots carefully using a fork if your soil is heavy. "
      ]
      break
    case "Onion":
      paragraph = "Onions are such a versatile vegetable – they feature in so many recipes, and growing your own means you’ll always have them to hand. They’re easy to grow from baby onions called sets. Although seed is available, sets are the easiest and quickest way to grow them."
      link = "https://www.rhs.org.uk/advice/grow-your-own/vegetables/onions"
      sowTitle = "Sowing"
      sowImage = sowingImg
      sowDescription = [
        "Onions are usually grown from sets, which are small, immature bulbs. This is the easiest and fastest way to grow them. Sets are readily available in early spring and late summer in garden centres and from online suppliers.",
        <br />, 
        <br />,
        "Before planting, improve the soil by digging in a bucket of garden compost or well-rotted manure for every square metre (yard), and add a high potassium general fertiliser, such as Vitax Q4, at a rate of one handful per square metre/yard.",
        <br />, 
        <br />,
        "Plant the onion sets 5–10cm (2–4in) apart, in rows 25–30cm (10–12in) apart, from mid-March to mid-April or in September. Gently push the sets into soft, well-prepared soil so the tip is just showing. Firm the soil around them and water well."
      ]
      growTitle = "Growing"
      growImage = growingImg
      growDescription = [
        "Water if the weather is dry and give an occasional feed with a general liquid fertiliser. Stop watering and feeding once the onions have swollen in mid-summer.",
        <br />, 
        <br />,
        "Weed regularly, as onions don’t grow well if competing with other plants. Taking care not to damage the bulbs if using a hoe – ideally weed by hand.",
        <br />, 
        <br />,
        "Remove any flower stems as soon as they start to form."
      ]
      harvestTitle = "Harvesting"
      harvestImage = harvestingImg
      harvestDescription = [
        "Onions are ready to harvest when the foliage starts to turn yellow and topple over. For September-planted sets, this will be from July, and for spring-planted sets, it will be from late summer to early autumn. Although it's sometimes suggested to bend over the foliage or gently lift the bulbs to break the roots, this is no longer recommended.",
        <br />, 
        <br />,
        "Instead, lift the bulbs before the foliage completely dies down. Place them on a rack in full sun outdoors or in a well-ventilated greenhouse for about two weeks to ripen. When the foliage is dry and papery, the bulbs can be stored in a light, cool, dry place until needed. Only store perfect, undamaged bulbs. ",
      ]
      break
    case "Strawberries":
      paragraph = "Strawberries are incredibly easy to grow. Strawberry plants can be grown almost anywhere – in borders, containers or hanging baskets. And of course the fruit is extremely popular – home-grown strawberries taste delicious and are great value too! "
      link = "https://www.rhs.org.uk/advice/grow-your-own/fruit/strawberries"
      sowTitle = "Sowing"
      sowImage = sowingImg
      sowDescription = [
        "Strawberries are so versatile – they just need sun, shelter, and fertile, well-drained soil. Avoid areas prone to frost and soils that have previously grown potatoes, chrysanthemums, or tomatoes because they are all prone to the disease verticillium wilt. ",
        <br />, 
        <br />,
        "Strawberries are traditionally grown in rows directly into garden soil. In poor soils grow in raised beds, which improves drainage and increases rooting depth. Alternatively, try growing in containers or growing-bags. ",
        <br />, 
        <br />,
        "Strawberries for sale in pots or packs (normally from late spring onwards) can be planted as soon as you buy them. "
      ]
      growTitle = "Growing"
      growImage = growingImg
      growDescription = [
        "Water frequently while new plants are establishing. Also water during dry periods in the growing season. Try to avoid wetting crowns and fruit as this can promote disease.",
        <br />, 
        <br />,
        "In early spring, feed with a high potassium general fertiliser, such as Vitax Q4. Scatter half a handful per square metre/yard around the plants. Additionally, feed strawberry plants growing in containers and grow bags with a high potassium liquid feed, such as tomato feed, every 7 to 14 days throughout the growing season.",
        <br />, 
        <br />,
        "After cropping has finished, cut off old leaves from summer-fruiting strawberries to allow fresh leaves to develop. This isn't necessary with autumn fruiting plants, instead just remove old leaves in the end of season clear up. Also remove the straw mulch, fibre mat, or black polythene, to prevent a build-up of pests and diseases. Take off any netting so birds can feed on any pests. "
      ]
      harvestTitle = "Harvesting"
      harvestImage = harvestingImg
      harvestDescription = [
        "Strawberries ripen from early summer to early autumnm, depending on the variety.",
        <br />, 
        <br />,
        "Pick when they’re bright red all over, ideally during the warmest part of the day as this is when they’re at their most tasty.",
        <br />, 
        <br />,
        "Eat them as soon as possible – they don’t keep well once ripe. Most don’t hold their shape when frozen."
      ]
      break
    case "Blueberries":
      paragraph = "Not only are blueberries productive, their glorious autumn colours provide ornamental appeal. The fruit is delicious and high in antioxidants. Shrubs can be grown in the garden border or as attractive container plants."
      link = "https://www.rhs.org.uk/advice/grow-your-own/fruit/blueberries"
      sowTitle = "Sowing"
      sowImage = sowingImg
      sowDescription = [
        "Plant in a moist, well-drained, acidic soil. Blueberries prefer light soils rather than heavy clays. Choose a sunny, sheltered spot. While blueberries are tolerant of shade, better crops (and autumn colour) are obtained in the sun.",
        <br />, 
        <br />,
        "Blueberries are very fussy about soil acidity. They will not grow well if planted in alkaline soil. Soil acidity can be measured by a pH testing kit. You can buy these from most garden centres. The pH of your soil needs to be pH 5.5 or lower for blueberries to thrive. If your soil is marginally higher than this, you can try lowering the pH by adding sulphur chips well in advance of planting.",
        <br />, 
        <br />,
        "While some blueberry cultivars can produce a good crop on their own, all yield much more heavily if planted near another, different cultivar. Check the labels on the plants when you buy."
      ]
      growTitle = "Growing"
      growImage = growingImg
      growDescription = [
        "Blueberries are relatively easy to look after. Keep the compost or soil moist, but not soaking wet. Don’t allow it to dry out between waterings. Water plants with rainwater, not tap water, unless you have no alternative in a drought. Tap water will raise the pH level and blueberries like acidic conditions.",
        <br />, 
        <br />,
        "Ensure the soil stays at pH of 5.5 or lower, to avoid problems. Check the pH of the soil in spring and add sulphur chips if it needs lowering. This shouldn’t be necessary with container-grown plants provided ericaceous fertiliser and rainwater are used.",
        <br />, 
        <br />,
        "Feed container plants every month using a liquid fertiliser formulated for ericaceous (lime-hating) plants, following the manufacturer’s recommendations.",
        <br />, 
        <br />,
        "You may find open ground plants don't need feeding apart from the annual ericaceous mulch and a high nitrogen feed such as sulphate of ammonia in late winter. Blueberries are sensitive to overfeeding.",
        <br />, 
        <br />,
        "Pruning is rarely needed in the first two years. After that you should prune in late February to early March. Once you start pruning, you should aim to remove a quarter of old wood at the base every year to keep the plant productive."
      ]
      harvestTitle = "Harvesting"
      harvestImage = harvestingImg
      harvestDescription = [
        "The berries start to ripen from mid-summer onwards, changing from green to dusky blue when ready to pick. They won’t all ripen at once, so check over plants several times.",
        <br />, 
        <br />,
        "Blueberries can be eaten fresh or can be dried, frozen, made into preserves or used in cooking. They are rich in antioxidants and vitamins (especially vitamin C).",
      ]
      break
    case "Raspberries":
      paragraph = "Raspberries are popular garden fruits that are easy to grow. Try growing both summer and autumn-fruiting varieties: just a few plants will reward you with plenty of fruit from midsummer until mid autumn. If you end up with a glut, raspberries also freeze well, and make wonderful jams, sauces and cooked desserts. "
      link = "https://www.rhs.org.uk/advice/grow-your-own/fruit/raspberries"
      sowTitle = "Sowing"
      sowImage = sowingImg
      sowDescription = [
        "Raspberries can be planted any time during the dormant season, between November and March, providing the soil is not frozen or waterlogged. They are sold as either: bare-root canes (the roots are exposed when you buy, usually mail order) or in containers.",
        <br />, 
        <br />,
        "Most people grow summer-fruiting raspberries, which are ready for harvesting in early summer. You can also buy autumn-fruiting raspberries, which are ready for harvest from late August to October.",
      ]
      growTitle = "Growing"
      growImage = growingImg
      growDescription = [
        "Raspberries thrive in moisture-retentive, fertile, slightly acidic soils, which are well-drained and weed free. They dislike soggy soils and shallow chalky soils. For best results, plant in a sunny position (although they will tolerate part shade). Ideally, site your rows running north to south, so that they do not shade each other.",
        <br />, 
        <br />,
        "Raspberry flowers are self-fertile and pollinated by insects, so avoid a very windy site. Also, the fruiting side branches of some cultivars are very long and may break in the wind. ",
        <br />, 
        <br />,
        "Keep raspberries well-watered during dry periods. "
      ]
      harvestTitle = "Harvesting"
      harvestImage = harvestingImg
      harvestDescription = [
        "The first summer raspberries are ready for harvesting in early summer, while autumn raspberries won’t mature until late summer, often continuing until the first frosts.",
        <br />, 
        <br />,
        "Harvest regularly, to get fruits at the peak of ripeness, when richly coloured, plump and easy to pull off. Pick on a dry day, so the berries aren’t wet.",
        <br />, 
        <br />,
        "Eat them fresh, freeze them or make into preserves. "
      ]
      break
    case "Lime":
      paragraph = "	Limes are the fruit of a variety of hybrid citrus trees. There are many species of limes and they do not share a common parent because the Citrus genus hybridizes so easily. Species include Key Lime (Citrus aurantifolia), Australian Desert Lime (Citrus glauca), Persian Lime (Citrus × latifolia) and Kaffir Lime (Citrus hystrix). Limes are generally ellipsoid, lime green, 3-6cm in diameter, and have acidic, tangy, sour juices. The Persian Lime is the most widely produced lime in the world. Most limes cannot tolerate temperatures below 10° C. More growing information is available in individual lime species entries."
      link = "https://en.wikipedia.org/wiki/Lime_(fruit)"
      sowTitle = "Sowing"
      sowImage = sowingImg
      sowDescription = [
        "",
        <br />, 
        <br />,
        "",
        <br />, 
        <br />,
        ""
      ]
      growTitle = "Growing"
      growImage = growingImg
      growDescription = [
        "",
        <br />, 
        <br />,
        "",
        <br />, 
        <br />,
        ""
      ]
      harvestTitle = "Harvesting"
      harvestImage = harvestingImg
      harvestDescription = [
        "",
        <br />, 
        <br />,
        "",
        <br />, 
        <br />,
        ""
      ]
      break
    case "Basil":
      paragraph = "Fragrant and delicious herb with tender green leaves. Great in just about anything - salad, sauces, meat marinades, and even popcorn."
      link = "https://en.wikipedia.org/wiki/Basil"
      sowTitle = "Sowing"
      sowImage = sowingImg
      sowDescription = [
        "",
        <br />, 
        <br />,
        "",
        <br />, 
        <br />,
        ""
      ]
      growTitle = "Growing"
      growImage = growingImg
      growDescription = [
        "",
        <br />, 
        <br />,
        "",
        <br />, 
        <br />,
        ""
      ]
      harvestTitle = "Harvesting"
      harvestImage = harvestingImg
      harvestDescription = [
        "",
        <br />, 
        <br />,
        "",
        <br />, 
        <br />,
        ""
      ]
      break
    case "Mint":
      paragraph = "Mint is a perennial herb with a distinctive taste. It's stems are square-shaped and it has pink, purple, or white flowers. Peppermint, ginger mint, and large apple mint are hybrids of mint. Mint is often grown in pots to prevent it from overtaking the garden with its invasive, spreading rhizome root structure. It's leaves are most aromatic before the plant flowers and can be used fresh, dried, or frozen. Mint's strongly scented leaves confuse the pests of carrots, tomatoes, alliums, and brassicas, and deter flea beetles."
      link = "https://en.wikipedia.org/wiki/Lamiaceae"
      sowTitle = "Sowing"
      sowImage = sowingImg
      sowDescription = [
        "",
        <br />, 
        <br />,
        "",
        <br />, 
        <br />,
        ""
      ]
      growTitle = "Growing"
      growImage = growingImg
      growDescription = [
        "",
        <br />, 
        <br />,
        "",
        <br />, 
        <br />,
        ""
      ]
      harvestTitle = "Harvesting"
      harvestImage = harvestingImg
      harvestDescription = [
        "",
        <br />, 
        <br />,
        "",
        <br />, 
        <br />,
        ""
      ]
      break
    case "Parsley":
      paragraph = "	Parsley is an herb in the Apiaceae family with two main cultivars: flat leafed (or Italian) and curly. Some gardeners feel flat leaf is easier to cultivate since it is more tolerant of rain and sunshine. Curly parsley is more decorative in appearance. Both cultivars can be used fresh or dried to season food."
      link = "https://en.wikipedia.org/wiki/Parsley"
      sowTitle = "Sowing"
      sowImage = sowingImg
      sowDescription = [
        "",
        <br />, 
        <br />,
        "",
        <br />, 
        <br />,
        ""
      ]
      growTitle = "Growing"
      growImage = growingImg
      growDescription = [
        "",
        <br />, 
        <br />,
        "",
        <br />, 
        <br />,
        ""
      ]
      harvestTitle = "Harvesting"
      harvestImage = harvestingImg
      harvestDescription = [
        "",
        <br />, 
        <br />,
        "",
        <br />, 
        <br />,
        ""
      ]
      break
    case "Dill":
      paragraph = "Dill is an herb wth slender green stems and feathery, delicate leaves. It's flowers are white to yellow. Fresh and dried dill leaves are used to season fish, borscht, and to make pickles. Dill is best when used fresh. It loses its flavor rapidly if dried. Dill seed is also used as a spice."
      link = "https://en.wikipedia.org/wiki/Dill"
      sowTitle = "Sowing"
      sowImage = sowingImg
      sowDescription = [
        "",
        <br />, 
        <br />,
        "",
        <br />, 
        <br />,
        ""
      ]
      growTitle = "Growing"
      growImage = growingImg
      growDescription = [
        "",
        <br />, 
        <br />,
        "",
        <br />, 
        <br />,
        ""
      ]
      harvestTitle = "Harvesting"
      harvestImage = harvestingImg
      harvestDescription = [
        "",
        <br />, 
        <br />,
        "",
        <br />, 
        <br />,
        ""
      ]
      break

    default:
      break
  }



  return popUpID[0] === "display" ? (
    <div style={{ display: "flex", transition: "2s" }} className="PopUpShell">

      <div className="ClosePopUp">
        <button onClick={() => setpopUpID("dontShowPopUpMenu")} className="ClosePopUp--button">x</button>
      </div>

      <main className="PopUpBox">
        <img className="PopUpHeaderImg" src={popUpID[1]} alt="popUpItem" />
        <h1 className="PopUpTitle">{popUpID[2]}</h1>
        <p className="popUpDescription">{paragraph}</p>
        <div className="spacer-bottom-gradient"></div>
        <section className="PopUP-Ratings">
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