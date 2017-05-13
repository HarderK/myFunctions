/**
 * 创建单例
 * @param  {Function} fn 要执行的具体操作
 * @return {Function}      实际上起到了闭包的作用，但同时实现了单一责任原则
 */
var createSingle = function(fn) {
	var result;		// 保存fn执行的结果
	return function() {
		return result || (result = fn.apply(this, arguments));
	}
};