import React from "react";

import FeedInteractionsIcons from "./FeedInteractionsIcons";
import FeedLinePost from "./FeedLinePost";
import FeedDotsPopup from "./FeedDotsPopup";

import { toggleOptionsPopupDisplay } from "../../scripts/feed_script";
import { getDateFrom } from "../util/dataConverter";
import { getUser } from "../util/app_cookies";

const FeedLine = ({ element }) => {
    let id = element._id;
    let imageURL = 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
    let title = element.title;
    let postDate = element.dateAdded;
    let description = element.description;
    let city = element.city;
    let country = element.country;
    let eventDate = element.date;
    // TODO: change when it will be implemented
    let userId = getUser()._id;


    postDate = new Date( postDate );
    let date = getDateFrom('fr', postDate);

    const feedOptions =
        [
            { text: "Report", href: '/report/' + userId },
            // { text: "Delete event", href: '/' },
            { text: "See profile", href: '/profile/' + userId }
        ];

    const actionsOptions =
        [
            { text: 'modify', href: '/'},
            { text: "Delete", href: '/'}
        ];

    return (
        <div className='feedLine'>
            {
                (new URL(window.location.href).pathname === '/actions')
                ? <div id={'popup-' + id} style={{'display': 'none'}}> <FeedDotsPopup userId={userId} options={actionsOptions}/> </div>
                : <div id={'popup-' + id} style={{'display': 'none'}}> <FeedDotsPopup userId={userId} options={feedOptions}/> </div>
            }

            <div className='card p-2'>
                <div className='card-title d-flex flex-row align-items-baseline justify-content-between border-bottom'>
                    <div className='d-inline-flex align-items-baseline'>
                        <h1> { title }</h1>
                        <i className="fas fa-map-marker-alt ml-3 mr-1" style={{color: 'indianred'}}/>
                        <blockquote className='blockquote font-italic' style={{'fontSize':'.8em'}}> { city }, { country } </blockquote>
                    </div>
                    <div className='font-italic'> posté le { date } </div>

                    {
                        (new URL(window.location.href).pathname === '/actions')
                        ? <> </>
                        // ? <button className="transparent-button-popup" onClick={ () => toggleOptionsPopupDisplay( id )}> <i id='dots-icon' className="dots-icon fas fa-ellipsis-v m-2"/> </button>
                        : <button className="transparent-button-popup" onClick={ () => toggleOptionsPopupDisplay( id )}> <i id='dots-icon' className="dots-icon fas fa-ellipsis-v m-2"/> </button>
                    }
                </div>

                <FeedLinePost description = { description } imageURL = { imageURL } postDate={eventDate}/>
                <FeedInteractionsIcons id={ id } likes={ element.likes } dislikes={ element.dislikes } />
            </div>
        </div>
    )
};

export default FeedLine;