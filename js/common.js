/*!
 * common
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2016/4/1
 * version: 0.0.1
 */

/**
 * common module
 * @module common
 * @since 0.0.1
 */
define(['jquery', 'config', 'bootstrap'], function($, config) {

	var	$win	= $(window),
		$doc	= $(document),
		Fn		= function() {},
		exports	= {};

	/**
	 * 获取get数据
	 * @method common.getQuerys
	 * @since 0.0.1
	 * @return {object}
	 */
	exports.getQuerys = function() {
		return location.search ? new Function('return {' + location.search.substring(1).replace(/&/g, '",').replace(/=/g, ':"') + '"}')() : {};
	};

	/**
	 * 生成query
	 * @method common.buildQuery
	 * @since 0.0.1
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
	 * @since 0.0.1
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
	 * @since 0.0.1
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
	 * @since 0.0.1
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
	 * @method common.modal
	 * @since 0.0.1
	 * @param {string} html html结构
	 * @param {object} options bootstrap模态框参数
	 * @return {object}
	 */
	common.modal = function(html, options) {
		return $(html).modal(options).on('shown.bs.modal', function() {
			$(this).find('[autofocus=autofocus]').focus();
		}).on('hidden.bs.modal', function() {
			$(this).remove();
		});
	};

	/**
	 * ajax全局配置
	 * @since 0.0.1
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

	/**
	 * 运行微信jsApi功能
	 * @method common.wechat
	 * @since 0.0.1
	 * @param {array} exps 注册方法集合
	 * @return {none}
	 */
	exports.wechat = function(exps) {
		var _this = this;
		this.exports = ['common'].concat(exps || []);
		window.wechat ? this.init() : $doc.on('WeixinJSBridgeReady', function() {
			_this.init();
		});
	};

	/**
	 * 运行注册方法
	 * @method common.wechat.init
	 * @since 0.0.1
	 * @return {none}
	 */
	exports.wechat.prototype.init = function() {
		for(var export, i = 0, len = this.exports.length; i < len; i++) {
			(export = this[this.exports[i]]) && export();
		}
	}

	/**
	 * 公共注册方法
	 * @method common.wechat.common
	 * @since 0.0.1
	 * @return {none}
	 */
	exports.wechat.prototype.common = function() {

	}

	return exports;

});
