import Swiper from 'swiper';
import 'swiper/css';


let swiper = new Swiper(".trending__swiper", {
	spaceBetween: 15,
	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		}
	}
})
