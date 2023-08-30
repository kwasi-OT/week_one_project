import React from 'react';
import Column from './Column';
import luxury from "../images/icon-luxury.svg";
import sedans from "../images/icon-sedans.svg";
import suvs from "../images/icon-suvs.svg";

function Card() {
    const luxuryIcon = <img src= {luxury} alt='luxury icon'/>
    const suvsIcon = <img src= {suvs} alt='suvs icon'/>
    const sedansIcon = <img src= {sedans} alt='sedans'/>

    const sedanText = "Choose a sedan for it's affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.";

    const suvsText = "Take an SUV for it's spacious interior, power and versatility. Perfect for your next family vacation and off-road adventures.";

    const luxuryText = "Cruise in the best car brands without the bloated prices.Enjoy the enhanced comfort of a luxury rental and arrive in style.";

    return (
        <>
        <div>
            <Column  image = {sedansIcon}  title = "sedans" text = {sedanText} button = "Learn More"/>
        </div>
        <div>
            <Column  image = {suvsIcon}  title = "suvs" text = {suvsText} button = "Learn More"/>
        </div>
        <div>
            <Column  image = {luxuryIcon}  title = "luxury" text = {luxuryText} button = "Learn More"/>
        </div>
        </>
    );
}

export default Card;
