// enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list


// * override the default submit behaviour and instead add <li></li>
    // must work on hitting "enter" or clicking
// * ability to delete list items
// * ability to check off list items (using check button)

// use event delegation (targeting parent elements of list items (ul)) so that newly added items will be able to be removed

// pressing the "check" button should add  class="checked", and in CSS should be .checked = strikethrough

// class = "shopping-item_checked"

// pressing the "delete" button should permanently remove the item

// "add item" button should create a new list item (override default submit behavior)

// each newly added list item will need to have "check" and "remove" buttons as well.


// form class = "js-shopping-list-form"
// input id = "shopping-list-entry"
// button type = "submit"



// ul class = "shopping-list"

// span class = "shopping-item"

// button class = "shopping-item-toggle" and "shopping-item-delete"


// <li>
// <span class="shopping-item shopping-item__checked">milk</span>
// <div class="shopping-item-controls">
//   <button class="shopping-item-toggle">
//     <span class="button-label">check</span>
//   </button>
//   <button class="shopping-item-delete">
//     <span class="button-label">delete</span>
//   </button>
// </div>
// </li>

// event.preventDefault()

// function addItem () {
//     $("submit").click(function(event){
//         event.preventDefault();
//         $("ul").append(
//             "<li>" +
//             "<span class='shopping-item'>" +
//              $(this).find('#shopping-list-entry').val() +
//             "</span>" +
//             "<div class='shopping-item-controls'>" +
//             "<button class='shopping-item-toggle'>" +
//             "<span class='button-label'>check</span>" +
//             "</button>" +
//             "<button class='shopping-item-delete'>" +
//             "<span class='button-label'>delete</span>" +
//             "</button>" +
//             "</div>" +
//             "</li>"
//         )
//     })
// }

// function deleteitem () {
//     $('ul').on('click', '.shopping-item-delete', function(event) {
//         this.remove();
// })
// }

// function checkItem () {
//     $('ul').on('click', '.shopping-item-toggle', function(event) {
//         $('span').toggleClass('shopping-item_checked');
//     })
// }

// addClass just adds a class - toggleClass adds, but also lets the user toggle between having and not having the class


// $(addItem);
// $(deleteItem);
// $(checkItem);


$(function() {
    $('form').submit(function(event){
        event.preventDefault();
        event.stopPropagation();
        $('ul').append(
            "<li>" +
            "<span class='shopping-item'>" +
             $(this).find('#shopping-list-entry').val() +
            "</span>" +
            "<div class='shopping-item-controls'>" +
            "<button class='shopping-item-toggle'>" +
            "<span class='button-label'>" +
            "check" +
            "</span>" +
            "</button>" +
            "<button class='shopping-item-delete'>" +
            "<span class='button-label'>" +
            "delete" +
            "</span>" +
            "</button>" +
            "</div>" +
            "</li>"
        )
    })

    $('ul').on('click', '.shopping-item-delete', function(event) {
        // event.preventDefault();
        // event.stopPropagation();
        this.closest('li').remove()
})
    $('ul').on('click', '.shopping-item-toggle', function(event) {
        // event.preventDefault();
        // event.stopPropagation();
        $(this).closest('li').children('span').toggleClass("shopping-item__checked")
        // $(this).('.shopping-item').toggleClass("shopping-item__checked");

})

})

// $('.shopping-item-toggle').on("click", function() {
//     $(this).closest('li').children().first().toggleClass('shopping-item__checked');
// });

// this doesn't work for newly added list items