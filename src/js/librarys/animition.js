export function getScrollAnimation() {
	window.addEventListener("scroll", getScrollAnimation);
	const scrollAnim = document.querySelectorAll(".scroll-anim");
	if (scrollAnim.length > 0) {
		scrollAnim.forEach(animItem => {
			const { top, height } = animItem.getBoundingClientRect();
			const offset = window.scrollY + top
			const scrollAnimPoint = window.innerHeight - height / 3
			if (offset < window.scrollY + scrollAnimPoint && offset + height > window.scrollY) {
				animItem.classList.add("scroll-anim_active")
			} else {
				if (!animItem.classList.contains("scroll-anim_once")) {
					animItem.classList.remove("scroll-anim_active")
				}
			}
		});
	}
};

setTimeout(getScrollAnimation, 300);