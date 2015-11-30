/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

module.exports = (function builder(a, i){
	if (i === 0) return a
	a.unshift(i)
	return builder(a, i - 1)
})([], 1000-1).filter(function(n){
	return ((!(n % 5)) || (!(n % 3)))
}).reduce(function(p, c){
	return p + c
})
