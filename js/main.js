
$(document).ready(function(){

	$('body').scrollspy({
      target: '.navigation',
      offset: 50
  });

	$('.spin-icon').click(function (){
		$('.links-box-config').toggleClass('show');
	});

	$(".js-header").sticky({topSpacing:0});

	$('.js-animation').waypoint(function() {
		if ( !$(this).hasClass('animate_start')) {
            var elm = $(this);
				setTimeout(function() {
					elm.addClass('animate_start');
				}, 20);
		}
	   },
	{ offset: '85%', triggerOnce: true });
});

