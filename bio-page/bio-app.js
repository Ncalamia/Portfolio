
const hideandshow = () => {
		const $hideandshow = $('.hide-and-show')
		$hideandshow.toggle()
}

$(() => {

const $family = $('.family')

$family.hover(hideandshow)

const $travel = $('.travel')

$travel.hover(hideandshow)

const $lyla = $('.lyla')

$lyla.hover(hideandshow)

const $music = $('.music')

$music.hover(hideandshow)



})
