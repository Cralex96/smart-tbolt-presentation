(() => {
	let today = new Date();
	let date = today.toLocaleDateString('en-us', {
		month: 'long',
		year: 'numeric',
		day: 'numeric'
	});

	document.getElementById('date').innerHTML = date;
})();