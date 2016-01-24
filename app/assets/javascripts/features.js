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

var totalPrice = 0;

//Web Values
var totalPriceWeb = 0;
var totalDevDaysWeb = 0;
var totalDesDaysWeb = 0;

// 1.Size Values
var bigTotalWeb = 0;
var bigTotalDevDaysWeb = 0;
var bigTotalDesDaysWeb = 0;
var bigObjWeb = {};

// 2.Ui Level Values
var uiTotalWeb = 0;
var uiObjWeb = {};
var uiTotalDevDaysWeb = 0;
var uiTotalDesDaysWeb = 0;

// 3.Account Values
var accountObjWeb = {};
var accountTotalWeb = 0;
var accountTotalDevDaysWeb = 0;
var accountTotalDesDaysWeb = 0;

// 4.User Generated content
var ugObjWeb = {};
var ugTotalWeb = 0;
var ugTotalDevDaysWeb = 0;
var ugTotalDesDaysWeb = 0;

// 5.Dates & location
var locationObjWeb = {};
var locationTotalWeb = 0;
var locationTotalDevDaysWeb = 0;
var locationTotalDesDaysWeb = 0;

// 6.Social & Engagement
var socialObjWeb = {};
var socialTotalWeb = 0;
var socialTotalDevDaysWeb = 0;
var socialTotalDesDaysWeb = 0;

// 7.
// 8.
// 9.
// 10.

// IOS Values
var totalPriceIos = 0;
var totalDevDaysIos = 0;
var totalDesDaysIos = 0;

var bigTotalIos = 0;
var bigTotalDevDaysIos = 0;
var bigTotalDesDaysIos = 0;
var bigObjIos = {};

var uiTotalIos = 0;
var uiTotalDevDaysIos = 0;
var uiTotalDesDaysIos = 0;
var uiObjIos = {};

// 3.Account Values
var accountObjIos = {};
var accountTotalIos = 0;
var accountTotalDevDaysIos = 0;
var accountTotalDesDaysIos = 0;

// 4.User Generated content
var ugContentObjIos = {};
var ugContentTotalIos = 0;
var ugTotalDevDaysIos = 0;
var ugTotalDesDaysIos = 0;

// 5.Dates & location
var locationObjIos = {};
var locationTotalIos = 0;
var locationTotalDevDaysIos = 0;
var locationTotalDesDaysIos = 0;

// 6.Social & Engagement
var socialObjIos = {};
var socialTotalIos = 0;
var socialTotalDevDaysIos = 0;
var socialTotalDesDaysIos = 0;

// Android Values
var totalPriceAndroid = 0;
var totalDevDaysAndroid = 0;
var totalDesDaysAndroid = 0;

var bigTotalAndroid = 0;
var bigTotalDevDaysAndroid = 0;
var bigTotalDesDaysAndroid = 0;
var bigObjAndroid = {};

var uiTotalAndroid = 0;
var uiTotalDevDaysAndroid = 0;
var uiTotalDesDaysAndroid = 0;
var uiObjAndroid = {};

var ugContentObjAndroid = {};
var ugContentTotalAndroid = 0;

// 4.User Generated content
var ugContentObjAndroid = {};
var ugContentTotalAndroid = 0;
var ugTotalDevDaysAndroid = 0;
var ugTotalDesDaysAndroid = 0;

// 5.Dates & location
var locationObjAndroid = {};
var locationTotalAndroid = 0;
var locationTotalDevDaysAndroid = 0;
var locationTotalDesDaysAndroid = 0;

// 6.Social & Engagement
var socialObjAndroid = {};
var socialTotalAndroid = 0;
var socialTotalDevDaysAndroid = 0;
var socialTotalDesDaysAndroid = 0;

