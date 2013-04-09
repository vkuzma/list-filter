function filter_list(list, filters) {
	var filter_actions = {
		'exact': function(value, filter_value) {
			if(value == filter_value)
				return true;
			else
				return false;
		}
	};
	var filter_matched = function(item, filter_key, filter_value) {
		var filter_parts = filter_key.split('__');
		if(!filter_parts.length)
			return filters.exact;
		var filter_action = filter_actions[filter_parts[1]];
		if(filter_parts[0])
			return filter_action(item[filter_parts[0]], filter_value);
		else
			return false;
	};

	var new_list = [];
	var match = true;
	for(var i = 0; i < list.length; i++) {
		for(var item_key in list[i]) {
			for(var filter_key in filters) {
				if(!filter_matched(list[i], filter_key, filters[filter_key]))
					match = false;
				}
				if(match) {
					new_list.push(list[i]);
			}
		}
	}
	return new_list;
}

