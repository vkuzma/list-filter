function filter_list(list, filters) {
	var filter_actions = {
		'exact': function(value, filter_value) {
			if(value == filter_value)
				return true;
			else
				return false;
		}
	};
	var filter_matched = function(item, filter_key, filter_args) {
		if(!filter_args.length)
			return filter_actions.exact;
		var filter_action = filter_actions[filter_args[1]];
		if(item[filter_key])
			return filter_action(item[filter_key], filter_args[0]);
		else
			return false;
	};

	var new_list = [];
	var match;
	for(var i = 0; i < list.length; i++) {
		for(var item_key in list[i]) {
			match = true;
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

