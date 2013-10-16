function main() {
	var amount = 0;

	function error() {
	  	throw "Blars"
	}
	$('#error').on('click', error)


	function nodeRemoval() {
		$(this).remove()
	}
	$('#node-rem').on('click', nodeRemoval)

	function subModification() {
		$(this).append('s')
	}
	$('#sub-tree').on('click', subModification)

	function attrModification() {
		$(this).addClass('red')
	}
	$('#attr-mod').on('click', attrModification)

	function condIncrement() {
		amount += 1
	}
	$('#cond-button').on('click', condIncrement)


	function rotate() {
		$(this).toggleClass('rotate')
	}

	$('#mouseover').on('mouseover mouseout', rotate)
}


main()
