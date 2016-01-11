var total = 0;

var lastBigTitle;
var lastBigTitlePrice = 0;

var lastTitle;
var lastTitlePrice = 0;

$(document).ready(function() {
	$('.img-circle').click(function (event) {
		event.preventDefault();
		checkMark($(this));
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
	if (title === lastBigTitle) {
		total -= price;
	}else {
		if (total !== 0){
			total -= lastBigTitlePrice;
		}
		total += price;
	}
	lastBigTitle = title;
	lastBigTitlePrice = price;
	updatePrice();
};

function addPrice2(title, price) {
	if (title === lastTitle) {
		total -= price;
	}else {
		if (total !== 0){
			total -= lastTitlePrice;
		}
		total += price;
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


function checkMark(thisObj) {
	// Size feature container
	if (thisObj.parents('#size').length){
		if (thisObj.hasClass('isSelected')) {
			thisObj.parent().removeClass('checkmark');
			thisObj.removeClass('isSelected');
		}else {
			if ($('#size img').hasClass('isSelected')){
				$('#size img').parent().removeClass('checkmark');
				$('#size img').removeClass('isSelected');
			}
			thisObj.addClass('isSelected');
			thisObj.parent().addClass('checkmark');
		}
	};

	//Ui feature container
	if (thisObj.parents('#uilevel').length){
		if (thisObj.hasClass('isSelected')) {
			thisObj.removeClass('isSelected');
			thisObj.parent().removeClass('checkmark');
		}else {
			if ($('#uilevel img').hasClass('isSelected')){
				$('#uilevel img').parent().removeClass('checkmark');
				$('#uilevel img').removeClass('isSelected');
			}
			thisObj.addClass('isSelected');
			thisObj.parent().addClass('checkmark');
		}
	};
};