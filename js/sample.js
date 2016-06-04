/*!
 * sample
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2016/4/1
 * version: 0.0.1
 */

/**
 * sample module
 * @module sample
 * @since 0.0.1
 */
define(['jquery', 'config', 'common'], function($, config, common) {

	var	$win	= $(window),
		$doc	= $(document),
		Fn		= function() {},
		exports	= {};

	/**
	 * 初始化模块
	 * @method sample.init
	 * @since 0.0.1
	 * @param {string} page 页面
	 * @param {object} options 参数
	 * @return {none}
	 * @example sample.init(page, options);
	 */
	exports.init = function(page, options) {
		new common.init(page);
	};

	return exports;

});
