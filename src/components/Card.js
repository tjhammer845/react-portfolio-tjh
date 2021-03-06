import React, { useState } from 'react';
import { BrowserView, MobileView } from "react-device-detect";
import CardInfo from '../components/CardInfo';
import { CSSTransitionGroup } from 'react-transition-group' // ES6

function Card(props) {
    const [isShown, setIsShown] = useState(false);

    return (
        <CSSTransitionGroup
            transitionName='g-card-info'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            <BrowserView>
                <div className='d-inline-block g-card' onClick={(e) => props.click(props.item)}
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>
                    <img className='g-card-image' src={props.item.imgSrc} alt={props.item.imgSrc} />
                    {(isShown) && (
                        <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />
                    )}
                </div>
            </BrowserView>
            <MobileView>
                <div className='d-inline-block g-card' onClick={(e) => props.click(props.item)}>
                    <img className='g-card-image' src={props.item.imgSrc} alt={props.item.imgSrc} />
                    {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />}
                </div>
            </MobileView>
        </CSSTransitionGroup >
    );
}

export default Card;