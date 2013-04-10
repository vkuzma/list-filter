var tests = [];

function test_exact() {
	var list = [{test: 1}, {test: 2}, {test: 3}, {test: 3}];
	var result;

	result = filter_list(list, {test: [1, 'exact']});

	if(result.length != 1 && result[0].test != 1) {
		console.log(result);
		throw new Error("Error at test 1");
	}

	result = filter_list(list, {test: [2, 'exact']});
	
	if(result.length != 1 && result[0].test != 2) {
		console.log(result);
		throw new Error("Error at test 2");
	}

	result = filter_list(list, {test: [3, 'exact']});
	if(result.length != 2 && result[0].test != 3 && result[1].test != 3) {
		console.log(result);
		throw new Error("Error at test 3");
	}
}

tests.push(test_exact);

