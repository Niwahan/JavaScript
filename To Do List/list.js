$(function() {
	let callback = function(event) {
		event.preventDefault();
		let input = $('input[type=text][name=item]'),
			value = input.val(),
			addtodo = ($(event.target).attr('id') === 'append'),
			item = $('<li><input type="checkbox" name="item"> ' + value + ' <a href="#">remove</a></li>'),
			list = (append) ? $('ul').first() : $('ul').last();
		
		input.val("");
		input.focus();

		if (value === "") return;

		if (!addtodo) {
			item.find('input').attr('checked', true);
		}
		item.appendTo(list);
	}

	$('#append').click(callback);
	
	$('ul').on('click', 'li a', function(event){
		$(event.target).parent('li').remove();
	});

	$('ul').on('click', 'input[type=checkbox]', function(event){
		let listItem = $(event.target).parent('li'),
			list = (event.target.checked) ? $('ul').last() : $('ul').first();
		listItem.appendTo(list);
	});
});