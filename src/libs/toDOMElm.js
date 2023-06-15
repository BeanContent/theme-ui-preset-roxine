export function toDOMElm (str) {
	var dom = document.createElement('div');
	dom.innerHTML = str;
	return dom;
};