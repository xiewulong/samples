/*!
 * common
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2016/4/1
 * since: 0.0.1
 */

define(['jquery', 'config', 'wechat', 'bootstrap'], function($, config, wechat) {

	var	$win	= $(window),
		$doc	= $(document),
		Fn		= function() {},
		exports	= {};

	/**
	 * 获取get数据
	 * @method common.getQuerys
	 * @since 0.0.1
	 * @return {object}
	 * @example common.getQuerys();
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
	 * @example common.buildQuery(querys, hasQuerys);
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
	 * @example common.getUrl(action, querys);
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
	 * @example common.getRequestUrl(action, querys);
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
	 * @example common.inArray(item, arr);
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
	 * @example common.modal(html, options);
	 */
	exports.modal = function(html, options) {
		// html sample
		// '<div class="modal fade">' +
		// 	'<div class="modal-dialog">' +
		// 		'<div class="modal-content">' +
		// 			'<div class="modal-header">' +
		// 				'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
		// 				'<h4 class="modal-title">Modal title</h4>' +
		// 			'</div>' +
		// 			'<div class="modal-body">' +
		// 				'<p>One fine body&hellip;</p>' +
		// 			'</div>' +
		// 			'<div class="modal-footer">' +
		// 				'<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' +
		// 				'<button type="button" class="btn btn-primary">Save changes</button>' +
		// 			'</div>' +
		// 		'</div>' +
		// 	'</div>' +
		// '</div>';

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
			config.debug && console.log(error);
		}
	});

	/**
	 * 初始化
	 * @method common.init
	 * @since 0.0.1
	 * @param {string} page 页面
	 * @return {none}
	 * @example common.init(page);
	 */
	exports.init = function(page) {
		this.common && this.common();
		this[page] && this[page]();
	};

	/**
	 * 公共
	 * @method common.init.prototype.common
	 * @since 0.0.1
	 * @return {none}
	 * @example this.common();
	 */
	exports.init.prototype.common = function() {

	};

	return exports;

});
