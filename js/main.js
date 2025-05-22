window.addEventListener("load", function(){
	let gnbList=document.querySelectorAll("#gnb-wrp .gnb > li");
	let subMenu=document.querySelectorAll("li > .sub");
	let subColor=document.querySelector(".sub-color");

	let searchBtn=document.querySelector("#search_icon");
	let searchBox=document.querySelector(".search_box");
	let closeBtn=document.querySelector(".search_box .close");

	let langBtn=document.querySelector("li.lang");
	let langList=document.querySelectorAll(".lang > li");
	let langChose=document.querySelector(".lang ul li a");

	let slider=document.querySelector(".news_slider");
	let sliderList=document.querySelectorAll(".news_slider .slide");
	let banner=document.querySelectorAll(".news_box .img");

	let main=document.querySelectorAll(".cosmetics_main .main");


	let btnTop=document.querySelector(".footer a.ft_arrow");
	

	gnbList.forEach(function(item) {
        item.addEventListener("mouseenter", function() {
            if (item.querySelector(".sub")) {
                item.classList.add("active");
                subColor.classList.add("active");
            }
        });

        item.addEventListener("mouseleave", function() {
            if (item.querySelector(".sub")) {
                item.classList.remove("active");
                subColor.classList.remove("active");
            }
        });
    });

	// search

	searchBtn.addEventListener("click", function(e) {
        e.preventDefault(); 
        searchBox.classList.toggle("active"); 
    });

    closeBtn.addEventListener("click", function() {
        searchBox.classList.remove("active"); 
    });

	// lang

	langBtn.addEventListener("click", function(e){
		e.preventDefault();

		langList.classList.toggle("active");
	})



	// keytext

	const keytextTl=gsap.timeline();

	keytextTl.from(".keytext .inner",{ opacity: 0, delay: 0.6 });

	// mentor

	const mentorTl=gsap.timeline({
		scrollTrigger: {
			trigger: ".mentor",
			start: "top center",
			end: "bottom center"
		}
	});
	
	mentorTl.from(".mentor .banner ", { opacity:0, duration: 0.3 });
	mentorTl.from(".inner .table .text .text_top",  { y: 20, opacity: 0, duration: 0.5}, 0.2);
	mentorTl.from(".inner .table .text > p", { y: 20, opacity: 0, duration: 0.5}, 0.3);

	// news 

	const newsTl=gsap.timeline({
		scrollTrigger: {
			trigger: ".news",
			start: "top center",
			end: "bottom center"
		}
	});

	newsTl.from(".news .inner", { opacity: 0, duration: 0.6, delay: 0.3 });
	newsTl.from(".story", { opacity: 0, duration: 0.6, delay: 0.3 }, 0.1);

	// const backImgBefore = document.querySelector(".news .news-container .backimg::before");

	function startAnimation() {
		backImgBefore.style.animation = "rotate 30s linear infinite";
	}

	function stopAnimation() {
		backImgBefore.style.animation = "none";
	}

	// startAnimation();

	
	const swiper = new Swiper('.news_slider', {
		loop: true,
		speed: 5000, 
		slidesPerView: 3.5,
		spaceBetween: 80,
		autoplay: {
			delay: 0, 
			disableOnInteraction: false,
		}
	});

	swiper.slides.forEach(slide => {
		slide.addEventListener('mouseenter', () => {
			slide.classList.add("active");
			swiper.slides.forEach(s => {
				if (s !== slide) {
					s.style.opacity = '0.8'; 
					s.classList.add("active");
				}
			});
		});
	
		slide.addEventListener('mouseleave', () => {
			swiper.slides.forEach(s => {
				s.style.opacity = '1';
				s.classList.remove("active");
			});
		});
	});

	
	
	// cosmetics


	const cosmeticsTl=gsap.timeline({
		scrollTrigger: {
			trigger: ".cosmetics",
			start: "top center",
			end: "bottom center"
		}
	});

	cosmeticsTl.from(".cosmetics_text", { opacity: 0, duration: 0.5});


	main.forEach(function(item){
		item.addEventListener("mouseenter", function(){
			item.classList.add("active");
		});
		item.addEventListener("mouseleave", function(){
			item.classList.remove("active");
		});
	});


	cosmeticsTl.from(".cosmetics_main .main .right h4", { xPercent: 10, opacity: 0, duration: 0.8 },
		{ xPercent: 0, opacity: 0, duration: 0.8 }
	);
	cosmeticsTl.from(".cosmetics_main .main .right p", { yPercent: 200, opacity: 0, duration: 0.8 },
		{ yPercent: 0, opacity: 0, duration: 0.5 }
	);


	// btnTop

	btnTop.addEventListener("click", function(e){
		e.preventDefault();

		gsap.to(window, { scrollTo: 0, delay: 0.5 });
	});

 
});	