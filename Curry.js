/**
 * 函数柯里化
 * @param  {Function} fn 需要柯里化的函数
 * @return {Function}      
 */
var curry = function(fn) {
	var args = [];		// 存放fn需要的参数

	return function func() {
		if(arguments.length === 0) {		// 如果不传入参数
			return fn.apply(this, args);	// 执行fn
		} else {		// 传入参数则不执行fn
			Array.prototype.push.apply(args, arguments);		// 将参数加入args中
			return func;	//链式调用
		}
	};
};

// 上面的柯里化函数的逻辑是：当给柯里化的函数不传入参数的时候就执行函数fn
// 参考lodash里面的curry函数, fn执行的时机是接受到了所需要个数参数，而不是不传入参数，不传入参数实际上是多调用了一次

/**
 * 函数柯里化
 * @param  {Function} fn    需要柯里化的函数
 * @param  {Number}   arity fn的参数个数不确定的时候用来制定其需要的参数个数，默认为fn.length
 * @return {Function}         curry
 */
var curry = function(fn, arity) {
	arity = arity || fn.length;		// 柯里化函数需要的参数个数
	var args = [];		// 保存参数

	return function func() {
			Array.prototype.push.apply(args, arguments);		// 将参数加入args中

			if(args.length < arity) {		// 参数个数不够
				return func;		// 链式调用
			} else if(args.length == arity) {	// 参数个数与所需相等
				return fn.apply(this, args);	// 执行fn
			} else {		// 参数个数超过所需个数
				return fn.apply(this, args.slice(0, arity));	// 截取args为所需的个数，并执行fn
			}
	};
};


