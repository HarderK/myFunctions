/**
 * 实现ES5中的bind()方法，同时实现可以预先载入一些参数
 * @return Function 返回函数，函数参数为需要的剩下的参数
 */
Function.prototype.bind = function() {
	var self = this,		// 保存原函数
		context = Array.prototype.shift.call(arguments),		// 需要绑定的this上下文
		args = Array.prototype.slice.call(arguments);		// 预先载入的参数，转化为数组
	
	return function() {
		// 合并预载入参数和剩余参数
		// 调用函数，并改变函数的this上下文
		return self.apply(context, args.concat(Array.prototype.slice.call(arguments)));
	};
};



