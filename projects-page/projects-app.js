//
// // $('#switch').click(toggleSwitch)
// //
// // $(selector).toggle(speed,easing,callback)
//
// const switchOn = () => {
// 	const $screenOneHide = $('#screen-1')
// 	const $screenTwoShow = $('#screen-2')
//
// 	$screenOneHide.hide()
// 	$screenTwoShow.show()
// 	console.log("HI");
//
// }
//
// const switchOff = () => {
// 	const $screenOneShow = $('#screen-1')
// 	const $screenTwoHide = $('#screen-2')
//
// 	$screenOneShow.show()
// 	$screenTwoHide.hide()
// 	console.log("HELLO");
// }
//
//
//
//
//
// $( () => {
// $('#screen-2').hide()
//
// const $switch = $('#switch')
//
// $('body').ready() {
// 	$switch.toggle(2000)
// 		switchOn,
//     switchOff,
// 	)
// }
//
//
//
//
//
// })

//Use changeClass to toggle between hiding and showing screen 1 and screen 2. Need to use display: block; and display: none;

// This example currently changes the background...Not working 

const changeClass = () => {
	$('body').toggleClass('on')
}


$(() => {
	$('body').css('background-color','purple')
	// $('body').addClass('off')


	const $switch = $('#switch')
	$switch.on('click', changeClass)


})
