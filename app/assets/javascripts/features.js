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

// Android Values
var lastBigSelectedAndroid;
var lastBigPriceAndroid = 0;
var totalBigPriceAndroid = 0;

var lastUiSelectedAndroid;
var lastUiPriceAndroid = 0;
var totalUiPriceAndroid = 0;


$(document).ready(function() {
	$('.img-circle').click(function (event) {
		event.preventDefault();
		checkMark($(this));
		showPlatformTotal($(this));
	});

	if ($(window).width() < 750) {
		$('.bottom-ios').hide();
		$('.bottom-android').hide();
	}

	$('.nav-tabs a').click(function(e){
		var className = this.className;
		if ($(window).width() < 750) {
			hideTab(className);
		};
		if(className === 'web' || className === 'bottom-web'){
			e.preventDefault();
			$('a.web').tab('show');
		}
		if(className === 'ios' || className === 'bottom-ios'){
			e.preventDefault();
			$('a.ios').tab('show');
		}
		if(className === 'android' || className === 'bottom-android'){
			e.preventDefault();
			$('a.android').tab('show');
		}
	});

	$('[data-toggle="popover"]').popover({
		placement : 'bottom',
		trigger: 'hover'
	});
});

function hideTab(tab) {
	if (tab === 'web') {
		$('.bottom-web').show();
		$('.bottom-ios').hide();
		$('.bottom-android').hide();
	}else if (tab === 'ios'){
		$('.bottom-ios').show();
		$('.bottom-web').hide();
		$('.bottom-android').hide();
	}else if (tab === 'android'){
		$('.bottom-android').show();
		$('.bottom-ios').hide();
		$('.bottom-web').hide();
	}
}

function addPrice(title, price, name, that) {
	if ($(that).parents('#web').length) {  // Web Section

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

	}else if ($(that).parents('#ios').length) { // IOS Section

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
	}else if ($(that).parents('#android').length) {  // ANDROID Section

		if (name === "big"){
			if (that === lastBigSelectedAndroid){
				if (totalBigPriceAndroid !== 0){
					totalBigPriceAndroid -= price;
				}else {
					totalBigPriceAndroid += price;
				}
			}else {
				if (totalBigPriceAndroid !== 0){
					totalBigPriceAndroid -= lastBigPriceAndroid;
				}
				totalBigPriceAndroid += price;
			}
			lastBigSelectedAndroid = that;
			lastBigPriceAndroid = price;
		}

		if (name === "uilevel"){
			if (that === lastUiSelectedAndroid){
				if (totalUiPriceAndroid !== 0){
					totalUiPriceAndroid -= price;
				}else {
					totalUiPriceAndroid += price;
				}
			}else {
				if (totalUiPriceAndroid !== 0){
					totalUiPriceAndroid -= lastUiPriceAndroid;
				}
				totalUiPriceAndroid += price;
			}
			lastUiSelectedAndroid = that;
			lastUiPriceAndroid = price;
		}
		totalPriceAndroid = totalBigPriceAndroid + totalUiPriceAndroid
	}
	totalPrice = totalPriceWeb + totalPriceIos + totalPriceAndroid
	updatePrice(totalPrice);
};

function updatePrice(total) {
	$('.totalPriceWeb').text(totalPriceWeb);
	$('.totalPriceIos').text(totalPriceIos);
	$('.totalPriceAndroid').text(totalPriceAndroid);
	$('.total').text(total);
};

// On resizing hide and show the bottom tab depending on screen size
$(window).resize(function() {
	if ($(window).width() < 750) {
		$('li .active').show();
		$('.bottom-ios').hide();
		$('.bottom-android').hide();
	}
	else {
		$('.bottom-ios').show();
		$('.bottom-android').show();
		$('.bottom-web').show();
	}
});


function checkMark(thisObj) {

	// WEB Section
	if (thisObj.parents('#web').length){
	// Size feature container
	if (thisObj.parents('.size').length){
		if (thisObj.hasClass('isSelected')) {
			thisObj.parent().removeClass('checkmark');
			thisObj.removeClass('isSelected');
		}else {
			if ($('#web div.size img').hasClass('isSelected')){
				$('.size img').parent().removeClass('checkmark');
				$('.size img').removeClass('isSelected');
			}
			thisObj.addClass('isSelected');
			thisObj.parent().addClass('checkmark');
		}
	};

		//Ui feature container
		if (thisObj.parents('.uilevel').length){
			if (thisObj.hasClass('isSelected')) {
				thisObj.removeClass('isSelected');
				thisObj.parent().removeClass('checkmark');
			}else {
				if ($('#web div.uilevel img').hasClass('isSelected')){
					$('.uilevel img').parent().removeClass('checkmark');
					$('.uilevel img').removeClass('isSelected');
				}
				thisObj.addClass('isSelected');
				thisObj.parent().addClass('checkmark');
			};
		};
	};

	//  IOS section
	if (thisObj.parents('#ios').length){
	// Size feature container
	if (thisObj.parents('.size').length){
		if (thisObj.hasClass('isSelected')) {
			thisObj.parent().removeClass('checkmark');
			thisObj.removeClass('isSelected');
		}else {
			if ($('#ios div.size img').hasClass('isSelected')){
				$('.size img').parent().removeClass('checkmark');
				$('.size img').removeClass('isSelected');
			}
			thisObj.addClass('isSelected');
			thisObj.parent().addClass('checkmark');
		}
	};

		//Ui feature container
		if (thisObj.parents('.uilevel').length){
			if (thisObj.hasClass('isSelected')) {
				thisObj.removeClass('isSelected');
				thisObj.parent().removeClass('checkmark');
			}else {
				if ($('#ios div.uilevel img').hasClass('isSelected')){
					$('.uilevel img').parent().removeClass('checkmark');
					$('.uilevel img').removeClass('isSelected');
				}
				thisObj.addClass('isSelected');
				thisObj.parent().addClass('checkmark');
			};
		};
	};

	// ANDROID Section
	if (thisObj.parents('#android').length){
	// Size feature container
	if (thisObj.parents('.size').length){
		if (thisObj.hasClass('isSelected')) {
			thisObj.parent().removeClass('checkmark');
			thisObj.removeClass('isSelected');
		}else {
			if ($('#android div.size img').hasClass('isSelected')){
				$('.size img').parent().removeClass('checkmark');
				$('.size img').removeClass('isSelected');
			}
			thisObj.addClass('isSelected');
			thisObj.parent().addClass('checkmark');
		}
	};

		//Ui feature container
		if (thisObj.parents('.uilevel').length){
			if (thisObj.hasClass('isSelected')) {
				thisObj.removeClass('isSelected');
				thisObj.parent().removeClass('checkmark');
			}else {
				if ($('#android div.uilevel img').hasClass('isSelected')){
					$('.uilevel img').parent().removeClass('checkmark');
					$('.uilevel img').removeClass('isSelected');
				}
				thisObj.addClass('isSelected');
				thisObj.parent().addClass('checkmark');
			};
		};
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