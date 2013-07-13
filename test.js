var rest = require('restler');
var sys = require('util');
var http = require('http');

var foo = function(){
		var out = null;
		rest.get('http://glacial-ridge-6327.herokuapp.com/').on('complete', function(result){
		out = result;
	});
	return out
};

var x = http.get('http://glacial-ridge-6327.herokuapp.com/').toString();
sys.print(x);
