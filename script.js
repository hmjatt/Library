//script for Library App



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


  Array.from(notesBtn).forEach((btn) => {
    btn.addEventListener("click", function() {
      let text = btn.nextSibling.nextSibling;
      let sbmt = btn.nextSibling.nextSibling.nextSibling.nextSibling;
      
      text.classList.toggle("hide");
      text.classList.toggle("show");

      sbmt.classList.toggle("hide");
      sbmt.classList.toggle("show");

    });
});


// code to show notes on book

const notesPara= document.getElementsByClassName("note-para");

const addNotesBtn = document.getElementsByClassName("add-notes-btn");

Array.from(addNotesBtn).forEach((addBtn) => {
  addBtn.addEventListener("click", function() {
    let inputEle = addBtn.previousSibling.previousSibling;
    let thatNote = addBtn.previousSibling.previousSibling.value;
    let bookNote = addBtn.nextSibling.nextSibling;

    bookNote.innerHTML = thatNote;
    addBtn.classList.toggle("hide");
    addBtn.classList.toggle("show");

    inputEle.classList.toggle("hide");
    inputEle.classList.toggle("show");
    console.log(inputEle, addBtn, bookNote, thatNote);


  });
});


// code to add a book

const addBook= document.getElementById("add-book");
const formDiv = document.getElementById("form-div");
const htmlEle = document.getElementsByTagName("html");

addBook.addEventListener("click", function() {

  

  formDiv.classList.toggle("noShow");
  formDiv.classList.toggle("showIt");
  
});


//code to cancel form and hide/delete book

const cancelBtn = document.getElementById("remove-form-btn");

cancelBtn.addEventListener("click", function() {
  formDiv.className = "noShow";

});

