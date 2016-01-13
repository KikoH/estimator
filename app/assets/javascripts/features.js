var totalPrice = 0;
var totalPriceWeb = 0;
var totalPriceIos = 0;
var totalPriceAndroid = 0;

//  Web values
var lastBigSelectedWeb;
var lastBigPriceWeb = 0;
var totalBigPriceWeb = 0;

var lastUiSelectedWeb;
var lastUiPriceWeb = 0;
var totalUiPriceWeb = 0;

// IOS values
var lastBigSelectedIos;
var lastBigPriceIos = 0;
var totalBigPriceIos = 0;

var lastUiSelectedIos;
var lastUiPriceIos = 0;
var totalUiPriceIos = 0;

$(document).ready(function() {
	$('.img-circle').click(function (event) {
		event.preventDefault();
		checkMark($(this));
		showPlatformTotal($(this));
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

function addPrice(title, price, name, that) {
	if ($(that).parents('#web').length) {

		if (name === "big"){
			if (that === lastBigSelectedWeb){
				if (totalBigPriceWeb !== 0){
					totalBigPriceWeb -= price;
				}else {
					totalBigPriceWeb += price;
				}
			}else {
				if (totalBigPriceWeb !== 0){
					totalBigPriceWeb -= lastBigPriceWeb;
				}
				totalBigPriceWeb += price;
			}
			lastBigSelectedWeb = that;
			lastBigPriceWeb = price;
		}

		if (name === "uilevel"){
			if (that === lastUiSelectedWeb){
				if (totalUiPriceWeb !== 0){
					totalUiPriceWeb -= price;
				}else {
					totalUiPriceWeb += price;
				}
			}else {
				if (totalUiPriceWeb !== 0){
					totalUiPriceWeb -= lastUiPriceWeb;
				}
				totalUiPriceWeb += price;
			}
			lastUiSelectedWeb = that;
			lastUiPriceWeb = price;
		}
			totalPriceWeb = totalBigPriceWeb + totalUiPriceWeb

	}else if ($(that).parents('#ios').length) {

		if (name === "big"){
			if (that === lastBigSelectedIos){
				if (totalBigPriceIos !== 0){
					totalBigPriceIos -= price;
				}else {
					totalBigPriceIos += price;
				}
			}else {
				if (totalBigPriceIos !== 0){
					totalBigPriceIos -= lastBigPriceIos;
				}
				totalBigPriceIos += price;
			}
			lastBigSelectedIos = that;
			lastBigPriceIos = price;
		}

		if (name === "uilevel"){
			if (that === lastUiSelectedIos){
				if (totalUiPriceIos !== 0){
					totalUiPriceIos -= price;
				}else {
					totalUiPriceIos += price;
				}
			}else {
				if (totalUiPriceIos !== 0){
					totalUiPriceIos -= lastUiPriceIos;
				}
				totalUiPriceIos += price;
			}
			lastUiSelectedIos = that;
			lastUiPriceIos = price;
		}
			totalPriceIos = totalBigPriceIos + totalUiPriceIos
	}
		totalPrice = totalPriceWeb + totalPriceIos
		updatePrice(totalPrice);
};

function updatePrice(total) {
	$('.totalPriceWeb').text(totalPriceWeb);
	$('.totalPriceIos').text(totalPriceIos);
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

function showPlatformTotal(thisObj) {
	if ( $(thisObj).parents('.web').length ){
		$('.bottom-web').hide();
		$('.bottom-web-after').attr('style','display: block !important');
	}

	if ( $(thisObj).parents('.ios').length ){
		$('.bottom-ios').hide();
		$('.bottom-ios-after').attr('style','display: block !important');
	}

	if ( $(thisObj).parents('.android').length ){
		$('.bottom-android').hide();
		$('.bottom-android-after').attr('style','display: block !important');
	}
}