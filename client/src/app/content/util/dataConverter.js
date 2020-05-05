const getDateFrom = ( country, date) => {

	const ye = new Intl.DateTimeFormat(country, { year: 'numeric' }).format( date );
	const mo = new Intl.DateTimeFormat(country, { month: 'long' }).format( date );
	const da = new Intl.DateTimeFormat(country, { day: '2-digit' }).format( date );

	return `${ da } ${ mo } ${ ye }`;
};

export default getDateFrom;