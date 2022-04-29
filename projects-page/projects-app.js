
const lightbulb = () => {
	$('#light-bulb').toggle()
	$('#light-bulb-placeholder').toggle()
}


// Toggles between showing and hiding screen 1 and screen 2
const changeScreen = () => {
	$('#screen-1').toggle()
	$('#screen-2').toggle()
}


$(() => {

$('#changeScreen').hover(lightbulb)

// Calls screen toggle function when button is clicked
$('#changeScreen').click(changeScreen)

})
