/*!
 * sample
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2016/4/1
 * since: 0.0.1
 */

define(['jquery', 'config', 'common'], function($, config, common) {

	var	$win	= $(window),
		$doc	= $(document),
		Fn		= function() {},
		exports	= {};

	/**
	 * sample
	 * @method common.init.prototype.sample
	 * @since 0.0.1
	 * @return {none}
	 * @example this.sample();
	 */
	common.init.prototype.sample = function() {

	};

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
