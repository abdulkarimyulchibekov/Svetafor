const red = document.querySelector('.circles_red');
const yellow = document.querySelector('.circles_yellow');
const green = document.querySelector('.circles_green');

const changeColor = () => {
	red.classList.add('red');
	yellow.classList.remove('yellow');
	green.classList.remove('green');
};
const changeYellow = () => {
	red.classList.remove('red');
	yellow.classList.add('yellow');
	green.classList.remove('green');
};
const changeGreen = () => {
	red.classList.remove('red');
	yellow.classList.remove('yellow');
	green.classList.add('green');
};

const enter = () => {
  setTimeout(changeColor, 1000);
	setTimeout(changeYellow, 2000);
	setTimeout(changeGreen, 2500);
	setTimeout(changeYellow, 3500);
}

enter();

setInterval(() => {
	setTimeout(changeColor, 1000);
	setTimeout(changeYellow, 2000);
	setTimeout(changeGreen, 2500);
	setTimeout(changeYellow, 3500);
}, 3500);
