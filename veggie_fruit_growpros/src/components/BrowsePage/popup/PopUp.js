

import "./PopUp.css"

import {Info} from "./popUpInfo"

import sowingImg from "../../images/sow_popup.png";
import growingImg from "../../images/grow_popup.png";
import harvestingImg from "../../images/harvest_popup.png";


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
      paragraph = Info.tomato.paragraph

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
      paragraph = "Citrus are not hardy in Britain but can be grown in pots outdoors in summer and brought inside for winter. Of all citrus, most gardeners grow lemons; kumquats are the most cold tolerant; others, like limes and grapefruits, need more warmth. The fragrant flowers can appear all year round, but are especially abundant in late winter. Fruit ripens up to 12 months later, so they often flower and fruit at the same time."
      link = "https://www.rhs.org.uk/advice/grow-your-own/fruit/citrus"
      sowTitle = "Sowing"
      sowImage = sowingImg
      sowDescription = [
        "Citrus need a bright sunny position. Most only reach 1–1.5m (3–5ft) tall in a pot but can grow larger in good conditions, depending on the rootstock.",
        <br />, 
        <br />,
        "They are better grown in pots in a cool climate so they can be moved indoors. Although any good potting medium will do, a soil-based compost such as John Innes No 2 is best. Add up 20 per cent sharp sand or grit. There are also specially formulated citrus composts available."
      ]
      growTitle = "Growing"
      growImage = growingImg
      growDescription = [
        "Citrus in pots can be put outdoors in summer, in a sheltered sunny position, but only when temperatures increase, from mid-June until late September. Keep some fleece handy in case of sudden cold nights in early summer. Low temperatures will inhibit flowering and may cause damage or even death.",
        <br />, 
        <br />,
        "A minimum winter night temperature of 10°C (50°F) is needed for lemons and limes. Calamondin oranges need a minimum winter night temperature of 13°C (55°F).",
        <br />, 
        <br />,
        "Kumquats are unusual citrus, as the fruits are eaten whole – including the skin. Plants are naturally very bushy and highly productive. They can tolerate winter temperatures down to 7°C (45°F) – among the hardiest of all citrus."
      ]
      harvestTitle = "Harvesting"
      harvestImage = harvestingImg
      harvestDescription = [
        "Once citrus fruits are fully grown, they develop a rich skin colour. They can then either be picked or left on the tree until needed.",
      ]
      break
    case "Basil":
      paragraph = "This popular annual herb is an essential ingredient in Italian cooking with strongly flavoured leaves that can be used to perk up tomato dishes or blitzed to make pesto sauce. Seeds are best sown indoors in late winter or early spring for plants that can be grown outdoors in summer, providing leaves that can harvested well into the autumn. "
      link = "https://www.rhs.org.uk/advice/grow-your-own/herbs/basil"
      sowTitle = "Sowing"
      sowImage = sowingImg
      sowDescription = [
        "Seeds are best started off indoors from late February to mid-summer. Fill a 7.5cm (3in) pot with seed compost, firm down and sow a few seeds of basil over the top – most will germinate so only sow a few more seeds than you need. Cover with a thin layer of vermiculite, water gently and pop it into a propagator. If you don’t have one, don’t worry. You can cover the pot with a small, clear freezer bag and secure with an elastic band.",
        <br />, 
        <br />,
        "After germination, remove from the propagator (or take the bag off) and keep damp. When the seedlings are large enough to handle and have developed their first true leaves (ignore the rounded seed leaves), give them their own 7.5cm (3in) pot filled with multi-purpose compost. "
      ]
      growTitle = "Growing"
      growImage = growingImg
      growDescription = [
        "Plant basil outside after all danger of frost has passed, choosing a sunny, sheltered spot with well-drained soil or grow plants in containers. You can keep a plant in a pot going all summer long by moving it into a slightly bigger container every time roots show through the drainage holes in the bottom – plants could end up in a 20cm (8in) container.",
        <br />, 
        <br />,
        "Basil hates having wet roots overnight, so aim to water plants in the morning if possible.",
        <br />, 
        <br />,
        "Keep plants bushy and productive by pinching the tips of branches regularly and remove any flowers that start to develop. "
      ]
      harvestTitle = "Harvesting"
      harvestImage = harvestingImg
      harvestDescription = [
        "Basil leaves can be harvested throughout the summer.",
        <br />, 
        <br />,
        "Remove leaves as required or harvest entire plants if lots of leaves are needed to make pesto or sauce. If only a few leaves are required, remove the tops of plants to encourage bushy growth. ",
      ]
      break
    case "Mint":
      paragraph = "Mint is a perennial herb grown for its leaves. They are wonderful infused in hot water to make a refreshing tea, chopped and added to many dishes, or used to make mint sauce (a classic addition to roast lamb). There are many different varieties of mint to choose from with leaves that smell completely different. Not all are good for culinary use, so choose what you grow carefully. "
      link = "https://www.rhs.org.uk/advice/grow-your-own/herbs/mint"
      sowTitle = "Sowing"
      sowImage = sowingImg
      sowDescription = [
        "It is best to buy mint as young plants in spring. Mint is a vigorous plant that will spread all over the place if planted straight into the ground. This is why it is a good idea to plant it in a large pot filled with multi-purpose compost that can be placed in a prominent place to make picking easy.",
        <br />, 
        <br />,
        "Alternatively grow in a large, bottomless bucket and plunge it into a gap in the soil, making sure the lip of the container remains above the surface to prevent shoots from escaping over the top. ",
      ]
      growTitle = "Growing"
      growImage = growingImg
      growDescription = [
        "Give plants plenty of water, especially during hot, dry weather.",
        <br />, 
        <br />,
        "When plants have finished flowering in summer, cut flowered shoots back to 5cm (2in) above the surface of the compost.",
        <br />, 
        <br />,
        "Avoid growing different varieties of mint close together, whether in pots or the ground, as they can lose their individual scent and flavour.",
        <br />, 
        <br />,
        "When growing in pots, rejuvenate congested clumps by upturning the container, removing the rootball and splitting it in half. Repot a portion in the same container using fresh compost. "
      ]
      harvestTitle = "Harvesting"
      harvestImage = harvestingImg
      harvestDescription = [
        "Mint can be harvested from late spring and mid-autumn, before it dies back over winter.",
        <br />, 
        <br />,
        "Pick regularly to keep plants compact and ensure they produce lots of fresh new shoots.",
        <br />, 
        <br />,
        "The leaves are best used fresh, but you can also freeze them for use in winter. Chop the leaves finely and pack into an ice-cube tray with some water, then freeze. Whenever you need some mint for a recipe, simply knock out as many ice cubes as you want and add to the pan. "
      ]
      break
    case "Parsley":
      paragraph = "	Parsley is an herb in the Apiaceae family with two main cultivars: flat leafed (or Italian) and curly. Some gardeners feel flat leaf is easier to cultivate since it is more tolerant of rain and sunshine. Curly parsley is more decorative in appearance. Both cultivars can be used fresh or dried to season food."
      link = "https://www.rhs.org.uk/advice/grow-your-own/herbs/parsley"
      sowTitle = "Sowing"
      sowImage = sowingImg
      sowDescription = [
        "Sow outdoors from early spring to the start of summer in well-drained soil in sun or partial shade. Sow seeds in shallow, 1cm ½in) deep trenches. Cover the trench and water. When they are large enough to handle, thin seedlings to 15cm (6in) apart with 15cm (6in) between rows.",
        <br />, 
        <br />,
        "Alternatively, grow in pots. Sow seeds thinly across a 25cm (10in) pot filled with seed compost, cover with a 1cm (½in) layer of compost and water. Leave in a cool spot to germinate and make sure the compost doesn’t dry out. Germination can take up to six weeks, then when they are large enough to handle, thin out seedlings, leaving about 2cm (¾in) between plants. ",
      ]
      growTitle = "Growing"
      growImage = growingImg
      growDescription = [
        "Keep plants well watered, especially during hot, dry spells in summer.",
        <br />, 
        <br />,
        "Give plants a boost by feeding every few weeks with a balanced liquid fertiliser.",
        <br />, 
        <br />,
        "Remove flowerheads to extend the cropping life of the plants.",
        <br />, 
        <br />,
        "Prevent plants from becoming unsightly and encourage new growth, by snipping off any lower shoots that start to turn yellow. "
      ]
      harvestTitle = "Harvesting"
      harvestImage = harvestingImg
      harvestDescription = [
        "Parsley can be harvested throughout the summer months. Take a few leafy stems from the outside of a clump, snipping them near the base with scissors.",
        <br />, 
        <br />,
        "The leaves are best used fresh, but can also be frozen or dried for use in winter.",
        <br />, 
        <br />,
        "To freeze, chop the leaves and add to an ice-cube tray, then top up with water and freeze. You can then simply add the cubes to your cooking whenever needed.",
        <br />, 
        <br />,
        "To dry, hang up a bunch of parsley in a warm, dark, well-ventilated place for a few weeks. When fully dried, crush the leaves and store in an air-tight jar. "
      ]
      break
    case "Dill":
      paragraph = "Dill is a large annual or biennial herb with ferny foliage that is topped with sprays of yellow flower in summer. The strongly flavoured leaves can be chopped into soups, salads or used to flavour rice. Seeds are often used as ingredient in curry powder. This statuesque plant is ideally suited to growing in the middle of a border, its leaves providing a feathery foil for other plants. "
      link = "https://www.rhs.org.uk/advice/grow-your-own/herbs/dill"
      sowTitle = "Sowing"
      sowImage = sowingImg
      sowDescription = [
        "Dill hates having its roots being disturbed or being transplanted, so sow in-situ, either into pots or the ground where it is to grow.",
        <br />, 
        <br />,
        "Start dill off from seed anytime between mid-spring and mid-summer. Prepare the soil well, choosing a fertile, open site in full sun. Sow seeds thinly in shallow, 1cm (½in) deep, rows and cover lightly with soil. Thin seedlings when large enough to handle to 15cm (6in) apart.",
        <br />, 
        <br />,
        "Alternatively, sow seeds thinly in large pots filled with multi-purpose compost, including peat free media. Thin seedlings to 10cm (4in) apart when large enough to handle. "
      ]
      growTitle = "Growing"
      growImage = growingImg
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
        "Hoe around plants to prevent weeds from competing or smothering the growth of dill. "
      ]
      harvestTitle = "Harvesting"
      harvestImage = harvestingImg
      harvestDescription = [
        "Cut the leaves as required during spring and summer. Picking young leaves regularly will help to keep plants productive and delay flowering. The leaves can be used fresh, or can be either frozen or dried for later use.",
        <br />, 
        <br />,
        "To dry dill leaves, hang up sprigs in a dark, well-ventilated place for a few weeks. When fully dried, strip the leaves from the stems and store in an air-tight jar.",
        <br />, 
        <br />,
        "The seeds can be gathered in late summer when they start to ripen and turn brown – cut whole stems and put the seedhead in a paper bag, then hang the stems upside down until the seeds dry and drop. Remove any bits of stem, then store the seeds in an air-tight container. The seeds can be used ground or whole. "
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