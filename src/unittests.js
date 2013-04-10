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

function test_contains() {
	var list = [{test: "asdf"}, {test: "ghj"}, {test: "AsDf"}, {test: "AsDf"}];
	var result;

	result = filter_list(list, {test: ['as', 'contains']});

	if(result.length != 1 && result[0] == "asdf") {
		console.log(result);
		throw new Error("Error at test 1");
	}

	result = filter_list(list, {test: ['AS', 'contains']});

	if(result.length != 0) {
		console.log(result);
		throw new Error("Error at test 2");
	}
}

function test_icontains() {
	var list = [{test: "asdf"}, {test: "ghj"}, {test: "AsDf"}, {test: "ghj"}];
	var result;

	result = filter_list(list, {test: ['AS', 'icontains']});

	if(result.length != 2 && result[0].test == 'asdf' && result[1].test == 'AsDf' ) {
		console.log(result);
		throw new Error("Error at test 2");
	}
}

tests.push(test_exact);
tests.push(test_contains);
tests.push(test_icontains);
