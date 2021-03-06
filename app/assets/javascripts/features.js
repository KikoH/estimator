$(document).ready(function() {
	$('.feature-image').click(function (event) {
		event.preventDefault();
		checkMark($(this));
		showPlatformTotal($(this));
	});

	$('.web-bottom-tab-info').hide();
	$('.ios-bottom-tab-info').hide();
	$('.android-bottom-tab-info').hide();

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
		trigger: 'hover',
		placement: 'bottom'
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

// 7. Billings
var billingObjWeb = {};
var billingTotalWeb = 0;
var billingTotalDevDaysWeb = 0;
var billingTotalDesDaysWeb = 0;

// 8. Analytics
var analyticObjWeb = {};
var analyticTotalWeb = 0;
var analyticTotalDevDaysWeb = 0;
var analyticTotalDesDaysWeb = 0;

// 9. Api and Integrations
var integrationObjWeb = {};
var integrationTotalWeb = 0;
var integrationTotalDevDaysWeb = 0;
var integrationTotalDesDaysWeb = 0;

// 10. Security
var securityObjWeb = {};
var securityTotalWeb = 0;
var securityTotalDevDaysWeb = 0;
var securityTotalDesDaysWeb = 0;

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
var ugObjIos = {};
var ugTotalIos = 0;
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

// 7. Billings
var billingObjIos = {};
var billingTotalIos = 0;
var billingTotalDevDaysIos = 0;
var billingTotalDesDaysIos = 0;

// 8. Analytic
var analyticObjIos = {};
var analyticTotalIos = 0;
var analyticTotalDevDaysIos = 0;
var analyticTotalDesDaysIos = 0;

// 9. Api and Integrations
var integrationObjIos = {};
var integrationTotalIos = 0;
var integrationTotalDevDaysIos = 0;
var integrationTotalDesDaysIos = 0;

// 10. Security
var securityObjIos = {};
var securityTotalIos = 0;
var securityTotalDevDaysIos = 0;
var securityTotalDesDaysIos = 0;

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

// 3.Account Values
var accountObjAndroid = {};
var accountTotalAndroid = 0;
var accountTotalDevDaysAndroid = 0;
var accountTotalDesDaysAndroid = 0;

// 4.User Generated content
var ugObjAndroid = {};
var ugTotalAndroid = 0;
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

// 7. Billings
var billingObjAndroid = {};
var billingTotalAndroid = 0;
var billingTotalDevDaysAndroid = 0;
var billingTotalDesDaysAndroid = 0;

// 8. Analytic
var analyticObjAndroid = {};
var analyticTotalAndroid = 0;
var analyticTotalDevDaysAndroid = 0;
var analyticTotalDesDaysAndroid = 0;

// 9. Api and Integrations
var integrationObjAndroid = {};
var integrationTotalAndroid = 0;
var integrationTotalDevDaysAndroid = 0;
var integrationTotalDesDaysAndroid = 0;

// 10. Security
var securityObjAndroid = {};
var securityTotalAndroid = 0;
var securityTotalDevDaysAndroid = 0;
var securityTotalDesDaysAndroid = 0;

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
				removeClass(that, name);
				accountTotalDevDaysWeb -= 1;
				accountTotalDesDaysWeb -= 1;
			} else {
				accountObjWeb[id] = price;
				accountTotalWeb += price;
				accountTotalDevDaysWeb += 1;
				accountTotalDesDaysWeb += 1;
				addClass(that, name);
			}
		}

		if (name === "ugcontent"){
			if ($('img', that).hasClass('isSelected')) {
				ugTotalWeb -= ugObjWeb[id];
				delete ugObjWeb[id];
				removeClass(that, name);
				ugTotalDevDaysWeb -= 1;
				ugTotalDesDaysWeb -= 1;
			} else {
				ugObjWeb[id] = price;
				ugTotalWeb += price;
				ugTotalDevDaysWeb += 1;
				ugTotalDesDaysWeb += 1;
				addClass(that, name);
			}
		}

		if (name === "location"){
			if ($('img', that).hasClass('isSelected')) {
				locationTotalWeb -= locationObjWeb[id];
				delete locationObjWeb[id];
				locationTotalDevDaysWeb -= 1;
				locationTotalDesDaysWeb -= 1;
				removeClass(that, name);
			} else {
				locationObjWeb[id] = price;
				locationTotalWeb += price;
				locationTotalDevDaysWeb += 1;
				locationTotalDesDaysWeb += 1;
				addClass(that, name);
			}
		}

		if (name === "social"){
			if ($('img', that).hasClass('isSelected')) {
				socialTotalWeb -= socialObjWeb[id];
				delete socialObjWeb[id];
				socialTotalDevDaysWeb -= 1;
				socialTotalDesDaysWeb -= 1;
				removeClass(that, name);
			} else {
				socialObjWeb[id] = price;
				socialTotalWeb += price;
				socialTotalDevDaysWeb += 1;
				socialTotalDesDaysWeb += 1;
				addClass(that, name);
			}
		}

		if (name === "billing"){
			if ($('img', that).hasClass('isSelected')) {
				billingTotalWeb -= billingObjWeb[id];
				delete billingObjWeb[id];
				billingTotalDevDaysWeb -= 1;
				billingTotalDesDaysWeb -= 1;
				removeClass(that, name);
			} else {
				billingObjWeb[id] = price;
				billingTotalWeb += price;
				billingTotalDevDaysWeb += 1;
				billingTotalDesDaysWeb += 1;
				addClass(that, name);
			}
		}

		if (name === "analytics"){
			if ($('img', that).hasClass('isSelected')) {
				analyticTotalWeb -= analyticObjWeb[id];
				delete analyticObjWeb[id];
				analyticTotalDevDaysWeb -= 1;
				analyticTotalDesDaysWeb -= 1;
				removeClass(that, name);
			} else {
				analyticObjWeb[id] = price;
				analyticTotalWeb += price;
				analyticTotalDevDaysWeb += 1;
				analyticTotalDesDaysWeb += 1;
				addClass(that, name);
			}
		}

		if (name === "integration"){
			if ($('img', that).hasClass('isSelected')) {
				integrationTotalWeb -= integrationObjWeb[id];
				delete integrationObjWeb[id];
				integrationTotalDevDaysWeb -= 1;
				integrationTotalDesDaysWeb -= 1;
				removeClass(that, name);
			} else {
				integrationObjWeb[id] = price;
				integrationTotalWeb += price;
				integrationTotalDevDaysWeb += 1;
				integrationTotalDesDaysWeb += 1;
				addClass(that, name);
			}
		}

		if (name === "security"){
			if ($('img', that).hasClass('isSelected')) {
				securityTotalWeb -= securityObjWeb[id];
				delete securityObjWeb[id];
				securityTotalDevDaysWeb -= 1;
				securityTotalDesDaysWeb -= 1;
				removeClass(that, name);
			} else {
				securityObjWeb[id] = price;
				securityTotalWeb += price;
				securityTotalDevDaysWeb += 1;
				securityTotalDesDaysWeb += 1;
				addClass(that, name);
			}
		}

		totalPriceWeb = bigTotalWeb + uiTotalWeb + accountTotalWeb + ugTotalWeb + locationTotalWeb + socialTotalWeb + billingTotalWeb + analyticTotalWeb + integrationTotalWeb + securityTotalWeb;
		totalDevDaysWeb = bigTotalDevDaysWeb + uiTotalDevDaysWeb + accountTotalDevDaysWeb + ugTotalDevDaysWeb + locationTotalDevDaysWeb + socialTotalDevDaysWeb + billingTotalDevDaysWeb + analyticTotalDevDaysWeb + integrationTotalDevDaysWeb + securityTotalDevDaysWeb;
		totalDesDaysWeb = bigTotalDesDaysWeb + uiTotalDesDaysWeb + accountTotalDesDaysWeb + ugTotalDesDaysWeb + locationTotalDesDaysWeb + socialTotalDesDaysWeb + billingTotalDesDaysWeb + analyticTotalDesDaysWeb + integrationTotalDesDaysWeb + securityTotalDesDaysWeb;

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

		if (name === "account"){
			if ($('img', that).hasClass('isSelected')) {
				accountTotalIos -= accountObjIos[id];
				delete accountObjIos[id];
				removeClass(that, name);
				accountTotalDevDaysIos -= 1;
				accountTotalDesDaysIos -= 1;
			} else {
				accountObjIos[id] = price;
				accountTotalIos += price;
				accountTotalDevDaysIos += 1;
				accountTotalDesDaysIos += 1;
				addClass(that, name);
			}
		}

		if (name === "ugcontent"){
			if ($('img', that).hasClass('isSelected')) {
				ugTotalIos -= ugObjIos[id];
				delete ugObjIos[id];
				removeClass(that, name);
				ugTotalDevDaysIos -= 1;
				ugTotalDesDaysIos -= 1;
			} else {
				ugObjIos[id] = price;
				ugTotalIos += price;
				ugTotalDevDaysIos += 1;
				ugTotalDesDaysIos += 1;
				addClass(that, name);
			}
		}

		if (name === "location"){
			if ($('img', that).hasClass('isSelected')) {
				locationTotalIos -= locationObjIos[id];
				delete locationObjIos[id];
				locationTotalDevDaysIos -= 1;
				locationTotalDesDaysIos -= 1;
				removeClass(that, name);
			} else {
				locationObjIos[id] = price;
				locationTotalIos += price;
				locationTotalDevDaysIos += 1;
				locationTotalDesDaysIos += 1;
				addClass(that, name);
			}
		}

		if (name === "social"){
			if ($('img', that).hasClass('isSelected')) {
				socialTotalIos -= socialObjIos[id];
				delete socialObjIos[id];
				socialTotalDevDaysIos -= 1;
				socialTotalDesDaysIos -= 1;
				removeClass(that, name);
			} else {
				socialObjIos[id] = price;
				socialTotalIos += price;
				socialTotalDevDaysIos += 1;
				socialTotalDesDaysIos += 1;
				addClass(that, name);
			}
		}

		if (name === "billing"){
			if ($('img', that).hasClass('isSelected')) {
				billingTotalIos -= billingObjIos[id];
				delete billingObjIos[id];
				billingTotalDevDaysIos -= 1;
				billingTotalDesDaysIos -= 1;
				removeClass(that, name);
			} else {
				billingObjIos[id] = price;
				billingTotalIos += price;
				billingTotalDevDaysIos += 1;
				billingTotalDesDaysIos += 1;
				addClass(that, name);
			}
		}

		if (name === "analytics"){
			if ($('img', that).hasClass('isSelected')) {
				analyticTotalIos -= analyticObjIos[id];
				delete analyticObjIos[id];
				analyticTotalDevDaysIos -= 1;
				analyticTotalDesDaysIos -= 1;
				removeClass(that, name);
			} else {
				analyticObjIos[id] = price;
				analyticTotalIos += price;
				analyticTotalDevDaysIos += 1;
				analyticTotalDesDaysIos += 1;
				addClass(that, name);
			}
		}

		if (name === "integration"){
			if ($('img', that).hasClass('isSelected')) {
				integrationTotalIos -= integrationObjIos[id];
				delete integrationObjIos[id];
				integrationTotalDevDaysIos -= 1;
				integrationTotalDesDaysIos -= 1;
				removeClass(that, name);
			} else {
				integrationObjIos[id] = price;
				integrationTotalIos += price;
				integrationTotalDevDaysIos += 1;
				integrationTotalDesDaysIos += 1;
				addClass(that, name);
			}
		}

		if (name === "security"){
			if ($('img', that).hasClass('isSelected')) {
				securityTotalIos -= securityObjIos[id];
				delete securityObjIos[id];
				securityTotalDevDaysIos -= 1;
				securityTotalDesDaysIos -= 1;
				removeClass(that, name);
			} else {
				securityObjIos[id] = price;
				securityTotalIos += price;
				securityTotalDevDaysIos += 1;
				securityTotalDesDaysIos += 1;
				addClass(that, name);
			}
		}

		totalPriceIos = bigTotalIos + uiTotalIos + accountTotalIos + ugTotalIos + locationTotalIos + socialTotalIos + billingTotalIos + analyticTotalIos + integrationTotalIos + securityTotalIos;
		totalDevDaysIos = bigTotalDevDaysIos + uiTotalDevDaysIos + accountTotalDevDaysIos + ugTotalDevDaysIos + locationTotalDevDaysIos + socialTotalDevDaysIos + billingTotalDevDaysIos + analyticTotalDevDaysIos + integrationTotalDevDaysIos + securityTotalDevDaysIos;
		totalDesDaysIos = bigTotalDesDaysIos + uiTotalDesDaysIos + accountTotalDesDaysIos + ugTotalDesDaysIos + locationTotalDesDaysIos + socialTotalDesDaysIos + billingTotalDesDaysIos + analyticTotalDesDaysIos + integrationTotalDesDaysIos + securityTotalDesDaysIos;

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

		if (name === "account"){
			if ($('img', that).hasClass('isSelected')) {
				accountTotalAndroid -= accountObjAndroid[id];
				delete accountObjAndroid[id];
				removeClass(that, name);
				accountTotalDevDaysAndroid -= 1;
				accountTotalDesDaysAndroid -= 1;
			} else {
				accountObjAndroid[id] = price;
				accountTotalAndroid += price;
				accountTotalDevDaysAndroid += 1;
				accountTotalDesDaysAndroid += 1;
				addClass(that, name);
			}
		}

		if (name === "ugcontent"){
			if ($('img', that).hasClass('isSelected')) {
				ugTotalAndroid -= ugObjAndroid[id];
				delete ugObjAndroid[id];
				removeClass(that, name);
				ugTotalDevDaysAndroid -= 1;
				ugTotalDesDaysAndroid -= 1;
			} else {
				ugObjAndroid[id] = price;
				ugTotalAndroid += price;
				ugTotalDevDaysAndroid += 1;
				ugTotalDesDaysAndroid += 1;
				addClass(that, name);
			}
		}

		if (name === "location"){
			if ($('img', that).hasClass('isSelected')) {
				locationTotalAndroid -= locationObjAndroid[id];
				delete locationObjAndroid[id];
				locationTotalDevDaysAndroid -= 1;
				locationTotalDesDaysAndroid -= 1;
				removeClass(that, name);
			} else {
				locationObjAndroid[id] = price;
				locationTotalAndroid += price;
				locationTotalDevDaysAndroid += 1;
				locationTotalDesDaysAndroid += 1;
				addClass(that, name);
			}
		}

		if (name === "social"){
			if ($('img', that).hasClass('isSelected')) {
				socialTotalAndroid -= socialObjAndroid[id];
				delete socialObjAndroid[id];
				socialTotalDevDaysAndroid -= 1;
				socialTotalDesDaysAndroid -= 1;
				removeClass(that, name);
			} else {
				socialObjAndroid[id] = price;
				socialTotalAndroid += price;
				socialTotalDevDaysAndroid += 1;
				socialTotalDesDaysAndroid += 1;
				addClass(that, name);
			}
		}

		if (name === "billing"){
			if ($('img', that).hasClass('isSelected')) {
				billingTotalAndroid -= billingObjAndroid[id];
				delete billingObjAndroid[id];
				billingTotalDevDaysAndroid -= 1;
				billingTotalDesDaysAndroid -= 1;
				removeClass(that, name);
			} else {
				billingObjAndroid[id] = price;
				billingTotalAndroid += price;
				billingTotalDevDaysAndroid += 1;
				billingTotalDesDaysAndroid += 1;
				addClass(that, name);
			}
		}

		if (name === "analytics"){
			if ($('img', that).hasClass('isSelected')) {
				analyticTotalAndroid -= analyticObjAndroid[id];
				delete analyticObjAndroid[id];
				analyticTotalDevDaysAndroid -= 1;
				analyticTotalDesDaysAndroid -= 1;
				removeClass(that, name);
			} else {
				analyticObjAndroid[id] = price;
				analyticTotalAndroid += price;
				analyticTotalDevDaysAndroid += 1;
				analyticTotalDesDaysAndroid += 1;
				addClass(that, name);
			}
		}

		if (name === "integration"){
			if ($('img', that).hasClass('isSelected')) {
				integrationTotalAndroid -= integrationObjAndroid[id];
				delete integrationObjAndroid[id];
				integrationTotalDevDaysAndroid -= 1;
				integrationTotalDesDaysAndroid -= 1;
				removeClass(that, name);
			} else {
				integrationObjAndroid[id] = price;
				integrationTotalAndroid += price;
				integrationTotalDevDaysAndroid += 1;
				integrationTotalDesDaysAndroid += 1;
				addClass(that, name);
			}
		}

		if (name === "security"){
			if ($('img', that).hasClass('isSelected')) {
				securityTotalAndroid -= securityObjAndroid[id];
				delete securityObjAndroid[id];
				securityTotalDevDaysAndroid -= 1;
				securityTotalDesDaysAndroid -= 1;
				removeClass(that, name);
			} else {
				securityObjAndroid[id] = price;
				securityTotalAndroid += price;
				securityTotalDevDaysAndroid += 1;
				securityTotalDesDaysAndroid += 1;
				addClass(that, name);
			}
		}



		totalPriceAndroid = bigTotalAndroid + uiTotalAndroid + accountTotalAndroid + ugTotalAndroid + locationTotalAndroid + socialTotalAndroid + billingTotalAndroid + analyticTotalAndroid + integrationTotalAndroid + securityTotalAndroid;
		totalDevDaysAndroid = bigTotalDevDaysAndroid + uiTotalDevDaysAndroid + accountTotalDevDaysAndroid + ugTotalDevDaysAndroid + locationTotalDevDaysAndroid + socialTotalDevDaysAndroid + billingTotalDevDaysAndroid + analyticTotalDevDaysAndroid + integrationTotalDevDaysAndroid + securityTotalDevDaysAndroid;
		totalDesDaysAndroid = bigTotalDesDaysAndroid + uiTotalDesDaysAndroid + accountTotalDesDaysAndroid + ugTotalDesDaysAndroid + locationTotalDesDaysAndroid + socialTotalDesDaysAndroid + billingTotalDesDaysAndroid + analyticTotalDesDaysAndroid + integrationTotalDesDaysAndroid + securityTotalDesDaysAndroid;

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
			thisObj.parents('.size').removeClass('isSelected-mobile');
		}else {
			if ($('#web div.size img').hasClass('isSelected')){
				$('.size img').parent().removeClass('checkmark');
				$('.size img').removeClass('isSelected');
				$('.size img').parents('.size').removeClass('isSelected-mobile');
			}
			thisObj.addClass('isSelected');
			thisObj.parent().addClass('checkmark');
			thisObj.parents('.size').addClass('isSelected-mobile');
		}
	};
		//Ui feature container
		if (thisObj.parents('.uilevel').length){
			if (thisObj.hasClass('isSelected')) {
				thisObj.removeClass('isSelected');
				thisObj.parent().removeClass('checkmark');
				thisObj.parents('.uilevel').removeClass('isSelected-mobile');
			}else {
				if ($('#web div.uilevel img').hasClass('isSelected')){
					$('.uilevel img').parent().removeClass('checkmark');
					$('.uilevel img').removeClass('isSelected');
					$('.uilevel img').parents('.uilevel').removeClass('isSelected-mobile');
				}
				thisObj.addClass('isSelected');
				thisObj.parent().addClass('checkmark');
				thisObj.parents('.uilevel').addClass('isSelected-mobile');
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
			thisObj.parents('.size').removeClass('isSelected-mobile');
		}else {
			if ($('#ios div.size img').hasClass('isSelected')){
				$('.size img').parent().removeClass('checkmark');
				$('.size img').removeClass('isSelected');
				$('.size img').parents('.size').removeClass('isSelected-mobile');
			}
			thisObj.addClass('isSelected');
			thisObj.parent().addClass('checkmark');
			thisObj.parents('.size').addClass('isSelected-mobile');
		}
	};

		//Ui feature container
		if (thisObj.parents('.uilevel').length){
			if (thisObj.hasClass('isSelected')) {
				thisObj.removeClass('isSelected');
				thisObj.parent().removeClass('checkmark');
				thisObj.parents('.uilevel').removeClass('isSelected-mobile');
			}else {
				if ($('#ios div.uilevel img').hasClass('isSelected')){
					$('.uilevel img').parent().removeClass('checkmark');
					$('.uilevel img').removeClass('isSelected');
					$('.uilevel img').parents('.uilevel').removeClass('isSelected-mobile');
				}
				thisObj.addClass('isSelected');
				thisObj.parent().addClass('checkmark');
				thisObj.parents('.uilevel').addClass('isSelected-mobile');
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
			thisObj.parents('.size').removeClass('isSelected-mobile');
		}else {
			if ($('#android div.size img').hasClass('isSelected')){
				$('.size img').parent().removeClass('checkmark');
				$('.size img').removeClass('isSelected');
				$('.size img').parents('.size').removeClass('isSelected-mobile');
			}
			thisObj.addClass('isSelected');
			thisObj.parent().addClass('checkmark');
			thisObj.parents('.size').addClass('isSelected-mobile');
		}
	};

		//Ui feature container
		if (thisObj.parents('.uilevel').length){
			if (thisObj.hasClass('isSelected')) {
				thisObj.removeClass('isSelected');
				thisObj.parent().removeClass('checkmark');
				thisObj.parents('.uilevel').removeClass('isSelected-mobile');
			}else {
				if ($('#android div.uilevel img').hasClass('isSelected')){
					$('.uilevel img').parent().removeClass('checkmark');
					$('.uilevel img').removeClass('isSelected');
					$('.uilevel img').parents('.uilevel').removeClass('isSelected-mobile');
				}
				thisObj.addClass('isSelected');
				thisObj.parent().addClass('checkmark');
				thisObj.parents('.uilevel').addClass('isSelected-mobile');
			};
		};
	};
};

function showPlatformTotal(thisObj) {
	if ( $(thisObj).parents('.web').length ){
		$('.web-bottom-tab-info').show();
		$('.web-bottom-tab').hide();
	}

	if ( $(thisObj).parents('.ios').length ){
		$('.ios-bottom-tab-info').show();
		$('.ios-bottom-tab').hide();
	}

	if ( $(thisObj).parents('.android').length ){
		$('.android-bottom-tab-info').show();
		$('.android-bottom-tab').hide();
	}
}


function addClass(that, className) {
	var sectionName = "." + className;
	$(that).parents(sectionName).addClass('isSelected-mobile');
	$('img', that).addClass('isSelected');
	$(that).parent().addClass('checkmark');
}

function removeClass(that, className) {
	var sectionName = "." + className;
	$(that).parents(sectionName).removeClass('isSelected-mobile');
	$('img', that).removeClass('isSelected');
	$(that).parent().removeClass('checkmark');
}