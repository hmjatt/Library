//script for Library App

// code to search for content

function search() {
    let input = document.getElementById("search-item").value;
    let book = document.getElementsByClassName("book");
    input = input.toLowerCase();
    let x = document.getElementsByTagName("h2");

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            console.log(book[i]);
            book[i].style.display = "none";
            // book[i].classList.add("noShow");
        } else {
            book[i].style.display = "flex";
            // book[i].classList.add("showIt");
        }
    }
}

// code to swtich between themes

// Select the button
const themeBtn = document.querySelector("#theme-toggle");
// Select the stylesheet <link>
const theme = document.querySelector("#light-theme-link");

// Listen for a click on the button
themeBtn.addEventListener("click", function () {
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

    el.addEventListener("click", function () {
        let favBook = el.parentElement.parentElement.parentElement;
        console.log(favBook);
        
        if (favBook.className == "book") {
            // ... then add "favBook" to it
            favBook.classList.remove("notFav");
            favBook.classList.add("fav");
            favBook.classList.add("favBook");
            // Otherwise...
        } else {
            
            favBook.className = "book";
        }
    });
});

// code to filter favorite books

const favEle = document.getElementById("favorite-link");
const favBooks = document.getElementsByClassName("book");

favEle.addEventListener("click", function () {
    Array.from(favBooks).forEach((ele) => {
        console.log(ele);
        if (ele.className == "book fav favBook") {
            // ... then add "fav" to it
            console.log("yay");
            // favBooks.className = "image-div fav";
            
            ele.style.display = "flex";
            // Otherwise...
        } else if (ele.className == "book") {
            // ... switch it to "light-theme.css"
            console.log("nay");
            ele.style.display = "none";
        }
    });
});

// code to filter all books

const allEle = document.getElementById("all-link");

allEle.addEventListener("click", function () {
    Array.from(favBooks).forEach((ele) => {
        ele.style.display = "flex";
        // ele.id = "notFav";
    });
});

// code to add notes

const notesBtn = document.getElementsByClassName("notes-btn");

Array.from(notesBtn).forEach((btn) => {
    btn.addEventListener("click", function () {
        let text = btn.nextSibling.nextSibling;
        let sbmt = btn.nextSibling.nextSibling.nextSibling.nextSibling;

        text.classList.toggle("hide");
        text.classList.toggle("show");

        sbmt.classList.toggle("hide");
        sbmt.classList.toggle("show");
    });
});

// code to show notes on book

const notesPara = document.getElementsByClassName("note-para");

const addNotesBtn = document.getElementsByClassName("add-notes-btn");

Array.from(addNotesBtn).forEach((addBtn) => {
    addBtn.addEventListener("click", function () {
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

const addBook = document.getElementById("add-book");
const formDiv = document.getElementById("form-div");
// const htmlEle = document.getElementsByTagName("html");

addBook.addEventListener("click", function () {
    formDiv.classList.toggle("noShow");
    formDiv.classList.toggle("showIt");
});

//code to cancel form and hide/delete book (needs fixing)

const cancelForm = document.getElementById("remove-form-btn");
const cancelBook = document.getElementsByClassName("remove-book-class");

cancelForm.addEventListener("click", function () {
    formDiv.className = "noShow";
});

Array.from(cancelBook).forEach((rmvBook) => {
    rmvBook.addEventListener("click", function () {
        let removeBook = rmvBook.parentElement.parentElement.parentElement;
        removeBook.className = "noShow";
        console.log(removeBook);
    });
});

// code to add a book


const titleInput = document.getElementById("title-input");
const authorInput = document.getElementById("author-input");
const pagesInput = document.getElementById("pages-input");
const urlInput = document.getElementById("url-input");
// const readInput = document.getElementById("read-input");






//  Book Array

let bookArr = [];

// Book constructor
function BookConstr() {

}

// Function to create book objects
function addBookToApp(title, author, pages, url) {
    // do something
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.url = url;
}

//setting Book constructor as protype of Function that creates book objects
addBookToApp.prototype = Object.create(BookConstr);


//create bookCard object using Function that creates book objects when form is submitted
//After submitting form, push created object to Book Array and create a new book card
const addBookForm = document.getElementById("form-ele");
addBookForm.addEventListener("submit", function(ele) {

    ele.preventDefault();

    //create bookCard object
    const bookCard = new addBookToApp(titleInput.value, authorInput.value, pagesInput.value, urlInput.value);
    
    // push object to array
    bookArr.push(bookCard);


    //run a function that create a new book card
    addBookCard();
    

});




//function that loops through each array item and create a new book card
const booksDiv = document.getElementById("books-div-id");
const bookCardEle = document.createElement("div");

// bookCardEle.className = "book notFav hide";


function addBookCard() {
    
    bookArr.forEach( function(eles) {

        bookCardEle.innerHTML = 
      `  <div class="book" class="notFav" class="hide">
            <div class="image-div">
        
                <div id="remove-book">
                    <button id="remove-book-btn" class="remove-book-class" type="button"><img src="images/cancel.png" alt="cancel"></button>
                </div>
        
                <h2>${eles.title}</h2>
                <h3>${eles.author}</h3>
                <img class="book-cover" src="${eles.url}" alt="data-structures">
        
                <div class="notes-div">
                    <button class="notes-btn">Take Notes</button>
                    <input type="text" name="popup"  class="hide note-input">
                    <button class="hide add-notes-btn">Add</button>
                    <p class="note-para"></p>
                </div>
        
                <div class="pages-div">
                    <p>Pages: ${eles.pages}</p>
                </div>
        
                <div class="fav-svg-div">
                    <button class="fav-btn">
                        <img class="fav-svg" src="images/svgs/star-svg.svg" alt="add-favorite">
                    </button>
                </div>
        
            </div>

        </div>`
        ;

        // let bookTemplate = 
        // `<div class="book" class="notFav" class="hide">
        //     <div class="image-div">
        
        //         <div id="remove-book">
        //             <button id="remove-book-btn" class="remove-book-class" type="button"><img src="images/cancel.png" alt="cancel"></button>
        //         </div>
        
        //         <h2>${eles.title}</h2>
        //         <h3>${eles.author}</h3>
        //         <img class="book-cover" src="${eles.url}" alt="data-structures">
        
        //         <div class="notes-div">
        //             <button class="notes-btn">Take Notes</button>
        //             <input type="text" name="popup"  class="hide note-input">
        //             <button class="hide add-notes-btn">Add</button>
        //             <p class="note-para"></p>
        //         </div>
        
        //         <div class="pages-div">
        //             <p>Pages: ${eles.url}</p>
        //         </div>
        
        //         <div class="fav-svg-div">
        //             <button class="fav-btn">
        //                 <img class="fav-svg" src="images/svgs/star-svg.svg" alt="add-favorite">
        //             </button>
        //         </div>
        
        //     </div>

        // </div>`;

        booksDiv.appendChild(bookCardEle);
        // console.log(typeof(eles));
        
    });
}
