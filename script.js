'use strict';

window.addEventListener('DOMContentLoaded', handler);

function handler() {
	var menu = new Menu({
		el: document.querySelector(`.menu`)
	});
};

function Menu(options) {
	var elem = options.el;
	
	elem.addEventListener('click', function(e) {
		var a = document.querySelector(`.open`);
		if(a) {
			a.classList.toggle('open');
			if(a == e.target) {
				return;
			}
		}
		if(e.target.classList.contains('title')) {
			e.target.classList.toggle('open');
		}
	});

	elem.addEventListener('mousedown', function(e) {
		e.preventDefault();
	});
}