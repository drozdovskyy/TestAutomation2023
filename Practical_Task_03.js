// To work on the practical task, you need to register on the website https://www.greencity.social/#/greenCity . Record a short video (up to 5 minutes) demonstrating the scripts in action. Upload the video to YouTube and provide a link to it. Optionally, you can also add the script code to GitHub and provide a link to it.
// 
// 
// Easy level 
// 
// To solve this, it is enough to use the shortcut $x() in the Chrome developer console to execute XPath queries.

//
// EASY 1. Find the first h1 element on the main page.
//

$x('//div[@id="main-content"]/h1');

//
// EASY 2. Find all images that have an 'alt' attribute.
//

$x('//img[@alt]');

//
// EASY 3. Find the button with the text "Start forming a habit!".
//

$x('//button[contains(text(),"Start forming a habit!")]');

//
// EASY 4. Check for the presence of a search icon on the webpage.
//

$x('//li[@role="search"]/img');

//
// EASY 5. Check for the presence of checkboxes.
//

$x('//input[@type="checkbox"]');


// Medium level
// To solve this, it is necessary to use JavaScript and the method document.evaluate() in the Chrome developer console to execute XPath queries.

// 
// Task 1
// To find the first h1 element on the main page.
// 


let firstHeader = document.evaluate('//h1', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
if (firstHeader) {
    console.log("First found h1 element on the main page:", firstHeader);
} else {
    console.log("First h1 element on the main page not found.");
}

// 
// Task 2
// 
// Find all images that have the 'alt' attribute. Output the message in the console "Found (number) images with the alt attribute."
// 

let allImagesWithAlt = document.evaluate('count(//img[@alt])', document, null, XPathResult.NUMBER_TYPE, null).numberValue;
console.log("Found (" + allImagesWithAlt + ") images with the alt attribute.");

// 
// Task 3
// 
// Find the button element with the text "Start forming a habit!". If an element with such text is not found, display a corresponding message. Output the message with numbers of buttons in the console.

// *Check the accuracy of the number of buttons found. If you get an incorrect value, analyze why this happened. To do this, find the code for the required elements and, if necessary, modify your script.

let buttonWithText = document.evaluate('count(//button[contains(text(),"Start forming a habit!")])', document, null, XPathResult.NUMBER_TYPE, null).numberValue;
if (buttonWithText === 0) {
    console.log('Button element with the text "Start forming a habit!" not found.');
} else {
    console.log('Found (' + buttonWithText + ') button elements with the text "Start forming a habit!"');
}

// 
// Task 4
// 
// Validate the presence and visibility of the site search icon on the webpage, and ensure the image associated with the search icon has the appropriate alt text and a source (src) path.
// 

let siteSearchIcon = document.evaluate('//li[@role="search"]/img', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

if (siteSearchIcon) {
    
    let hasDisplayNone = false;
    let element = siteSearchIcon;
        
    while (element !== null) {
            
        const computedStyle = getComputedStyle(element);
            
        if (computedStyle.display == 'none') {
            hasDisplayNone = true;
            break;
        }
        
        element = element.parentElement;
    }

    if (!hasDisplayNone) {

        console.log("Site search icon is present and visible");
        console.log('Check if search icon image has the appropriate alt text:', '"' + siteSearchIcon.getAttribute("alt") + '"');
        console.log('Check if search icon image has the appropriate path:', '"' + siteSearchIcon.getAttribute("src") + '"');
    
    } else {

        console.log("Site search icon is present but not visible");
    
    }

} else {

    console.log("Site search icon not found");

};





// 
// Task 5
// 
// Log into your profile at https://www.greencity.social/#/profile. At the bottom of the page, there are checkboxes. Find them, check their state (checked or not), and display a message about the number of checked and unchecked checkboxes.
// 

let checkboxes = document.evaluate('//input[@type="checkbox"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
if (checkboxes) {
    let checked = 0;
    let unchecked = 0;
    for (let i = 0; i < checkboxes.snapshotLength; i++) {
        let state = checkboxes.snapshotItem(i).getAttribute('checked');
        if (state === "true") {
            checked++;
        } else {
            unchecked++;
        };
    };
    console.log("Found", checkboxes.snapshotLength, "checkboxes:", checked, "checked and", unchecked, "unchecked");
} else {
    console.log("Checkboxes not found");
}

// 
// Hard level
// 
// Task 6 *
// 
// Validate the website's ability to switch languages effectively.
// 
// 1. Initiate a search to identify the user interface element designated for language toggling.
// 2. If the specified element is successfully pinpointed, activate it to attempt a language change.
// 3. Log the result in the console, specifying whether the language toggle element was detected.
// 4. Should the language alteration succeed, log the preceding and new language settings into the console for verification purposes.
// 

let path = '//ul[@aria-label="language switcher"]/li';
let languageSwitcher = element(path);

if (languageSwitcher.snapshotLength != 0) {
    console.log("User interface element designated for language toggling found");

    let stateBefore = state(languageSwitcher);
    
    
    
    languageSwitcher.snapshotItem(0).click();

    let languageSwitcherMenuExpanded = element(path);

    if (languageSwitcherMenuExpanded.snapshotLength > languageSwitcher.snapshotLength) {
        console.log("User interface element designated for language toggling activated");

        languageSwitcherMenuExpanded.snapshotItem(1).click();

        let languageSwitcherAfter = element(path);
        let stateAfter = state(languageSwitcherAfter);
        console.log('Language changed from', stateBefore, "to", stateAfter);
    } else {
        console.log("User interface element designated for language toggling not activated");
    };
} else {
    console.log("User interface element designated for language toggling not found");
};

function element(path) {
    let result = document.evaluate(path, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    return result;
}

function state(element) {
    let result = element.snapshotItem(0).textContent.trim();
    return result;
}


// To work on the practical task, you need to register on the website https://www.greencity.social/#/greenCity . Record a short video (up to 5 minutes) demonstrating the scripts in action. Upload the video to YouTube and provide a link to it. Optionally, you can also add the script code to GitHub and provide a link to it.
// 
// 
// Easy level 
// 
// To solve this, it is enough to use the shortcut $x() in the Chrome developer console to execute XPath queries.

//
// EASY 1. Find the first h1 element on the main page.
//

$x('//div[@id="main-content"]/h1');

//
// EASY 2. Find all images that have an 'alt' attribute.
//

$x('//img[@alt]');

//
// EASY 3. Find the button with the text "Start forming a habit!".
//

$x('//button[contains(text(),"Start forming a habit!")]');

//
// EASY 4. Check for the presence of a search icon on the webpage.
//

$x('//li[@role="search"]/img');

//
// EASY 5. Check for the presence of checkboxes.
//

$x('//input[@type="checkbox"]');


// Medium level
// To solve this, it is necessary to use JavaScript and the method document.evaluate() in the Chrome developer console to execute XPath queries.

// 
// Task 1
// To find the first h1 element on the main page.
// 


let firstHeader = document.evaluate('//h1', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
if (firstHeader) {
    console.log("First found h1 element on the main page:", firstHeader);
} else {
    console.log("First h1 element on the main page not found.");
}

// 
// Task 2
// 
// Find all images that have the 'alt' attribute. Output the message in the console "Found (number) images with the alt attribute."
// 

let allImagesWithAlt = document.evaluate('count(//img[@alt])', document, null, XPathResult.NUMBER_TYPE, null).numberValue;
console.log("Found (" + allImagesWithAlt + ") images with the alt attribute.");

// 
// Task 3
// 
// Find the button element with the text "Start forming a habit!". If an element with such text is not found, display a corresponding message. Output the message with numbers of buttons in the console.

// *Check the accuracy of the number of buttons found. If you get an incorrect value, analyze why this happened. To do this, find the code for the required elements and, if necessary, modify your script.

let buttonWithText = document.evaluate('count(//button[contains(text(),"Start forming a habit!")])', document, null, XPathResult.NUMBER_TYPE, null).numberValue;
if (buttonWithText === 0) {
    console.log('Button element with the text "Start forming a habit!" not found.');
} else {
    console.log('Found (' + buttonWithText + ') button elements with the text "Start forming a habit!"');
}

// 
// Task 4
// 
// Validate the presence and visibility of the site search icon on the webpage, and ensure the image associated with the search icon has the appropriate alt text and a source (src) path.
// 

let siteSearchIcon = document.evaluate('//li[@role="search"]/img', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
if (siteSearchIcon) {
    if (window.getComputedStyle(siteSearchIcon).getPropertyValue('display') !== "none") {
        console.log("Site search icon is present and visible");
        console.log('Check if search icon image has the appropriate alt text:', '"' + siteSearchIcon.getAttribute("alt") + '"');
        console.log('Check if search icon image has the appropriate path:', '"' + siteSearchIcon.getAttribute("src") + '"');
    } else {
        console.log("Site search icon is present but not visible");
    }
} else {
    console.log("Site search icon not found");
};

// 
// Task 5
// 
// Log into your profile at https://www.greencity.social/#/profile. At the bottom of the page, there are checkboxes. Find them, check their state (checked or not), and display a message about the number of checked and unchecked checkboxes.
// 

let checkboxes = document.evaluate('//input[@type="checkbox"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
if (checkboxes) {
    let checked = 0;
    let unchecked = 0;
    for (let i = 0; i < checkboxes.snapshotLength; i++) {
        let state = checkboxes.snapshotItem(i).getAttribute('checked');
        if (state === "true") {
            checked++;
        } else {
            unchecked++;
        };
    };
    console.log("Found", checkboxes.snapshotLength, "checkboxes:", checked, "checked and", unchecked, "unchecked");
} else {
    console.log("Checkboxes not found");
}

// 
// Hard level
// 
// Task 6 *
// 
// Validate the website's ability to switch languages effectively.
// 
// 1. Initiate a search to identify the user interface element designated for language toggling.
// 2. If the specified element is successfully pinpointed, activate it to attempt a language change.
// 3. Log the result in the console, specifying whether the language toggle element was detected.
// 4. Should the language alteration succeed, log the preceding and new language settings into the console for verification purposes.
// 

let path = '//ul[@aria-label="language switcher"]/li';
let languageSwitcher = element(path);

if (languageSwitcher.snapshotLength != 0) {
    console.log("User interface element designated for language toggling found");

    let stateBefore = state(languageSwitcher);
    languageSwitcher.snapshotItem(0).click();

    let languageSwitcherMenuExpanded = element(path);

    if (languageSwitcherMenuExpanded.snapshotLength > languageSwitcher.snapshotLength) {
        console.log("User interface element designated for language toggling activated");

        languageSwitcherMenuExpanded.snapshotItem(1).click();

        let languageSwitcherAfter = element(path);
        let stateAfter = state(languageSwitcherAfter);
        console.log('Language changed from', stateBefore, "to", stateAfter);
    } else {
        console.log("User interface element designated for language toggling not activated");
    };
} else {
    console.log("User interface element designated for language toggling not found");
};

function element(path) {
    let result = document.evaluate(path, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    return result;
}

function state(element) {
    let result = element.snapshotItem(0).textContent.trim();
    return result;
}
