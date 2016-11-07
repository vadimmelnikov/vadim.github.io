// js jquery
var slideout = new Slideout({
	'panel': document.getElementById('panel'),
	'menu': document.getElementById('menu'),
	'padding': 0,
	'tolerance': 10,
	'side': 'right',
	'touch': 'false'
});
var but = document.querySelector('.js-slideout-toggle');

but.addEventListener('click', function() {
	slideout.toggle();
	// this.classList.toggle('active');
});

document.querySelector('.menu').addEventListener('click', function(eve) {
	if (eve.target.nodeName === 'A') { slideout.close();}
	but.classList.remove('active');
});
slideout.on('beforeopen', function() {
	but.classList.add('active');
});

slideout.on('beforeclose', function() {
	but.classList.remove('active');
});

slideout.on('open', slideout._initTouchEvents);
slideout.on('open', slideout.enableTouch);
slideout.on('close', slideout.disableTouch);

// slideout.on('open', function() {
// 	but.classList.add('active');
// });
// slideout.once('open', function() {
// 	but.classList.remove('active');
// });
// slideout.disableTouch();

$(document).ready(function() {

	$('#slider').slick({
		centerMode: true,
		centerPadding: '0',
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		adaptiveHeight: false,
		arrow: true,
		nextArrow: '.arrow--next',
		prevArrow: '.arrow--prev',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: true,
					centerMode: true,
					centerPadding: '0',
					dots: true,
					slidesToShow: 1
				}
			}
		]
	});
	$('.callpopup').bind('click', function(e) {
		e.preventDefault();
		slideout.close();
		$('.popup').bPopup({
			speed: 150,
			modalColor: "#413c45",
			opacity: 0.9
		});
	});
});