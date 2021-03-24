// import Dress from './dress.png';
// import Skirt from "./skirt.png";
import TinderCard from "react-tinder-card";
import React, { useState} from "react";
import "./WardrobeCards.css";

function WardrobeCards () {
    const [clothes, setClothes] = useState( [
        {
            name: "Asos dress",
            url:"https://img.pikbest.com/png-images/qianku/pink-bright-skirt-painting_2168355.png!bw800"
        },
        {
            name: "Zara skirt",
            url:"https://img.pikbest.com/png-images/qianku/pink-bright-skirt-painting_2168355.png!bw800"
 
        }
    ]);

    return (
        <div>
            <div className="wardrobeCards_cardContainer">
                {clothes.map((clothes) => (
                    <TinderCard 
                        className="swipe"
                        key={clothes.name}
                        preventSwipe={["up", "down"]}
                    >  
                    <div
                        style={{backgroundImage: `url(${clothes.url})` }}
                        className="card"
                    >
                        <h3>{clothes.name}</h3>
                    </div>   
                    </TinderCard>
                ))}
           </div>
        </div>       
    );
}

export default WardrobeCards;