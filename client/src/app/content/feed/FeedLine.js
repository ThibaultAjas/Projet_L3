import React from "react";

const FeedLine = ({image, title, date, description}) => {

    date = new Date(date)

    const ye = new Intl.DateTimeFormat('en', {year: 'numeric'}).format(date);
    const mo = new Intl.DateTimeFormat('en', {month: 'long'}).format(date);
    const da = new Intl.DateTimeFormat('en', {day: '2-digit'}).format(date);
    const dt = `${da}-${mo}-${ye}`;

    return (
        <div className='card d-flex flex-row bg-secondary text-white'>
            <img src={image} alt='not found'/>

            <div className='p-3 d-flex flex-column justify-content-between w-100'>
                <h1 className='card-title text-center'>{title}</h1>
                {dt}
                {description}

                <div className='d-flex flex-row justify-content-end'>
                    <a href='#' className='btn btn-warning'> Plus.. </a>
                </div>
            </div>
        </div>
    )
};

export default FeedLine;