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
        <div className='card'>
            <div className='car sedan'>
                <Column  image = {sedansIcon}  title = "SEDANS" text = {sedanText} cta = "Learn More"/>
            </div>
            <div className='car suvs'>
                <Column  image = {suvsIcon}  title = "SUVS" text = {suvsText} cta = "Learn More"/>
            </div>
            <div className='car luxury'>
                <Column  image = {luxuryIcon}  title = "LUXURY" text = {luxuryText} cta = "Learn More"/>
            </div>
        </div>
    );
}

export default Card;
