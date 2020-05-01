import $ from 'jquery';

let timer;

$(document).ready( () => {

	const FEED_TOOLTIP = $('#tooltip-feed');
	const MAP_TOOLTIP = $('#tooltip-map');

	$('#swap-feed-button-map').mouseenter( () => {
		swap(MAP_TOOLTIP);
	}).mouseleave( () => {
		clearTimeout(timer);
		MAP_TOOLTIP.css('visibility', 'hidden');
	});

	$('#swap-feed-button-feed').mouseenter( () => {
		swap(FEED_TOOLTIP);
	}).mouseleave( () => {
		clearTimeout(timer);
		FEED_TOOLTIP.css('visibility', 'hidden');
	} );

	let swap = (tooltip) => {
		timer = setTimeout( () => tooltip.css('visibility', 'visible'), 1_000);
	};
});