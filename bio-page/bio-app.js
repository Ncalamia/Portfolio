


const hideandshowfam = () => {
		const $hideandshowfam = $('.hide-and-show-fam')
		$hideandshowfam.toggle('slow')
}
const hideandshowtrav = () => {
		const $hideandshowtrav = $('.hide-and-show-trav')
		$hideandshowtrav.toggle('slow')
}
const hideandshowpet = () => {
		const $hideandshowpet = $('.hide-and-show-pet')
		$hideandshowpet.toggle('slow')
}
const hideandshowmus = () => {
		const $hideandshowmus = $('.hide-and-show-mus')
		$hideandshowmus.toggle('slow')
}

$(() => {

const $family = $('.family')

$family.hover(hideandshowfam)

const $travel = $('.travel')

$travel.hover(hideandshowtrav)

const $pet = $('.pet')

$pet.hover(hideandshowpet)

const $music = $('.music')

$music.hover(hideandshowmus)

})
