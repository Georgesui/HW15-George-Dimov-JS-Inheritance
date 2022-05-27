function Clock(element) {
	this.element = element;
	this.fullFormat = true;
	this.element.addEventListener('click', () => {
		this.changeVersion();
	})
}

Clock.prototype.render = function () {
	if (this.fullFormat) {
		return this.element.innerHTML = new Date().toTimeString().split(' ')[0];
	} else {
		return this.element.innerHTML = new Date().toTimeString().split(' ')[0].substring(0, 5);
	}
}

Clock.prototype.changeVersion = function () {
	this.fullFormat = !this.fullFormat;
	this.element.classList.toggle('header__clock-small');
}

const FullFormatClock = function (element) {
	Clock.call(this, element);
}

FullFormatClock.prototype = Object.create(Clock.prototype);
FullFormatClock.prototype.constructor = FullFormatClock;

FullFormatClock.prototype.render = function () {
	this.element.innerHTML = new Date().toTimeString().split(' ')[0];

	if (!this.fullFormat) {
		this.element.innerHTML = new Date().toTimeString().split(' ')[0].substring(0, 5);
	}
}

const ourClock = document.querySelector('.header__clock');
let FirstClockFullFormat = new FullFormatClock(ourClock);
setInterval(() => FirstClockFullFormat.render(),);

const ShortFormatClock = function (element) {
	Clock.call(this, element);
}

ShortFormatClock.prototype = Object.create(Clock.prototype);
ShortFormatClock.prototype.constructor = ShortFormatClock;

ShortFormatClock.prototype.render = function () {
	this.element.innerHTML = new Date().toTimeString().split(' ')[0].substring(0, 5);

	if (!this.fullFormat) {
		this.element.innerHTML = new Date().toTimeString().split(' ')[0];
	}
}

const secondClockOnPage = document.querySelector('.header__clock-second');
let SecondClockShortFormatClock = new ShortFormatClock(secondClockOnPage);
setInterval(() => SecondClockShortFormatClock.render(),);


