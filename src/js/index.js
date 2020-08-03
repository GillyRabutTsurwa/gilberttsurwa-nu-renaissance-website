//TODO: SWICH UGLIFY FOR TERSER: https://www.npmjs.com/package/gulp-terser
let loader = document.querySelector(".loader");
let main = document.querySelector(".main-content");
let introTitles = document.querySelectorAll(".intro__title");
let introBlocks = document.querySelectorAll(".intro__paragraph");

let logo = document.querySelector(".header__logo");

const loadPage = () => {
	loader.style.opacity = 0;
	loader.style.display = "none";

	main.style.display = "block";
	setTimeout(() => {
		main.style.opacity = 1;
	}, 50);
};

const highlight = () => {
	introBlocks.forEach((currentBlock, index) => {
		if (introTitles[index]) {
			currentBlock.addEventListener("mouseover", () => {
				introTitles[index].classList.add("highlight");
			});
		}
	});
};

const removeHighlight = () => {
	introBlocks.forEach((currentBlock, index) => {
		if (introTitles[index]) {
			currentBlock.addEventListener("mouseout", () => {
				introTitles[index].classList.remove("highlight");
			});
		}
	});
};

const options = {
	threshold: 1,
	rootMargin: "0px 0px -100px 0px"
};

const observeTesting = new IntersectionObserver((entries, observeTesting) => {
	entries.forEach((currentEntry) => {
		console.log(currentEntry);
		if (currentEntry.isIntersecting) {
			currentEntry.target.classList.add("appear");
		}
	});
}, options);

introTitles.forEach((currentElement) => {
	observeTesting.observe(currentElement);
});

introBlocks.forEach((currentElement) => {
	observeTesting.observe(currentElement);
});

const init = () => {
	window.addEventListener("scroll", () => {
		let scrollthis = this.scrollY;
		// console.log(scrollthis);
		if (scrollthis > logo.getBoundingClientRect().top) {
			logo.style.opacity = 0;
		}
		else {
			logo.style.opacity = 1;
		}
		highlight();
		removeHighlight();
	});

	setTimeout(loadPage, 5000);
};

//TESTING:

document.addEventListener("DOMContentLoaded", init);
