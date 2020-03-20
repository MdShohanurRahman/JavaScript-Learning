$(document).ready(function () {
    $('h1').css("color", "red");
})

// before 
$('ul').before("<h2>My Favourite Dogs</h2>")

// after
$('ul').after("<h2>All dogs are adorable !!</h2>")

// text

let txt = $('li').text() // return all li element 
let replaceText = $('p').text('Replace P tag text') // replace with the text

// html
$("li:first").html() // select the first list
$("li:last").html("<li> German shepherd</li>") // then replace

// css
$("h1").css("background-color", "blue")
$("ul p").css("color", "green")

//attr
let image = $("img").attr("border", "5px solid black")

// val()

$("#submit").click(function () {
    alert("Value: " + $("#sometext").val());
});

// addClass()

$("#addclass").click(function () {
    // $("img").addClass("styleclass");
    $("img").toggleClass("styleclass")
});

// removeClass()
$("img").removeClass("className")

// toggleClass()

//jQuery Events 

/*

jQuery Events– click()
jQuery Events - on()
jQuery Events - keypress()

 */

$("img").click(function () {
    $(this).hide();
});

// jQuery Effects
/* 
jQuery Effects - hide()
jQuery Effects - show()
jQuery Effects - toggle()
jQuery Effects - fadeOut()
jQuery Effects - fadeIn()
jQuery Effects - fadeToggle()
jQuery Effects - slideDown()
jQuery Effects - slideUp()
jQuery Effects - slideToggle()

*/
// $(selector).hide(speed, callback);

// jQuery UI

/* 
jQuery UI - draggable()
jQuery UI - droppable()
jQuery UI - datepicker()
 */

// draggable
$(function () {
    $("#drag").draggable();
});

// datepicker
$('#date').datepicker()