
$(window).scroll(function() {
		$('.future .section-title').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+500) {
				$(this).addClass("animate__fadeIn");
			}
		});
	});

$(window).scroll(function() {
		$('.future .wait1').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+500) {
				$(this).addClass("animate__fadeInUp");
			}
		});
	});

$(window).scroll(function() {
		$('.future .wait2').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+500) {
				$(this).addClass("animate__fadeInUp");
			}
		});
	});

$(window).scroll(function() {
		$('.future .wait3').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+500) {
				$(this).addClass("animate__fadeInUp");
			}
		});
	});

$(window).scroll(function() {
		$('.section-form .section-title').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+500) {
				$(this).addClass("animate__bounceIn");
			}
		});
	});

$(window).scroll(function() {
		$('.section-form .form').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("animate__jackInTheBox");
			}
		});
	});


// var btn = document.getElementById('btn');
// btn.onclick = function(e) {
// 		e.preventDefault();
// 		var text = document.querySelector('p.intro');
// 		text.classList.add('red');
// 		var img = document.querySelector('.comp');
// 		// img.style.display='none';
// 		document.querySelector('.skill-change').style.marginLeft ="500px";
// }