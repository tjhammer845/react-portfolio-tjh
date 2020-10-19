import React from 'react';
import CardInfo from '../components/CardInfo';

function Card(props) {
    return (
        <div className="carousel-item g-card" onClick={(e) => props.click(props.item)}>
            <img className="g-card-image d-block" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />}
        </div>
    );
}

export default Card;