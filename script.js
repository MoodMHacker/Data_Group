let index = 0;
displayImages();
function displayImages() {
	const images = ['globalchain1.png', 'scru1.png', 'fan2.png', 'factory1.png'];
	let i;
	const imageContainer = document.getElementsByClassName(
		'image-slideshow-container',
	);
	imageContainer[0].style.backgroundImage = `url(images/${images[index]})`;
	index++;
	if (index === images.length) {
		index = 0;
	}
	setTimeout(displayImages, 3000);
}
function animateValue(obj, start, end, duration) {
	let startTimestamp = null;
	const step = (timestamp) => {
		if (!startTimestamp) startTimestamp = timestamp;
		const progress = Math.min((timestamp - startTimestamp) / duration, 1);
		obj.innerHTML = Math.floor(progress * (end - start));
		if (progress < 1) {
			window.requestAnimationFrame(step);
		}
	};
	window.requestAnimationFrame(step);
}

function isElementInViewport(element) {
	var rect = element.getBoundingClientRect();
	return (
		rect.top <= (window.innerHeight || document.documentElement.clientHeight)
	);
}

function handleScrollAnimation() {
	var elements = document.getElementsByClassName('wow');

	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];
		if (isElementInViewport(element)) {
			element.style.visibility = 'visible';
			element.classList.add('fadeInUp');
		}
	}
}

window.addEventListener('scroll', handleScrollAnimation);

const obj = document.getElementById('company');
animateValue(obj, -4, 0, 1000);
function animateValue1(obj1, start, end, duration) {
	let startTimestamp = null;
	const step = (timestamp) => {
		if (!startTimestamp) startTimestamp = timestamp;
		const progress = Math.min((timestamp - startTimestamp) / duration, 1);
		obj.innerHTML = Math.floor(progress * (end - start));
		if (progress < 1) {
			window.requestAnimationFrame(step);
		}
	};
	window.requestAnimationFrame(step);
}

const obj1 = document.getElementById('products');
animateValue1(obj1, -39, 0, 3000);
function animateValue2(obj2, start, end, duration) {
	let startTimestamp = null;
	const step = (timestamp) => {
		if (!startTimestamp) startTimestamp = timestamp;
		const progress = Math.min((timestamp - startTimestamp) / duration, 1);
		obj.innerHTML = Math.floor(progress * (end - start));
		if (progress < 1) {
			window.requestAnimationFrame(step);
		}
	};
	window.requestAnimationFrame(step);
}

const obj2 = document.getElementById('clients');
animateValue2(obj2, -15, 0, 2000);
