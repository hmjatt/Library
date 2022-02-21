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


// load page 2 on click of button 

// const getStartedButton = document.getElementById("get-started-button");


// getStartedButton.addEventListener("click", function() {
//   window.location.href='/page-2.html';
// });


// onclick="window.location.href='/page-2.html';





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
            let favBook = el.parentElement.parentElement.parentElement;
            // console.log(favBook.className);
            
        if (favBook.className == "book") {
            // ... then add "fav" to it
            favBook.className = "book fav";
            favBook.id = "favBook";
          // Otherwise...
          } else {
            // ... switch it to "light-theme.css"
            favBook.className = "book";
          }
    });
});






// code to filter favorite books 

const favEle = document.getElementById("favorite-link");
const favBooks = document.getElementsByClassName("book");

favEle.addEventListener("click", function() {
    Array.from(favBooks).forEach((ele) => {
      
      console.log(ele);

      if(ele.id == "favBook") {
        // ... then add "fav" to it
        // favBooks.className = "image-div fav";
        console.log('yea');
        ele.style.display = "flex";
      // Otherwise...
      } else if(ele.id == "notFav") {
        // ... switch it to "light-theme.css"
        console.log('no');
        ele.style.display = "none";
      }
    });
    
});


// code to filter all books 

const allEle = document.getElementById("all-link");

allEle.addEventListener("click", function() {
  Array.from(favBooks).forEach((ele) => {
    ele.style.display = "flex";
    ele.id = "notFav";
  });
});


// code to add notes

const notesBtn = document.getElementsByClassName("notes-btn");
const text = document.getElementsByClassName("popup");

  Array.from(notesBtn).forEach((btn) => {
    btn.addEventListener("click", function() {

      Array.from(text).forEach((btns) => {
        btns.classList.toggle("hide");
        btns.classList.toggle("show");
      });

    });
});

