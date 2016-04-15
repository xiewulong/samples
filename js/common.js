/*!
 * common
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2016/4/1
 * version: 1.0.0
 */

/**
 * common module
 * @module common
 * @since 1.0.0
 */
define(['jquery', 'config', 'bootstrap'], function($, config) {

	var	$win	= $(window),
		$doc	= $(document),
		Fn		= function() {},
		exports	= {};

	/**
	 * 获取get数据
	 * @method common.getQuerys
	 * @since 1.0.0
	 * @return {object}
	 */
	exports.getQuerys = function() {
		return location.search ? new Function('return {' + location.search.substring(1).replace(/&/g, '",').replace(/=/g, ':"') + '"}')() : {};
	};

	/**
	 * 开启模态框
	 * @method $.modal
	 * @since 1.0.0
	 * @param {string} html html结构
	 * @param {object} options bootstrap模态框参数
	 * @return {object}
	 */
	$.modal = function(html, options) {
		return $(html).modal(options).on('shown.bs.modal', function() {
			$(this).find('[autofocus=autofocus]').focus();
		}).on('hidden.bs.modal', function() {
			$(this).remove();
		});
	};

	/**
	 * ajax全局配置
	 * @since 1.0.0
	 */
	$.ajaxSetup({
		dataType: 'json',
		//crossDomain: true,
		//xhrFields: {withCredentials: true},
		error: function(xhr, status, error) {
			console.log(error);
		}
	});

	return exports;

});
