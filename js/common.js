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
	 * 生成query
	 * @method common.buildQuery
	 * @since 1.0.0
	 * @param {object} querys 参数
	 * @param {string} hasQuerys 动作中是否存在参数
	 * @return {string}
	 */
	exports.buildQuery = function(querys, hasQuerys) {
		var i, key,
			_querys		= [];
		if(querys) {
			i = 0;
			for(key in querys) {
				_querys.push((!i && !hasQuerys ? '?' : '&') + key + '=' + querys[key]);
				i++;
			}
		}
		return _querys.join('');
	};

	/**
	 * 获取链接
	 * @method common.getUrl
	 * @since 1.0.0
	 * @param {string} action 运作
	 * @param {object} querys 参数
	 * @return {string}
	 */
	exports.getUrl = function(action, querys) {
		return config.path + action + exports.buildQuery(querys, action.indexOf('?') >= 0);
	};

	/**
	 * 获取请求链接
	 * @method common.getRequestUrl
	 * @since 1.0.0
	 * @param {string} action 运作
	 * @param {object} querys 参数
	 * @return {string}
	 */
	exports.getRequestUrl = function(action, querys) {
		return config.api + action + exports.buildQuery(querys, action.indexOf('?') >= 0);
	};

	/**
	 * 获取元素在数组中的索引
	 * @method common.inArray
	 * @since 1.0.0
	 * @param {string} item 元素
	 * @param {array} arr 数据
	 * @return {int}
	 */
	exports.inArray = function(item, arr) {
		for(var i = 0, len = arr.length; i < len; i++) {
			if(item.toString() == arr[i].toString()) return i;
		}
		return -1;
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
		//contentType: 'application/json',
		//crossDomain: true,
		//xhrFields: {withCredentials: true},
		dataType: 'json',
		error: function(xhr, status, error) {
			config.dev && console.log(error);
		}
	});

	return exports;

});
