document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("button");
    const btn2 = document.getElementById("button2");
    const btn3 = document.getElementById("button3");
    
    addEventListeners(btn, myFunction1);
    addEventListeners(btn2, myFunction2); 
    addEventListeners(btn3, myFunction3); 
});

function addEventListeners(button, func) {
    button.addEventListener("click", func);
    button.addEventListener("touchstart", func);
}


//twist angel of tag('s) ,e.g img tag OR all tag-name with *
function myFunction1 () {  
(function(){var x = document.body.getElementsByTagName("*"); 
for (i = 0; i < x.length; i++) {
var y = Math.floor((Math.random()*10)+1); x[i].style.transform="rotate("+y+"deg)"}}());
}  
//STOP AND RESET THE TRANSFORM(MessUpp)
function myFunction2() {var x = document.body.getElementsByTagName("*");
       for (var i = 0; i < x.length; i++) { x[i].style.transform = "none";
}
 }
//Rotate script-tag you want,or all with a astric(*)
// Initialize  variable R
let R = 0;

// Define the variables used in the animation
let x1 = 1, x2 = 2, x3 = 3, x4 = 100, x5 = 150;
let y1 = 1, y2 = 2, y3 = 3, y4 = 100, y5 = 150;

// Function called on button3 click.
function myFunction3() {
    const funnySites = [
        "https://www.theuselessweb.com/",
        "https://www.randomfunfacts.com/",
        "https://shibe.online/",
        "https://www.cat-bounce.com/",
        "https://www.poodwaddle.com/"
    ];

    let index = 0;

    // Function to open the links one by one
    function openNextLink() {
        if (index < funnySites.length) {
            window.open(funnySites[index], "_blank"); 
            index++; // Move to the next URL
            setTimeout(openNextLink, 2000);
        }
    }

    alert("Hold on tight! Fact isn't any fun...");
    openNextLink(); 
}
