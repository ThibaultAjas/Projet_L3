import $ from 'jquery';

const POPUP = '#popup-';
const LIKE = 'rgb(30, 144, 255)';
const DISLIKE = 'rgb(255, 0, 0)';

let currentId = null;

/* exit the popup on click */
$(document).click( () => {
	if ($(POPUP + currentId).css('display') !== 'none') {
		$(POPUP + currentId).css('display', 'none');
	}
});

/* toggle display of the popup */
const toggleOptionsPopupDisplay = ( id ) => {
	currentId = id;
	$(POPUP + id).toggle();
};

const like = ( icon, id ) => {
	let queryIcon = $('#' + icon);
	let isColored = queryIcon.css('color') === LIKE;

	queryIcon.css('color', (isColored) ? 'black' : LIKE);
};

const dislike = ( icon, id ) => {
	let queryIcon = $('#' + icon);
	let isColored = queryIcon.css('color') === DISLIKE;

	queryIcon.css('color', (isColored) ? 'black' : DISLIKE);
};

const comment = ( id ) => {
};

const share = ( id ) => {
} ;

export { toggleOptionsPopupDisplay, like, dislike, comment, share };