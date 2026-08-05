// Author KANG CHENGXI, 261185R

(() => {
	const params = new URLSearchParams(window.location.search);
	const name = params.get('custname') || '';
	const email = params.get('custemail') || '';
	const setmeal = params.get('setmeal') || '';
	const main = params.get('main') || '';
	const side = params.get('side') || '';
	const drinks = params.get('drinks') || '';
	const notes = params.get('orderNotes') || '';

	const heading = document.querySelector('h1');
	if (name) {
		heading.textContent = `Thank you for your order, ${name}!`;
	}

	const container = document.getElementById('order-summary');
	if (!params.toString()) {
		container.innerHTML = '<p><em>What did you expect to see here?</em></p>';
		return;
	}

	const parts = [];
	if (email) parts.push(`<p><strong>Email:</strong> ${email}</p>`);

	const items = [];
	if (setmeal) items.push({ label: 'Set meal', value: setmeal });
	if (main) items.push({ label: 'Burger', value: main });
	if (side) items.push({ label: 'Side', value: side });
	if (drinks) items.push({ label: 'Drink', value: drinks });

	if (items.length) {
		let list = '<h2>Order Summary</h2><ul>';
		items.forEach(it => { list += `<li><strong>${it.label}:</strong> ${it.value}</li>`; });
		list += '</ul>';
		parts.push(list);
	} else {
		parts.push('<p><em>No items selected.</em></p>');
	}

	if (notes) parts.push(`<p><strong>Notes:</strong> ${notes}</p>`);
	container.innerHTML = parts.join('\n');

	const countdownEl = document.getElementById('countdown');
	let seconds = 10;
	const intervalId = setInterval(() => {
		seconds -= 1;
		if (seconds <= 0) {
			clearInterval(intervalId);
			window.location.href = 'products.html';
			return;
		}
		countdownEl.textContent = seconds;
	}, 1000);
})();