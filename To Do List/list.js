$(function() {
	let callback = function(e) {
		e.preventDefault();
		let input = $('input[type=text][name=item]'),
			value = input.val(),
			addtodo = ($(e.target).attr('id') === 'append'),
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
	
	$('ul').on('click', 'li a', function(e){
		$(e.target).parent('li').remove();
	});

	$('ul').on('click', 'input[type=checkbox]', function(e){
		let listItem = $(e.target).parent('li'),
			list = (e.target.checked) ? $('ul').last() : $('ul').first();
		listItem.appendTo(list);
	});
});
