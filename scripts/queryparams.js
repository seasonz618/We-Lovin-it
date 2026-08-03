// Literally just the code from the practical but I'll put it here for now

const data = new URLSearchParams(window.location.search);

const name = data.get("custname") || "custname";
const size = data.get("size")     || "size";
const drink = data.get("drink")    || "drink";

const box = document.getElementById("summary");
if (data.toString() === "") {
    box.textContent = "Tip: submit the order form to see your order appear here.";
} else {
    box.textContent = `Thanks ${name}! Your ${size} ${drink} order is confirmed.`;
}
