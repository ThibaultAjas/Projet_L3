import React from "react";

const FeedInteractionIcon = ({ name, icon, call }) => {
	return (
		<button className='transparent-button p-0' onClick={ () => call( name ) }>
			<i id={ name } className={ 'feed-interactions-icons mr-1 ' + icon }/>
		</button>
	);
};

export default FeedInteractionIcon;