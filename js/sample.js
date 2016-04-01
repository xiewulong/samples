/*!
 * sample
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2016/4/1
 * version: 1.0.0
 */

/**
 * sample module
 * @module sample
 * @since 1.0.0
 */
define(['jquery', 'bootstrap'], function($) {
	var	$win	= $(window),
		$doc	= $(document),
		Fn		= function() {},
		exports	= {};

	/**
	 * sample
	 * @method sample.sample
	 * @since 1.0.0
	 * @param {string} param 参数
	 * @return {none}
	 */
	exports.sample = function(param) {
		console.dir(param);
	};

	return exports;
});
