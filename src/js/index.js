// import AirDatepicker from "air-datepicker";
// import "air-datepicker/air-datepicker.css"
// new AirDatepicker('.element')

import "./librarys/burger.js"
import "./librarys/slider.js"
import "./librarys/animition.js"


const btnCreators = document.querySelector(".creators__btn");
const containerCreators = document.querySelector(".creators__container");
const contentCreators = document.querySelector(".creators__content");


if (containerCreators || contentCreators) {
	if (!window.matchMedia("(min-width:576px)").matches) {
		containerCreators.append(btnCreators);
	} else {
		contentCreators.append(btnCreators);
	}
}



window.matchMedia("(min-width:576px)").addEventListener("change", (e) => {
	if (!e.matches) {
		containerCreators.append(btnCreators)
	} else {
		contentCreators.append(btnCreators);
	}
})

const btnDiscover = document.querySelector(".discover__btn");
const containerDiscover = document.querySelector(".discover__container");
const contentDiscover = document.querySelector(".discover__content");


if (!window.matchMedia("(min-width:768px)").matches) {
	containerDiscover.append(btnDiscover);
} else {
	contentDiscover.append(btnDiscover);
}



window.matchMedia("(min-width:768px)").addEventListener("change", (e) => {
	if (!e.matches) {
		containerDiscover.append(btnDiscover)
	} else {
		contentDiscover.append(btnDiscover);
	}
})

const btnMagic = document.querySelector(".magic__btn");
const containerMagic = document.querySelector(".magic__container");
const contentMagic = document.querySelector(".magic__content");


if (!window.matchMedia("(min-width:768px)").matches) {
	containerMagic.append(btnMagic);
} else {
	contentMagic.append(btnMagic);
}



window.matchMedia("(min-width:768px)").addEventListener("change", (e) => {
	if (!e.matches) {
		containerMagic.append(btnMagic)
	} else {
		contentMagic.append(btnMagic);
	}
})

const hours = document.querySelector(".magic__hours");
const minuts = document.querySelector(".magic__minutes");
const seconds = document.querySelector(".magic__seconds");

setInterval(() => {
	let date = new Date();
	let h = date.getHours();
	let m = date.getMinutes();
	let s = date.getSeconds();

	if (h > 12) {
		h = h - 12
	}

	// h = h<10 ? "0"+h : h;
	// m = h<10 ? "0"+m : m;
	// s = h<10 ? "0"+s : s;

	hours.innerHTML = h;
	minuts.innerHTML = m;
	seconds.innerHTML = s;
})



