import React from "react";
import FeedLine from "./FeedLine";

import '../../../stylesheets/feed.css';

const Feed = () => {
	return (
		<div className='p-5 mx-lg-5 mx-md-2 mx-sm-2 feed'>
			{
				[...Array(10)].map( (element, index) => <FeedLine
					image='https://www.opengovguide.com/wp-content/uploads/2019/07/rw-a-tool-for-sustainable-land-use-management-in-rwanda-homepage-780x439.jpg'
					title='Title' descr='description'/> )
			}
		</div>
	);
};

export default Feed;