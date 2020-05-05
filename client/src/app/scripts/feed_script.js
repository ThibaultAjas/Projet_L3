import $ from 'jquery';

const POPUP = '#popup-';

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

const bigIcon = ( icon_id ) => {
	console.log($('#' + icon_id));
};

const like = () => {
	console.log('coude');
};

export { toggleOptionsPopupDisplay, bigIcon, like };