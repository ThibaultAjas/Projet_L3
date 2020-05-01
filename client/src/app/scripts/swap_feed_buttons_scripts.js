import $ from 'jquery';

$(document).ready( () => {
	$('#swap-feed-button-map').hover( () => {
		let tooltip = $('#tooltip-map');
		swap(tooltip);
	} );

	$('#swap-feed-button-feed').hover( () => {
		let tooltip = $('#tooltip-feed');
		swap(tooltip);
	});

	let swap = (tooltip) => {
		let visibility = tooltip.css('visibility');

			if (visibility === 'hidden' ) {
				setTimeout( () => tooltip.css('visibility', 'visible'), 1_000);
			} else {
				tooltip.css('visibility', 'hidden');
			}
	};
});