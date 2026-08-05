// Author KANG CHENGXI, 261185R

(() => {
	const params = new URLSearchParams(window.location.search);
	const name = params.get('custname') || '';
	const email = params.get('custemail') || '';
	const notes = params.get('orderNotes') || '';
	const burgers = params.getAll('burgers');
	const qty1 = parseInt(params.get('qtyBurger1') || '0', 10);
	const qty2 = parseInt(params.get('qtyBurger2') || '0', 10);
	const qty3 = parseInt(params.get('qtyBurger3') || '0', 10);

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
	if (burgers.includes('Burger 1') && qty1 > 0) items.push({ name: 'Burger 1', qty: qty1 });
	if (burgers.includes('Burger 2') && qty2 > 0) items.push({ name: 'Burger 2', qty: qty2 });
	if (burgers.includes('Burger 3') && qty3 > 0) items.push({ name: 'Burger 3', qty: qty3 });

	if (items.length) {
		let list = '<h2>Order Summary</h2><ul>';
		items.forEach(it => { list += `<li>${it.name} — Qty: ${it.qty}</li>`; });
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