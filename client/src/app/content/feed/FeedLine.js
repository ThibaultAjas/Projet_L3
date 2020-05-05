import React from "react";

import FeedInteractionsIcons from "./FeedInteractionsIcons";
import FeedLinePost from "./FeedLinePost";
import FeedDotsPopup from "./FeedDotsPopup";

import { toggleOptionsPopupDisplay } from "../../scripts/feed_script";

const FeedLine = ({ id, imageURL, title, date, description }) => {

    date = new Date( date );

    const ye = new Intl.DateTimeFormat('fr', { year: 'numeric' }).format( date );
    const mo = new Intl.DateTimeFormat('fr', { month: 'long' }).format( date );
    const da = new Intl.DateTimeFormat('fr', { day: '2-digit' }).format( date );
    const dt = `${ da } ${ mo } ${ ye }`;

    return (
        <div className='feedLine'>
            <div id={'popup-' + id} style={{'display': 'none'}}> <FeedDotsPopup /> </div>

            <div className='card p-2'>
                <div className='card-title d-flex flex-row align-items-baseline justify-content-between border-bottom'>
                    <h1> { title } </h1>
                    <div className='font-italic'> { dt } </div>
                    <button className="transparent-button-popup" onClick={ () => toggleOptionsPopupDisplay( id )}> <i id='dots-icon' className="dots-icon fas fa-ellipsis-v m-2"/> </button>
                </div>

                <FeedLinePost description = { description } imageURL = { imageURL }/>
                <FeedInteractionsIcons id={id}/>
            </div>
        </div>
    )
};

export default FeedLine;