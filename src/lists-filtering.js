Array.prototype.filter_by = function(filters) {
	var new_list = [];
	var match = true;
	for(var i = 0; i < this.length; i++) {
		for(var filter_key in filters) {
			if(this[i][filter_key] != filters[filter_key])
				match = false
			if(match) {
				new_list.push(this[i]);
			}
		}
	}
	return new_list;
}