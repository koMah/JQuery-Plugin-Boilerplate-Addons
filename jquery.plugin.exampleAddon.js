/**
 * Example Addon
 * @version 1.0
 * @author Autor
 * @author Autor
 * @license The MIT License (MIT)
 */

;(function($, window, document, undefined) {

	/**
	 * Creates example addon.
	 * @class The Example Addon
	 * @param {MasterAddon} core instance
	 */
	var ExampleAddon = function(core) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {MasterAddon}
		 */
		this._core = core;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'masterplugin.example_event': $.proxy(function(e) {
				if (e.namespace && this._core.settings.addonOptionToEnable) {
					this.init();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, ExampleAddon.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

    // Addon logic
    $.extend(ExampleAddon.prototype, {
        init : function() {
            console.log("Do something");
        }
    });
    
	/**
	 * Default options.
	 * @public
	 */
	ExampleAddon.Defaults = {
		exampleOptions : false
	};

	$.fn[pluginName].Constructor.Addons.ExampleAddon = ExampleAddon;

})(window.Zepto || window.jQuery, window, document);
