var total = 0;

var lastBigTitle;
var lastBigTitlePrice = 0;

var lastTitle;
var lastTitlePrice = 0;

$(document).ready(function() {
	$('.img-circle').click(function (event) {
		event.preventDefault();
	});

	if ($(window).width() < 750) {
		$('.bottomios').hide();
		$('.bottomandroid').hide();
	}

	$('.nav-tabs a').click(function(){
		var className = this.className;
		hideTab(className);
	});

	$('[data-toggle="popover"]').popover({
		placement : 'bottom',
		trigger: 'hover'
	});
});

function hideTab(tab) {
	if (tab === 'web') {
		$('.bottomweb').show();
		$('.bottomios').hide();
		$('.bottomandroid').hide();
	}else if (tab === 'ios'){
		$('.bottomios').show();
		$('.bottomweb').hide();
		$('.bottomandroid').hide();
	}else if (tab === 'android'){
		$('.bottomandroid').show();
		$('.bottomios').hide();
		$('.bottomweb').hide();
	}
}

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
	updatePrice();
};

function addPrice2(title, price) {
	console.log("second"+ title);
	if (title === lastTitle) {
		alert("Do nothing");
	}else {
		total -= lastTitlePrice;
		total += price;
		alert(total);
	}
	lastTitle = title;
	lastTitlePrice = price;
	updatePrice();
};

function updatePrice() {
	$('.total').text(total);
};

// On resizing hide and show the bottom tab depending on screen size
$(window).resize(function() {
	if ($(window).width() < 750) {
		$('.bottomios').hide();
		$('.bottomandroid').hide();
	}
	else {
		$('.bottomios').show();
		$('.bottomandroid').show();
		$('.bottomweb').show();
	}
});

