var addEvent = function(elem, type, handler) {
	if(window.addEventListener) {
		addEvent = function(elem, type, handler) {
			elem.addEventListener(type, handler, false);
		};
	} else if(window.attach) {
		addEvent = function(elem, type, handler) {
			elem.attach('on'+ type, handler);
		};
	} else {
		addEvent = function(elem, type, handler) {
			elem['on' + type] = handler;
		}
	}
	addEvent(elem, type, handler);
};