/*global QUnit*/

sap.ui.define([
	"create_supple_invoice/controller/Create_supple_invoice.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Create_supple_invoice Controller");

	QUnit.test("I should test the Create_supple_invoice controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
