import $ from 'jquery';

$(document).ready( () => {
	console.log($("#like-icon").length);

	const like = $("#like-icon");
	$(like).click( () => console.log("non"));
});