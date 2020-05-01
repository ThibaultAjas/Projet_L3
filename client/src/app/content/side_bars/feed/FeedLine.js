import React from "react";

const FeedLine = ( {image, title, descr} ) => {
	return (
		<div className='card d-flex flex-row bg-secondary text-white'>
			<img src={image} alt='image not found'/>

			<div className='p-3 d-flex flex-column justify-content-between w-100'>
				<h1 className='card-title text-center'>{title}</h1>
				{descr}

				<div className='d-flex flex-row justify-content-end'>
					<a href='' className='btn btn-warning'> Plus.. </a>
				</div>
			</div>
		</div>
	)
};

export default FeedLine;