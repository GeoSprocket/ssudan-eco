;(function(){

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});


})(jQuery)
//alternative to toggleClass
/*if (menuToggle.classList) {
				  menuToggle.classList.toggle('active');
				} else {
				  var classes = menuToggle.active.split(' ');
				  var existingIndex = classes.indexOf('active');

				  if (existingIndex >= 0)
				    classes.splice(existingIndex, 1);
				  else
				    classes.push('active');

				  menuToggle.active = classes.join(' ');
				};*/