function updateTotal(price, name, devDays, desDays, id, that) {
	if ($(that).parents('#web').length) {
		if (name === 'big'){
			if (bigObjWeb[id] === price) {
				delete bigObjWeb[id];
				bigTotalWeb = 0;
				bigTotalDevDaysWeb = 0;
				bigTotalDesDaysWeb = 0;
			} else {
				bigObjWeb = {};
				bigObjWeb[id] = price;
				bigTotalWeb = bigObjWeb[id];
				bigTotalDevDaysWeb = devDays;
				bigTotalDesDaysWeb = desDays;
			}
		}
		if (name === 'uilevel'){
			if (uiObjWeb[id] === price) {
				delete uiObjWeb[id];
				uiTotalWeb = 0;
				uiTotalDevDaysWeb = 0;
				uiTotalDesDaysWeb = 0;
			} else {
				uiObjWeb = {};
				uiObjWeb[id] = price;
				uiTotalWeb = uiObjWeb[id];
				uiTotalDevDaysWeb = devDays;
				uiTotalDesDaysWeb = desDays;
			}
		}

		if (name === "account"){
			if ($('img', that).hasClass('isSelected')) {
				accountTotalWeb -= accountObjWeb[id];
				delete accountObjWeb[id];
				$('img', that).removeClass('isSelected');
				$(that).parent().removeClass('checkmark');
			} else {
				accountObjWeb[id] = price;
				accountTotalWeb += price;
				$('img', that).addClass('isSelected');
				$(that).parent().addClass('checkmark');
			}
		}

		if (name === "ugcontent"){
			if ($('img', that).hasClass('isSelected')) {
				ugTotalWeb -= ugObjWeb[id];
				delete ugObjWeb[id];
				$('img', that).removeClass('isSelected');
				$(that).parent().removeClass('checkmark');
			} else {
				ugObjWeb[id] = price;
				ugTotalWeb += price;
				$('img', that).addClass('isSelected');
				$(that).parent().addClass('checkmark');
			}
		}

		if (name === "location"){
			if ($('img', that).hasClass('isSelected')) {
				locationTotalWeb -= locationObjWeb[id];
				delete locationObjWeb[id];
				$('img', that).removeClass('isSelected');
				$(that).parent().removeClass('checkmark');
			} else {
				locationObjWeb[id] = price;
				locationTotalWeb += price;
				$('img', that).addClass('isSelected');
				$(that).parent().addClass('checkmark');
			}
		}

		if (name === "social"){
			if ($('img', that).hasClass('isSelected')) {
				socialTotalWeb -= socialObjWeb[id];
				delete socialObjWeb[id];
				$('img', that).removeClass('isSelected');
				$(that).parent().removeClass('checkmark');
			} else {
				socialObjWeb[id] = price;
				socialTotalWeb += price;
				$('img', that).addClass('isSelected');
				$(that).parent().addClass('checkmark');
			}
		}

		totalPriceWeb = bigTotalWeb + uiTotalWeb + accountTotalWeb + ugTotalWeb + locationTotalWeb + socialTotalWeb;
		totalDevDaysWeb = bigTotalDevDaysWeb + uiTotalDevDaysWeb;
		totalDesDaysWeb = bigTotalDesDaysWeb + uiTotalDesDaysWeb;

		$('.total-price-web').text(totalPriceWeb);
		$('.developer-days-web').text(totalDevDaysWeb);
		$('.designer-days-web').text(totalDesDaysWeb);
	}


	// IOS Section
	if ($(that).parents('#ios').length) {
		if (name === 'big'){
			if (bigObjIos[id] === price) {
				delete bigObjIos[id];
				bigTotalIos = 0;
				bigTotalDevDaysIos = 0;
				bigTotalDesDaysIos = 0;
			} else {
				bigObjIos = {};
				bigObjIos[id] = price;
				bigTotalIos = bigObjIos[id];
				bigTotalDevDaysIos = devDays;
				bigTotalDesDaysIos = desDays;
			}
		}
		if (name === 'uilevel'){
			if (uiObjIos[id] === price) {
				delete uiObjIos[id];
				uiTotalIos = 0;
				uiTotalDevDaysIos = 0;
				uiTotalDesDaysIos = 0;
			} else {
				uiObjIos = {};
				uiObjIos[id] = price;
				uiTotalIos = uiObjIos[id];
				uiTotalDevDaysIos = devDays;
				uiTotalDesDaysIos = desDays;
			}
		}
		totalPriceIos = bigTotalIos + uiTotalIos;
		totalDevDaysIos = bigTotalDevDaysIos + uiTotalDevDaysIos;
		totalDesDaysIos = bigTotalDesDaysIos + uiTotalDesDaysIos;
		$('.total-price-ios').text(totalPriceIos);
		$('.developer-days-ios').text(totalDevDaysIos);
		$('.designer-days-ios').text(totalDesDaysIos);
	}

	// Android Section
	if ($(that).parents('#android').length) {
		if (name === 'big'){
			if (bigObjAndroid[id] === price) {
				delete bigObjAndroid[id];
				bigTotalAndroid = 0;
				bigTotalDevDaysAndroid = 0;
				bigTotalDesDaysAndroid = 0;
			} else {
				bigObjAndroid = {};
				bigObjAndroid[id] = price;
				bigTotalAndroid = bigObjAndroid[id];
				bigTotalDevDaysAndroid = devDays;
				bigTotalDesDaysAndroid = desDays;
			}
		}
		if (name === 'uilevel'){
			if (uiObjAndroid[id] === price) {
				delete uiObjAndroid[id];
				uiTotalAndroid = 0;
				uiTotalDevDaysAndroid = 0;
				uiTotalDesDaysAndroid = 0;
			} else {
				uiObjAndroid = {};
				uiObjAndroid[id] = price;
				uiTotalAndroid = uiObjAndroid[id];
				uiTotalDevDaysAndroid = devDays;
				uiTotalDesDaysAndroid = desDays;
			}
		}
		totalPriceAndroid = bigTotalAndroid + uiTotalAndroid;
		totalDevDaysAndroid = bigTotalDevDaysAndroid + uiTotalDevDaysAndroid;
		totalDesDaysAndroid = bigTotalDesDaysAndroid + uiTotalDesDaysAndroid;

		$('.total-price-android').text(totalPriceAndroid);
		$('.developer-days-android').text(totalDevDaysAndroid);
		$('.designer-days-android').text(totalDesDaysAndroid);
	}
	$('.total').text(totalPriceWeb + totalPriceIos + totalPriceAndroid);
}

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