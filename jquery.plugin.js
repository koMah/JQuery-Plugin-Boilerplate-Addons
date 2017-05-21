var pluginName = "Plugin";

(function($, window, document, undefined) {
    "use strict";

    var defaults = {
        exampleOptions: false,
        snapToGrid : 50
    };

    function Plugin(element, options) {
        this.element = element;

        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;

        this._addons = {};

        // Init Addons
        $.each(Plugin.Addons, $.proxy(function(key, addon) {
			this._addons[key.charAt(0).toLowerCase() + key.slice(1)]
				= new addon(this);
		}, this));

        this.init();
    }

    Plugin.Addons = {};

    $.extend(Plugin.prototype, {
        init: function() {
           console.log("Init Plugin Example");
        }
    });

    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };

    $.fn[pluginName].Constructor = Plugin;

})(jQuery, window, document);
