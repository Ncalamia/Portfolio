
// Function that toggles the hidden links and makes them appear at a speed of 1000ms when hovering over "Links"
const openLinks = () => {
	const $hideandshow = $('.hide-and-show')
	$hideandshow.toggle(1000)
}


$( () => {

const $dropDownFromLinks = $('.dropDownFromLinks')

// When hovering over "Links" call function "openLinks"
$dropDownFromLinks.hover(openLinks)

// .mouseleave( closeLinks);



})
