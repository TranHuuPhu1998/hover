
$(window).on('load',function(){

	// var header = document.getElementById("header");
	var header = document.getElementById("header");
	var sticky = header.offsetTop;
	console.log(sticky);
	
    window.addEventListener("scroll", function() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
	})
	

	$('.slideText .top').delay(1000).animate({
		"top": 0,
		"opacity": "1"
	}, 1000)
	$('.slideText .bottom').delay(2000).animate({
		"top": 0,
		"opacity": "1"
	}, 1000)

	display_header();


});
$(document).on("ready", function() {

	/*Open and Close Menu*/
	$(".openmenu").bind("click",function(){
		$(".menuSPWrapper").css('opacity', 0)
		.fadeIn("slow")
		.animate(
			{ opacity: 1 },
			{ queue: false, duration: 800 }
		);
		$("body").addClass("lockScroll");
		lockScroll();
	});
	$(".closemenu").bind("click",function(){
		$(".menuSPWrapper").css('opacity', 1)
		.fadeOut("slow")
		.animate(
			{ opacity: 0 },
			{ queue: false, duration: 800 }
		);
		$("body").removeClass("lockScroll");
		unlockScroll();
	});
	/*TOP button*/
	$("#top").bind('click',function(){
		$("body,html").animate({
			scrollTop: 0
		}, 800);
		return false;
	})
});
$(document).on('click', 'a[href^="#"]', function(event) {
	event.preventDefault();
	var $screenWidth = $(window).width();
	$pos = 0;
	pos = $($.attr(this, 'href')).offset().top;

	$('html, body').animate({
		scrollTop: pos
	}, 500);
	$(".menuSPWrapper").css('opacity', 1)
		.fadeOut("slow")
		.animate(
			{ opacity: 0 },
			{ queue: false, duration: 800 }
	);
	$("body").removeClass("lockScroll");
});

function display_header() {
    $(window).scroll(function() {
        var banner = $('.banner').innerHeight(),
            top = $(window).scrollTop();
        $(".header").toggleClass("appear", (top > banner));
        $(".header").toggleClass("fit", (top > 83));
        $("#service").toggleClass("exp", (top > banner));
        $("#top").toggleClass("appear", (top > banner));
    });
}
function preventDefault(e){
    e.preventDefault();
}
function lockScroll(){
    document.body.addEventListener('touchmove', preventDefault, { passive: false });
}
function unlockScroll(){
    document.body.removeEventListener('touchmove', preventDefault);
}