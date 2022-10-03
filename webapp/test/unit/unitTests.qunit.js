/** global QUnit */

sap.ui.getCore().attachInit(function () {
	'use strict';

	sap.ui.require([
		'sap/ui/demo/walkthrough/test/unit/model/formatter'
	], function () {
		QUnit.start()
	})
})