# GOWOONSESANG
> skill :
GSAP, ScrollTrigger, Swiper ![JavaScript](https://img.shields.io/badge/-JavaScript-dc8d2d?style=flat-square&logo=javascript&logoColor=ffffff) ![HTML](https://img.shields.io/badge/-HTML-F05032?style=flat-square&logo=html5&logoColor=ffffff) ![CSS](https://img.shields.io/badge/-CSS-007ACC?style=flat-square&logo=css3) 

> 반응형 : 데스크탑

> https://gowoonsesang-git-main-yeongjis-projects.vercel.app/

✅ Point
------------
✔ 전체적인 스크롤 트리거   
✔ news Slider  
✔ news Slider 문제점 해결하기


----------------------------------------

## 1. 전체적인 스크롤 트리거  

>이 사이트를 코딩하면서 가장 많이 활용한 기능 중 하나는 스크롤 트리거입니다.  
>각 페이지마다 고유한 스크롤 트리거를 구현하여, 스크롤 위치에 따라 다양한 애니메이션과 효과가 적용되도록 했습니다.  
>이를 통해 사용자가 콘텐츠를 탐색할 때 시각적으로 더욱 매력적인 경험을 제공할 수 있었습니다.  
>스크롤 트리거의 원리를 깊이 있게 이해하게 되었고, 이를 효과적으로 활용하는 방법도 배울 수 있었습니다.

```
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
```

>mentorTl와 같은 타임라인들을 각 페이지에 맞게 생성하여 여러 애니메이션을 순차적으로 연결할 수 있게 만듭니다.   
>GSAP의 강력한 애니메이션 기능과 스크롤 트리거를 결합하여, 특정 섹션에 도달했을 때 동적인 비주얼 효과를 제공합니다.
  
  
  
 ---------------------------------------------

## 2. news Slider

> news Slider를 컨테이너 밸트처럼 멈춤없이 흘러가는 슬라이더를 구현하는게 목표였습니다.
> 하지만 계속해서 한 슬라이더에 멈췄다 흘러가고를 반복했습니다. 

![Image](https://github.com/user-attachments/assets/0ee65dd7-6cd6-4602-a96f-de3c861ffad0)

```
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
```

> 이를 해결하기 위해 위 스크립트에 여러가지 방법을 써봤지만 소용없었습니다. 


-------------------------------------------------

## 3. news Slider 문제점 해결하기

![Image](https://github.com/user-attachments/assets/eb401768-c504-4f32-91f5-78d9b3ccc758)
```

.news .news_main .news-container .news_slider .swiper-wrapper{
	margin-top: 60px;
	display: flex;
	align-items: flex-end;
	transition-timing-function: linear !important; 
	will-change: transform;                  
	      
}
```
> 스크립트가 아닌 CSS에서 	transition-timing-function: linear !important; will-change: transform;  
> 이 두 속성을 추가해야 컨테이너 밸트처럼 멈추지않고 흘러가는 스크립트가 구현됩니다. 
	
----

### 해결에 필요했던 css 알아보기
```
transition-timing-function: linear !important; 
```

> 'transition-timing-function: linear !important;'는 애니메이션이나 전환 효과의 속도를 정의하는 속성입니다.  
> 'transition-timing-function:' 이 속성은 CSS 전환 애니메이션이 시작되고 끝나는 속도를 어떻게 조절할지를 결정합니다.  
> 'linear' 이 값은 애니메이션이 시작부터 끝까지 일정한 속도로 진행되도록 합니다. 이는 애니메이션이 부드럽고 예측 가능한 움직임을 제공하는 데 유용합니다.  
> '!important' 이 키워드는 해당 스타일 규칙의 우선순위를 높입니다. 즉, 다른 CSS 규칙이 동일한 요소에 적용되더라도 이 규칙이 항상 우선적으로 적용됩니다.

```
will-change: transform;
```

> ' will-change: transform; ' 브라우저에게 특정 요소가 향후 변화할 것임을 미리 알리는 역할을 합니다.  
> ' will-change ' 를 사용하면 브라우저가 해당 요소에 대한 최적화된 렌더링을 미리 준비할 수 있습니다.  
> ' transform ' 은 요소에 대한 변형을 지정합니다. 예를 들어, 요소를 이동시키거나 회전시키는 등의 효과를 적용할 수 있습니다. 










