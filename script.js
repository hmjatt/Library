// //script for Library App

// // const getStarted = document.getElementById("get-started-button");
// // const welcomePage = document.getElementsByClassName("welcome-page");
// // const page2 = document.getElementsByClassName("page-2");


// // getStarted.addEventListener("click", function con() {
// //     console.log("hi");
// //     // page2.style.display = "block";
// //     console.log(welcomePage);
// // });




// // Wait for the page to load first
// window.onload = function() {

//     //Get a reference to the link on the page
//     // with an id of "mylink"
//     var a = document.getElementById("mylink");

//     //Set code to run when the link is clicked
//     // by assigning a function to "onclick"
//     a.onclick = function() {

//         // Your code here...

//         //If you don't want the link to actually 
//         // redirect the browser to another page,
//         // "google.com" in our example here, then
//         // return false at the end of this block.
//         // Note that this also prevents event bubbling,
//         // which is probably what we want here, but won't 
//         // always be the case.
//         return false;
//     }
// }






// code to search for content


function search() {
    let input = document.getElementById("search-item").value
    let book = document.getElementsByClassName("book");
    input=input.toLowerCase();
    let x = document.getElementsByTagName("h2");
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            book[i].style.display="none";
        }
        else {
            book[i].style.display="flex";                 
        }
    }
}




// code to swtich between themes

// Select the button
const themeBtn = document.querySelector("#theme-toggle");
// Select the stylesheet <link>
const theme = document.querySelector("#light-theme-link");

// Listen for a click on the button
themeBtn.addEventListener("click", function() {
  // If the current URL contains "ligh-theme.css"
  if (theme.getAttribute("href") == "styles_page_2.css") {
    // ... then switch it to "dark-theme.css"
    theme.href = "styles_page_2_light.css";
  // Otherwise...
  } else {
    // ... switch it to "light-theme.css"
    theme.href = "styles_page_2.css";
  }
});




// code to add a book to favorites

const favBtn = document.getElementsByClassName("fav-btn");


Array.from(favBtn).forEach((el) => {
    // Do stuff here
    
        el.addEventListener("click", function() {
            let favBook = el.parentElement.parentElement;
            console.log(favBook.className);
            
        if (favBook.className == "image-div") {
            // ... then add "fav" to it
            favBook.className = "image-div fav";
          // Otherwise...
          } else {
            // ... switch it to "light-theme.css"
            favBook.className = "image-div";
          }
    });
});


// code to filter all books or favorite books 

// const filterAllBtn = document.getElementById("all-link");
// const filterFavBtn = document.getElementById("favorite-link");


// Array.from(favEle).forEach((ele) => {
//     ele.addEventListener("click", function() {
//         console.log('fav',);
//     });

// });

// filterFavBtn.addEventListener("click", function() {
//     console.log('fav',);
// });

// filterAllBtn.addEventListener("click", function() {
//     console.log('all');
// });

const favEle = document.getElementsByClassName("book");
console.log(favEle);