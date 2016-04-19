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
	 * @method common.buldQuery
	 * @since 1.0.0
	 * @return {string}
	 */
	exports.buldQuery = function(querys, hasQuerys) {
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

	//获取链接
	exports.getUrl = function(action, querys) {
		return config.path + action + exports.buldQuery(querys, action.indexOf('?') >= 0);
	};

	//获取请求链接
	exports.getRequestUrl = function(action, querys) {
		return config.api + action + exports.buldQuery(querys, action.indexOf('?') >= 0);
	};

	//获取元素在数组中的索引
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
			console.log(error);
		}
	});

	return exports;

});
