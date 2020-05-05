import $ from 'jquery';

$(document).ready( () => {
	console.log(document);
	$('#dots-icon').click( () => console.log('coucou') );
});