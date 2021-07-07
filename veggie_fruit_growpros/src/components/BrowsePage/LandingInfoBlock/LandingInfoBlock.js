import './LandingInfoBlock.css'

const LandingInfoBlock = ({infoHead,infoBody}) => {

    let arr1=
[
    `Do you fancy learning how to grow your own fruitand vegetables? \nWe are here to help you get into growing some crops!\nWhether you're a complete beginner or your fingers are green, please check out our easy to follow introductions to growing your own fruit and vegetables.`,

    "Dont want water your plants today. \n 'plants under the Weather', Why not check our weather forcast app to spy for rain ;) "
]



    infoBody===true?infoBody=arr1[0]:infoBody=arr1[1]



    return ( 
        <section className="landing-info">
            <div className="landing-info-text-container">
                <h2 className="landing-info-title">{infoHead}</h2>
                <p className="landing-info-text">{infoBody}</p>
            </div>
        </section>
     );
}
 
export default LandingInfoBlock;