const animateAgendaItem = (items) => {
	for (let i = 0; i < items.length; i++) {
		if (!items[i].classList.contains('animated')) {
			items[i].style.visibility = 'visible';
			items[i].classList.add('animated');
			items[i].classList.add('bounceInLeft');
			items[i].classList.add('in');
			return;
		}
	}
}

let today = new Date();
let date = today.toLocaleDateString('en-us', {
	month: 'long',
	year: 'numeric',
	day: 'numeric'
});

(() => {
	document.getElementById('date').innerHTML = date;

	let agendaItems = document.getElementById('agendaContent').children;

	document.addEventListener('keyup', (e) => {
		if (e.keyCode === 102) {
			animateAgendaItem(agendaItems);
		}
	});
})();