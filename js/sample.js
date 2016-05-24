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
	 * @return {none}
	 */
	exports.init = function(name) {
		new common.wechat([]);	//运行微信jsApi功能
	};

	return exports;

});
