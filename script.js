//script for Library App

// code to search for content

function search() {
    let input = document.getElementById("search-item").value;
    let book = document.getElementsByClassName("book");
    input = input.toLowerCase();
    let x = document.getElementsByTagName("h2");

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            book[i].style.display = "none";
        } else {
            book[i].style.display = "flex";
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
    // If the current URL contains "styles_page_2.css"
    if (theme.getAttribute("href") == "styles_page_2.css") {
        // ... then switch it to "styles_page_2_light.css"
        theme.href = "styles_page_2_light.css";
        // Otherwise...
    } else {
        // ... switch it to "styles_page_2.css"
        theme.href = "styles_page_2.css";
    }
});







document.body.addEventListener('click', function (event) {
    if (event.target.className == 'fav-btn') {
        console.log("aaaa");
        ;
    };
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

            ele.style.display = "flex";
        }
        // Otherwise...
        // } else if (ele.className == "book") {
        //     // ... switch it to "light-theme.css"
        //     console.log("nay");
        //     ele.style.display = "none";
        // }
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
addBookForm.addEventListener("submit", function (ele) {

    ele.preventDefault();

    //create bookCard object
    const bookCard = new addBookToApp(titleInput.value, authorInput.value, pagesInput.value, urlInput.value);

    // push object to array
    bookArr.push(bookCard);



    //run a function that create a new book card
    addBookCard();

    bookArr = [];

});




//function that loops through each array item and create a new book card
const booksDiv = document.getElementById("books-div-id");
// const favSvgDiv = document.getElementsByClassName("fav-svg-div");
const bookCardEle = document.createElement("div");





function addBookCard() {
    bookArr.forEach(function (eles) {

        //create book div element
        const bookDivEle = document.createElement("div");
        bookDivEle.classList = "book notFav hide";



        //create image div
        const imageDivEle = document.createElement("div");
        imageDivEle.classList = "image-div";




        //create remove book element
        const removeBookDiv = document.createElement("div");
        const removeBookButton = document.createElement("button");
        const removeBookImg = document.createElement("img");


        //add attributes to removebook elements
        removeBookDiv.id = "remove-book";
        removeBookButton.classList = "remove-book-class";
        removeBookButton.id = "remove-book-btn";
        removeBookButton.type = "button";
        removeBookImg.src = "images/cancel.png";
        removeBookImg.alt = "cancel";

        // append elements to remove book div 
        removeBookButton.appendChild(removeBookImg);
        removeBookDiv.appendChild(removeBookButton);

        // append remove-book div to image div
        imageDivEle.appendChild(removeBookDiv);



        //create title and author and url elements
        const titleEle = document.createElement("h2");
        const authorEle = document.createElement("h3");
        const urlEle = document.createElement("img");

        let titleData = eles.title;
        let authorData = eles.author;
        let urlData = eles.url;

        urlEle.classList = "book-cover";
        urlEle.src = urlData;
        urlEle.alt = "data-structures";

        //append data to elements
        titleEle.append(titleData);
        authorEle.append(authorData);
        // urlEle.appendChild(urlData);

        // append title and author and url elements to image div
        imageDivEle.appendChild(titleEle);
        imageDivEle.appendChild(authorEle);
        imageDivEle.appendChild(urlEle);




        //creating notes div
        const notesDiv = document.createElement("div");
        notesDiv.classList = "notes-div";

        //creating button
        const notesButton = document.createElement("button");
        notesButton.classList = "notes-btn";
        notesButton.innerHTML = "Take Notes"

        //create input for notes
        const notesInput = document.createElement("input");
        notesInput.type = "text";
        notesInput.name = "popup";
        notesInput.classList = "hide note-input";

        //create Add button
        const addButton = document.createElement("button");
        addButton.classList = "hide add-notes-btn";
        addButton.innerHTML = "Add";

        //create notes para
        const notesP = document.createElement("p");
        notesP.classList = "note-para";

        //append all elements inside notes-div
        notesDiv.appendChild(notesButton);
        notesDiv.appendChild(notesInput);
        notesDiv.appendChild(addButton);
        notesDiv.appendChild(notesP);

        //put notes div inside image div
        imageDivEle.appendChild(notesDiv);


        //creating pages div
        const pagesDiv = document.createElement("div");

        //add class to pages div
        pagesDiv.classList = "pages-div";

        //create <p> for pages div
        const pagesPara = document.createElement("p");

        //content inside <p>
        pagesPara.innerHTML = "Pages: ";
        let pData = eles.pages;

        //insert content inside <p>
        // pagesPara.appendChild(pText);
        pagesPara.append(pData);

        //insert <p> inside pages div
        pagesDiv.appendChild(pagesPara);

        //put pages div inside image div
        imageDivEle.appendChild(pagesDiv);




        //creating favorite div 
        const favSvgDiv = document.createElement("div");

        //adding class/ child elements to favSvgDiv
        favSvgDiv.classList = "fav-svg-div";

        const favBtnEle = document.createElement("button");
        favBtnEle.classList = "fav-btn";

        const favBtnSvg = document.createElement("img");
        favBtnSvg.classList = "fav-svg";
        favBtnSvg.alt = "add-favorite";
        favBtnSvg.src = "images/svgs/star-svg.svg";

        //put img inside button
        favBtnEle.appendChild(favBtnSvg);

        //put button inside div
        favSvgDiv.appendChild(favBtnSvg);


        //put fav div inside book after image div
        imageDivEle.appendChild(favSvgDiv);


        // put image div inside book div
        bookDivEle.appendChild(imageDivEle);


        //adding class and id to book element


        //adding class and id to fav button
        // favBtnEle.classList = "fav-btn";

        //     bookCardEle.innerHTML += 
        //   `  <div class="book" class="notFav" class="hide">
        //         <div class="image-div">

        //             <div id="remove-book">
        //                 <button id="remove-book-btn" class="remove-book-class" type="button"><img src="images/cancel.png" alt="cancel"></button>
        //             </div>

        //             <h2>${eles.title}</h2>
        //             <h3>${eles.author}</h3>
        //             <img class="book-cover" src="${eles.url}" alt="data-structures">

        //             <div class="notes-div">
        //                 <button class="notes-btn">Take Notes</button>
        //                 <input type="text" name="popup"  class="hide note-input">
        //                 <button class="hide add-notes-btn">Add</button>
        //                 <p class="note-para"></p>
        //             </div>

        //         </div>

        //     </div>`
        //     ;


        booksDiv.appendChild(bookDivEle);
        console.log(booksDiv);
        // console.log(booksDiv.childNodes.childNodes);
    });


}


// code to add a book to favorites


const favBtn = document.getElementsByClassName("fav-btn");

Array.from(favBtn).forEach((el) => {

    el.addEventListener("click", function () {

        let favBook = el.parentElement.parentElement.parentElement;

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



// eventlistner on Dynamic elements


// const favSvg = document.getElementsByClassName("fav-svg");


// Array.from(favSvg).forEach(() => {
//     document.addEventListener("click", function (e) {

//         let favBook = e.target.parentElement.parentElement;

//         if (hasClass(e.target, "fav-svg")) {
//             if (favBook.className == "book") {
//                 // ... then add "favBook" to it
//                 // favBook.classList.remove("notFav");
//                 // favBook.classList.add("fav");
//                 // favBook.classList.add("favBook");
//                 favBook.classList.toggle("fav favBook");
//                 // Otherwise...
//             } else {

//                 favBook.classList.toggle("book")
//             }

//         }

//     });
// });

// Array.from(notesBtn).forEach(() => {
//     document.addEventListener("click", function (e) {

//         let text = e.target.nextSibling.nextSibling;
//         let sbmt = e.target.nextSibling.nextSibling.nextSibling.nextSibling;

//         // console.log(text.className, sbmt.className);

//         if (hasClass(e.target, "notes-btn")) {
//             if (text.className == "hide note-input") {

//                 text.classList.toggle("show");

//             } if (sbmt.className == "hide add-notes-btn") {

//                 sbmt.classList.toggle("show");

//             }

//         }
//     });
// });






// function hasClass(elem, className) {
//     return elem.classList.contains(className);
// }