$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function(){
	$('.hello__slider').slick({
		dots:true,
		// adaptiveHeight:true,
		easing:'ease'
	});
});
$(document).ready(function(){
	$('.posts__slider').slick({
		easing:'ease',
		dots:true,
		slidesToShow: 3,
	});
});