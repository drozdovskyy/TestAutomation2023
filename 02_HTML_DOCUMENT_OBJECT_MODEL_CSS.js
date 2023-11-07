
//
// Task 1
// On a Home page, there are a series of images. Write a script that:
// 1. Iterates through all the images on the page.
// 2. Logs to the console those images that have a height greater 
// than 300 pixels.
// 3. After analyzing all images, displays in the console the total number
// of images that meet the condition

function task_1() {
const images = document.querySelectorAll('img');
if (images.length == 0) {
console.log("There are no images on this page")
} else {
console.log("List of images that have a height greater than 300 pixels:");
var i = 0;
images.forEach((img) => {
if (img.height > 300) {
				console.log(img);
				i++;				
			}
});
console.log("There are " + i + " images that have a height greater than 300 pixels");
};
}


//
// Task 2
// Display the number of unique colors used in the elements on the page.
//

function task_2() {
const elements = document.querySelectorAll('*');
const uniqueColors = new Set();

elements.forEach((element) => {
	const color = getComputedStyle(element).color;
	
	if (color) {
		uniqueColors.add(color);
	}

});

console.log(uniqueColors.size + " unique colors are used on the page");
}

//
// Task 3
// Find all button elements present on a specified web page and
// output the cumulative quantity of these buttons.
//

function task_3() {
const allButtonsQuantity = document.querySelectorAll('button').length;

const buttons = document.querySelectorAll('button');
var j = 0;

buttons.forEach((button) => {
	let element = button;
	let hasDisplayNone = false;
	
	while (element !== null) {
    		const computedStyle = getComputedStyle(element);

    		if (computedStyle.display == 'none') {
     			hasDisplayNone = true;
      			break;
   		}

    		element = element.parentElement;
	}

	if (!hasDisplayNone) {
		j++;
	}
}); 

const visibleButtonsQuantity = j;

console.log("There are " + allButtonsQuantity + " buttons on the page, but only " + visibleButtonsQuantity + " of them are visible");
}


//
// Task 4
// Find and determine the types of all input fields (input) on a web page.
//

function task_4() {

const inputs = document.querySelectorAll('input');

if (inputs.length == 0) {
	console.log("There are no input fields on this page")
} else {
	console.log("There are " + inputs.length + " input fields (input) on this page, and their types are:")
inputs.forEach((input) => {
		console.log(input.type);
});
};
}


//
// Task 5
// Utilizing CSS selectors in conjunction with JavaScript,
// identify all the social media button elements present
// on a specified web page and determine their respective
// destination URLs.
//

function task_5() {
const socials = document.querySelectorAll('a.footer_social-link');

if (socials.length == 0) {
	console.log("There are no social media button elements on this page");
} else {
console.log("List of respective destination URLs of social media button elements on this page:");
socials.forEach((social) => {
console.log("Button " + social.querySelector('img').getAttribute('alt') + "s to " +social.href);
	});
};
}

//
// Task 6
//Log into your profile at https://www.greencity.social/#/profile,
// there is a calendar that displays the week, with navigation
// buttons (previous/next) and the days of the week.
//

//
// Task 6.1
// Determine the current day: Locate the day that has
// the class current-number and display its value.
// (Expected result, for example, "Current day: 20 September 2023").
//

function task_6_1() {
var currentNumber = document.querySelector('.current-number');
if (currentNumber == null) {
	console.log("There are no elements with class current-number on this page. But if You mean class current-day, then result of this task is:");
	currentNumber = document.querySelector('.current-day');
};
	const currentMonthAndYear = document.querySelector('.monthAndYear');
console.log("Current day: " + currentNumber.textContent.trim() + " " + currentMonthAndYear.textContent.trim());
}

//
// Task 6.2
// Check for navigation buttons: Ensure there are two
// navigation buttons (previous/next) and display their images.
//

function task_6_2() {
const navigationImages = document.querySelectorAll('img[alt*="arrow"]');
const expectedNavigationImageQuantity = 2;
var navigationImageQuantity = navigationImages.length;

if (navigationImageQuantity == expectedNavigationImageQuantity) {
console.log("There are exactly "+ expectedNavigationImageQuantity + " navigation buttons on the page and their images listed above:");
for  (let i=0; i< navigationImageQuantity; i++) {
	console.log(navigationImages[i].src);
}

} else if (navigationImageQuantity > expectedNavigationImageQuantity) {
console.log("There are more than "+ expectedNavigationImageQuantity + " navigation buttons on the page. To be correct - " + navigationImageQuantity + " buttons.");	
} else {
console.log("There are less than "+ expectedNavigationImageQuantity + " navigation buttons on the page. To be correct - just only " + navigationImageQuantity + " buttons.");
}
}


// Task 6.3
// Determine the displayed days of the week:
// Collect all elements with the class day-name and display their names.

function task_6_3() {
var weekDays = document.querySelectorAll('.day-name');
var actualClass = "day-name";
if (weekDays.length == 0) {
	console.log("There are no elements with class day-name on this page. But if You mean class days-name, then result of this task is:");
	weekDays = document.querySelectorAll('.days-name');
	actualClass = "days-name";
};
console.log("There are " + weekDays.length + " elements with the class " + actualClass + " and their names are:");

for  (let i=0; i< weekDays.length; i++) {
	console.log(weekDays[i].textContent);

};
}
