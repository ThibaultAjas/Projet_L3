import React from "react";

const FeedLine = ({image, title, date, description}) => {

    date = new Date(date);

    const ye = new Intl.DateTimeFormat('fr', {year: 'numeric'}).format(date);
    const mo = new Intl.DateTimeFormat('fr', {month: 'long'}).format(date);
    const da = new Intl.DateTimeFormat('fr', {day: '2-digit'}).format(date);
    const dt = `${da} ${mo} ${ye}`;

    return (
        <div className='card p-2'>
            <div className='card-title d-flex flex-row align-items-baseline justify-content-between border-bottom'>
                <h1>{ title }</h1>
                <div className='font-italic'> { dt } </div>
                <i id='dots-icon' className="fas fa-ellipsis-v m-2"/>
            </div>

            <div className='card-body text-muted p-0 pb-2 d-inline-flex overflow-hidden'>
                <img
                    id='event-pic'
                    src='https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    alt=''
                    className='pr-3'
                />
                <div id='description-div' className='flex-wrap'>
                    {description}
                </div>
            </div>

            <div className='d-flex flex-row align-items-baseline '>

                <div id='feed-interactions-div'>
                    <i id='like-icon' className="feed-interactions-icons far fa-thumbs-up mr-2"/>
                    <i id='dislike-icon' className="feed-interactions-icons far fa-thumbs-down mr-2"/>
                    <i id='comment-icon' className="feed-interactions-icons far fa-comments mr-2"/>

                    <span id='separator'/>

                    <i id='favorite-icon' className="feed-interactions-icons far fa-star mx-2"/>
                    <i id='share-icon' className="feed-interactions-icons fas fa-share mr-2"/>
                </div>

                <button className='btn btn-warning'> Plus..</button>
            </div>
        </div>
    )
};

export default FeedLine;