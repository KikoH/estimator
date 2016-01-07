var total = 0;
var lastBigTitle;
var lastBigTitlePrice = 0;

var lastTitle;
var lastTitlePrice;

$(document).ready(function() {
	$('.test').click(function (event) {
		event.preventDefault();

		$('.total').text(total);
	});
});

function addPrice(title, price) {
	console.log("first"+ title);
	if (title === lastBigTitle) {
		alert("Do nothing");
	}else {
		total -= lastBigTitlePrice;
		total += price;
		alert(total);
	}
	lastBigTitle = title;
	lastBigTitlePrice = price;
};

function addPrice2(title, price) {
	console.log("second"+ title);
	if (title === lastTitle) {
		alert("Do nothing");
	}else {
		// total -= lastTitlePrice;
		total += price;
		alert(total);
	}
	lastTitle = title;
	lastTitlePrice = price;
};