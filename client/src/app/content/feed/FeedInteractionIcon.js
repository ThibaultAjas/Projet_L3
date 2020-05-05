import React, { useState } from "react";


const FeedInteractionIcon = ({ name, icon, call, value }) => {
	// TODO: change it depending if the user liked it or nah, not with pure boolean
	let alreadyPressed = false;

	let [currentValue, setCurrentValue] = useState(value);

	let updateValue = () => {
		if (alreadyPressed) { setCurrentValue( currentValue - 1 );
		} else setCurrentValue( currentValue + 1 );

		alreadyPressed = true;
	};

	return (
		<span className='d-inline-flex align-items-baseline'>
			<p className='ml-1'> { currentValue } </p>

			<button className='transparent-button p-0' onClick={ () => { call( name ); updateValue(); } }>
				<i id={ name } className={ 'feed-interactions-icons mr-1 ' + icon }/>
			</button>
		</span>
	);
};

export default FeedInteractionIcon;