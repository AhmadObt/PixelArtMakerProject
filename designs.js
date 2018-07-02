// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



var height, width, color;
//Adding an event for the submit button on the size picker

$('#sizePicker').submit(function(event){
	event.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWeight').val();
	makeGrid(height, width);
});

//making the tr and tr corresponding to the height and width input to form the grid
function makeGrid(x, y) {
	$('tr').remove();
	for (var i = 1; i <= x; i++) {
		$('#pixelCanvas').append('<tr id=table' + i + '></tr>');
		for (var j = 1; j <= y; j++) {
			$('#table' + i).append('<td></td>')

		}
		
	}
	$('td').click(function pickColor() {
		color = $('#colorPicker').val();
		$(this).attr('style', 'background-color:' + color);
	});
	
	
}

