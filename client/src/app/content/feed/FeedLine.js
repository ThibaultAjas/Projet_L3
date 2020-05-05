import React from "react";

import FeedInteractionsIcons from "./FeedInteractionsIcons";
import FeedLinePost from "./FeedLinePost";
import FeedDotsPopup from "./FeedDotsPopup";

import { toggleOptionsPopupDisplay } from "../../scripts/feed_script";
import getDateFrom from "../util/dataConverter";

const FeedLine = ({ id, imageURL, title, postDate, description, city, country }) => {

    postDate = new Date( postDate );
    let date = getDateFrom('fr', postDate);

    return (
        <div className='feedLine'>
            <div id={'popup-' + id} style={{'display': 'none'}}> <FeedDotsPopup /> </div>

            <div className='card p-2'>
                <div className='card-title d-flex flex-row align-items-baseline justify-content-between border-bottom'>
                    <div className='d-inline-flex align-items-baseline'>
                        <h1> { title }</h1>
                        <i className="fas fa-map-marker-alt ml-3 mr-1" style={{color: 'indianred'}}/>
                        <blockquote className='blockquote font-italic' style={{'font-size':'.8em'}}> { city }, { country } </blockquote>
                    </div>
                    <div className='font-italic'> posté le { date } </div>
                    <button className="transparent-button-popup" onClick={ () => toggleOptionsPopupDisplay( id )}> <i id='dots-icon' className="dots-icon fas fa-ellipsis-v m-2"/> </button>
                </div>

                <FeedLinePost description = { description } imageURL = { imageURL } postDate={postDate}/>
                <FeedInteractionsIcons id={id}/>
            </div>
        </div>
    )
};

export default FeedLine;