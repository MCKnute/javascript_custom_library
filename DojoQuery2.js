(function(window) {
	'use strict'

	var $Dojo = function (params) {
		return new Library(params);
	};


	// Note: this code can only recognize 1 parameter as currently written

	var Library = function (params) {
		this.selector = document.getElementById(params);
		// Possible future code for multiple parameters:
		//// this = selector;
		//// for (var i=0; i<this.length; i++) {
		//// 	this[i] = selector[i];
		//// };
		return this;
	};

	Library.prototype = {
		yodel: function(quote) {
		     console.log(quote+"!!!!");
		},
		yell: function(quote) {
			alert(quote);
		},
		clicking: function(toDo) {
			this.selector.addEventListener('click', toDo);
		},
		hovering: function(toDoGoIn, toDoGoAway) {
			this.selector.addEventListener('mouseover', toDoGoIn);
			this.selector.addEventListener('mouseout', toDoGoAway);
		}


	};



	if(!window.$Dojo) {
		window.$Dojo = $Dojo;
	}

})(window);