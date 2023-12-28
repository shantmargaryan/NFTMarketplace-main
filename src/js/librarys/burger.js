import { enableScroll, disableScroll } from "./scrollController.js"


const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const headerOverlay = document.querySelector(".header__overlay");



burger.addEventListener("click", function () {
	burger.classList.toggle("burger_active");
	nav.classList.toggle("nav_open");
	header.classList.toggle("header_active");

	if (burger.classList.contains("burger_active")) {
		disableScroll();
		nav.style.paddingTop = header.offsetHeight + 50 + "px";
	} else {
		enableScroll();
		nav.style.paddingTop = "";
	}
})

headerOverlay.addEventListener("click", () => {
	burger.classList.remove("burger_active");
	nav.classList.remove("nav_open");
	header.classList.remove("header_active");
	enableScroll();
});

const mediaQuery = window.matchMedia("(min-width: 992px");



mediaQuery.addEventListener("change", function (event) {
	if (event.matches && burger.classList.contains("burger_active")) {
		nav.style.paddingTop = "";
		enableScroll();
	} else {
		if (burger.classList.contains("burger_active")) {
			nav.style.paddingTop = header.offsetHeight + 50 + "px";
			disableScroll();
		}
	}
});